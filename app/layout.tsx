// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Night Vision",
  description: "Le chat qui voit dans le noir.",
  themeColor: "#000000",
  openGraph: {
    title: "Night Vision",
    description: "Le chat qui voit dans le noir.",
    url: "https://nightvisionclub.com",
    siteName: "Night Vision",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
