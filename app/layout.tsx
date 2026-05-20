import type { Metadata } from "next";
import "./globals.css";
import "./globals.scss";
import "./shared/styling/base.scss";

export const metadata: Metadata = {
  title: "Qoves",
  description: "Facial analysis powered by Qoves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
