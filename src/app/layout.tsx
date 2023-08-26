import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
//Contentful
import { getDescriptionText } from '@/lib/utils/contentful-functions';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NY Therapy Space',
  description: 'ADD DESCRIPTION',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer>FOOTER</footer>
      </body>
    </html>
  );
}

