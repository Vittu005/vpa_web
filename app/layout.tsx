import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { AccessibilityProvider } from "@/components/accessibility-widget";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AccessibilityProvider>{children}</AccessibilityProvider>
      </body>
    </html>
  );
}