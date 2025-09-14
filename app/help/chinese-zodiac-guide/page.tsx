import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "十二生肖详解 - 中国传统生肖文化与符号含义 | Chinese Symbols",
  description: "深入解读十二生肖文化，详细介绍鼠牛虎兔龙蛇马羊猴鸡狗猪的性格特征、文化寓意和现代应用。了解生肖符号的深层含义。",
  keywords: "十二生肖,中国生肖,生肖文化,生肖含义,鼠牛虎兔龙蛇马羊猴鸡狗猪,生肖性格,生肖纹身,Chinese zodiac",
  openGraph: {
    title: "十二生肖详解 - 中国传统生肖文化与符号含义",
    description: "探索十二生肖的深层文化内涵和现代意义",
    type: "article",
  },
  alternates: {
    canonical: "/help/chinese-zodiac-guide",
  },
};

export default function ChineseZodiacGuidePage() {
  const zodiacAnimals = [
    {
      symbol: "鼠",
      pinyin: "shǔ",
      english: "Rat",
      years: "1948, 1960, 1972, 1984, 1996, 2008, 2020",
      personality: "机智灵敏、适应力强、勤劳节俭",
      strengths: ["聪明机智", "适应能力强", "勤奋努力", "善于理财"],
      weaknesses: ["过于谨慎", "有时小气", "缺乏勇气"],
      lucky: { numbers: "2, 3", colors: "蓝色、金色", flowers: "百合花、紫罗兰" },
      description: "生肖鼠排在十二生肖之首，象征着智慧和灵活。鼠年出生的人通常头脑敏锐，善于观察，具有很强的适应能力。"
    },
    {
      symbol: "牛",
      pinyin: "niú", 
      english: "Ox",
      years: "1949, 1961, 1973, 1985, 1997, 2009, 2021",
      personality: "勤劳可靠、踏实稳重、有耐心",
      strengths: ["踏实可靠", "勤奋努力", "有耐心", "责任心强"],
      weaknesses: ["固执己见", "不够灵活", "保守传统"],
      lucky: { numbers: "1, 9", colors: "红色、橙色", flowers: "郁金香、万寿花" },
      description: "牛象征着勤劳和力量。牛年出生的人性格踏实，做事认真负责，是值得信赖的伙伴。"
    },
    {
      symbol: "虎",
      pinyin: "hǔ",
      english: "Tiger", 
      years: "1950, 1962, 1974, 1986, 1998, 2010, 2022",
      personality: "勇敢自信、有领导力、富有正义感",
      strengths: ["勇敢果断", "有魅力", "正义感强", "天生领导者"],
      weaknesses: ["冲动鲁莽", "过于自信", "难以接受失败"],
      lucky: { numbers: "1, 3, 4", colors: "蓝色、灰色", flowers: "富贵花、菊花" },
      description: "虎被誉为百兽之王，象征着勇气和权威。虎年出生的人通常性格强势，具有天然的领导魅力。"
    },
    {
      symbol: "兔",
      pinyin: "tù",
      english: "Rabbit",
      years: "1951, 1963, 1975, 1987, 1999, 2011, 2023",
      personality: "温和善良、细心体贴、追求和谐",
      strengths: ["温文尔雅", "善解人意", "艺术天赋", "人际关系好"],
      weaknesses: ["过于敏感", "缺乏决断力", "容易焦虑"],
      lucky: { numbers: "3, 4, 6", colors: "红色、粉色", flowers: "玉簪花、茉莉花" },
      description: "兔子象征着温柔和智慧。兔年出生的人性格温和，具有很好的人际交往能力和艺术修养。"
    },
    {
      symbol: "龙",
      pinyin: "lóng",
      english: "Dragon",
      years: "1952, 1964, 1976, 1988, 2000, 2012, 2024",
      personality: "自信霸气、富有创造力、追求完美",
      strengths: ["自信大方", "创造力强", "有远大抱负", "天生贵气"],
      weaknesses: ["过于骄傲", "要求过高", "不够耐心"],
      lucky: { numbers: "1, 6, 7", colors: "金色、银色", flowers: "龙吐珠、鸡冠花" },
      description: "龙是中华民族的图腾，象征着权威和吉祥。龙年出生的人通常气质不凡，具有强烈的事业心。"
    },
    {
      symbol: "蛇",
      pinyin: "shé",
      english: "Snake",
      years: "1953, 1965, 1977, 1989, 2001, 2013, 2025",
      personality: "智慧深沉、直觉敏锐、神秘优雅",
      strengths: ["智慧深邃", "直觉准确", "优雅神秘", "财运较好"],
      weaknesses: ["多疑善妒", "报复心强", "不够开放"],
      lucky: { numbers: "2, 8, 9", colors: "红色、黄色", flowers: "兰花、仙人掌花" },
      description: "蛇象征着智慧和神秘。蛇年出生的人通常心思缜密，具有很强的直觉和洞察力。"
    },
    {
      symbol: "马",
      pinyin: "mǎ",
      english: "Horse",
      years: "1954, 1966, 1978, 1990, 2002, 2014, 2026",
      personality: "自由奔放、热情开朗、行动力强",
      strengths: ["热情开朗", "行动力强", "适应性好", "沟通能力强"],
      weaknesses: ["缺乏耐性", "做事冲动", "不够专一"],
      lucky: { numbers: "2, 3, 7", colors: "棕色、黄色", flowers: "海芋、茉莉" },
      description: "马象征着自由和活力。马年出生的人性格开朗，喜欢自由，具有很强的行动力。"
    },
    {
      symbol: "羊",
      pinyin: "yáng",
      english: "Goat",
      years: "1955, 1967, 1979, 1991, 2003, 2015, 2027",
      personality: "温柔善良、富有同情心、艺术天赋",
      strengths: ["温柔体贴", "富有同情心", "艺术天赋", "团队合作好"],
      weaknesses: ["过于依赖", "缺乏主见", "容易悲观"],
      lucky: { numbers: "3, 9, 4", colors: "绿色、红色", flowers: "康乃馨、樱花" },
      description: "羊象征着和平和善良。羊年出生的人性格温和，具有强烈的同情心和艺术天赋。"
    },
    {
      symbol: "猴",
      pinyin: "hóu",
      english: "Monkey",
      years: "1956, 1968, 1980, 1992, 2004, 2016, 2028",
      personality: "聪明机灵、活泼好动、创新能力强",
      strengths: ["聪明伶俐", "适应能力强", "幽默风趣", "创新思维"],
      weaknesses: ["浮躁不安", "缺乏耐心", "有时狡猾"],
      lucky: { numbers: "1, 7, 8", colors: "白色、蓝色", flowers: "菊花、葱花" },
      description: "猴象征着智慧和机敏。猴年出生的人头脑聪明，反应敏捷，具有很强的创新能力。"
    },
    {
      symbol: "鸡",
      pinyin: "jī",
      english: "Rooster",
      years: "1957, 1969, 1981, 1993, 2005, 2017, 2029",
      personality: "勤奋准时、注重细节、有责任心",
      strengths: ["勤奋努力", "准时守信", "注重细节", "有组织能力"],
      weaknesses: ["过于挑剔", "爱出风头", "有时固执"],
      lucky: { numbers: "5, 7, 8", colors: "金色、棕色", flowers: "剑兰、凤仙花" },
      description: "鸡象征着勤劳和准时。鸡年出生的人做事认真，时间观念强，具有很好的组织能力。"
    },
    {
      symbol: "狗",
      pinyin: "gǒu",
      english: "Dog",
      years: "1958, 1970, 1982, 1994, 2006, 2018, 2030",
      personality: "忠诚可靠、正义感强、保护意识强",
      strengths: ["忠诚可靠", "正义感强", "责任心重", "善于保护他人"],
      weaknesses: ["过于担心", "有时悲观", "不够自信"],
      lucky: { numbers: "3, 4, 9", colors: "绿色、红色", flowers: "玫瑰、文心兰" },
      description: "狗象征着忠诚和可靠。狗年出生的人性格诚实，具有强烈的正义感和责任心。"
    },
    {
      symbol: "猪",
      pinyin: "zhū",
      english: "Pig",
      years: "1959, 1971, 1983, 1995, 2007, 2019, 2031",
      personality: "慷慨善良、乐观开朗、享受生活",
      strengths: ["慷慨大方", "乐观开朗", "善良真诚", "享受生活"],
      weaknesses: ["过于天真", "缺乏警觉", "有时懒惰"],
      lucky: { numbers: "2, 5, 8", colors: "黄色、灰色", flowers: "绣球花、美人蕉" },
      description: "猪象征着财富和幸福。猪年出生的人性格开朗，心地善良，具有很好的财运。"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* 面包屑导航 */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/help" className="hover:text-tech-red-300 transition-colors">
          帮助中心
        </Link>
        <span>»</span>
        <span className="text-tech-red-300">十二生肖详解</span>
      </nav>

      {/* 文章标题 */}
      <header className="mb-12 text-center">
        <h1 className="font-cyber text-4xl text-white mb-4">
          十二生肖详解
        </h1>
        <p className="text-xl text-tech-red-300 mb-6">
          Chinese Zodiac Comprehensive Guide
        </p>
        <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
          <span>🐲 传统文化</span>
          <span>⏱️ 阅读时间：15分钟</span>
          <span>📅 更新时间：2024年9月</span>
        </div>
      </header>

      <article className="prose prose-invert max-w-none">
        {/* 简介 */}
        <section className="mb-16">
          <div className="p-8 bg-tech-gradient border border-tech-red-500/30 rounded-lg text-center">
            <h2 className="font-cyber text-3xl text-tech-red-400 mb-6">
              中华文化瑰宝 - 十二生肖
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
              十二生肖是中华民族独有的文化符号，源自古代对天象和动物的观察与崇拜。
              每个生肖都承载着丰富的文化内涵，反映了中国人对自然、社会和人性的深刻理解。
              通过了解生肖文化，我们可以更好地认识中华传统文化的智慧和魅力。
            </p>
          </div>
        </section>

        {/* 十二生肖详解 */}
        <section className="mb-16">
          <h2 className="font-cyber text-3xl text-tech-red-400 mb-8 text-center">
            十二生肖详细解读
          </h2>

          <div className="space-y-12">
            {zodiacAnimals.map((animal, index) => (
              <div key={index} className="p-8 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* 左侧：符号和基本信息 */}
                  <div className="text-center lg:text-left">
                    <div className="text-8xl text-tech-red-300 mb-4 font-bold">
                      {animal.symbol}
                    </div>
                    <h3 className="text-2xl font-cyber text-white mb-2">
                      {animal.english} • {animal.pinyin}
                    </h3>
                    <p className="text-tech-red-300 mb-4">
                      第{index + 1}位生肖
                    </p>
                    <div className="text-sm text-gray-400">
                      <p><strong className="text-white">出生年份：</strong></p>
                      <p className="leading-relaxed">{animal.years}</p>
                    </div>
                  </div>

                  {/* 中间：性格特征 */}
                  <div>
                    <h4 className="text-xl text-tech-red-300 mb-4">性格特征</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {animal.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-lg text-white mb-2">优点</h5>
                        <ul className="text-sm text-gray-400 space-y-1">
                          {animal.strengths.map((strength, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-green-400">•</span>
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-lg text-white mb-2">需要改进</h5>
                        <ul className="text-sm text-gray-400 space-y-1">
                          {animal.weaknesses.map((weakness, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-yellow-400">•</span>
                              {weakness}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 右侧：幸运元素 */}
                  <div>
                    <h4 className="text-xl text-tech-red-300 mb-4">幸运元素</h4>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-tech-red-600/10 border border-tech-red-500/20 rounded-lg">
                        <h5 className="text-white mb-2 flex items-center gap-2">
                          <span>🔢</span>
                          幸运数字
                        </h5>
                        <p className="text-tech-red-300 text-lg font-bold">
                          {animal.lucky.numbers}
                        </p>
                      </div>
                      
                      <div className="p-4 bg-tech-red-600/10 border border-tech-red-500/20 rounded-lg">
                        <h5 className="text-white mb-2 flex items-center gap-2">
                          <span>🎨</span>
                          幸运色彩
                        </h5>
                        <p className="text-tech-red-300">
                          {animal.lucky.colors}
                        </p>
                      </div>
                      
                      <div className="p-4 bg-tech-red-600/10 border border-tech-red-500/20 rounded-lg">
                        <h5 className="text-white mb-2 flex items-center gap-2">
                          <span>🌸</span>
                          幸运花卉
                        </h5>
                        <p className="text-tech-red-300">
                          {animal.lucky.flowers}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 生肖文化价值 */}
        <section className="mb-16">
          <h2 className="font-cyber text-3xl text-tech-red-400 mb-8 text-center">
            生肖文化的现代价值
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-xl text-tech-red-300 mb-4 flex items-center gap-2">
                <span className="text-3xl">🎨</span>
                艺术设计
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                生肖符号在现代设计中广泛应用，从Logo设计到装饰艺术，
                为作品注入深厚的文化内涵。
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• 品牌标识设计</li>
                <li>• 节庆装饰元素</li>
                <li>• 工艺品制作</li>
                <li>• 时尚服装设计</li>
              </ul>
            </div>

            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-xl text-tech-red-300 mb-4 flex items-center gap-2">
                <span className="text-3xl">💉</span>
                纹身艺术
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                生肖纹身是最受欢迎的中文纹身主题之一，代表个人的
                出生年份和性格特征。
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• 个人生肖纹身</li>
                <li>• 传统生肖图案</li>
                <li>• 现代简约风格</li>
                <li>• 组合设计创新</li>
              </ul>
            </div>

            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-xl text-tech-red-300 mb-4 flex items-center gap-2">
                <span className="text-3xl">🎁</span>
                文化传承
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                通过了解生肖文化，传承和弘扬中华优秀传统文化，
                增强文化自信。
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• 文化教育传播</li>
                <li>• 国际文化交流</li>
                <li>• 节日庆典活动</li>
                <li>• 家庭文化传承</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 选择建议 */}
        <section className="mb-16">
          <h2 className="font-cyber text-3xl text-tech-red-400 mb-8 text-center">
            如何选择适合的生肖符号
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-xl text-white mb-4">个人生肖选择</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                选择自己的生肖符号是最直接的方式，代表个人的出生年份和性格特征，
                具有独特的纪念意义。
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• <strong className="text-white">个人纪念</strong>：代表出生年份的特殊意义</li>
                <li>• <strong className="text-white">性格映射</strong>：符号特征与个人性格的契合</li>
                <li>• <strong className="text-white">文化认同</strong>：对传统文化的认同和传承</li>
                <li>• <strong className="text-white">吉祥寓意</strong>：生肖带来的好运和祝福</li>
              </ul>
            </div>

            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-xl text-white mb-4">寓意导向选择</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                根据生肖的象征意义选择，不一定要是自己的生肖，而是选择
                符合个人追求和期望的生肖符号。
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• <strong className="text-white">龙</strong>：追求权威和成功的人</li>
                <li>• <strong className="text-white">虎</strong>：希望展现勇气和力量</li>
                <li>• <strong className="text-white">兔</strong>：追求和谐和艺术美感</li>
                <li>• <strong className="text-white">马</strong>：向往自由和活力的生活</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-tech-red-900/20 border border-green-500/50 rounded-lg">
            <h3 className="text-xl text-green-300 mb-4 flex items-center gap-2">
              <span>💡</span>
              专业建议
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <h4 className="text-green-200 mb-2">纹身应用</h4>
                <ul className="space-y-1">
                  <li>• 考虑生肖符号的视觉复杂度</li>
                  <li>• 选择适合的艺术风格表现</li>
                  <li>• 可与其他元素组合设计</li>
                  <li>• 注意文化准确性和尊重</li>
                </ul>
              </div>
              <div>
                <h4 className="text-green-200 mb-2">设计应用</h4>
                <ul className="space-y-1">
                  <li>• 了解目标受众的文化背景</li>
                  <li>• 保持传统特色与现代美感平衡</li>
                  <li>• 注意色彩搭配的吉祥寓意</li>
                  <li>• 考虑不同场合的适用性</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 结语 */}
        <section className="text-center py-12 border-t border-tech-red-500/30">
          <h2 className="font-cyber text-2xl text-white mb-4">传承千年智慧，续写文化新章</h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            十二生肖不仅是时间的标记，更是中华民族智慧的结晶。每个生肖都承载着
            深厚的文化内涵和人生哲理。选择您的生肖符号，让这些古老的智慧在现代生活中
            继续发光发热，成为您人生旅程中的精神伙伴。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-tech-red-600/20 hover:bg-tech-red-600/30 border border-tech-red-500/30 rounded-lg text-tech-red-200 hover:text-white transition-all duration-300 font-cyber"
            >
              浏览生肖符号
            </Link>
            <Link
              href="/help/tattoo-design-guide"
              className="px-8 py-3 bg-tech-gradient border border-tech-red-500/30 hover:border-tech-red-400/50 rounded-lg text-white hover:text-tech-red-200 transition-all duration-300 font-cyber"
            >
              生肖纹身指南
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}