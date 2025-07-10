import type { Metadata } from "next";
import { Sora, Work_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FavouriteIcon } from "hugeicons-react";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
      title: "SYON - Say Yes or No for Developers",
  description: "SYON helps developers make clear yes/no decisions without complexity. Pause, reflect, choose, and move on.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${sora.variable} ${workSans.variable} antialiased bg-background text-text min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        {/* Top Bar */}
        <header className="bg-surface-elevated border-b-2 border-border">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-primary font-heading">
                  SYON
                </h1>
                <span className="text-muted text-sm font-medium">
                  Say Yes or No?
                </span>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-text hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/styleguide" className="text-text hover:text-primary transition-colors">
                  <span className="text-text hover:text-primary transition-colors">
                    Styleguide
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 bg-surface">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-surface-elevated border-t border-border py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <span className="text-muted text-sm flex items-center gap-1">
                  A side project made with <FavouriteIcon size={16} color="#FFB997" /> by
                </span>
                <a 
                  href="https://github.com/syeda-tw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors font-medium"
                >
                  github/syeda-tw
                </a>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted">
                <span>SYON © 2024</span>
                <span className="text-border">|</span>
                <span>Simple decisions, clear outcomes</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
