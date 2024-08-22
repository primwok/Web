import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/common/providers/providers";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  // variable: "--font-poppins",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  // variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Primwok",
  description: "One stop shop for all your electronics needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${poppins.className} leading-normal`}>
          {children}
        </body>
        <Toaster />
      </Providers>
    </html>
  );
}
