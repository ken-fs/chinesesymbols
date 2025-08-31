# Chinese Symbols

一个使用 Next.js 构建的中文符号展示和学习平台。

## 功能特性

- 🈶 中文字符展示
- 🔤 中文符号和标点
- 📚 学习资源
- 🛠️ 实用工具

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **开发工具**: ESLint

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
├── app/                 # Next.js App Router
│   ├── globals.css     # 全局样式
│   ├── layout.tsx      # 根布局
│   └── page.tsx        # 首页
├── public/             # 静态资源
├── next.config.js      # Next.js 配置
├── tailwind.config.ts  # Tailwind CSS 配置
├── tsconfig.json       # TypeScript 配置
└── package.json        # 项目依赖
```

## 开发

### 代码检查

```bash
npm run lint
```

## 许可证

MIT
