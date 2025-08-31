"use client";

import { useState, useMemo } from "react";
import { ChineseSymbol, SymbolCategory } from "@/types/symbol";
import { chineseSymbols } from "@/data/symbols";
import SymbolCard from "@/components/SymbolCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import Toast from "@/components/Toast";

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState<SymbolCategory | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [toast, setToast] = useState<{
    message: string;
    isVisible: boolean;
    type: "success" | "error" | "info";
  }>({
    message: "",
    isVisible: false,
    type: "success",
  });

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
      message: `已复制 "${symbol}" 到剪贴板`,
      isVisible: true,
      type: "success",
    });
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
            中文符号
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            探索中文字符的美丽与意义 • 复制粘贴中文符号 • 学习传统文化
          </p>

          {/* 搜索栏 */}
          <div className="max-w-md mx-auto">
            <SearchBar onSearch={setSearchTerm} />
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
                符号展示
              </h2>
              <p className="text-gray-400">
                找到{" "}
                <span className="text-tech-red-400 font-semibold">
                  {filteredSymbols.length}
                </span>{" "}
                个符号
                {selectedCategory && (
                  <span className="ml-2">
                    • 分类:{" "}
                    <span className="text-tech-red-400">
                      {selectedCategory}
                    </span>
                  </span>
                )}
                {searchTerm && (
                  <span className="ml-2">
                    • 搜索:{" "}
                    <span className="text-tech-red-400">"{searchTerm}"</span>
                  </span>
                )}
              </p>
            </div>

            {/* 符号网格 */}
            {filteredSymbols.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredSymbols.map((symbol) => (
                  <div key={symbol.id} className="animate-slide-up">
                    <SymbolCard symbol={symbol} onCopy={handleCopy} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-cyber text-gray-400 mb-2">
                  未找到匹配的符号
                </h3>
                <p className="text-gray-500">尝试调整搜索条件或选择其他分类</p>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* 底部信息 */}
      <footer className="border-t border-tech-red-500/20 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-2">
            Chinese Symbols © 2025 - 您可信赖的中文符号资源
          </p>
          <p className="text-sm text-gray-500">
            复制粘贴中文符号 | 中文符号纹身 | 中文符号含义 | 学习中文符号
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
    </div>
  );
}
