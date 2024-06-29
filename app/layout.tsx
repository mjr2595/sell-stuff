import type { Metadata } from "next";
import { Nunito, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { getCanonicalUrl } from "@/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Nunito({ subsets: ["latin"] });
const bodyFont = Josefin_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Sell Stuff",
  description: "go on n sell yo stuff",
  alternates: {
    canonical: getCanonicalUrl(),
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
        <Header font={bodyFont.className} />
        <hr className="h-0.5 bg-gray-100 border-0"></hr>
        <div className="bg-gray-951 py-12">{children}</div>
        <Footer font={bodyFont.className} />
      </body>
    </html>
  );
}
