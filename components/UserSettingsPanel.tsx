"use client";

import { useState, useEffect } from "react";
import { useUserPreferences } from "@/hooks/useUserPreferences";

interface UserSettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserSettingsPanel({
  isOpen,
  onClose,
}: UserSettingsPanelProps) {
  const { userData, updatePreferences } = useUserPreferences();
  const [localPreferences, setLocalPreferences] = useState(
    userData.preferences
  );

  // 当 userData 变化时更新本地状态
  useEffect(() => {
    setLocalPreferences(userData.preferences);
  }, [userData.preferences]);

  const handleSave = () => {
    updatePreferences(localPreferences);
    onClose();
  };

  const handleCancel = () => {
    setLocalPreferences(userData.preferences);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 背景遮罩 */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleCancel}
      />

      {/* 设置面板 */}
      <div className="relative glass-effect rounded-xl border border-tech-red-500/20 p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-cyber text-tech-red-400">Settings</h2>
          <button
            onClick={handleCancel}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          {/* 字体大小 */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              Font Size
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: "small", label: "Small", preview: "text-sm" },
                { value: "medium", label: "Medium", preview: "text-base" },
                { value: "large", label: "Large", preview: "text-lg" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    setLocalPreferences((prev) => ({
                      ...prev,
                      fontSize: option.value as any,
                    }))
                  }
                  className={`
                    p-3 rounded-lg border transition-all duration-200
                    ${
                      localPreferences.fontSize === option.value
                        ? "border-tech-red-500 bg-tech-red-500/20 text-white"
                        : "border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500"
                    }
                  `}
                >
                  <div className={`${option.preview} mb-1`}>Aa</div>
                  <div className="text-xs">{option.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 深色模式 */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              Theme
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() =>
                  setLocalPreferences((prev) => ({ ...prev, darkMode: true }))
                }
                className={`
                  flex-1 p-3 rounded-lg border transition-all duration-200
                  ${
                    localPreferences.darkMode
                      ? "border-tech-red-500 bg-tech-red-500/20 text-white"
                      : "border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500"
                  }
                `}
              >
                <div className="text-center">
                  <div className="text-lg mb-1">🌙</div>
                  <div className="text-sm">Dark</div>
                </div>
              </button>
              <button
                onClick={() =>
                  setLocalPreferences((prev) => ({ ...prev, darkMode: false }))
                }
                className={`
                  flex-1 p-3 rounded-lg border transition-all duration-200
                  ${
                    !localPreferences.darkMode
                      ? "border-tech-red-500 bg-tech-red-500/20 text-white"
                      : "border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500"
                  }
                `}
              >
                <div className="text-center">
                  <div className="text-lg mb-1">☀️</div>
                  <div className="text-sm">Light</div>
                </div>
              </button>
            </div>
          </div>

          {/* 自动播放 */}
          <div>
            <label className="flex items-center justify-between">
              <span className="text-sm font-medium text-white">
                Auto Play Audio
              </span>
              <button
                onClick={() =>
                  setLocalPreferences((prev) => ({
                    ...prev,
                    autoPlay: !prev.autoPlay,
                  }))
                }
                className={`
                  relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                  ${
                    localPreferences.autoPlay
                      ? "bg-tech-red-500"
                      : "bg-gray-600"
                  }
                `}
              >
                <span
                  className={`
                    inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                    ${
                      localPreferences.autoPlay
                        ? "translate-x-6"
                        : "translate-x-1"
                    }
                  `}
                />
              </button>
            </label>
            <p className="text-xs text-gray-400 mt-1">
              Automatically play audio when viewing symbol details
            </p>
          </div>

          {/* 语言设置 */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              Language
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: "en", label: "English", flag: "🇺🇸" },
                { value: "zh", label: "中文", flag: "🇨🇳" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    setLocalPreferences((prev) => ({
                      ...prev,
                      language: option.value as any,
                    }))
                  }
                  className={`
                    p-3 rounded-lg border transition-all duration-200 flex items-center space-x-2
                    ${
                      localPreferences.language === option.value
                        ? "border-tech-red-500 bg-tech-red-500/20 text-white"
                        : "border-gray-600 bg-gray-800/50 text-gray-300 hover:border-gray-500"
                    }
                  `}
                >
                  <span className="text-lg">{option.flag}</span>
                  <span className="text-sm">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex space-x-3 mt-8">
          <button
            onClick={handleCancel}
            className="flex-1 cyber-button px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 cyber-button px-4 py-2 rounded-lg text-tech-red-300 hover:text-white transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
