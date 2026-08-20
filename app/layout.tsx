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
  title: "Nguyen Van Loi | Frontend Developer",
  description: "Portfolio of Nguyen Van Loi, a Frontend Developer specializing in React, Next.js, and modern web ecosystems.",
  keywords: ["Nguyen Van Loi", "Frontend Developer", "Next.js", "React", "Tailwind", "Portfolio", "Frontend", "Web Development"],
  authors: [{ name: "Nguyen Van Loi" }],
  creator: "Nguyen Van Loi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://loi-dev.com", // Adjust domain when deploying
    title: "Nguyen Van Loi | Frontend Developer",
    description: "Building beautiful, responsive user interfaces and robust web applications.",
    siteName: "Nguyen Van Loi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Van Loi | Frontend Developer",
    description: "Building beautiful, responsive user interfaces and robust web applications.",
    creator: "@loidev", // Optional: Update to actual twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
