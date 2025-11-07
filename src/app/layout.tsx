import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wedding Of Manca & Ihsan",
  description: "Join us in celebrating the wedding of Manca & Ihsan. Find event details, RSVP, and more.",
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
        <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/NsV9FVppR4w?autoplay=1&loop=1&playlist=NsV9FVppR4w&controls=0&showinfo=0&autohide=1&mute=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ display: 'none' }}
        ></iframe>
      </body>
    </html>
  );
}
