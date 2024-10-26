import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'StillProfit - Contact Us',
  description: 'Get in touch with StillProfit for any inquiries or support.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}