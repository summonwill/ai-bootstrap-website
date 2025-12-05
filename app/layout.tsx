import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Bootstrap Systems - The Operating System for AI-Assisted Development",
  description: "Deterministic, auditable, and safe AI behavior for enterprises. Self-bootstrapping framework with safety-first principles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm text-gray-400">
                © 2025 AI Bootstrap Systems. All rights reserved.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Open source MIT licensed. Enterprise features available.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
