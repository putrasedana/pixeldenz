"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/template", label: "Template" },
    { href: "/service", label: "Service" },
    { href: "/faq", label: "FAQ" },
    { href: "/license", label: "License" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-gray-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 transition-opacity hover:opacity-80"
          >
            <div className="relative h-8 w-8">
              <Image
                src="/logo-pixeldenz.png"
                alt="Pixeldenz Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl">Pixeldenz</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-foreground/90"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <a
              href="https://wa.me/6285600488795"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
