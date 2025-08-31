"use client";

import { useEffect } from "react";
import { useUserPreferences } from "@/hooks/useUserPreferences";

export default function UserPreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userData, isLoaded } = useUserPreferences();

  useEffect(() => {
    if (!isLoaded) return;

    const { preferences } = userData;

    // 应用字体大小设置
    const fontSizeClasses = {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    };

    // 应用主题设置
    if (preferences.darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    // 应用语言设置
    document.documentElement.lang = preferences.language;

    // 应用自动播放设置到全局
    (window as any).autoPlayAudio = preferences.autoPlay;
  }, [userData, isLoaded]);

  return <>{children}</>;
}
