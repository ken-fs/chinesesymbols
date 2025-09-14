import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "使用教程 - 网站功能和操作指南 | Chinese Symbols",
  description: "Chinese Symbols网站完整使用教程，包含搜索功能、筛选分类、符号复制、个人偏好设置等详细操作指南。",
  keywords: "使用教程,操作指南,网站功能,搜索符号,筛选分类,复制功能,个性化设置,Chinese Symbols教程",
  openGraph: {
    title: "使用教程 - 网站功能和操作指南",
    description: "学习如何高效使用Chinese Symbols平台的所有功能",
    type: "article",
  },
  alternates: {
    canonical: "/help/how-to-use",
  },
};

export default function HowToUsePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* 面包屑导航 */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/help" className="hover:text-tech-red-300 transition-colors">
          帮助中心
        </Link>
        <span>»</span>
        <span className="text-tech-red-300">使用教程</span>
      </nav>

      {/* 文章标题 */}
      <header className="mb-12">
        <h1 className="font-cyber text-4xl text-white mb-4">
          使用教程
        </h1>
        <p className="text-xl text-tech-red-300 mb-6">
          How to Use Chinese Symbols Platform
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <span>📱 功能指南</span>
          <span>⏱️ 阅读时间：5分钟</span>
          <span>📅 更新时间：2024年9月</span>
        </div>
      </header>

      <article className="prose prose-invert max-w-none">
        {/* 快速开始 */}
        <section className="mb-16">
          <h2 className="font-cyber text-3xl text-tech-red-400 mb-6 flex items-center gap-3">
            <span className="text-4xl">🚀</span>
            快速开始
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl text-white mb-3">浏览符号</h3>
              <p className="text-gray-400 text-sm">
                首页展示所有80+个精选中文符号，按分类整齐排列
              </p>
            </div>
            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl text-white mb-3">搜索筛选</h3>
              <p className="text-gray-400 text-sm">
                使用搜索栏和分类筛选快速找到需要的符号
              </p>
            </div>
            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl text-white mb-3">复制使用</h3>
              <p className="text-gray-400 text-sm">
                点击符号卡片即可复制到剪贴板，方便使用
              </p>
            </div>
          </div>
        </section>

        {/* 主要功能详解 */}
        <section className="mb-16">
          <h2 className="font-cyber text-3xl text-tech-red-400 mb-6 flex items-center gap-3">
            <span className="text-4xl">🔧</span>
            主要功能详解
          </h2>

          <div className="space-y-8">
            {/* 搜索功能 */}
            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-2xl text-white mb-4 flex items-center gap-2">
                <span className="text-3xl">🔍</span>
                智能搜索功能
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg text-tech-red-300 mb-3">搜索类型</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• <strong className="text-white">按符号搜索</strong>：直接输入汉字，如"爱"</li>
                    <li>• <strong className="text-white">按拼音搜索</strong>：输入拼音，如"ai"</li>
                    <li>• <strong className="text-white">按含义搜索</strong>：输入英文含义，如"love"</li>
                    <li>• <strong className="text-white">按描述搜索</strong>：输入相关词汇，如"情感"</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg text-tech-red-300 mb-3">搜索技巧</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• 支持模糊搜索，不用输入完整词汇</li>
                    <li>• 可以搜索符号的标签，如"zodiac"</li>
                    <li>• 支持中英文混合搜索</li>
                    <li>• 实时显示搜索结果，无需回车</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-tech-red-600/10 border border-tech-red-500/30 rounded-lg">
                <h4 className="text-tech-red-300 mb-2 flex items-center gap-2">
                  <span>💡</span>
                  搜索示例
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div>
                    <p><code className="text-tech-red-300">"龙"</code> → 显示龙相关符号</p>
                    <p><code className="text-tech-red-300">"love"</code> → 显示爱情相关符号</p>
                  </div>
                  <div>
                    <p><code className="text-tech-red-300">"yong"</code> → 显示拼音为yong的符号</p>
                    <p><code className="text-tech-red-300">"力量"</code> → 显示力量相关符号</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 分类筛选 */}
            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-2xl text-white mb-4 flex items-center gap-2">
                <span className="text-3xl">📂</span>
                分类筛选系统
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                我们将80多个符号划分为15个主题分类，您可以通过分类筛选快速找到
                特定主题的符号。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  { name: "爱情与浪漫", icon: "💕", count: "8个符号" },
                  { name: "十二生肖", icon: "🐲", count: "12个符号" },
                  { name: "力量与权力", icon: "💪", count: "8个符号" },
                  { name: "幸运与财富", icon: "🍀", count: "12个符号" },
                  { name: "智慧与知识", icon: "📚", count: "15个符号" },
                  { name: "情感与感受", icon: "😊", count: "12个符号" },
                ].map((category, index) => (
                  <div key={index} className="p-3 border border-tech-red-500/20 rounded text-center">
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <h4 className="text-white text-sm mb-1">{category.name}</h4>
                    <p className="text-gray-400 text-xs">{category.count}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-tech-red-600/10 border border-tech-red-500/30 rounded-lg">
                <h4 className="text-tech-red-300 mb-2">使用方法</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 点击页面顶部的分类标签进行筛选</li>
                  <li>• 支持多选分类，同时查看多个类别</li>
                  <li>• 点击"全部"取消所有筛选条件</li>
                  <li>• 分类筛选可与搜索功能结合使用</li>
                </ul>
              </div>
            </div>

            {/* 符号卡片 */}
            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-2xl text-white mb-4 flex items-center gap-2">
                <span className="text-3xl">🃏</span>
                符号卡片功能
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg text-tech-red-300 mb-3">卡片信息</h4>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    每个符号卡片都包含丰富的信息，帮助您全面了解符号的含义和用法。
                  </p>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• <strong className="text-white">中文符号</strong>：大字体显示，清晰易读</li>
                    <li>• <strong className="text-white">拼音标注</strong>：准确的发音指导</li>
                    <li>• <strong className="text-white">英文含义</strong>：对应的英文翻译</li>
                    <li>• <strong className="text-white">详细描述</strong>：符号的文化背景和用途</li>
                    <li>• <strong className="text-white">分类标签</strong>：所属的主题分类</li>
                    <li>• <strong className="text-white">热门标识</strong>：流行符号的特殊标记</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg text-tech-red-300 mb-3">交互功能</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• <strong className="text-white">一键复制</strong>：点击卡片即可复制符号</li>
                    <li>• <strong className="text-white">悬停效果</strong>：鼠标悬停显示动态效果</li>
                    <li>• <strong className="text-white">详情页面</strong>：点击可查看更多详细信息</li>
                    <li>• <strong className="text-white">视觉反馈</strong>：复制成功后的提示动画</li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-tech-red-600/10 border border-tech-red-500/30 rounded-lg">
                    <h5 className="text-tech-red-300 mb-2">💡 使用提示</h5>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      复制成功后会显示Toast提示，符号已保存到您的剪贴板中，
                      可以直接粘贴到任何地方使用。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 个性化设置 */}
        <section className="mb-16">
          <h2 className="font-cyber text-3xl text-tech-red-400 mb-6 flex items-center gap-3">
            <span className="text-4xl">⚙️</span>
            个性化设置
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-xl text-tech-red-300 mb-4 flex items-center gap-2">
                🎛️ 用户偏好设置
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                点击右上角的设置按钮，可以自定义您的浏览体验。
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• <strong className="text-white">字体大小</strong>：小号、中号、大号三种选择</li>
                <li>• <strong className="text-white">主题模式</strong>：暗色科技风主题</li>
                <li>• <strong className="text-white">动画效果</strong>：开启/关闭页面动画</li>
                <li>• <strong className="text-white">语言设置</strong>：中英文界面切换</li>
              </ul>
            </div>

            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-xl text-tech-red-300 mb-4 flex items-center gap-2">
                💾 本地存储
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                您的个性化设置会自动保存在浏览器本地，下次访问时自动恢复。
              </p>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• 设置信息本地存储，无需注册</li>
                <li>• 跨会话保持个人偏好</li>
                <li>• 可随时重置为默认设置</li>
                <li>• 支持导入/导出设置配置</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 快捷操作 */}
        <section className="mb-16">
          <h2 className="font-cyber text-3xl text-tech-red-400 mb-6 flex items-center gap-3">
            <span className="text-4xl">⚡</span>
            快捷操作指南
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-xl text-white mb-4">键盘快捷键</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-tech-red-300 mb-3">搜索相关</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li><kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Ctrl + F</kbd> 快速定位搜索框</li>
                    <li><kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Enter</kbd> 确认搜索</li>
                    <li><kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Esc</kbd> 清空搜索内容</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-tech-red-300 mb-3">导航相关</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li><kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Tab</kbd> 在元素间切换</li>
                    <li><kbd className="bg-gray-700 px-2 py-1 rounded text-xs">Space</kbd> 选择/复制符号</li>
                    <li><kbd className="bg-gray-700 px-2 py-1 rounded text-xs">↑↓←→</kbd> 符号卡片导航</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-xl text-white mb-4">移动端操作</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-tech-red-300 mb-3">触摸手势</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• <strong className="text-white">单击</strong>：复制符号到剪贴板</li>
                    <li>• <strong className="text-white">长按</strong>：显示符号详细信息</li>
                    <li>• <strong className="text-white">滑动</strong>：浏览不同分类</li>
                    <li>• <strong className="text-white">双击</strong>：快速访问符号详情页</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-tech-red-300 mb-3">响应式体验</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• 自适应不同屏幕尺寸</li>
                    <li>• 移动端优化的卡片布局</li>
                    <li>• 触摸友好的按钮尺寸</li>
                    <li>• 快速响应的滚动体验</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 常见问题 */}
        <section className="mb-16">
          <h2 className="font-cyber text-3xl text-tech-red-400 mb-6 flex items-center gap-3">
            <span className="text-4xl">❓</span>
            常见问题
          </h2>

          <div className="space-y-4">
            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-lg text-white mb-3">Q: 复制的符号在某些应用中显示不正常？</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A: 这可能是由于字体支持问题。建议使用支持Unicode的现代字体，
                或者在系统设置中安装中文字体包。大多数主流应用都能正确显示我们的符号。
              </p>
            </div>

            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-lg text-white mb-3">Q: 搜索功能找不到想要的符号？</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A: 尝试使用不同的关键词搜索，包括拼音、英文含义或相关词汇。
                您也可以通过分类筛选来浏览相关主题的所有符号。
              </p>
            </div>

            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-lg text-white mb-3">Q: 个人设置丢失了怎么办？</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A: 设置保存在浏览器本地存储中。如果清理了浏览器数据或使用隐私模式，
                设置可能会丢失。建议定期导出设置备份。
              </p>
            </div>

            <div className="p-6 bg-tech-gradient border border-tech-red-500/30 rounded-lg">
              <h3 className="text-lg text-white mb-3">Q: 网站在某些浏览器中显示异常？</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A: 我们支持所有主流现代浏览器。如遇问题，请尝试清理浏览器缓存，
                或更新到最新版本。建议使用Chrome、Firefox、Safari或Edge浏览器。
              </p>
            </div>
          </div>
        </section>

        {/* 结语 */}
        <section className="text-center py-12 border-t border-tech-red-500/30">
          <h2 className="font-cyber text-2xl text-white mb-4">开始探索中文符号的魅力</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            现在您已经掌握了平台的使用方法，可以开始探索这些承载着千年文化智慧的
            中文符号了。每个符号都有其独特的故事和含义，等待您去发现。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-tech-red-600/20 hover:bg-tech-red-600/30 border border-tech-red-500/30 rounded-lg text-tech-red-200 hover:text-white transition-all duration-300 font-cyber"
            >
              立即开始探索
            </Link>
            <Link
              href="/help"
              className="px-8 py-3 bg-tech-gradient border border-tech-red-500/30 hover:border-tech-red-400/50 rounded-lg text-white hover:text-tech-red-200 transition-all duration-300 font-cyber"
            >
              查看更多帮助
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}