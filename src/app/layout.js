import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio I Nitish Jha",
  description: "Created By Nitish Jha",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#ccc] selection:bg-[#CCFF00]`}
        style={{ backgroundImage: 'url("/images/vector.png")', fontFamily: 'Marcellus, serif' }}
      >
        <div className="fixed z-10 w-full">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
