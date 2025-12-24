import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bitspark Solutions - Enterprise Software Engineering',
  description: 'Empowering Global Enterprises with Scalable Software Excellence. Specializing in backend engineering, fintech integrations, and microservices architecture.',
  keywords: ['Software Engineering', 'Backend Development', 'Fintech', 'Microservices', 'Cloud Infrastructure', 'Enterprise Solutions'],
  authors: [{ name: 'Bitspark Solutions' }],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Bitspark Solutions - Enterprise Software Engineering',
    description: 'Empowering Global Enterprises with Scalable Software Excellence',
    type: 'website',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitspark Solutions - Enterprise Software Engineering',
    description: 'Empowering Global Enterprises with Scalable Software Excellence',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
