import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Zaynaz by Zainna | Luxury Women\'s Fashion',
  description: 'Discover premium, elegant, and modern women\'s fashion. Shop luxury pret, festive collections, eastern and western wear at Zaynaz by Zainna.',
  keywords: 'luxury fashion, women clothing, modest fashion, eastern wear, western wear, luxury pret, festive collection, designer clothes',
  openGraph: {
    title: 'Zaynaz by Zainna | Luxury Women\'s Fashion',
    description: 'Discover premium, elegant, and modern women\'s fashion. Shop luxury pret, festive collections, eastern and western wear.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
