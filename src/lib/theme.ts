import { createTheme } from '@mui/material/styles'

export const T = {
  bg:          'oklch(0.985 0.006 80)',
  paper:       '#EFEBE3',
  paper2:      'oklch(0.94 0.012 75)',
  card:        '#fff',
  ink:         'oklch(0.22 0.012 60)',
  ink2:        'oklch(0.42 0.012 60)',
  ink3:        'oklch(0.62 0.012 60)',
  ink4:        'oklch(0.82 0.008 60)',
  line:        'oklch(0.92 0.008 60)',
  line2:       'oklch(0.88 0.01 60)',
  accent:      'oklch(0.72 0.14 45)',
  accentDeep:  'oklch(0.58 0.16 38)',
  accentInk:   'oklch(0.38 0.11 40)',
  accentSoft:  'oklch(0.95 0.04 50)',
  good:        'oklch(0.68 0.12 150)',
  goodSoft:    'oklch(0.94 0.05 150)',
  warn:        'oklch(0.78 0.14 85)',
  danger:      'oklch(0.55 0.22 25)',
  cool:        'oklch(0.62 0.07 240)',
  night:       'oklch(0.16 0.015 60)',
  night2:      'oklch(0.22 0.015 60)',
  night3:      'oklch(0.30 0.015 60)',
  fontSans:    'var(--font-geist), -apple-system, system-ui, sans-serif',
  fontMono:    'var(--font-geist-mono), ui-monospace, monospace',
  fontSerif:   'var(--font-instrument-serif), "Times New Roman", serif',
  maxw:        '1180px',
  sectionPadY: '120px',
  containerPad:'clamp(20px, 5vw, 64px)',
} as const

// Hex fallbacks for MUI palette — MUI's internal color utilities cannot
// parse oklch(), so we supply sRGB equivalents. The T.* oklch values are
// used directly in sx props and CSS, where oklch is fully supported.
const hex = {
  accent:     '#D97757', // ≈ oklch(0.72 0.14 45)
  accentDeep: '#B85C35', // ≈ oklch(0.58 0.16 38)
  accentInk:  '#6B3520', // ≈ oklch(0.38 0.11 40)
  accentSoft: '#FDF3EE', // ≈ oklch(0.95 0.04 50)
  paper:      '#EFEBE3', // same as T.paper
  ink:        '#2C2318', // ≈ oklch(0.22 0.012 60)
  ink2:       '#6B5F52', // ≈ oklch(0.42 0.012 60)
  ink3:       '#9E958C', // ≈ oklch(0.62 0.012 60)
  line:       '#E8E4DF', // ≈ oklch(0.92 0.008 60)
  good:       '#4A9E5C', // ≈ oklch(0.68 0.12 150)
  goodSoft:   '#E8F5EB', // ≈ oklch(0.94 0.05 150)
  danger:     '#B83232', // ≈ oklch(0.55 0.22 25)
  warn:       '#C8A030', // ≈ oklch(0.78 0.14 85)
} as const

const theme = createTheme({
  palette: {
    primary:    { main: hex.accent, dark: hex.accentDeep, contrastText: '#fff' },
    background: { default: hex.paper, paper: '#fff' },
    text:       { primary: hex.ink, secondary: hex.ink2, disabled: hex.ink3 },
    divider:    hex.line,
    success:    { main: hex.good, light: hex.goodSoft, contrastText: hex.ink },
    error:      { main: hex.danger, contrastText: '#fff' },
    warning:    { main: hex.warn, contrastText: hex.ink },
  },
  typography: {
    fontFamily: 'var(--font-geist), -apple-system, system-ui, sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 0.97 },
    h2: { fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.05 },
    h3: { fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.08 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFeatureSettings: '"ss01", "cv11"',
          letterSpacing: '-0.005em',
          lineHeight: 1.55,
          WebkitFontSmoothing: 'antialiased',
          background: hex.paper,
          color: hex.ink,
        },
        img: { maxWidth: '100%', display: 'block' },
        'a.inline-link': {
          color: hex.accentInk,
          textDecoration: 'none',
          borderBottom: `1px solid currentColor`,
          '&:hover': { color: hex.accentDeep },
        },
        '::selection': {
          background: 'oklch(0.85 0.1 45 / 0.45)',
          color: hex.ink,
        },
      },
    },
    MuiButton: { defaultProps: { disableElevation: true } },
  },
})

export default theme
