import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import ChatWidget from "@/components/ChatWidget";

const playfair = Bodoni_Moda({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Singhs Club | The Arsenal",
  description: "Official athletic training grounds and pro-shop of Sri Anandpur Sahib.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="google-site-verification" content="googleac8d69888d4e1625.html" />
        <meta name="google-site-verification" content="GOXA06Da8PntyAPIIHc9aSqQQVNpZs-qOj_BAaxNjxk" />
        
        {/* =========================================================================
            3RD PARTY CHAT SCRIPT INJECTION POINT
            Paste your script tags (e.g. Botpress, Chatbase, etc.) directly below.
            Example: <script src="https://cdn.botpress.cloud/webchat/v1/inject.js" async />
            ========================================================================= */}
      </head>
      <body className="font-sans antialiased bg-black text-white selection:bg-[var(--color-chrome)] selection:text-black min-h-screen flex flex-col">
        <LenisProvider>
          <main className="flex-grow">
            {children}
          </main>
        </LenisProvider>

        {/* Custom Luxury AI Chat UI Wrapper */}
        <ChatWidget />
      </body>
    </html>
  );
}
