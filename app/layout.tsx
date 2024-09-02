import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { AuthProvider } from "./(context)/AuthContext";
import React from "react";
import { ThemeProvider } from "@/(components)/DarkModToggle/ThemeContext";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

const Sidebar = dynamic(() => import('./(components)/Sidebar/Sidebar'), { ssr: false });

export const metadata: Metadata = {
  title: "MovieProject",
  description: "Movie",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8395468797693752"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      <body>
        <ThemeProvider>
          <AuthProvider>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ flex: 1 }}>
                <Sidebar />
                {children}
                {modal}
                <div id="modal-root"></div>
              </div>

              {/* 페이지 우측에 광고 표시 */}
              <div style={{ width: '300px', textAlign: 'center', marginLeft: '20px' }}>
                <ins className="adsbygoogle"
                  style={{ display: 'block', width: '100%', height: '600px' }}
                  data-ad-client="ca-pub-8395468797693752"
                  data-ad-slot="1234567890"
                  data-ad-format="vertical"
                  data-full-width-responsive="true"></ins>
                <Script>
                  {`(adsbygoogle = window.adsbygoogle || []).push({});`}
                </Script>
              </div>
            </div>

            {/* 페이지 하단에 광고 표시 (선택 사항) */}
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <ins className="adsbygoogle"
                style={{ display: 'block', width: '100%', height: '90px' }}
                data-ad-client="ca-pub-8395468797693752"
                data-ad-slot="0987654321"
                data-ad-format="horizontal"
                data-full-width-responsive="true"></ins>
              <Script>
                {`(adsbygoogle = window.adsbygoogle || []).push({});`}
              </Script>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
