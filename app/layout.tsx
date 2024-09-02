import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./(context)/AuthContext";
import React from "react";
import { ThemeProvider } from "@/(components)/DarkModToggle/ThemeContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const Sidebar = dynamic(() => import('./(components)/Sidebar/Sidebar'), { ssr: false });

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
      <head></head>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <Sidebar />
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                {children}
                {modal}
              </div>
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  right: "0",
                  transform: "translateY(-50%)",
                  width: "160px",
                }}
              >
                <ins
                  className="kakao_ad_area"
                  style={{ display: "block" }}
                  data-ad-unit="DAN-aq3kjg7Rp6i1bhxu"
                  data-ad-width="160"
                  data-ad-height="600"
                ></ins>
              </div>
            </div>
            <Script
              type="text/javascript"
              src="//t1.daumcdn.net/kas/static/ba.min.js"
              strategy="afterInteractive"
              async
            ></Script>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
