"use client";

import { CategoryInfo, SymbolCategory } from "@/types/symbol";
import { categories } from "@/data/categories";
import { useUserPreferences } from "@/hooks/useUserPreferences";

interface CategoryFilterProps {
  selectedCategory: SymbolCategory | null;
  onCategoryChange: (category: SymbolCategory | null) => void;
}

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const { userData } = useUserPreferences();
  const isZh = userData.preferences.language === "zh";

  // Minimal zh translations for category display names
  const zhNameMap: Record<SymbolCategory, string> = {
    "Love & Romance": "爱情与浪漫",
    "Family & Relationships": "家庭与关系",
    Animals: "动物",
    Birds: "鸟类",
    Colors: "颜色",
    "Nature Elements": "自然元素",
    "Fruits & Flowers": "水果花卉",
    "Objects & Tools": "物品工具",
    "Strength & Power": "力量与权力",
    "Luck & Fortune": "幸运与财富",
    "Tattoo Designs": "纹身设计",
    "Chinese Zodiac": "十二生肖",
    "Wisdom & Knowledge": "智慧与知识",
    "Emotions & Feelings": "情感与感受",
    "Chinese Idioms": "成语与俗语",
    Numbers: "数字",
    "Internet & Slang": "网络流行语",
  };
  return (
    <div className="w-full">
      <h3 className="text-lg font-cyber text-tech-red-400 mb-4 neon-text">
        {isZh ? "分类筛选" : "Category Filter"}
      </h3>

      {/* 全部按钮 */}
      <button
        className={`
          w-full mb-3 cyber-button rounded-lg p-3 text-left transition-all duration-300
          ${
            !selectedCategory
              ? "bg-tech-red-500/30 text-white cyber-glow"
              : "text-gray-300 hover:text-white"
          }
        `}
        onClick={() => onCategoryChange(null)}
      >
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🌟</span>
          <div>
            <div className="font-semibold">{isZh ? "全部符号" : "All Symbols"}</div>
            <div className="text-xs opacity-75">
              {isZh ? "浏览全部中文符号" : "Browse all Chinese symbols"}
            </div>
          </div>
        </div>
      </button>

      {/* 分类列表 */}
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`
              w-full cyber-button rounded-lg p-3 text-left transition-all duration-300
              ${
                selectedCategory === category.id
                  ? "bg-tech-red-500/30 text-white cyber-glow"
                  : "text-gray-300 hover:text-white"
              }
            `}
            onClick={() => onCategoryChange(category.id)}
          >
            <div className="flex items-center space-x-3">
              <span className="text-xl">{category.icon}</span>
              <div className="flex-1">
                <div className="font-semibold text-sm">
                  {isZh ? zhNameMap[category.id] : category.name}
                </div>
                <div className="text-xs opacity-75 line-clamp-1">
                  {category.description}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
