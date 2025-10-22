# 🎨 Cerekin Design System

## Overview
The Cerekin Design System is a comprehensive, production-ready design framework for building futuristic, developer-first web experiences. It combines **Minimalism + Futuristic Maximalism** with smooth animations and interactive elements.

---

## 🌈 Color Palette

### Dark Mode (Default)
```css
Background: #0C0C0E
Surface: #121214
Border: #2E2E30
Text Primary: #FFFFFF
Text Secondary: #A1A1AA
```

### Light Mode
```css
Background: #FFFFFF
Surface: #F9F9FB
Text Primary: #0C0C0E
Text Secondary: #555555
Border: #E5E7EB
```

### Product Accent Colors
- **Blonde-CLI**: `#7B61FF` (Purple Neon)
- **Caramel**: `#FFB869` (Warm Orange)
- **CremeOS**: `#00C2FF` (Cyan Highlight)

---

## 🔤 Typography

### Font Families
- **Sans**: Inter - Body text and general UI
- **Display**: Space Grotesk - Headings and hero text
- **Mono**: JetBrains Mono - Code blocks and terminal

### Font Sizes
```css
display-xl: 4.5rem (72px)
display-lg: 3.75rem (60px)
display-md: 3rem (48px)
display-sm: 2.25rem (36px)
```

---

## 🎭 Components

### Button Variants
- **neon**: Gradient background with glow effect
- **glass**: Glassmorphism with hover state
- **outline**: Border with hover fill
- **ghost**: Transparent with subtle hover

### Cards
- **GlassCard**: Glassmorphism effect with optional hover animation
- **HoverCard**: 3D transform on hover with shadow
- **GlowCard**: Animated gradient overlay on hover

### Terminal Components
- **Terminal**: Animated CLI simulator with typewriter effect
- **CodeBlock**: Syntax-highlighted code with copy button
- **CLISimulator**: Interactive command-line playground

---

## ✨ Animations

### Scroll Animations
- **animate-on-scroll**: Fade and slide up on viewport enter
- **floating**: Subtle floating animation
- **pulse-glow**: Pulsing glow effect

### Keyframes
- **gradient**: Animated gradient background
- **float**: Floating Y-axis animation
- **slideUp/Left/Right**: Directional slide animations
- **pulseGlow**: Pulsing shadow glow
- **shimmer**: Moving shimmer effect

---

## 🔊 Interactive Features

### Sound Effects (Optional)
- Hover sounds (800Hz)
- Click sounds (1000Hz)
- Success sounds (600Hz → 800Hz)
- Toggle via SoundToggle component

### Scroll Features
- **ScrollProgress**: Animated progress bar at top
- **BackToTop**: Floating button appears after scroll
- **Parallax**: Hero sections with scroll-based transforms

---

## 🎯 Usage Examples

### Button
```tsx
import { Button } from '@/components/ui';

<Button variant="neon" size="lg" icon={<Icon />}>
  Get Started
</Button>
```

### Terminal
```tsx
import { Terminal } from '@/components/ui';

const lines = [
  { type: 'command', text: 'blonde init', delay: 800 },
  { type: 'success', text: 'Initialized!', delay: 600 },
];

<Terminal lines={lines} autoPlay loop />
```

### GlassCard
```tsx
import { GlassCard } from '@/components/ui';

<GlassCard hover glow>
  <h3>Feature Title</h3>
  <p>Feature description</p>
</GlassCard>
```

---

## 🚀 Performance Optimizations

1. **Code Splitting**: Vendor chunks for React, animations, and 3D
2. **Lazy Loading**: Images and heavy components
3. **Memoization**: React.memo on static components
4. **Debounced Scroll**: Scroll handlers use throttling
5. **CSS Containment**: Layout containment on cards

---

## 📦 Tech Stack

- **Framework**: React 19 + Vite
- **Language**: TypeScript + TSX
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **3D**: React Three Fiber
- **Icons**: Lucide React
- **State**: Zustand
- **Routing**: React Router

---

## 🎨 Design Philosophy

### Principles
1. **Clarity First**: Information hierarchy is paramount
2. **Subtle Motion**: Animations enhance, never distract
3. **Developer Focus**: Built for technical audiences
4. **Performance**: 60fps animations, optimized assets
5. **Accessibility**: WCAG AA compliant

### Inspiration
- Apple - Clarity and whitespace
- Linear.app - Precision and motion
- Vercel - Fluidity and gradients
- OpenAI - Interactive documentation

---

## 🛠️ Customization

### Adding New Colors
```js
// tailwind.config.js
'your-product': {
  primary: '#HEX',
  glow: 'rgba(R, G, B, 0.4)',
}
```

### Custom Animations
```css
/* globals.css */
@keyframes yourAnimation {
  0% { /* start state */ }
  100% { /* end state */ }
}
```

---

## 📚 Component Library

All components are located in `/src/components/`:

- **ui/**: Reusable UI primitives
- **blonde/**: Blonde-CLI specific sections
- **layout/**: Navbar, Footer, wrappers
- **effects/**: Visual effects and backgrounds
- **shared/**: Cross-product components

---

## 🎯 Best Practices

1. Always use semantic HTML
2. Prefer Tailwind classes over inline styles
3. Use motion components for animations
4. Add aria-labels for accessibility
5. Test on multiple screen sizes
6. Optimize images (WebP, lazy loading)
7. Keep bundle size under 200KB (gzipped)

---

Built with ❤️ by the Cerekin team
