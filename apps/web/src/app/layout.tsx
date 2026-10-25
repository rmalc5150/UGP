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
  metadataBase: new URL('https://untitledgarmentproject.com'),
  title: 'UGP',
  description:
    "We're months away. For More information, please contact support@untitledgarmentproject.com",
  openGraph: {
    title: 'Untitled Garment Project',
    description: 'Launching February 14, 2027.',
    url: '/',
    siteName: 'UGP',
    type: 'website',
    images: [
      { url: '/social-logo.png', width: 1200, height: 630, alt: 'Untitled Garment Project logo' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Untitled Garment Project',
    description: 'Launching February 14, 2027.',
    images: ['/social-logo.png'],
  },
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
