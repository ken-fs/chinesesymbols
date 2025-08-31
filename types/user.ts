export interface UserPreferences {
  fontSize: "small" | "medium" | "large";
  darkMode: boolean;
  language: "en" | "zh";
  autoPlay: boolean;
}

export interface FavoriteSymbol {
  symbolId: string;
  addedAt: Date;
}

export interface RecentlyUsedSymbol {
  symbolId: string;
  usedAt: Date;
}

export interface UserData {
  preferences: UserPreferences;
  favorites: FavoriteSymbol[];
  recentlyUsed: RecentlyUsedSymbol[];
}
