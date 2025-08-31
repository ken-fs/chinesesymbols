"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChineseSymbol } from "@/types/symbol";
import { chineseSymbols } from "@/data/symbols";
import { categories } from "@/data/categories";
import Toast from "@/components/Toast";

export default function SymbolDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [symbol, setSymbol] = useState<ChineseSymbol | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    isVisible: boolean;
    type: "success" | "error" | "info";
  }>({
    message: "",
    isVisible: false,
    type: "success",
  });

  useEffect(() => {
    const foundSymbol = chineseSymbols.find((s) => s.id === params.id);
    if (foundSymbol) {
      setSymbol(foundSymbol);
    }
  }, [params.id]);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast({
        message: `已复制 "${text}" 到剪贴板`,
        isVisible: true,
        type: "success",
      });
    } catch (err) {
      setToast({
        message: "复制失败，请重试",
        isVisible: true,
        type: "error",
      });
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
          <h1 className="text-2xl font-cyber text-gray-400 mb-2">符号未找到</h1>
          <p className="text-gray-500 mb-6">您查找的符号不存在或已被删除</p>
          <button
            onClick={() => router.back()}
            className="cyber-button px-6 py-3 rounded-lg text-tech-red-300 hover:text-white transition-colors"
          >
            返回上一页
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
            <span>返回</span>
          </button>
          <h1 className="text-xl font-cyber text-tech-red-400">符号详情</h1>
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
              <h1 className="text-3xl font-cyber text-white mb-2">
                {symbol.meaning}
              </h1>

              <div className="text-xl text-tech-red-400 font-cyber mb-4">
                {symbol.pinyin}
              </div>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {symbol.description}
              </p>
            </div>

            {/* 复制按钮 */}
            <div className="mt-8 flex justify-center space-x-4">
              <button
                onClick={() => handleCopy(symbol.symbol)}
                className="cyber-button px-6 py-3 rounded-lg text-tech-red-300 hover:text-white transition-all duration-300"
              >
                📋 复制符号
              </button>
              <button
                onClick={() => handleCopy(symbol.pinyin)}
                className="cyber-button px-6 py-3 rounded-lg text-tech-red-300 hover:text-white transition-all duration-300"
              >
                📋 复制拼音
              </button>
            </div>
          </div>

          {/* 详细信息 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 分类信息 */}
            <div className="glass-effect rounded-xl p-6">
              <h2 className="text-xl font-cyber text-tech-red-400 mb-4">
                分类信息
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
                相关标签
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
                        热门符号
                      </div>
                      <div className="text-sm text-gray-400">
                        这个符号很受欢迎
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
              使用建议
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-tech-red-500/10 rounded-lg border border-tech-red-500/20">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-semibold text-white mb-2">社交媒体</h3>
                <p className="text-sm text-gray-400">
                  可以在微信、微博等社交平台使用这个符号
                </p>
              </div>
              <div className="p-4 bg-tech-red-500/10 rounded-lg border border-tech-red-500/20">
                <div className="text-2xl mb-2">🎨</div>
                <h3 className="font-semibold text-white mb-2">设计作品</h3>
                <p className="text-sm text-gray-400">
                  适合用于海报、logo等设计作品中
                </p>
              </div>
              <div className="p-4 bg-tech-red-500/10 rounded-lg border border-tech-red-500/20">
                <div className="text-2xl mb-2">📚</div>
                <h3 className="font-semibold text-white mb-2">学习中文</h3>
                <p className="text-sm text-gray-400">
                  有助于学习中文文化和汉字含义
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
