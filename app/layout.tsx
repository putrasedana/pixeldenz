import type { Metadata } from "next";
// @ts-ignore
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Pixeldenz - Website Template for $1",
  description:
    "Get a production-ready, code-based website template for only $1. Fully responsive, well-structured, and designed to be easily customized for any project.",
  keywords: [
    "Buy $1 website template",
    "Pixeldenz store",
    "Code-based website template under $5",
    "Best cheap website templates for small businesses",
    "Static site templates for developers",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
        <link rel="icon" href="/favicon.png" sizes="any" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-BX5WYL3MSM`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BX5WYL3MSM');
    `,
          }}
        />
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
