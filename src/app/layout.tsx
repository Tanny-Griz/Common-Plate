import type { Metadata } from 'next'
import Header from '@/components/Header'
import { headingFont } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Food app',
  description: 'A food app.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={headingFont.variable}>
      <body className="min-h-screen bg-base font-primary text-foreground">
        <Header />
        <div className="pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
          {children}
        </div>
      </body>
    </html>
  )
}
