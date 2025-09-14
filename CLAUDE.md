# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
```bash
# Development server
pnpm dev

# Production build
pnpm build
pnpm start

# Code quality
pnpm lint
```

### Package Management
- Use `pnpm` as the package manager (not npm or yarn)
- Install dependencies: `pnpm install`
- Add dependencies: `pnpm add [package]`
- Add dev dependencies: `pnpm add -D [package]`

## Architecture Overview

This is a **Next.js 14** Chinese symbols learning platform with a tech-themed dark red design. The application displays and categorizes Chinese symbols with interactive features like search, filtering, and copying.

### Key Architecture Patterns

- **Next.js App Router** - Uses the new app directory structure (not pages router)
- **TypeScript throughout** - Strict typing with custom interfaces
- **Component-based design** - Reusable React components with tech-themed styling
- **Static data approach** - Symbols stored in TypeScript files for optimal performance
- **Client-side interactivity** - Real-time search, filtering, and clipboard operations

### Core Data Model

The application centers around the `ChineseSymbol` interface:
```typescript
interface ChineseSymbol {
  id: string;
  symbol: string;        // The Chinese character/symbol
  pinyin: string;        // Pronunciation guide
  meaning: string;       // English translation
  description: string;   // Detailed explanation
  categories: SymbolCategory[];
  tags: string[];
  isPopular?: boolean;
}
```

### Tech Theme Implementation

- **Dark red color scheme** - Custom Tailwind colors (`tech-red`, `neon-red`)
- **Cyberpunk aesthetic** - Glow effects, neon animations, grid backgrounds
- **Custom fonts** - Orbitron for tech feel, Noto Sans SC for Chinese text
- **Interactive animations** - Hover effects, floating animations, glow transitions

## Project Structure

```
├── app/                     # Next.js App Router
│   ├── globals.css         # Global styles with tech theme
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page with symbol grid
│   └── symbol/[id]/        # Dynamic routes for symbol details
├── components/             # React components
│   ├── SymbolCard.tsx     # Individual symbol display
│   ├── SearchBar.tsx      # Search functionality
│   ├── CategoryFilter.tsx # Category filtering
│   └── Toast.tsx          # Notification system
├── data/                  # Static data files
│   ├── symbols.ts         # Main symbol dataset (50+ symbols)
│   └── categories.ts      # Category definitions
├── types/                 # TypeScript definitions
│   ├── symbol.ts          # Core symbol interfaces
│   └── user.ts           # User preference types
├── utils/                # Utility functions
└── hooks/                # Custom React hooks
```

## Key Implementation Details

### Symbol Management
- All symbols are stored in `data/symbols.ts` as static TypeScript data
- 15 categories including Chinese Zodiac, Love & Romance, Animals, etc.
- Search supports symbol, pinyin, meaning, and description fields
- Popular symbols are marked with `isPopular: true`

### Styling System
- **Tailwind CSS** with extensive custom configuration in `tailwind.config.ts`
- Custom color system with tech-red variants (50-950 shades)
- Custom animations: `glow`, `pulse-slow`, `float`, `slide-up`, `fade-in`
- Glassmorphism effects with backdrop blur
- Grid background patterns with CSS custom properties

### Component Architecture
- `SymbolCard` - Core component for displaying symbols with copy functionality
- `SearchBar` - Real-time search with debouncing
- `CategoryFilter` - Multi-category filtering system
- `Toast` - Toast notifications for user feedback

### Routing
- App Router with dynamic routes: `/symbol/[id]`
- Each symbol has its own detail page
- SEO-friendly URLs using symbol IDs

## Adding New Content

### Adding New Symbols
Edit `data/symbols.ts` and add new symbol objects:
```typescript
{
  id: 'unique-id',
  symbol: '新',
  pinyin: 'xīn',
  meaning: 'New',
  description: 'Represents something new or fresh',
  categories: ['Wisdom & Knowledge'],
  tags: ['new', 'fresh', 'beginning'],
  isPopular: false  // Set to true for popular symbols
}
```

### Adding New Categories
1. Update the `SymbolCategory` type in `types/symbol.ts`
2. Add category info in `data/categories.ts`
3. Update filtering logic in relevant components

## Development Guidelines

### Styling Conventions
- Use the custom tech-red color palette for consistency
- Apply glow effects to interactive elements
- Use Orbitron font for tech elements, Noto Sans SC for Chinese text
- Implement glassmorphism with `backdrop-blur` utilities

### Component Development
- All components use TypeScript with proper interfaces
- Use custom hooks for complex state management
- Implement proper accessibility (ARIA labels, keyboard navigation)
- Include hover states and loading feedback

### Performance Considerations
- Symbols are statically imported for optimal bundling
- Use React.memo for expensive components
- Implement proper key props for list rendering
- Optimize images and animations for smooth performance

## Documentation Standards

### Language Requirements
- **All help documentation MUST be written in English** - The project targets Western/international users
- User interface elements should be in English by default
- Chinese characters are content (symbols), but explanations are in English
- SEO optimization should target English keywords and international audience

### Documentation Guidelines
- Write comprehensive guides with proper SEO metadata
- Include detailed explanations of Chinese cultural concepts for Western users
- Use clear, professional English suitable for international audience
- Provide cultural context to help non-Chinese users understand symbol meanings
- Structure content with proper headings and navigation for better UX