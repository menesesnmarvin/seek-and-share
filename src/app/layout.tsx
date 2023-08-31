import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seek and Share",
  description:
    "Seek and Share - Share your life experiences and Daily Devotions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AuthProvider>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
