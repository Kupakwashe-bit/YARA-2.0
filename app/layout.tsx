import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron'
})

export const metadata: Metadata = {
  title: 'Y.A.R.A | Young African Robotics Association',
  description: 'Engineering Africa\'s Future — One Robot at a Time. Y.A.R.A empowers young African engineers and innovators to design, build, and deploy real-world robotics solutions.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport = {
  themeColor: '#0A0F1E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} bg-[#0A0F1E]`}>
      <body className="font-sans antialiased bg-[#0A0F1E] text-[#E8F4F1]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
