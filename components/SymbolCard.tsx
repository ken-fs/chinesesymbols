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
        hover:cyber-glow hover:scale-105 hover:rotate-1
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
      <div className="text-center mb-4">
        <div className="text-6xl font-chinese mb-2 neon-text animate-float">
          {symbol.symbol}
        </div>
        <div className="text-tech-red-400 font-cyber text-sm">
          {symbol.pinyin}
        </div>
      </div>

      {/* 含义和描述 */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white mb-2">
          {symbol.meaning}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {symbol.description}
        </p>
      </div>

      {/* 分类标签 */}
      <div className="flex flex-wrap gap-1 mb-4">
        {symbol.categories.slice(0, 2).map((category) => (
          <span
            key={category}
            className="text-xs px-2 py-1 bg-tech-red-500/20 text-tech-red-300 rounded-full border border-tech-red-500/30"
          >
            {category}
          </span>
        ))}
        {symbol.categories.length > 2 && (
          <span className="text-xs px-2 py-1 bg-gray-600/20 text-gray-400 rounded-full">
            +{symbol.categories.length - 2}
          </span>
        )}
      </div>

      {/* 操作按钮 */}
      <div className="flex justify-center space-x-2">
        <button
          className={`
            cyber-button px-4 py-2 rounded-lg text-sm font-cyber transition-all duration-300
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
          {isCopied ? "✓ 已复制" : "📋 复制"}
        </button>

        <button
          className="cyber-button px-4 py-2 rounded-lg text-sm font-cyber text-tech-red-300 hover:text-white transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/symbol/${symbol.id}`);
          }}
        >
          🔍 详情
        </button>
      </div>

      {/* 悬停效果 */}
      <div className="absolute inset-0 bg-neon-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
    </div>
  );
}
