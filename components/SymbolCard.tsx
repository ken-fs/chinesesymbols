"use client";

import { ChineseSymbol } from "@/types/symbol";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SymbolCardProps {
  symbol: ChineseSymbol;
  onCopy: (symbol: string) => void;
}

export default function SymbolCard({ symbol, onCopy }: SymbolCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();

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

  return (
    <div
      className={`
        relative group glass-effect rounded-lg p-6 transition-all duration-300 cursor-pointer
        hover:cyber-glow hover:scale-105 hover:rotate-1 w-full min-h-[340px] flex flex-col
        ${isHovered ? "animate-glow" : ""}
        ${symbol.isPopular ? "ring-2 ring-tech-red-500" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCopy}
    >
      {/* 热门标签 */}
      {symbol.isPopular && (
        <div className="absolute -top-2 -right-2 bg-tech-red-500 text-white text-xs px-2 py-1 rounded-full font-cyber">
          HOT
        </div>
      )}

      {/* 符号显示 */}
      <div className="text-center mb-3 flex-shrink-0">
        <div className="text-4xl font-chinese mb-1 neon-text animate-float">
          {symbol.symbol}
        </div>
        <div className="text-tech-red-400 font-cyber text-sm">
          {symbol.pinyin}
        </div>
      </div>

      {/* 含义和描述 */}
      <div className="text-center flex-grow flex flex-col justify-center">
        <h3 className="text-sm font-semibold text-white mb-2 line-clamp-1">
          {symbol.meaning}
        </h3>
        <p className="text-gray-300 text-xs mb-3 line-clamp-2 leading-relaxed">
          {symbol.description}
        </p>
      </div>

      {/* 分类标签 */}
      <div className="flex flex-wrap gap-1 mb-4 flex-shrink-0">
        {symbol.categories.slice(0, 2).map((category) => {
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
            };
            return abbreviations[cat] || cat;
          };

          return (
            <span
              key={category}
              className="text-xs px-2 py-1 bg-tech-red-500/20 text-tech-red-300 rounded-full border border-tech-red-500/30"
            >
              {getCategoryAbbr(category)}
            </span>
          );
        })}
        {symbol.categories.length > 2 && (
          <span className="text-xs px-2 py-1 bg-gray-600/20 text-gray-400 rounded-full">
            +{symbol.categories.length - 2}
          </span>
        )}
      </div>

      {/* 操作按钮 */}
      <div className="flex justify-center space-x-2 flex-shrink-0">
        <button
          className={`
            cyber-button px-2 py-1.5 rounded-lg text-xs font-cyber transition-all duration-300 flex-1
            ${
              isCopied
                ? "bg-green-500/20 text-green-400 border-green-500/50"
                : "text-tech-red-300 hover:text-white"
            }
          `}
          onClick={(e) => {
            e.stopPropagation();
            handleCopy();
          }}
        >
          {isCopied ? "✓ Copied" : "📋 Copy"}
        </button>

        <button
          className="cyber-button px-2 py-1.5 rounded-lg text-xs font-cyber text-tech-red-300 hover:text-white transition-all duration-300 flex-1"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/symbol/${symbol.id}`);
          }}
        >
          🔍 Details
        </button>
      </div>

      {/* 悬停效果 */}
      <div className="absolute inset-0 bg-neon-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
    </div>
  );
}
