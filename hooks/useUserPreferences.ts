"use client";

import { useState, useEffect } from "react";
import {
  UserData,
  UserPreferences,
  FavoriteSymbol,
  RecentlyUsedSymbol,
} from "@/types/user";

const defaultPreferences: UserPreferences = {
  fontSize: "medium",
  darkMode: true,
  language: "en",
  autoPlay: false,
};

const defaultUserData: UserData = {
  preferences: defaultPreferences,
  favorites: [],
  recentlyUsed: [],
};

export function useUserPreferences() {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [isLoaded, setIsLoaded] = useState(false);

  // 从 localStorage 加载用户数据
  useEffect(() => {
    try {
      const saved = localStorage.getItem("chinese-symbols-user-data");
      if (saved) {
        const parsed = JSON.parse(saved);
        // 转换日期字符串回 Date 对象
        parsed.favorites = parsed.favorites.map((fav: any) => ({
          ...fav,
          addedAt: new Date(fav.addedAt),
        }));
        parsed.recentlyUsed = parsed.recentlyUsed.map((recent: any) => ({
          ...recent,
          usedAt: new Date(recent.usedAt),
        }));
        setUserData(parsed);
      }
    } catch (error) {
      console.error("Failed to load user data:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // 保存用户数据到 localStorage
  const saveUserData = (newData: UserData) => {
    try {
      localStorage.setItem(
        "chinese-symbols-user-data",
        JSON.stringify(newData)
      );
      setUserData(newData);
    } catch (error) {
      console.error("Failed to save user data:", error);
    }
  };

  // 更新偏好设置
  const updatePreferences = (preferences: Partial<UserPreferences>) => {
    const newData = {
      ...userData,
      preferences: { ...userData.preferences, ...preferences },
    };
    saveUserData(newData);
  };

  // 添加收藏
  const addFavorite = (symbolId: string) => {
    const isAlreadyFavorite = userData.favorites.some(
      (fav) => fav.symbolId === symbolId
    );
    if (isAlreadyFavorite) return;

    const newFavorite: FavoriteSymbol = {
      symbolId,
      addedAt: new Date(),
    };

    const newData = {
      ...userData,
      favorites: [...userData.favorites, newFavorite],
    };
    saveUserData(newData);
  };

  // 移除收藏
  const removeFavorite = (symbolId: string) => {
    const newData = {
      ...userData,
      favorites: userData.favorites.filter((fav) => fav.symbolId !== symbolId),
    };
    saveUserData(newData);
  };

  // 检查是否已收藏
  const isFavorite = (symbolId: string) => {
    return userData.favorites.some((fav) => fav.symbolId === symbolId);
  };

  // 添加到最近使用
  const addToRecentlyUsed = (symbolId: string) => {
    const existingIndex = userData.recentlyUsed.findIndex(
      (recent) => recent.symbolId === symbolId
    );

    let newRecentlyUsed;
    if (existingIndex >= 0) {
      // 如果已存在，更新使用时间并移到最前面
      newRecentlyUsed = [
        { symbolId, usedAt: new Date() },
        ...userData.recentlyUsed.filter((_, index) => index !== existingIndex),
      ];
    } else {
      // 如果不存在，添加到最前面
      newRecentlyUsed = [
        { symbolId, usedAt: new Date() },
        ...userData.recentlyUsed,
      ];
    }

    // 只保留最近 20 个
    newRecentlyUsed = newRecentlyUsed.slice(0, 20);

    const newData = {
      ...userData,
      recentlyUsed: newRecentlyUsed,
    };
    saveUserData(newData);
  };

  // 获取收藏的符号 ID 列表
  const getFavoriteSymbolIds = () => {
    return userData.favorites.map((fav) => fav.symbolId);
  };

  // 获取最近使用的符号 ID 列表
  const getRecentlyUsedSymbolIds = () => {
    return userData.recentlyUsed.map((recent) => recent.symbolId);
  };

  return {
    userData,
    isLoaded,
    updatePreferences,
    addFavorite,
    removeFavorite,
    isFavorite,
    addToRecentlyUsed,
    getFavoriteSymbolIds,
    getRecentlyUsedSymbolIds,
  };
}
