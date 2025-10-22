/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cerekin Dark Mode Palette (Default)
        'cerekin-bg': '#0C0C0E',
        'cerekin-surface': '#121214',
        'cerekin-border': '#2E2E30',
        'cerekin-text': '#FFFFFF',
        'cerekin-text-secondary': '#A1A1AA',
        
        // Light Mode Palette
        'cerekin-light-bg': '#FFFFFF',
        'cerekin-light-surface': '#F9F9FB',
        'cerekin-light-text': '#0C0C0E',
        'cerekin-light-text-secondary': '#555555',
        'cerekin-light-border': '#E5E7EB',
        
        // Product Accent Colors
        'blonde': {
          primary: '#7B61FF',    // Blonde-CLI Purple Neon
          glow: 'rgba(123, 97, 255, 0.4)',
        },
        'caramel': {
          primary: '#FFB869',    // Caramel Warm Orange
          glow: 'rgba(255, 184, 105, 0.4)',
        },
        'cremeos': {
          primary: '#00C2FF',    // CremeOS Highlight
          glow: 'rgba(0, 194, 255, 0.4)',
        },
        
        // Gradient stops
        'accent-purple': '#7B61FF',
        'accent-orange': '#FFB869',
        'accent-cyan': '#00C2FF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      animation: {
        // Existing animations
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-in',
        'scale-in': 'scaleIn 0.5s ease-out',
        
        // New Cerekin animations
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'tilt': 'tilt 10s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(123, 97, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(123, 97, 255, 0.6)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 30px rgba(123, 97, 255, 0.3), 0 0 60px rgba(123, 97, 255, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 50px rgba(123, 97, 255, 0.5), 0 0 100px rgba(123, 97, 255, 0.2)' 
          },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};