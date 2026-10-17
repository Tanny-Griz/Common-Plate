import localFont from 'next/font/local'

// The variable files cover all weights; static alternatives stay unloaded.
export const headingFont = localFont({
  src: [
    {
      path: './fraunces/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './fraunces/Fraunces-Italic-VariableFont_SOFT,WONK,opsz,wght.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-fraunces',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  adjustFontFallback: 'Times New Roman',
})
