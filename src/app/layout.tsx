import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://im-wedding.vercel.app';

export const metadata: Metadata = {
  title: "Wedding Of Manca & Ihsan",
  description: "Join us in celebrating the wedding of Manca & Ihsan. Find event details, RSVP, and more.",
  icons: {
    icon: '/assets/images/IMG-20251107-WA0030.jpg',
    shortcut: '/assets/images/IMG-20251107-WA0030.jpg',
    apple: '/assets/images/IMG-20251107-WA0030.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Wedding Of Manca & Ihsan',
    title: 'Wedding Of Manca & Ihsan',
    description: 'Join us in celebrating the wedding of Manca & Ihsan. Find event details, RSVP, and more.',
    images: [
      {
        url: `${siteUrl}/assets/images/IMG-20251112-WA0058.jpg`,
        width: 1200,
        height: 630,
        alt: 'Wedding Of Manca & Ihsan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Of Manca & Ihsan',
    description: 'Join us in celebrating the wedding of Manca & Ihsan. Find event details, RSVP, and more.',
    images: [`${siteUrl}/assets/images/IMG-20251112-WA0058.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
