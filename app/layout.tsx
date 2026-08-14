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
  title: "Nguyen Van Loi | Fullstack Developer",
  description: "Portfolio of Nguyen Van Loi, a Fullstack Developer specializing in Next.js, Node.js, and modern cloud architectures.",
  keywords: ["Nguyen Van Loi", "Fullstack Developer", "Next.js", "React", "Node.js", "Portfolio", "Frontend", "Backend", "Web Development"],
  authors: [{ name: "Nguyen Van Loi" }],
  creator: "Nguyen Van Loi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://loi-dev.com", // Adjust domain when deploying
    title: "Nguyen Van Loi | Fullstack Developer",
    description: "Building robust, scalable applications from pixel-perfect frontends to high-performance backends.",
    siteName: "Nguyen Van Loi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Van Loi | Fullstack Developer",
    description: "Building robust, scalable applications from pixel-perfect frontends to high-performance backends.",
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
