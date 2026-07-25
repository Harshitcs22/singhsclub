import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

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
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.chatbaseConfig = {
                chatbotId: "VSHSGQD36p_xRu1jRoGzf",
                displayMessage: "Hi, I am Singhs Club AI agent. How can I assist you today?",
                theme: {
                  chatWindow: {
                    welcomeMessage: "Hi, I am Singhs Club AI agent. How can I assist you today?"
                  }
                }
              };
              
              // Dynamically set the profile picture once window is loaded to ensure we have the correct origin
              if (typeof window !== 'undefined') {
                window.chatbaseConfig.theme.chatWindow.botMessage = {
                  profilePicture: window.location.origin + "/images/logo_silver_4k-removebg-preview.png"
                };
              }
            `
          }}
        />
        <Script
          id="chatbase-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="VSHSGQD36p_xRu1jRoGzf";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
            `
          }}
        />
      </head>
      <body className="font-sans antialiased bg-black text-white selection:bg-[var(--color-chrome)] selection:text-black min-h-screen flex flex-col">
        <LenisProvider>
          <main className="flex-grow">
            {children}
          </main>
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
