import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seek & Share",
  description:
    "Seek & Share - Life is meant to be shared. A journey is always better when it is shared. Share your life experiences, testimony and your daily devotions",
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
