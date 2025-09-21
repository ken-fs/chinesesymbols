"use client";

import { ChineseSymbol, SymbolCategory } from "@/types/symbol";
import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useUserPreferences } from "@/hooks/useUserPreferences";
import { generateCategoryKey } from "@/utils/keyGenerator";

interface SymbolCardProps {
  symbol: ChineseSymbol;
  onCopy: (symbol: string) => void;
  onCategoryClick?: (category: SymbolCategory | null) => void;
  selectedCategory?: SymbolCategory | null;
}

export default function SymbolCard({
  symbol,
  onCopy,
  onCategoryClick,
  selectedCategory,
}: SymbolCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);
  const {
    isFavorite,
    addFavorite,
    removeFavorite,
    addToRecentlyUsed,
    userData,
  } = useUserPreferences();

  // 清理函数，组件卸载时停止语音播放
  useEffect(() => {
    return () => {
      if (speechSynthesisRef.current) {
        speechSynthesis.cancel();
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(symbol.symbol);
      onCopy(symbol.symbol);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleSpeak = useCallback(() => {
    // 停止当前播放
    if (speechSynthesisRef.current) {
      speechSynthesis.speak(speechSynthesisRef.current);
      speechSynthesis.cancel();
    }

    // 创建新的语音合成
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = symbol.symbol; // 朗读中文符号
    utterance.lang = "zh-CN"; // 设置为中文
    utterance.rate = 0.8; // 语速稍慢
    utterance.pitch = 1.0; // 音调正常
    utterance.volume = 0.8; // 音量

    // 设置事件监听器
    utterance.onstart = () => {
      setIsPlaying(true);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      speechSynthesisRef.current = null;
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      speechSynthesisRef.current = null;
    };

    speechSynthesisRef.current = utterance;
    speechSynthesis.speak(utterance);
  }, [symbol.symbol]);

  // 自动播放功能
  useEffect(() => {
    if (userData.preferences.autoPlay && !isPlaying) {
      const timer = setTimeout(() => {
        handleSpeak();
      }, 1000); // 1秒后自动播放

      return () => clearTimeout(timer);
    }
  }, [userData.preferences.autoPlay, isPlaying, handleSpeak]);

  const handleStopSpeak = () => {
    if (speechSynthesisRef.current) {
      speechSynthesis.cancel();
      setIsPlaying(false);
      speechSynthesisRef.current = null;
    }
  };

  const handleFavorite = () => {
    if (isFavorite(symbol.id)) {
      removeFavorite(symbol.id);
    } else {
      addFavorite(symbol.id);
    }
  };

  const handleDetailsClick = () => {
    addToRecentlyUsed(symbol.id);
    router.push(`/symbol/${symbol.id}`);
  };

  // 获取字体大小类名
  const getFontSizeClass = (size: "small" | "medium" | "large") => {
    switch (size) {
      case "small":
        return "text-xs";
      case "medium":
        return "text-sm";
      case "large":
        return "text-base";
      default:
        return "text-sm";
    }
  };

  const fontSizeClass = getFontSizeClass(userData.preferences.fontSize);

  return (
    <div
      className={`
        relative group glass-effect rounded-lg p-4 transition-all duration-300
        hover:cyber-glow hover:scale-105 hover:rotate-1 w-full h-[400px] flex flex-col
        ${isHovered ? "animate-glow" : ""}
        ${symbol.isPopular ? "ring-2 ring-tech-red-500" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 热门标签 */}
      {symbol.isPopular && (
        <div className="absolute -top-2 -right-2 bg-tech-red-500 text-white text-xs px-2 py-1 rounded-full font-cyber">
          HOT
        </div>
      )}

      {/* 符号显示区域 */}
      <div className="text-center mb-3 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex-1"></div>
          <div className="text-3xl font-chinese neon-text animate-float">
            {symbol.symbol}
          </div>
          <button onClick={handleFavorite} className="flex-1 flex justify-end">
            <span
              className={`text-lg transition-colors duration-200 ${
                isFavorite(symbol.id)
                  ? "text-yellow-400"
                  : "text-gray-400 hover:text-yellow-400"
              }`}
            >
              {isFavorite(symbol.id) ? "⭐" : "☆"}
            </span>
          </button>
        </div>
        <div className="text-tech-red-400 font-cyber text-sm">
          {symbol.pinyin}
        </div>
      </div>

      {/* 含义和描述区域 */}
      <div className="text-center flex-grow flex flex-col justify-center mb-3">
        {(() => {
          const lang = userData.preferences.language;
          const meaningText = symbol.i18n?.[lang]?.meaning || symbol.meaning;
          const descText = symbol.i18n?.[lang]?.description || symbol.description;
          return (
            <>
              <h3 className="text-sm font-semibold text-white mb-2 line-clamp-1">
                {meaningText}
              </h3>
              <p
                className={`text-gray-300 ${fontSizeClass} line-clamp-2 leading-relaxed`}
              >
                {descText}
              </p>
            </>
          );
        })()}
      </div>

      {/* 分类标签区域 */}
      <div className="flex flex-wrap gap-1 mb-3 flex-shrink-0">
        {symbol.categories.slice(0, 2).map((category, index) => {
          // 创建分类名称的缩写
          const getCategoryAbbr = (cat: string) => {
            const abbreviations: { [key: string]: string } = {
              "Love & Romance": "Love",
              "Family & Relationships": "Family",
              "Chinese Zodiac": "Zodiac",
              "Strength & Power": "Strength",
              "Luck & Fortune": "Luck",
              "Tattoo Designs": "Tattoo",
              "Wisdom & Knowledge": "Wisdom",
              "Emotions & Feelings": "Emotions",
              "Nature Elements": "Nature",
              "Fruits & Flowers": "Flowers",
              "Objects & Tools": "Tools",
              "Chinese Idioms": "Idioms",
              Numbers: "Numbers",
              "Internet & Slang": "Slang",
            };
            return abbreviations[cat] || cat;
          };

          const isSelected = selectedCategory === category;

          return (
            <button
              key={generateCategoryKey(symbol.id, index)}
              className={`
                text-xs px-2 py-1 rounded-full border transition-all duration-200 cursor-pointer
                ${
                  isSelected
                    ? "bg-tech-red-500/40 text-white border-tech-red-500/60 shadow-lg"
                    : "bg-tech-red-500/20 text-tech-red-300 border-tech-red-500/30 hover:bg-tech-red-500/30 hover:text-white"
                }
              `}
              onClick={() => onCategoryClick?.(category)}
            >
              {getCategoryAbbr(category)}
            </button>
          );
        })}
        {symbol.categories.length > 2 && (
          <span className="text-xs px-2 py-1 bg-gray-600/20 text-gray-400 rounded-full">
            +{symbol.categories.length - 2}
          </span>
        )}
      </div>

      {/* 操作按钮区域 */}
      <div className="flex justify-center space-x-1 flex-shrink-0 mt-auto">
        <button
          className={`
            cyber-button px-2 py-1 rounded-lg text-xs font-cyber transition-all duration-300 flex-1
            ${
              isCopied
                ? "bg-green-500/20 text-green-400 border-green-500/50"
                : "text-tech-red-300 hover:text-white"
            }
          `}
          onClick={handleCopy}
        >
          {isCopied ? "✓" : "📋"}
        </button>

        <button
          className={`
            cyber-button px-2 py-1 rounded-lg text-xs font-cyber transition-all duration-300 flex-1
            ${
              isPlaying
                ? "bg-blue-500/20 text-blue-400 border-blue-500/50"
                : "text-tech-red-300 hover:text-white"
            }
          `}
          onClick={isPlaying ? handleStopSpeak : handleSpeak}
        >
          {isPlaying ? "⏹️" : "🔊"}
        </button>

        <button
          className="cyber-button px-2 py-1 rounded-lg text-xs font-cyber text-tech-red-300 hover:text-white transition-all duration-300 flex-1"
          onClick={handleDetailsClick}
        >
          🔍
        </button>
      </div>

      {/* 悬停效果 */}
      <div className="absolute inset-0 bg-neon-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
    </div>
  );
}
