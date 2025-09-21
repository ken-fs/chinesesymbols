import { Metadata } from "next";
import Link from "next/link";
import { chineseSymbols } from "@/data/symbols";
import { ChineseSymbol } from "@/types/symbol";
import InternetSlangContent from "./section-client";

export const metadata: Metadata = {
  title: "Internet & Slang Guide - Trending Terms & Meanings | Chinese Symbols",
  description:
    "Guide to modern Internet & Slang terms with bilingual meanings (EN/ZH), cultural notes, and usage tips. Covers popular memes, work-life trends, AI buzzwords, and aesthetics.",
  keywords:
    "internet slang, trending terms, memes, rizz, cringe, delulu, FOMO, AI, AIGC, LLM, dopamine dressing, goblin mode",
  openGraph: {
    title: "Internet & Slang Guide - Trending Terms",
    description:
      "Bilingual guide to modern Internet & Slang: definitions, pinyin, cultural context, and usage tips.",
    type: "article",
  },
  alternates: {
    canonical: "/help/internet-slang-guide",
  },
};

const groupIds = {
  coreHot: [
    "neijuan",
    "tangping",
    "bailan",
    "pofang",
    "xianyanbao",
    "dazi",
  ],
  emotionMeme: [
    "rizz",
    "simp",
    "slay",
    "cringe",
    "sus",
    "mid",
    "delulu",
  ],
  workLife: [
    "mo-yu",
    "quiet-quitting",
    "rage-applying",
    "hybrid-work",
    "remote-first",
    "side-hustle",
    "shuzi-youmin",
  ],
  aiTech: [
    "aigc",
    "dagongmo-xing",
    "rengong-zhineng",
    "llm",
    "multimodal",
    "prompt-engineering",
    "ai-hallucination",
    "ai-guardrails",
    "ai-alignment",
    "agi",
    "chatgpt",
  ],
  aesthetics: [
    "duobaan-outfits",
    "barbiecore",
    "coquette",
    "clean-girl",
    "girl-dinner",
    "cottagecore",
    "goblin-mode",
  ],
  economyClimate: [
    "inflation",
    "recession",
    "soft-landing",
    "de-risking",
    "cost-of-living",
    "climate-change",
    "heatwave",
    "wildfire",
  ],
  socialPhenomena: [
    "parasocial",
    "npc",
    "sigma-male",
    "boundaries",
    "burnout",
    "doomscrolling",
    "fomo",
    "jomo",
  ],
} as const;

function pick(ids: readonly string[]): ChineseSymbol[] {
  const map = new Map(chineseSymbols.map((s) => [s.id, s] as const));
  return ids
    .map((id) => map.get(id))
    .filter(Boolean) as unknown as ChineseSymbol[];
}

export default function InternetSlangGuidePage() {
  const data = {
    coreHot: pick(groupIds.coreHot),
    emotionMeme: pick(groupIds.emotionMeme),
    workLife: pick(groupIds.workLife),
    aiTech: pick(groupIds.aiTech),
    aesthetics: pick(groupIds.aesthetics),
    economyClimate: pick(groupIds.economyClimate),
    socialPhenomena: pick(groupIds.socialPhenomena),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/help" className="hover:text-tech-red-300 transition-colors">
          Help Center
        </Link>
        <span>»</span>
        <span className="text-tech-red-300">Internet & Slang Guide</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-cyber text-4xl text-white mb-3">
              Internet & Slang Guide
            </h1>
            <p className="text-lg text-tech-red-300">
              Trending terms with bilingual meanings, pinyin, and usage tips
            </p>
          </div>
          <div className="text-4xl">🔥</div>
        </div>
        <div className="mt-4 text-sm text-gray-400 flex items-center gap-6">
          <span>✅ Multi-language: EN / ZH</span>
          <span>🧭 Category: Internet & Slang</span>
          <span>🕑 Updated: Sep 2025</span>
        </div>
      </header>

      {/* TOC */}
      <div className="mb-10 p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
        <h2 className="font-cyber text-xl text-white mb-3 flex items-center gap-2">
          <span>📋</span>
          Table of Contents
        </h2>
        <ul className="text-sm text-gray-300 space-y-2">
          <li><a href="#intro" className="text-tech-red-300 hover:text-tech-red-200">1. Overview</a></li>
          <li><a href="#hot-core" className="text-tech-red-300 hover:text-tech-red-200">2. Core Hot Words</a></li>
          <li><a href="#work-life" className="text-tech-red-300 hover:text-tech-red-200">3. Work & Lifestyle</a></li>
          <li><a href="#ai-tech" className="text-tech-red-300 hover:text-tech-red-200">4. AI & Tech Buzzwords</a></li>
          <li><a href="#aesthetics" className="text-tech-red-300 hover:text-tech-red-200">5. Aesthetics & Fashion</a></li>
          <li><a href="#economy-climate" className="text-tech-red-300 hover:text-tech-red-200">6. Economy & Climate</a></li>
          <li><a href="#social" className="text-tech-red-300 hover:text-tech-red-200">7. Social Phenomena</a></li>
          <li><a href="#usage" className="text-tech-red-300 hover:text-tech-red-200">8. Usage Tips & Cultural Notes</a></li>
        </ul>
      </div>

      {/* Client bilingual content */}
      <InternetSlangContent data={data} />
    </div>
  );
}

