export const theme = {
  colors: {
    primary: '#1E3A8A',
    primaryLight: '#2563EB',
    primaryDark: '#0F172A',
    accent: '#F59E0B',
    accentHover: '#D97706',
    background: '#F1F1F1',
    surface: '#FFFFFF',
    textDark: '#1A1A2E',
    textMuted: '#6B7280',
    textLight: '#FFFFFF',
    border: 'rgba(255,255,255,0.1)',
  },
  fonts: {
    display: "'Playfair Display', serif",
    body: "'DM Sans', sans-serif",
  },
  shadows: {
    card: '0 4px 24px rgba(0,0,0,0.07)',
    cardHover: '0 12px 40px rgba(30,58,138,0.15)',
    navbar: '0 2px 20px rgba(0,0,0,0.08)',
  },
  borderRadius: {
    card: '16px',
    button: '999px',
    image: '12px 12px 0 0',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
}

export type Theme = typeof theme
