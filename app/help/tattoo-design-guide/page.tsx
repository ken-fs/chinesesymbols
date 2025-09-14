import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chinese Tattoo Design Guide - Symbol Selection & Design Tips | Chinese Symbols",
  description: "Professional guide to Chinese symbol tattoos with expert advice on character selection, design principles, font recommendations, placement suggestions, and cultural considerations for meaningful ink.",
  keywords: "Chinese tattoo, Chinese character tattoo, tattoo design, Chinese symbols tattoo, tattoo fonts, tattoo placement, tattoo meanings, Chinese calligraphy tattoo, Asian tattoo design, cultural tattoos",
  openGraph: {
    title: "Chinese Tattoo Design Guide - Expert Symbol Selection",
    description: "Professional guidance on choosing and designing meaningful Chinese symbol tattoos with cultural authenticity",
    type: "article",
  },
  alternates: {
    canonical: "/help/tattoo-design-guide",
  },
};

export default function TattooDesignGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/help" className="hover:text-tech-red-300 transition-colors">
          Help Center
        </Link>
        <span>»</span>
        <span className="text-tech-red-300">Chinese Tattoo Design Guide</span>
      </nav>

      {/* Article Title */}
      <header className="mb-12">
        <h1 className="font-cyber text-4xl text-white mb-4">
          Chinese Tattoo Design Guide
        </h1>
        <p className="text-xl text-tech-red-300 mb-6">
          Expert Advice for Meaningful Chinese Symbol Tattoos
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <span>🎨 Professional Guide</span>
          <span>⏱️ Reading Time: 10 minutes</span>
          <span>📅 Updated: September 2024</span>
        </div>
      </header>

      {/* Important Notice */}
      <div className="mb-12 p-6 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/50 rounded-lg">
        <h2 className="font-cyber text-xl text-yellow-300 mb-4 flex items-center gap-2">
          <span>⚠️</span>
          Important Notice
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Getting a tattoo is a lifelong decision, and choosing Chinese symbols requires extra care. 
          This guide will help you understand how to properly select, design, and execute Chinese symbol 
          tattoos while avoiding common mistakes.
        </p>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>• Deeply understand the true meaning and cultural background of symbols</li>
          <li>• Choose professional tattoo artists familiar with Chinese culture</li>
          <li>• Allow yourself adequate time for consideration and preparation</li>
          <li>• Consider the tattoo's appropriateness across different life stages</li>
        </ul>
      </div>

      {/* Table of Contents */}
      <div className="mb-12 p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
        <h2 className="font-cyber text-xl text-white mb-4 flex items-center gap-2">
          <span>📋</span>
          Table of Contents
        </h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#symbol-selection" className="text-tech-red-300 hover:text-tech-red-200 transition-colors">1. Symbol Selection Principles</a></li>
          <li><a href="#popular-symbols" className="text-tech-red-300 hover:text-tech-red-200 transition-colors">2. Popular Tattoo Symbols</a></li>
          <li><a href="#design-principles" className="text-tech-red-300 hover:text-tech-red-200 transition-colors">3. Design Principles & Typography</a></li>
          <li><a href="#placement-guide" className="text-tech-red-300 hover:text-tech-red-200 transition-colors">4. Placement Guide</a></li>
          <li><a href="#artist-selection" className="text-tech-red-300 hover:text-tech-red-200 transition-colors">5. Artist Selection</a></li>
          <li><a href="#aftercare" className="text-tech-red-300 hover:text-tech-red-200 transition-colors">6. Care & Maintenance</a></li>
        </ul>
      </div>

      <article className="prose prose-invert max-w-none">
        {/* 1. Symbol Selection Principles */}
        <section id="symbol-selection" className="mb-16">
          <h2 className="font-cyber text-3xl text-tech-red-400 mb-6 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            Symbol Selection Principles
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                <h3 className="text-xl text-tech-red-300 mb-4 flex items-center gap-2">
                  💝 Personal Meaning First
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Choose symbols that hold deep personal significance. Such tattoos will accompany you 
                  for life, providing strength and inspiration at different life stages.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Symbols reflecting personal values</li>
                  <li>• Characters related to important life experiences</li>
                  <li>• Symbols representing life goals or aspirations</li>
                  <li>• Characters commemorating important people or events</li>
                </ul>
              </div>

              <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                <h3 className="text-xl text-tech-red-300 mb-4 flex items-center gap-2">
                  📚 Cultural Accuracy
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Ensure the chosen symbols have accurate meanings, avoiding misunderstandings or 
                  inappropriate usage. Deeply understand the history, cultural background, and 
                  multiple meanings of symbols.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Verify with authoritative dictionaries and cultural sources</li>
                  <li>• Understand the historical evolution of symbols</li>
                  <li>• Avoid potential negative meanings</li>
                  <li>• Consider meanings in different contexts</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                <h3 className="text-xl text-tech-red-300 mb-4 flex items-center gap-2">
                  🎨 Visual Aesthetics
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Beyond meaning, the visual effect of symbols is important. Consider character 
                  structure, stroke complexity, and overall beauty.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Whether the character structure is balanced and beautiful</li>
                  <li>• If stroke count is suitable for tattooing</li>
                  <li>• Clarity at different sizes</li>
                  <li>• Harmony with body parts</li>
                </ul>
              </div>

              <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                <h3 className="text-xl text-tech-red-300 mb-4 flex items-center gap-2">
                  ⏰ Test of Time
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Choose classic symbols that won't easily go out of style. Consider whether 
                  you'll still love this choice in ten or twenty years.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Avoid overly trendy or fashionable choices</li>
                  <li>• Select symbols with deep cultural heritage</li>
                  <li>• Consider appropriateness across different life stages</li>
                  <li>• Seek opinions from trusted friends and family</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Popular Tattoo Symbols */}
        <section id="popular-symbols" className="mb-16">
          <h2 className="font-cyber text-3xl text-tech-red-400 mb-6 flex items-center gap-3">
            <span className="text-4xl">🌟</span>
            Popular Tattoo Symbols
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            Based on global tattoo trends and cultural significance, here are the most popular 
            and meaningful Chinese tattoo symbols:
          </p>

          <div className="space-y-8">
            {/* Classic Single Characters */}
            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-2xl text-white mb-6 flex items-center gap-2">
                <span className="text-3xl">💎</span>
                Classic Single Characters
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 border border-tech-red-500/20 rounded-lg">
                  <div className="text-center mb-3">
                    <span className="text-4xl text-tech-red-300 font-bold">爱</span>
                  </div>
                  <h4 className="text-lg text-white mb-2 text-center">爱 (ài)</h4>
                  <p className="text-sm text-gray-400 text-center mb-3">Love</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    One of the most popular tattoo symbols, representing deep love and emotional bonds. 
                    Perfect for couple tattoos or expressing love for life.
                  </p>
                </div>

                <div className="p-4 border border-tech-red-500/20 rounded-lg">
                  <div className="text-center mb-3">
                    <span className="text-4xl text-tech-red-300 font-bold">勇</span>
                  </div>
                  <h4 className="text-lg text-white mb-2 text-center">勇 (yǒng)</h4>
                  <p className="text-sm text-gray-400 text-center mb-3">Courage</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Symbolizes courage and fearless spirit, inspiring strength in the face of difficulties. 
                    A popular choice for masculine tattoos.
                  </p>
                </div>

                <div className="p-4 border border-tech-red-500/20 rounded-lg">
                  <div className="text-center mb-3">
                    <span className="text-4xl text-tech-red-300 font-bold">禅</span>
                  </div>
                  <h4 className="text-lg text-white mb-2 text-center">禅 (chán)</h4>
                  <p className="text-sm text-gray-400 text-center mb-3">Zen</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Represents inner peace and spiritual pursuit, embodying understanding of Eastern philosophy. 
                    Beloved by those seeking spiritual growth.
                  </p>
                </div>

                <div className="p-4 border border-tech-red-500/20 rounded-lg">
                  <div className="text-center mb-3">
                    <span className="text-4xl text-tech-red-300 font-bold">龙</span>
                  </div>
                  <h4 className="text-lg text-white mb-2 text-center">龙 (lóng)</h4>
                  <p className="text-sm text-gray-400 text-center mb-3">Dragon</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Symbol of Chinese culture, representing power, wisdom, and good fortune. 
                    Suitable for large tattoo designs with strong visual impact.
                  </p>
                </div>

                <div className="p-4 border border-tech-red-500/20 rounded-lg">
                  <div className="text-center mb-3">
                    <span className="text-4xl text-tech-red-300 font-bold">福</span>
                  </div>
                  <h4 className="text-lg text-white mb-2 text-center">福 (fú)</h4>
                  <p className="text-sm text-gray-400 text-center mb-3">Fortune</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Traditional auspicious symbol meaning happiness and good luck. 
                    Often used to pray for family harmony and career success.
                  </p>
                </div>

                <div className="p-4 border border-tech-red-500/20 rounded-lg">
                  <div className="text-center mb-3">
                    <span className="text-4xl text-tech-red-300 font-bold">梦</span>
                  </div>
                  <h4 className="text-lg text-white mb-2 text-center">梦 (mèng)</h4>
                  <p className="text-sm text-gray-400 text-center mb-3">Dream</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Represents ideals and aspirations, inspiring determination to pursue dreams. 
                    A modern tattoo choice popular among young people.
                  </p>
                </div>
              </div>
            </div>

            {/* Combination Symbols */}
            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-2xl text-white mb-6 flex items-center gap-2">
                <span className="text-3xl">🎭</span>
                Classic Combination Symbols
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-4 border border-tech-red-500/20 rounded-lg">
                  <div className="text-center mb-3">
                    <span className="text-3xl text-tech-red-300 font-bold">囍</span>
                  </div>
                  <h4 className="text-lg text-white mb-2 text-center">双喜 (shuāng xǐ)</h4>
                  <p className="text-sm text-gray-400 text-center mb-3">Double Happiness</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Traditional wedding symbol representing marital bliss and happiness. 
                    Perfect choice for couple or spouse tattoos, symbolizing eternal love.
                  </p>
                </div>

                <div className="p-4 border border-tech-red-500/20 rounded-lg">
                  <div className="text-center mb-3">
                    <span className="text-2xl text-tech-red-300 font-bold">阴阳</span>
                  </div>
                  <h4 className="text-lg text-white mb-2 text-center">阴阳 (yīn yáng)</h4>
                  <p className="text-sm text-gray-400 text-center mb-3">Yin Yang Balance</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Represents universal balance and harmony, embodying the philosophy of unity of opposites. 
                    Often combined with Tai Chi patterns for complete designs.
                  </p>
                </div>
              </div>
            </div>

            {/* Zodiac Symbols */}
            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-2xl text-white mb-6 flex items-center gap-2">
                <span className="text-3xl">🐲</span>
                Zodiac Tattoo Symbols
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Choose zodiac animals based on birth year for personal commemorative meaning 
                while carrying the beautiful implications of traditional culture:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { symbol: "鼠", pinyin: "shǔ", meaning: "Wit & Agility" },
                  { symbol: "牛", pinyin: "niú", meaning: "Diligent & Reliable" },
                  { symbol: "虎", pinyin: "hǔ", meaning: "Brave & Mighty" },
                  { symbol: "兔", pinyin: "tù", meaning: "Gentle & Kind" },
                  { symbol: "龙", pinyin: "lóng", meaning: "Authority & Honor" },
                  { symbol: "蛇", pinyin: "shé", meaning: "Wisdom & Mystery" },
                  { symbol: "马", pinyin: "mǎ", meaning: "Freedom & Spirit" },
                  { symbol: "羊", pinyin: "yáng", meaning: "Gentle & Peaceful" },
                  { symbol: "猴", pinyin: "hóu", meaning: "Smart & Clever" },
                  { symbol: "鸡", pinyin: "jī", meaning: "Diligent & Punctual" },
                  { symbol: "狗", pinyin: "gǒu", meaning: "Loyal & Honest" },
                  { symbol: "猪", pinyin: "zhū", meaning: "Generous & Hardworking" },
                ].map((item, index) => (
                  <div key={index} className="p-3 border border-tech-red-500/20 rounded text-center">
                    <div className="text-2xl text-tech-red-300 mb-2">{item.symbol}</div>
                    <div className="text-xs text-gray-400 mb-1">{item.pinyin}</div>
                    <div className="text-xs text-gray-500">{item.meaning}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Design Principles & Typography */}
        <section id="design-principles" className="mb-16">
          <h2 className="font-cyber text-3xl text-tech-red-400 mb-6 flex items-center gap-3">
            <span className="text-4xl">🎨</span>
            Design Principles & Typography
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl text-white mb-4">Design Principles</h3>
              <div className="space-y-4">
                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2">1. Clean & Clear</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Avoid overly complex character forms to ensure clear recognition after tattooing. 
                    Complex strokes can become blurry at small sizes.
                  </p>
                </div>

                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2">2. Proportional Balance</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Font proportions should match the tattoo location, considering natural body curves 
                    and muscle contours.
                  </p>
                </div>

                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2">3. Lasting Beauty</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Consider the visual effect of tattoos over time with skin changes. 
                    Choose designs that stand the test of time.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl text-white mb-4">Recommended Typography Styles</h3>
              <div className="space-y-4">
                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2">Regular Script (Kaishu)</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Neat and standardized with clear strokes - the safest choice. 
                    Suitable for those trying Chinese tattoos for the first time.
                  </p>
                </div>

                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2">Running Script (Xingshu)</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Flowing and natural with artistic appeal, but ensure your tattoo artist 
                    has sufficient technical skill.
                  </p>
                </div>

                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2">Seal Script (Zhuanshu)</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Ancient and dignified with traditional cultural charm, suitable for designs 
                    pursuing classical beauty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-900/20 to-tech-red-900/20 border border-blue-500/50 rounded-lg">
            <h3 className="text-xl text-blue-300 mb-4 flex items-center gap-2">
              <span>💡</span>
              Professional Tips
            </h3>
            <ul className="text-gray-300 space-y-2 leading-relaxed">
              <li>• <strong>Font Testing</strong>: Before finalizing the design, test the effect with temporary tattoo stickers or drawing on skin</li>
              <li>• <strong>Size Considerations</strong>: Generally recommend minimum 2-3cm size for single Chinese characters to ensure clear details</li>
              <li>• <strong>Color Choice</strong>: Black is most classic and durable; colored tattoos require more maintenance and fade easier</li>
              <li>• <strong>Design Archive</strong>: Keep the final design for future touch-ups or color restoration</li>
            </ul>
          </div>
        </section>

        {/* 4. Placement Guide */}
        <section id="placement-guide" className="mb-16">
          <h2 className="font-cyber text-3xl text-tech-red-400 mb-6 flex items-center gap-3">
            <span className="text-4xl">📍</span>
            Placement Guide
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            Tattoo placement affects not only visual impact but also career development, social acceptance, 
            and personal comfort. Here's detailed analysis of various body areas:
          </p>

          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                <h3 className="text-xl text-tech-red-300 mb-4 flex items-center gap-2">
                  💪 Arm Areas
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white mb-2">Upper Arm Outer</h4>
                    <p className="text-sm text-gray-400 mb-2">
                      Most popular location with moderate pain, easy to conceal and display. 
                      Suitable for medium-sized single characters or small combination designs.
                    </p>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded">Pain: Low</span>
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded">Career Friendly</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Forearm</h4>
                    <p className="text-sm text-gray-400 mb-2">
                      Great visual effect but harder to conceal. Suitable for career environments 
                      with high tattoo acceptance.
                    </p>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded">Pain: Medium</span>
                      <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded">Visible Location</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                <h3 className="text-xl text-tech-red-300 mb-4 flex items-center gap-2">
                  🦵 Leg Areas
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white mb-2">Outer Thigh</h4>
                    <p className="text-sm text-gray-400 mb-2">
                      Large area suitable for bigger designs. Low pain level, 
                      easy to conceal - a conservative choice.
                    </p>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded">Pain: Low</span>
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded">Easy to Hide</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Calf</h4>
                    <p className="text-sm text-gray-400 mb-2">
                      Good display effect but bone is closer to surface, 
                      resulting in higher pain level.
                    </p>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded">Pain: High</span>
                      <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded">Good Display</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                <h3 className="text-xl text-tech-red-300 mb-4 flex items-center gap-2">
                  🫀 Chest & Back Areas
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white mb-2">Shoulder Blade Area</h4>
                    <p className="text-sm text-gray-400 mb-2">
                      Classic location with profound symbolic meaning. Suitable for symbols of great importance, 
                      but pain level is high.
                    </p>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded">Pain: High</span>
                      <span className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded">Symbolic</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Chest</h4>
                    <p className="text-sm text-gray-400 mb-2">
                      Close to heart with profound meaning. But pain level is very high - 
                      requires careful consideration.
                    </p>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 bg-red-900/30 text-red-200 rounded">Pain: Very High</span>
                      <span className="px-2 py-1 bg-gold-600/20 text-yellow-300 rounded">Significant</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                <h3 className="text-xl text-tech-red-300 mb-4 flex items-center gap-2">
                  ✋ Special Areas
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white mb-2">Inner Wrist</h4>
                    <p className="text-sm text-gray-400 mb-2">
                      Small and delicate, suitable for simple symbols. But has many career restrictions 
                      with medium pain level.
                    </p>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 rounded">Pain: Medium</span>
                      <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded">Career Limits</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Back of Neck</h4>
                    <p className="text-sm text-gray-400 mb-2">
                      Very visible, suitable for bold expression. High pain level 
                      with low social acceptance.
                    </p>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 bg-red-600/20 text-red-300 rounded">Pain: High</span>
                      <span className="px-2 py-1 bg-red-900/30 text-red-200 rounded">Extremely Visible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Artist Selection */}
        <section id="artist-selection" className="mb-16">
          <h2 className="font-cyber text-3xl text-tech-red-400 mb-6 flex items-center gap-3">
            <span className="text-4xl">👨‍🎨</span>
            Artist Selection
          </h2>

          <div className="p-6 bg-gradient-to-r from-orange-900/20 to-tech-red-900/20 border border-orange-500/50 rounded-lg mb-8">
            <h3 className="text-xl text-orange-300 mb-4 flex items-center gap-2">
              <span>🎯</span>
              Why Choosing a Professional Artist Matters
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Chinese tattoos require higher technical skills. Wrong strokes, inaccurate character forms, 
              or cultural misunderstandings can lead to lifelong regrets. Choosing professional tattoo artists 
              who understand Chinese culture is crucial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl text-white mb-4">Selection Criteria</h3>
              <div className="space-y-4">
                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2 flex items-center gap-2">
                    ✅ Cultural Understanding
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Artists should understand the cultural connotations of Chinese symbols, accurately 
                    comprehend client needs, and avoid cultural misunderstandings.
                  </p>
                </div>

                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2 flex items-center gap-2">
                    ✅ Technical Skill
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Possess fine line work abilities to accurately reproduce Chinese character stroke features, 
                    ensuring beautiful and accurate character forms.
                  </p>
                </div>

                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2 flex items-center gap-2">
                    ✅ Portfolio Examples
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Review the artist's Chinese tattoo portfolio to evaluate their technical level and 
                    grasp of Chinese character forms.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl text-white mb-4">Communication Points</h3>
              <div className="space-y-4">
                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2">1. Symbol Meaning Confirmation</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Explain in detail the meaning and personal significance of chosen symbols, ensuring 
                    the artist fully understands the design intent.
                  </p>
                </div>

                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2">2. Typography Style Discussion</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Discuss characteristics of different typography styles with the artist, choosing the style 
                    most suitable for your temperament and tattoo location.
                  </p>
                </div>

                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2">3. Design Confirmation</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Request detailed design sketches from the artist, including precise character forms, 
                    sizes, and placement arrangements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Care & Maintenance */}
        <section id="aftercare" className="mb-16">
          <h2 className="font-cyber text-3xl text-tech-red-400 mb-6 flex items-center gap-3">
            <span className="text-4xl">🏥</span>
            Care & Maintenance
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl text-white mb-4">Initial Care (1-2 weeks)</h3>
              <div className="space-y-4">
                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2">Cleaning & Protection</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Follow artist's cleaning instructions</li>
                    <li>• Use fragrance-free gentle soap</li>
                    <li>• Avoid soaking in water</li>
                    <li>• Keep tattoo area dry and ventilated</li>
                  </ul>
                </div>

                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2">Precautions</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Avoid direct sunlight exposure</li>
                    <li>• Don't pick at scabs</li>
                    <li>• Avoid intense exercise</li>
                    <li>• Wear loose, breathable clothing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl text-white mb-4">Long-term Maintenance</h3>
              <div className="space-y-4">
                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2">Daily Care</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Apply moisturizer regularly</li>
                    <li>• Use SPF50+ sunscreen</li>
                    <li>• Maintain healthy skin condition</li>
                    <li>• Avoid excessive friction</li>
                  </ul>
                </div>

                <div className="p-4 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                  <h4 className="text-lg text-tech-red-300 mb-2">Regular Maintenance</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Check color condition every 3-5 years</li>
                    <li>• Touch up when necessary</li>
                    <li>• Consult professional tattoo artists</li>
                    <li>• Document tattoo changes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-green-900/20 to-tech-red-900/20 border border-green-500/50 rounded-lg">
            <h3 className="text-xl text-green-300 mb-4 flex items-center gap-2">
              <span>🌟</span>
              Secrets to Maintaining Tattoo Beauty
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <h4 className="text-green-200 mb-2">Lifestyle Habits</h4>
                <ul className="space-y-1">
                  <li>• Maintain healthy sleep schedule</li>
                  <li>• Balanced diet with antioxidant-rich foods</li>
                  <li>• Moderate exercise to maintain skin elasticity</li>
                  <li>• Avoid smoking and excessive alcohol</li>
                </ul>
              </div>
              <div>
                <h4 className="text-green-200 mb-2">Professional Care</h4>
                <ul className="space-y-1">
                  <li>• Use professional tattoo care products regularly</li>
                  <li>• Monitor skin changes and address issues promptly</li>
                  <li>• Maintain contact with your tattoo artist</li>
                  <li>• Consider professional laser care treatments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center py-12 border-t border-tech-red-500/30">
          <h2 className="font-cyber text-2xl text-white mb-4">Begin Your Tattoo Journey</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Chinese tattoos are a form of artistic expression rich in cultural connotations. Each symbol carries 
            abundant history and emotion. Choose carefully, execute professionally, and care devotedly - let this 
            ancient wisdom shine brilliantly in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-tech-red-600/20 hover:bg-tech-red-600/30 border border-tech-red-500/30 rounded-lg text-tech-red-200 hover:text-white transition-all duration-300 font-cyber"
            >
              Browse Tattoo Symbols
            </Link>
            <Link
              href="/help/chinese-symbols-guide"
              className="px-8 py-3 bg-tech-gradient border border-tech-red-500/30 hover:border-tech-red-400/50 rounded-lg text-white hover:text-tech-red-200 transition-all duration-300 font-cyber"
            >
              Symbol Culture Guide
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}