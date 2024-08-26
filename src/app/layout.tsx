import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomersArr } from "./context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data table",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomersArr>{children}</CustomersArr>
      </body>
    </html>
  );
}
