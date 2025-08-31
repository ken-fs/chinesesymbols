import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserPreferencesProvider from "@/components/UserPreferencesProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chinese Symbols",
  description: "A collection of Chinese symbols and characters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={inter.className} suppressHydrationWarning={true}>
        <UserPreferencesProvider>{children}</UserPreferencesProvider>
      </body>
    </html>
  );
}
