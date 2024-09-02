import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./(context)/AuthContext";
import React from "react";
import { ThemeProvider } from "@/(components)/DarkModToggle/ThemeContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your Site Description",
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
      </head>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <ins
              className="kakao_ad_area"
              style={{ display: "none" }}
              data-ad-unit="DAN-aq3kjg7Rp6i1bhxu"
              data-ad-width="160"
              data-ad-height="600"
            ></ins>
            {children}
            {modal}
            <Script
              type="text/javascript"
              src="//t1.daumcdn.net/kas/static/ba.min.js"
              strategy="afterInteractive" // 클라이언트에서만 실행되도록 설정
              async
            ></Script>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
