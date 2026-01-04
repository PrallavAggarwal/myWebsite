import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Toaster } from "sonner";
import { Scale } from "./components/scale";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prallav Portfolio",
  description: "Fullstack developer. Ready To Build any product.",
};

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background h-full w-full overflow-x-hidden antialiased [--pattern-fg:var(--color-scalesColor)]/5`}
      >
        <ThemeProvider enableSystem attribute={"class"} defaultTheme="system">
          <Toaster position="top-center" />
          <div className="bg-background/80 relative mx-auto flex h-full w-screen max-w-4xl flex-col items-center justify-center md:w-full">
            <Scale />
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
