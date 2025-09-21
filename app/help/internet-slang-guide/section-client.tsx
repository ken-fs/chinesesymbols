"use client";

import { ChineseSymbol } from "@/types/symbol";
import { useUserPreferences } from "@/hooks/useUserPreferences";

type Data = Record<
  | "coreHot"
  | "emotionMeme"
  | "workLife"
  | "aiTech"
  | "aesthetics"
  | "economyClimate"
  | "socialPhenomena",
  ChineseSymbol[]
>;

export default function InternetSlangContent({ data }: { data: Data }) {
  const { userData } = useUserPreferences();
  const lang = userData.preferences.language;
  const isZh = lang === "zh";

  const T = {
    overviewTitle: isZh ? "概览" : "Overview",
    overviewBody: isZh
      ? "本指南整理了近期网络与流行语，提供中英双语释义、拼音与使用提示，帮助你更好地理解与正确使用。"
      : "This guide curates recent Internet and slang terms with bilingual definitions, pinyin and usage tips to help you understand and use them appropriately.",
    coreHot: isZh ? "核心热点" : "Core Hot Words",
    workLife: isZh ? "职场与生活方式" : "Work & Lifestyle",
    aiTech: isZh ? "AI 与科技热词" : "AI & Tech Buzzwords",
    aesthetics: isZh ? "审美与时尚" : "Aesthetics & Fashion",
    economyClimate: isZh ? "经济与气候" : "Economy & Climate",
    social: isZh ? "社会现象与梗" : "Social Phenomena",
    usageTitle: isZh ? "使用建议与文化提示" : "Usage Tips & Cultural Notes",
    usageA: isZh
      ? "语境优先：部分词语带有戏谑、调侃或群体内梗的属性，需注意场合与语气。"
      : "Mind context: some terms are playful, ironic or in-group memes; watch tone and setting.",
    usageB: isZh
      ? "尊重差异：不同文化语境下含义可能有所偏移，避免生搬硬套。"
      : "Respect nuance: meanings may shift across cultures; avoid literal misuse.",
    usageC: isZh
      ? "避免刻板：如涉及性别、族群或职业标签，需谨慎使用，避免刻板印象。"
      : "Avoid stereotypes: be careful with gender, group or profession labels.",
    usageD: isZh
      ? "核验来源：快速变化的热词可能语义漂移，使用前可检索最新语境。"
      : "Check sources: slang evolves fast; verify the current sense before use.",
    cardPinyin: isZh ? "拼音" : "Pinyin",
    cardCopy: isZh ? "复制符号" : "Copy Symbol",
  } as const;

  const Section = ({ id, title, items }: { id: string; title: string; items: ChineseSymbol[] }) => (
    <section id={id} className="mb-12">
      <h2 className="font-cyber text-2xl text-tech-red-400 mb-4 flex items-center gap-2">
        <span>◆</span>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((s) => {
          const meaning = s.i18n?.[lang]?.meaning || s.meaning;
          const desc = s.i18n?.[lang]?.description || s.description;
          return (
            <div key={s.id} className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div className="text-3xl font-chinese neon-text">{s.symbol}</div>
                {s.isPopular && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-tech-red-600/30 border border-tech-red-500/50 text-tech-red-200">HOT</span>
                )}
              </div>
              <div className="text-tech-red-300 text-sm mb-1">{T.cardPinyin}: {s.pinyin}</div>
              <div className="text-white font-semibold mb-1">{meaning}</div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.slice(0, 3).map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-tech-red-500/10 border border-tech-red-500/30 text-tech-red-200">#{t}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    <>
      <section id="intro" className="mb-12">
        <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
          <h2 className="font-cyber text-2xl text-white mb-3">{T.overviewTitle}</h2>
          <p className="text-gray-300 leading-relaxed">{T.overviewBody}</p>
        </div>
      </section>

      <Section id="hot-core" title={T.coreHot} items={data.coreHot} />
      <Section id="work-life" title={T.workLife} items={data.workLife} />
      <Section id="ai-tech" title={T.aiTech} items={data.aiTech} />
      <Section id="aesthetics" title={T.aesthetics} items={data.aesthetics} />
      <Section id="economy-climate" title={T.economyClimate} items={data.economyClimate} />
      <Section id="social" title={T.social} items={data.socialPhenomena} />

      <section id="usage" className="mb-8">
        <h2 className="font-cyber text-2xl text-tech-red-400 mb-4 flex items-center gap-2">
          <span>⚙️</span>
          {T.usageTitle}
        </h2>
        <ul className="text-gray-300 space-y-2 bg-tech-gradient border border-tech-red-500/30 rounded-lg p-4">
          <li>• {T.usageA}</li>
          <li>• {T.usageB}</li>
          <li>• {T.usageC}</li>
          <li>• {T.usageD}</li>
        </ul>
      </section>
    </>
  );
}

