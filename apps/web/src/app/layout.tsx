import type { Metadata } from 'next';
import { Manrope, Overpass } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const overpass = Overpass({
  variable: '--font-overpass',
  subsets: ['latin'],
  weight: ['900'],
});

export const metadata: Metadata = {
  title: 'UGP',
  description: 'Thoughtfully made essentials for everyday life.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${overpass.variable} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
