import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio - Fikri Adyatma Putra",
  description: "Frontend Developer Portfolio",
  icons: {
    icon: "/logoDark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.className} ${ovo.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <Providers>
    <Toaster position="top-right" />
    {children}
  </Providers>
</body>
    </html>
  );
}