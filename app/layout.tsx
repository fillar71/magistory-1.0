import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Magistory - Video Editor for Creators',
  description: 'Magistory is the ultimate video editor for creators, marketers, and businesses. Edit videos like a pro without the complexity.',
  keywords: ['video editor', 'video editing', 'video creation', 'video maker', 'online video editor'],
  authors: [{ name: 'Magistory Team' }],
  openGraph: {
    title: 'Magistory - Video Editor for Creators',
    description: 'Create stunning videos with ease using Magistory video editor',
    url: 'https://magistory.com',
    siteName: 'Magistory',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Magistory Video Editor',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magistory - Video Editor for Creators',
    description: 'Create stunning videos with ease using Magistory video editor',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
