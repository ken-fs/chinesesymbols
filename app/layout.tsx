import type { Metadata } from "next";
import "./globals.css";
import UserPreferencesProvider from "@/components/UserPreferencesProvider";

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
      <body suppressHydrationWarning={true}>
        <UserPreferencesProvider>{children}</UserPreferencesProvider>
      </body>
    </html>
  );
}
