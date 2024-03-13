import type { Metadata } from "next";
import React from "react";

import { Inter, Nunito, Lato, Hanken_Grotesk } from "next/font/google";
import "@/app/globals.css"
import Footer from "@/components/footer";
import ProductNavbar from "../components/product-navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: '--font-nunito'
});

const lato = Lato({
  weight: ["100", "300", '400', '700', '900'],
  subsets: ["latin"],
  variable: '--font-lato'
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: '--font-hankenGrotesk'
});

export const metadata: Metadata = {
  title: "Product - Rainbow Fingers",
  description: "Your one-stop shop for all guitar accessories",
};



export default async function ProductPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${nunito.variable} ${lato.variable} ${hankenGrotesk.variable}`} lang="en">
    <body>
  <ProductNavbar />
      {children}
      <Footer />
    </body>
  </html>
  );
};

