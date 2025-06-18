import type { Metadata } from 'next'
import './globals.css'
import { headers } from 'next/headers'

export const metadata: Metadata = {
  title: 'Amaraa Global',
  description: 'Amaraa Global',
  icons: {
    icon: '/favicon.ico',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || ''
  const locale = pathname.split('/')[1] || 'en' 
  
  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  )
}