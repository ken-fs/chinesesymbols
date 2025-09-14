import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help Documentation | Chinese Symbols - Learn Chinese Characters & Cultural Meanings",
  description: "Comprehensive help documentation for Chinese Symbols platform. Learn about Chinese characters, tattoo design, zodiac animals, five elements theory, and feng shui symbols with cultural context for Western users.",
  keywords: "Chinese symbols, Chinese characters, tattoo design, zodiac animals, five elements, feng shui, Chinese culture, help documentation, cultural meanings",
  openGraph: {
    title: "Help Documentation | Chinese Symbols",
    description: "Learn the meanings and cultural significance of Chinese symbols",
    type: "website",
  },
};

const helpCategories = [
  {
    title: "Symbol Guides",
    description: "Learn about Chinese symbols and their cultural significance",
    icon: "📚",
    items: [
      {
        title: "Chinese Symbols Guide",
        href: "/help/chinese-symbols-guide",
        description: "Complete guide to symbol categories, meanings and cultural background",
        badge: "Essential",
      },
      {
        title: "Tattoo Design Guide", 
        href: "/help/tattoo-design-guide",
        description: "How to choose the right Chinese symbols for tattoo designs",
        badge: "Popular",
      },
      {
        title: "Calligraphy Styles",
        href: "/help/calligraphy-styles",
        description: "Different calligraphy styles and their characteristics",
        badge: "New",
      },
    ],
  },
  {
    title: "Traditional Culture",
    description: "Explore the rich symbol systems in Chinese traditional culture",
    icon: "🏮",
    items: [
      {
        title: "Chinese Zodiac Guide",
        href: "/help/chinese-zodiac-guide", 
        description: "Origins, characteristics and modern applications of zodiac animals",
        badge: "Classic",
      },
      {
        title: "Five Elements Theory",
        href: "/help/five-elements-guide",
        description: "Deep dive into Wu Xing philosophy and elemental relationships",
        badge: "In-depth",
      },
      {
        title: "Feng Shui Symbols",
        href: "/help/feng-shui-symbols",
        description: "Lucky symbols and taboos in traditional feng shui practice",
        badge: "Practical",
      },
    ],
  },
  {
    title: "Usage Guide",
    description: "Detailed instructions for website features and navigation",
    icon: "⚙️", 
    items: [
      {
        title: "How to Use",
        href: "/help/how-to-use",
        description: "Website features introduction and usage tips",
        badge: "Basic",
      },
      {
        title: "Search Tips",
        href: "/help/search-tips",
        description: "How to efficiently search and filter symbols",
        badge: "Tips",
      },
      {
        title: "Customization",
        href: "/help/customization",
        description: "Customize interface and personal preference settings",
        badge: "Personal",
      },
    ],
  },
];

export default function HelpPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Introduction */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-tech-red-600/20 rounded-full flex items-center justify-center border border-tech-red-500/30">
            <span className="text-2xl">📖</span>
          </div>
          <div>
            <h1 className="font-cyber text-4xl text-white mb-2">
              Help Documentation Center
            </h1>
            <p className="text-tech-red-300">Chinese Symbols Platform</p>
          </div>
        </div>
        
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Welcome to the Chinese Symbols Help Documentation Center. Here you can explore the meanings 
          of Chinese characters, their traditional cultural backgrounds, and learn how to apply this 
          ancient wisdom in modern life.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="mb-12">
        <h2 className="font-cyber text-2xl text-tech-red-400 mb-6 flex items-center gap-2">
          <span>🚀</span>
          Quick Start
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/help/chinese-symbols-guide"
            className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg hover:border-tech-red-400/50 hover:shadow-[0_0_20px_rgba(255,59,59,0.2)] transition-all duration-300 group"
          >
            <div className="text-3xl mb-3 group-hover:animate-pulse">🔰</div>
            <h3 className="font-cyber text-white text-lg mb-2 group-hover:text-tech-red-200">
              Beginner's Guide
            </h3>
            <p className="text-gray-400 text-sm">
              Learn Chinese symbols fundamentals from scratch
            </p>
          </Link>

          <Link
            href="/help/tattoo-design-guide"
            className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg hover:border-tech-red-400/50 hover:shadow-[0_0_20px_rgba(255,59,59,0.2)] transition-all duration-300 group"
          >
            <div className="text-3xl mb-3 group-hover:animate-pulse">🎨</div>
            <h3 className="font-cyber text-white text-lg mb-2 group-hover:text-tech-red-200">
              Tattoo Design
            </h3>
            <p className="text-gray-400 text-sm">
              Choose the perfect Chinese symbol tattoos
            </p>
          </Link>

          <Link
            href="/help/chinese-zodiac-guide"
            className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg hover:border-tech-red-400/50 hover:shadow-[0_0_20px_rgba(255,59,59,0.2)] transition-all duration-300 group"
          >
            <div className="text-3xl mb-3 group-hover:animate-pulse">🐲</div>
            <h3 className="font-cyber text-white text-lg mb-2 group-hover:text-tech-red-200">
              Zodiac Culture
            </h3>
            <p className="text-gray-400 text-sm">
              Explore the deep meanings of 12 zodiac animals
            </p>
          </Link>
        </div>
      </div>

      {/* Detailed Categories */}
      <div className="space-y-12">
        {helpCategories.map((category, index) => (
          <section key={index} className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl">{category.icon}</div>
              <div>
                <h2 className="font-cyber text-3xl text-white mb-2">
                  {category.title}
                </h2>
                <p className="text-tech-red-300 text-lg">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={item.href}
                  className="group relative p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg hover:border-tech-red-400/50 hover:shadow-[0_0_20px_rgba(255,59,59,0.2)] transition-all duration-300"
                >
                  {item.badge && (
                    <span className="absolute top-4 right-4 px-2 py-1 bg-tech-red-600/30 border border-tech-red-500/50 rounded text-tech-red-200 text-xs font-cyber">
                      {item.badge}
                    </span>
                  )}
                  
                  <h3 className="font-cyber text-white text-xl mb-3 group-hover:text-tech-red-200 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-tech-red-400 text-sm font-cyber">
                      Read More
                    </span>
                    <span className="text-tech-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Contact Support */}
      <div className="mt-20 text-center">
        <div className="inline-block p-8 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
          <div className="text-4xl mb-4">💡</div>
          <h3 className="font-cyber text-2xl text-white mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-400 mb-6">
            We're happy to provide additional help and support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@chinesesymbols.com"
              className="px-6 py-3 bg-tech-red-600/20 hover:bg-tech-red-600/30 border border-tech-red-500/30 rounded-lg text-tech-red-200 hover:text-white transition-all duration-300 font-cyber text-sm"
            >
              📧 Email Contact
            </a>
            <a
              href="/feedback"
              className="px-6 py-3 bg-tech-red-600/20 hover:bg-tech-red-600/30 border border-tech-red-500/30 rounded-lg text-tech-red-200 hover:text-white transition-all duration-300 font-cyber text-sm"
            >
              💬 Send Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}