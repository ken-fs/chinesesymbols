"use client";

import { CategoryInfo, SymbolCategory } from "@/types/symbol";
import { categories } from "@/data/categories";

interface CategoryFilterProps {
  selectedCategory: SymbolCategory | null;
  onCategoryChange: (category: SymbolCategory | null) => void;
}

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="w-full">
      <h3 className="text-lg font-cyber text-tech-red-400 mb-4 neon-text">
        Category Filter
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
            <div className="font-semibold">All Symbols</div>
            <div className="text-xs opacity-75">Browse all Chinese symbols</div>
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
                <div className="font-semibold text-sm">{category.name}</div>
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
