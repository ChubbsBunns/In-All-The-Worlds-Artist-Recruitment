import type { Metadata } from 'next';
import { Cinzel } from 'next/font/google';
import { ColorSchemeScript } from '@mantine/core';
import '@mantine/core/styles.css';
import './globals.css';
import { Providers } from './providers';
import { StickyHeader } from '@/components/Header/StickyHeader';
import { WelcomePopup } from '@/components/Popup/WelcomePopup';
import { Footer } from '@/components/Footer/Footer';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'In All The Worlds',
  description:
    'A a top-down narrative action RPG seeking 2D artists.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={cinzel.variable}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <WelcomePopup />
          <StickyHeader />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
