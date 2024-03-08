import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google'
// import { WhatsappButton } from "@/components/WhatsappButton";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terresorca",
  description: "Right Way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      
      <body className={inter.className}>

        <div className="relative w-full flex items-center justify-center">
        <Navbar/>
        {/* <WhatsappButton/> */}

        </div>
        {children}
      </body>
      <GoogleAnalytics gaId="G-5TGJ7ZGHPS" />
    </html>
  );
}
