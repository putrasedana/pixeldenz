import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixeldenz - Premium Template for $1",
  description:
    "Get a fully-featured, modern Next.js template with Tailwind CSS for just $1. Built with Next.js 14, fully responsive, and ready to customize.",
  icons: {
    icon: [
      {
        url: "/logo-pixeldenz.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/logo-pixeldenz.png",
        type: "image/png",
      },
    ],
    shortcut: ["/logo-pixeldenz.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-pixeldenz.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
