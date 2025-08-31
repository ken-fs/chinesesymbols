import { ChineseSymbol } from "@/types/symbol";

/**
 * 生成带有分类前缀的唯一 key
 * 格式: {categoryPrefix}-{symbolId}
 * 例如: "love-romance-heart", "chinese-zodiac-monkey"
 */
export const generateSymbolKey = (symbol: ChineseSymbol): string => {
  const primaryCategory = symbol.categories[0] || "default";
  const categoryPrefix = primaryCategory
    .replace(/[^a-zA-Z0-9]/g, "") // 移除特殊字符
    .toLowerCase(); // 转换为小写
  return `${categoryPrefix}-${symbol.id}`;
};

/**
 * 生成分类标签的唯一 key
 * 格式: {symbolId}-category-{index}
 * 例如: "heart-category-0", "heart-category-1"
 */
export const generateCategoryKey = (
  symbolId: string,
  index: number
): string => {
  return `${symbolId}-category-${index}`;
};

/**
 * 生成快速分类按钮的唯一 key
 * 格式: "quick-category-{categoryId}"
 * 例如: "quick-category-love-romance"
 */
export const generateQuickCategoryKey = (categoryId: string): string => {
  const cleanCategoryId = categoryId.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return `quick-category-${cleanCategoryId}`;
};
