import {NextIntlClientProvider, hasLocale} from 'next-intl';
import { getMessages } from 'next-intl/server'; 
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
 import '../globals.css'
 import type { Metadata } from 'next'
 import { Inter } from 'next/font/google'
import LayoutWrapper from '@/components/LayoutWrapper';
import { ThemeProvider } from '@/components/themes/theme-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amaraa Global',
  description: 'Amaraa Global',
   icons: {
    icon: '/favicon.ico',
  },
}


export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  const messages = await getMessages({ locale });
  
  return (
      <div className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
        </NextIntlClientProvider>
      </div>
  );
}