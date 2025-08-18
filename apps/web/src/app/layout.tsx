import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Providers } from "@/components/providers";
import { WalletButton } from "@/components/wallet-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rather Labs - CrossChain Ops",
  description: "Cross-chain lending protocol interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-gray-900 text-white`}>
        <Providers>
          <div className="min-h-screen">
            {/* Header */}
            <header className="bg-gray-800 border-b border-gray-700 shadow-lg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center space-x-8">
                    <Link href="/" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                      Rather Labs
                    </Link>
                    <nav className="hidden md:flex space-x-6">
                      <Link 
                        href="/" 
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
                      >
                        Trade
                      </Link>
                      <Link 
                        href="/activity" 
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
                      >
                        Activity
                      </Link>
                    </nav>
                  </div>
                  <WalletButton />
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
