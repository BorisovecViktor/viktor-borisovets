import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  display: 'swap',
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: 'Viktor Borisovets Portfolio',
  description: 'Created with love by Viktor Borisovets',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${archivo.variable} font-main bg-stone-200 text-stone-900`}
      >
        {children}
      </body>
    </html>
  )
}
