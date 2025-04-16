import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viktor Borisovets Portfolio",
  description: "Created with love by Viktor Borisovets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
