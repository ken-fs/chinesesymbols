"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChineseSymbol } from "@/types/symbol";
import { chineseSymbols } from "@/data/symbols";
import { categories } from "@/data/categories";
import Toast from "@/components/Toast";
import { useUserPreferences } from "@/hooks/useUserPreferences";

export default function SymbolDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [symbol, setSymbol] = useState<ChineseSymbol | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    isVisible: boolean;
    type: "success" | "error" | "info";
  }>({
    message: "",
    isVisible: false,
    type: "success",
  });
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);
  const { userData } = useUserPreferences();

  useEffect(() => {
    const foundSymbol = chineseSymbols.find((s) => s.id === params.id);
    if (foundSymbol) {
      setSymbol(foundSymbol);
    }
  }, [params.id]);

  // 清理函数，组件卸载时停止语音播放
  useEffect(() => {
    return () => {
      if (speechSynthesisRef.current) {
        speechSynthesis.cancel();
      }
    };
  }, []);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast({
        message: `Copied "${text}" to clipboard`,
        isVisible: true,
        type: "success",
      });
    } catch (err) {
      setToast({
        message: "Copy failed, please try again",
        isVisible: true,
        type: "error",
      });
    }
  };

  const handleSpeak = () => {
    if (!symbol) return;

    // 停止当前播放
    if (speechSynthesisRef.current) {
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
  };

  const handleStopSpeak = () => {
    if (speechSynthesisRef.current) {
      speechSynthesis.cancel();
      setIsPlaying(false);
      speechSynthesisRef.current = null;
    }
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  if (!symbol) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-cyber text-gray-400 mb-2">
            Symbol Not Found
          </h1>
          <p className="text-gray-500 mb-6">
            The symbol you&apos;re looking for doesn&apos;t exist or has been
            removed
          </p>
          <button
            onClick={() => router.back()}
            className="cyber-button px-6 py-3 rounded-lg text-tech-red-300 hover:text-white transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const symbolCategories = categories.filter((cat) =>
    symbol.categories.includes(cat.id)
  );

  return (
    <div className="min-h-screen">
      {/* 头部导航 */}
      <header className="border-b border-tech-red-500/20 py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="cyber-button px-4 py-2 rounded-lg text-tech-red-300 hover:text-white transition-colors flex items-center space-x-2"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </button>
          <h1 className="text-xl font-cyber text-tech-red-400">
            Symbol Details
          </h1>
          <div className="w-20"></div> {/* 占位符保持居中 */}
        </div>
      </header>

      {/* 主要内容 */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* 符号展示区域 */}
          <div className="glass-effect rounded-xl p-8 mb-8 text-center">
            <div className="text-8xl md:text-9xl font-chinese neon-text mb-4 animate-float">
              {symbol.symbol}
            </div>

            <div className="space-y-4">
              {(() => {
                const lang = userData.preferences.language;
                const meaningText = symbol.i18n?.[lang]?.meaning || symbol.meaning;
                return (
                  <h1 className="text-3xl font-cyber text-white mb-2">
                    {meaningText}
                  </h1>
                );
              })()}

              <div className="text-xl text-tech-red-400 font-cyber mb-4">
                {symbol.pinyin}
              </div>

              {(() => {
                const lang = userData.preferences.language;
                const descText = symbol.i18n?.[lang]?.description || symbol.description;
                return (
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    {descText}
                  </p>
                );
              })()}
            </div>

            {/* 操作按钮 */}
            <div className="mt-8 flex justify-center space-x-4">
              <button
                onClick={() => handleCopy(symbol.symbol)}
                className="cyber-button px-6 py-3 rounded-lg text-tech-red-300 hover:text-white transition-all duration-300"
              >
                📋 Copy Symbol
              </button>
              <button
                onClick={() => handleCopy(symbol.pinyin)}
                className="cyber-button px-6 py-3 rounded-lg text-tech-red-300 hover:text-white transition-all duration-300"
              >
                📋 Copy Pinyin
              </button>
              <button
                onClick={isPlaying ? handleStopSpeak : handleSpeak}
                className={`
                  cyber-button px-6 py-3 rounded-lg transition-all duration-300
                  ${
                    isPlaying
                      ? "bg-blue-500/20 text-blue-400 border-blue-500/50"
                      : "text-tech-red-300 hover:text-white"
                  }
                `}
              >
                {isPlaying ? "⏹️ Stop" : "🔊 Speak"}
              </button>
            </div>
          </div>

          {/* 详细信息 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 分类信息 */}
            <div className="glass-effect rounded-xl p-6">
              <h2 className="text-xl font-cyber text-tech-red-400 mb-4">
                Category Information
              </h2>
              <div className="space-y-3">
                {symbolCategories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-tech-red-500/10 border border-tech-red-500/20"
                  >
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <div className="font-semibold text-white">
                        {category.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {category.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 标签信息 */}
            <div className="glass-effect rounded-xl p-6">
              <h2 className="text-xl font-cyber text-tech-red-400 mb-4">
                Related Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {symbol.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-tech-red-500/20 text-tech-red-300 rounded-full text-sm border border-tech-red-500/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {symbol.isPopular && (
                <div className="mt-6 p-4 bg-gradient-to-r from-tech-red-500/20 to-orange-500/20 rounded-lg border border-tech-red-500/30">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🔥</span>
                    <div>
                      <div className="font-semibold text-tech-red-400">
                        Popular Symbol
                      </div>
                      <div className="text-sm text-gray-400">
                        This symbol is very popular
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 使用建议 */}
          <div className="mt-8 glass-effect rounded-xl p-6">
            <h2 className="text-xl font-cyber text-tech-red-400 mb-4">
              Usage Suggestions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-tech-red-500/10 rounded-lg border border-tech-red-500/20">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-semibold text-white mb-2">Social Media</h3>
                <p className="text-sm text-gray-400">
                  Use this symbol on social platforms like WeChat, Weibo, etc.
                </p>
              </div>
              <div className="p-4 bg-tech-red-500/10 rounded-lg border border-tech-red-500/20">
                <div className="text-2xl mb-2">🎨</div>
                <h3 className="font-semibold text-white mb-2">Design Works</h3>
                <p className="text-sm text-gray-400">
                  Perfect for posters, logos, and other design projects
                </p>
              </div>
              <div className="p-4 bg-tech-red-500/10 rounded-lg border border-tech-red-500/20">
                <div className="text-2xl mb-2">📚</div>
                <h3 className="font-semibold text-white mb-2">Learn Chinese</h3>
                <p className="text-sm text-gray-400">
                  Helpful for learning Chinese culture and character meanings
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Toast 通知 */}
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        type={toast.type}
        onClose={closeToast}
      />
    </div>
  );
}
