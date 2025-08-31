# Chinese Symbols

一个使用 Next.js 构建的中文符号展示和学习平台，参考 [chinesesymbols.net](https://chinesesymbols.net/) 实现，采用暗红色科技风主题。

## ✨ 功能特性

### 🎯 核心功能

- **符号展示**: 50+ 精选中文符号，包含十二生肖、情感、力量、幸运等分类
- **一键复制**: 点击即可复制符号到剪贴板，支持符号和拼音复制
- **智能搜索**: 支持按符号、拼音、含义、描述进行搜索
- **分类筛选**: 15 个分类，包括爱情、家庭、动物、鸟类、自然元素等
- **详情页面**: 每个符号都有详细的介绍和使用建议

### 🎨 设计特色

- **暗红色科技风**: 采用暗红色主题，营造科技感氛围
- **霓虹灯效果**: 符号具有发光效果和动画
- **响应式设计**: 完美适配桌面端和移动端
- **玻璃拟态**: 现代化的毛玻璃效果界面
- **网格背景**: 科技感网格背景增强视觉体验

### 📱 用户体验

- **实时反馈**: 复制操作有即时提示
- **悬停效果**: 丰富的交互动画
- **快速导航**: 便捷的返回和跳转功能
- **无障碍设计**: 良好的键盘导航和屏幕阅读器支持

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS + 自定义科技风主题
- **字体**: Orbitron (科技感) + Noto Sans SC (中文字体)
- **开发工具**: ESLint + TypeScript

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
pnpm build
pnpm start
```

## 📁 项目结构

```
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式和科技风主题
│   ├── layout.tsx         # 根布局组件
│   ├── page.tsx           # 首页 - 符号展示
│   └── symbol/[id]/       # 符号详情页面
│       └── page.tsx       # 动态路由详情页
├── components/            # 可复用组件
│   ├── SymbolCard.tsx     # 符号卡片组件
│   ├── CategoryFilter.tsx # 分类筛选组件
│   ├── SearchBar.tsx      # 搜索栏组件
│   └── Toast.tsx          # 通知组件
├── data/                  # 数据文件
│   ├── symbols.ts         # 中文符号数据
│   └── categories.ts      # 分类信息
├── types/                 # TypeScript 类型定义
│   └── symbol.ts          # 符号相关类型
├── tailwind.config.ts     # Tailwind 配置（科技风主题）
├── next.config.js         # Next.js 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目依赖
```

## 🎨 主题特色

### 颜色系统

- **主色调**: 暗红色 (#ff3b3b) 科技感配色
- **背景**: 深色渐变 + 网格纹理
- **文字**: 白色主文字 + 红色强调色
- **边框**: 半透明红色边框

### 动画效果

- **发光动画**: 符号悬停时的霓虹灯效果
- **浮动动画**: 符号的轻微浮动效果
- **滑入动画**: 页面元素的滑入效果
- **脉冲动画**: 慢速脉冲效果

### 交互设计

- **玻璃拟态**: 半透明毛玻璃效果
- **悬停反馈**: 丰富的鼠标悬停效果
- **点击反馈**: 按钮点击的视觉反馈
- **状态指示**: 清晰的状态变化指示

## 📊 数据统计

- **符号数量**: 50+ 个精选中文符号
- **分类数量**: 15 个主要分类
- **热门符号**: 标记了 10+ 个热门符号
- **响应式**: 支持 4 种屏幕尺寸

## 🔧 开发

### 代码检查

```bash
pnpm lint
```

### 添加新符号

在 `data/symbols.ts` 中添加新的符号数据：

```typescript
{
  id: 'new-symbol',
  symbol: '新',
  pinyin: 'xīn',
  meaning: 'New',
  description: 'Something new',
  categories: ['Wisdom & Knowledge'],
  tags: ['new', 'fresh'],
  isPopular: false
}
```

### 自定义主题

在 `tailwind.config.ts` 中修改颜色和动画配置。

## 📄 许可证

MIT License

## 🙏 致谢

- 参考了 [chinesesymbols.net](https://chinesesymbols.net/) 的设计和功能
- 使用了 Google Fonts 的 Orbitron 和 Noto Sans SC 字体
- 基于 Next.js 和 Tailwind CSS 构建
