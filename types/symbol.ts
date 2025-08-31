export interface ChineseSymbol {
  id: string;
  symbol: string;
  pinyin: string;
  meaning: string;
  description: string;
  categories: SymbolCategory[];
  tags: string[];
  isPopular?: boolean;
}

export type SymbolCategory =
  | "Love & Romance"
  | "Family & Relationships"
  | "Animals"
  | "Birds"
  | "Colors"
  | "Nature Elements"
  | "Fruits & Flowers"
  | "Objects & Tools"
  | "Strength & Power"
  | "Luck & Fortune"
  | "Tattoo Designs"
  | "Chinese Zodiac"
  | "Wisdom & Knowledge"
  | "Emotions & Feelings"
  | "Chinese Idioms";

export interface CategoryInfo {
  id: SymbolCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface SearchFilters {
  category?: SymbolCategory;
  searchTerm?: string;
  tags?: string[];
}
