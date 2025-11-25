import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Grameen Kisan Dastavez",
  description:
    "Vivid illustration of a hardworking farmer guiding his plough with two bulls across a sunlit field."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className={`${display.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
