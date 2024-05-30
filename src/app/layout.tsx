
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import Script from "next/script";

import "./assets/css/bootstrap.min.css"
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import "./assets/css/jquery.mCustomScrollbar.min.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Engineering Site",
  description: "A site to solve your engineering problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <html lang="en">
      <body>          
             
        {children }      
        <Script strategy="beforeInteractive" src="js/jquery.min.js"></Script>
        <Script strategy="beforeInteractive"  src="js/popper.min.js"></Script>
        <Script strategy="beforeInteractive"  src="js/bootstrap.bundle.min.js"></Script>
        <Script strategy="beforeInteractive"  src="js/jquery-3.0.0.min.js"></Script>
        <Script strategy="beforeInteractive"  src="js/plugin.js"></Script>
        
      </body>
    </html>
  );
}
