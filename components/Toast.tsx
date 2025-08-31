"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  type?: "success" | "error" | "info";
}

export default function Toast({
  message,
  isVisible,
  onClose,
  type = "success",
}: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-500/20 border-green-500/50 text-green-400";
      case "error":
        return "bg-red-500/20 border-red-500/50 text-red-400";
      case "info":
        return "bg-blue-500/20 border-blue-500/50 text-blue-400";
      default:
        return "bg-tech-red-500/20 border-tech-red-500/50 text-tech-red-400";
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-up">
      <div
        className={`
        glass-effect rounded-lg p-4 border backdrop-blur-md
        ${getTypeStyles()}
      `}
      >
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            {type === "success" && <span className="text-green-400">✓</span>}
            {type === "error" && <span className="text-red-400">✗</span>}
            {type === "info" && <span className="text-blue-400">ℹ</span>}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
