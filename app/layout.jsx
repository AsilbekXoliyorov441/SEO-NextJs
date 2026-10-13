import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Xon Bozor telefonlar do'koni",
  description: "Telefon sotib olish | arzon telefon | sifatli telefon | nasiyaga to'lov",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}</body>
    </html>
  );
}
