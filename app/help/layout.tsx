import Link from "next/link";

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-tech-gradient">
      {/* 网格背景 */}
      <div className="fixed inset-0 bg-cyber-grid bg-[size:100px_100px] opacity-10" />
      
      {/* 导航栏 */}
      <nav className="relative z-10 border-b border-tech-red-500/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-tech-red-600/20 rounded-full flex items-center justify-center border border-tech-red-500/30">
                <span className="text-tech-red-400 font-bold text-sm">中</span>
              </div>
              <div>
                <h1 className="font-cyber text-white text-xl">Chinese Symbols</h1>
                <p className="text-tech-red-300 text-xs">Help Documentation</p>
              </div>
            </Link>
            
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-tech-red-600/20 hover:bg-tech-red-600/30 border border-tech-red-500/30 rounded-lg text-tech-red-200 hover:text-white transition-all duration-300 font-cyber text-sm"
            >
              <span>←</span>
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className="relative z-10">
        {children}
      </main>

      {/* 页脚 */}
      <footer className="relative z-10 mt-16 border-t border-tech-red-500/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">© 2024 Chinese Symbols Platform</p>
            <p>Explore the symbolic meanings of traditional Chinese culture</p>
          </div>
        </div>
      </footer>
    </div>
  );
}