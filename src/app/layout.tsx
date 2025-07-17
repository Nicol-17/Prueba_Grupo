'use client';
import { Navbar } from "@/components/Navbar/Navbar";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar 
          onSearch={() => {}} 
          onCategoryChange={() => {}} 
        /> */}
        {children}
      </body>
    </html>
  );
}
