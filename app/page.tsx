"use client";

import { useState, useMemo } from "react";
import { ChineseSymbol, SymbolCategory } from "@/types/symbol";
import { chineseSymbols } from "@/data/symbols";
import SymbolCard from "@/components/SymbolCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import Toast from "@/components/Toast";
import QuickAccessMenu from "@/components/QuickAccessMenu";
import UserSettingsPanel from "@/components/UserSettingsPanel";
import { useUserPreferences } from "@/hooks/useUserPreferences";

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState<SymbolCategory | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    isVisible: boolean;
    type: "success" | "error" | "info";
  }>({
    message: "",
    isVisible: false,
    type: "success",
  });
  const { userData } = useUserPreferences();

  // 筛选符号
  const filteredSymbols = useMemo(() => {
    return chineseSymbols.filter((symbol) => {
      const matchesCategory =
        !selectedCategory || symbol.categories.includes(selectedCategory);
      const matchesSearch =
        !searchTerm ||
        symbol.symbol.includes(searchTerm) ||
        symbol.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        symbol.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
        symbol.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleCopy = (symbol: string) => {
    setToast({
      message: `Copied "${symbol}" to clipboard`,
      isVisible: true,
      type: "success",
    });
  };

  const handleCategoryClick = (category: string) => {
    // 如果点击的是当前已选中的分类，则清除筛选
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category as SymbolCategory);
    }
  };

  const handleSymbolClick = (symbolId: string) => {
    // 滚动到符号位置
    const element = document.getElementById(`symbol-${symbolId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  return (
    <div className="min-h-screen">
      {/* 头部 */}
      <header className="relative py-12 px-6 text-center">
        <div className="absolute inset-0 bg-neon-glow opacity-20" />
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-cyber font-bold neon-text mb-4 animate-fade-in">
            Chinese Symbols
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore the beauty and meaning of Chinese characters • Copy and
            paste Chinese symbols • Learn traditional culture
          </p>

          {/* 搜索栏 */}
          <div className="max-w-md mx-auto mb-6">
            <SearchBar onSearch={setSearchTerm} />
          </div>

          {/* 快速访问和设置 */}
          <div className="flex items-center justify-center space-x-4">
            <QuickAccessMenu
              onSymbolClick={handleSymbolClick}
              onCategoryClick={handleCategoryClick}
            />
            <button
              onClick={() => setIsSettingsOpen(true)}
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Settings</span>
            </button>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="container mx-auto px-6 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 侧边栏 - 分类筛选 */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="glass-effect rounded-xl p-6 sticky top-6">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </aside>

          {/* 符号展示区域 */}
          <section className="flex-1">
            {/* 结果统计 */}
            <div className="mb-6">
              <h2 className="text-2xl font-cyber text-tech-red-400 mb-2">
                Symbol Gallery
              </h2>
              <p className="text-gray-400">
                Found{" "}
                <span className="text-tech-red-400 font-semibold">
                  {filteredSymbols.length}
                </span>{" "}
                symbols
                {selectedCategory && (
                  <span className="ml-2">
                    • Category:{" "}
                    <span className="text-tech-red-400">
                      {selectedCategory}
                    </span>
                  </span>
                )}
                {searchTerm && (
                  <span className="ml-2">
                    • Search:{" "}
                    <span className="text-tech-red-400">"{searchTerm}"</span>
                  </span>
                )}
              </p>
            </div>

            {/* 符号网格 */}
            {filteredSymbols.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredSymbols.map((symbol) => (
                  <div
                    key={symbol.id}
                    id={`symbol-${symbol.id}`}
                    className="animate-slide-up"
                  >
                    <SymbolCard
                      symbol={symbol}
                      onCopy={handleCopy}
                      onCategoryClick={handleCategoryClick}
                      selectedCategory={selectedCategory}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-cyber text-gray-400 mb-2">
                  No matching symbols found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or select a different category
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* 底部信息 */}
      <footer className="border-t border-tech-red-500/20 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-2">
            Chinese Symbols © 2025 - Your trusted source for authentic Chinese
            symbols
          </p>
          <p className="text-sm text-gray-500">
            Copy and paste Chinese symbols | Chinese symbols for tattoos |
            Chinese symbols meanings | Learn Chinese symbols
          </p>
        </div>
      </footer>

      {/* Toast 通知 */}
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        type={toast.type}
        onClose={closeToast}
      />

      {/* 用户设置面板 */}
      <UserSettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}
