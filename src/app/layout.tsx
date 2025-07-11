import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import LanguageProvider from "@/components/language/LanguageContext";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Rakan Kertas",
  description: "Malaysia's No. 1 Recycling Company",
};

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${instrumentSans.className} antialiased background-texture bg-gray-50`}
      >
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
