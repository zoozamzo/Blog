import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Canvas from "@/layout/Canvas";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zoozamzoo's Blog",
  description: "zoozamzoo's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Canvas>
          {children}
        </Canvas>
      </body>
    </html>
  );
}


