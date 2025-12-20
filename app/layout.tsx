"use client";

import { usePathname } from "next/navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const PAGES_WITHOUT_LAYOUT = [
  "/offer", // Special offer
  "/promo", // Promotional page
  "/landing", // Generic landing
  "/checkout", // Checkout page (if you have one)
  "/thank-you", // Thank you page
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const shouldHideLayout = PAGES_WITHOUT_LAYOUT.some((path) =>
    pathname?.startsWith(path)
  );

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
            {!shouldHideLayout && <Header />}

            <main className="flex-1">{children}</main>

            {!shouldHideLayout && <Footer />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
