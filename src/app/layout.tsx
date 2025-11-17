import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

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
    siteName: 'Wedding Of Manca & Ihsan',
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
