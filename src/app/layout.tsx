import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog CMS",
  description: "Manage your blogs in a single place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <NextTopLoader color="#3b82f6" />
        <main className="max-w-[1140px] mx-auto px-3 md:px-0 ">{children}</main>
      </body>
    </html>
  );
}
