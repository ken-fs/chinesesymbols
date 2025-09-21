"use client";

import { useState } from "react";
import Link from "next/link";

const HelpMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const helpItems = [
    {
      title: "Chinese Symbols Guide",
      href: "/help/chinese-symbols-guide",
      description: "Learn meanings and cultural significance",
      icon: "📚",
    },
    {
      title: "Internet & Slang Guide",
      href: "/help/internet-slang-guide",
      description: "Trending terms with bilingual meanings",
      icon: "🔥",
    },
    {
      title: "Tattoo Design Guide",
      href: "/help/tattoo-design-guide", 
      description: "Expert advice for Chinese symbol tattoos",
      icon: "🎨",
    },
    {
      title: "Chinese Zodiac Guide",
      href: "/help/chinese-zodiac-guide",
      description: "Complete guide to 12 zodiac animals",
      icon: "🐲",
    },
    {
      title: "Five Elements Theory",
      href: "/help/five-elements-guide",
      description: "Traditional Wu Xing philosophy explained",
      icon: "⚡",
    },
    {
      title: "Feng Shui Symbols",
      href: "/help/feng-shui-symbols",
      description: "Lucky symbols and their meanings",
      icon: "🔮",
    },
    {
      title: "How to Use",
      href: "/help/how-to-use",
      description: "Website features and navigation guide",
      icon: "❓",
    },
  ];

  return (
    <div className="relative">
      {/* 帮助按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-tech-gradient border border-tech-red-500/30 rounded-lg hover:border-tech-red-400/50 hover:shadow-[0_0_15px_rgba(255,59,59,0.3)] transition-all duration-300 group"
      >
        <span className="text-tech-red-400 group-hover:text-tech-red-300 transition-colors text-lg">
          ❓
        </span>
        <span className="text-white font-cyber text-sm group-hover:text-tech-red-100 transition-colors">
          Help
        </span>
        <span
          className={`text-tech-red-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {/* 下拉菜单 */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-96 bg-tech-gradient border border-tech-red-500/30 rounded-lg shadow-[0_0_20px_rgba(255,59,59,0.2)] backdrop-blur-sm z-50 animate-slide-up">
          <div className="p-4">
            <h3 className="text-tech-red-400 font-cyber text-lg mb-4 flex items-center gap-2">
              <span>📖</span>
              Help Documentation
            </h3>
            
            <div className="space-y-2">
              {helpItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block p-3 rounded-lg border border-tech-red-500/20 hover:border-tech-red-400/40 hover:bg-tech-red-500/10 transition-all duration-300 group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl group-hover:animate-pulse">
                      {item.icon}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-white font-cyber text-sm mb-1 group-hover:text-tech-red-200 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-tech-red-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-tech-red-500/20">
              <Link
                href="/help"
                className="flex items-center justify-center gap-2 w-full py-2 bg-tech-red-600/20 hover:bg-tech-red-600/30 border border-tech-red-500/30 rounded-lg text-tech-red-200 hover:text-white transition-all duration-300 font-cyber text-sm"
                onClick={() => setIsOpen(false)}
              >
                <span>📋</span>
                View All Documentation
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 点击外部关闭菜单 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default HelpMenu;
