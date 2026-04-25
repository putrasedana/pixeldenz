"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const PAGES_WITHOUT_LAYOUT = ["/offer", "/promo", "/landing", "/checkout", "/thank-you"];

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const shouldHideLayout = PAGES_WITHOUT_LAYOUT.some((path) => pathname?.startsWith(path));

  return (
    <>
      {!shouldHideLayout && <Header />}
      <main className="flex-1">{children}</main>
      {!shouldHideLayout && <Footer />}
    </>
  );
}
