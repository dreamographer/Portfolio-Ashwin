import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/next-theme-provider";
const SpaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Ashwin KV",
  description: "Portfolio of Ashwin KV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${SpaceMono.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
