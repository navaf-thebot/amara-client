import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/themes/theme-provider'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/Footer'
import LayoutWrapper from '@/components/LayoutWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amara Global',
  description: 'Amara Global',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
        <LayoutWrapper>{children}</LayoutWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}