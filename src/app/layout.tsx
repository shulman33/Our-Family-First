import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/app/ui/nav-bar";
import Footer from "@/app/ui/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Our Family First",
  description:
    "We offer psycho-educational workshops and couples counseling to help Israeli Soldiers reintegrate into family life after experiencing the trauma of war.",
  keywords:
    "psycho-educational workshops, couples counseling, Israeli Soldiers, trauma of war, family reintegration, mental health support, veteran services",
  openGraph: {
    title: "Our Family First",
    description:
      "We offer psycho-educational workshops and couples counseling to help Israeli Soldiers reintegrate into family life after experiencing the trauma of war.",
    url: "https://www.ourfamilyfirst.org",
    type: "website",
    images: [
      {
        url: "https://www.ourfamilyfirst.org/OFF-New-Logo.png",
        width: 1200,
        height: 630,
        alt: "OUR FAMILY FIRST",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76" },
    ],
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
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
