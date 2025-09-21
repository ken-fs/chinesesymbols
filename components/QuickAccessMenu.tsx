"use client";

import { useState } from "react";
import { useUserPreferences } from "@/hooks/useUserPreferences";
import { chineseSymbols } from "@/data/symbols";
import { SymbolCategory } from "@/types/symbol";
import {
  generateSymbolKey,
  generateQuickCategoryKey,
} from "@/utils/keyGenerator";

interface QuickAccessMenuProps {
  onSymbolClick: (symbolId: string) => void;
  onCategoryClick: (category: SymbolCategory | null) => void;
}

export default function QuickAccessMenu({
  onSymbolClick,
  onCategoryClick,
}: QuickAccessMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { userData, isFavorite, addToRecentlyUsed } = useUserPreferences();

  const favoriteSymbols = chineseSymbols.filter((symbol) =>
    userData.favorites.some((fav) => fav.symbolId === symbol.id)
  );

  const recentlyUsedSymbols = chineseSymbols
    .filter((symbol) =>
      userData.recentlyUsed.some((recent) => recent.symbolId === symbol.id)
    )
    .slice(0, 10); // 只显示最近 10 个

  const handleSymbolClick = (symbolId: string) => {
    addToRecentlyUsed(symbolId);
    onSymbolClick(symbolId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* 菜单按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cyber-button px-4 py-2 rounded-lg text-tech-red-300 hover:text-white transition-all duration-300 flex items-center space-x-2"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span>Quick Access</span>
      </button>

      {/* 下拉菜单 */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 glass-effect rounded-lg border border-tech-red-500/20 shadow-xl z-50">
          <div className="p-4">
            {/* 收藏夹 */}
            <div className="mb-6">
              <h3 className="text-lg font-cyber text-tech-red-400 mb-3 flex items-center">
                <span className="mr-2">⭐</span>
                Favorites
              </h3>
              {favoriteSymbols.length > 0 ? (
                <div className="grid grid-cols-4 gap-2">
                  {favoriteSymbols.slice(0, 8).map((symbol) => (
                    <button
                      key={generateSymbolKey(symbol)}
                      onClick={() => handleSymbolClick(symbol.id)}
                      className="p-2 bg-tech-red-500/10 hover:bg-tech-red-500/20 rounded-lg transition-all duration-200 text-center"
                    >
                      <div className="text-2xl font-chinese mb-1">
                        {symbol.symbol}
                      </div>
                      {(() => {
                        const lang = userData.preferences.language;
                        const meaningText =
                          symbol.i18n?.[lang]?.meaning || symbol.meaning;
                        return (
                          <div className="text-xs text-gray-400 truncate">
                            {meaningText}
                          </div>
                        );
                      })()}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">No favorites yet</p>
              )}
            </div>

            {/* 最近使用 */}
            <div className="mb-6">
              <h3 className="text-lg font-cyber text-tech-red-400 mb-3 flex items-center">
                <span className="mr-2">🕒</span>
                Recently Used
              </h3>
              {recentlyUsedSymbols.length > 0 ? (
                <div className="grid grid-cols-4 gap-2">
                  {recentlyUsedSymbols.slice(0, 8).map((symbol) => (
                    <button
                      key={generateSymbolKey(symbol)}
                      onClick={() => handleSymbolClick(symbol.id)}
                      className="p-2 bg-tech-red-500/10 hover:bg-tech-red-500/20 rounded-lg transition-all duration-200 text-center"
                    >
                      <div className="text-2xl font-chinese mb-1">
                        {symbol.symbol}
                      </div>
                      {(() => {
                        const lang = userData.preferences.language;
                        const meaningText =
                          symbol.i18n?.[lang]?.meaning || symbol.meaning;
                        return (
                          <div className="text-xs text-gray-400 truncate">
                            {meaningText}
                          </div>
                        );
                      })()}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">No recent symbols</p>
              )}
            </div>

            {/* 快速分类 */}
            <div>
              <h3 className="text-lg font-cyber text-tech-red-400 mb-3 flex items-center">
                <span className="mr-2">🏷️</span>
                Quick Categories
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "Love & Romance", name: "Love", icon: "💕" },
                  { id: "Chinese Zodiac", name: "Zodiac", icon: "🐉" },
                  { id: "Animals", name: "Animals", icon: "🐯" },
                  { id: "Nature", name: "Nature", icon: "🌸" },
                ].map((category) => (
                  <button
                    key={generateQuickCategoryKey(category.id)}
                    onClick={() => {
                      onCategoryClick(category.id as SymbolCategory);
                      setIsOpen(false);
                    }}
                    className="p-3 bg-tech-red-500/10 hover:bg-tech-red-500/20 rounded-lg transition-all duration-200 flex items-center space-x-2"
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="text-sm text-white">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 背景遮罩 */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
