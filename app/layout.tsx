import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { AuthProvider } from "./(context)/AuthContext";
import React from "react";
import {ThemeProvider} from "@/(components)/DarkModToggle/ThemeContext";
import Script from 'next/script'

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
       <meta name="monetag" content="08ca9a7e7521b15ee85b2d898ee9121d">
      </head>

      <body>
      <ThemeProvider>
          <AuthProvider>
          <Sidebar />
            {children}          
            {modal}
          <div id="modal-root"></div>
          </AuthProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
