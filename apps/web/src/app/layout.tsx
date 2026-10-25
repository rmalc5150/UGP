import type { Metadata } from 'next';
import { Manrope, Overpass } from 'next/font/google';
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
  description:
    "We're months away. For More information, please contact support@untitledgarmentproject.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${overpass.variable} flex flex-col min-h-screen`}>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
