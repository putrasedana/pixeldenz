import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t-2 border-gray-800 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center space-x-2 transition-opacity hover:opacity-80"
            >
              <div className="relative h-8 w-8">
                <Image
                  src="/favicon.png"
                  alt="Pixeldenz Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">Pixeldenz</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Premium Next.js template for just $1.
            </p>
          </div>

          <div className="xl:mx-auto">
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/template"
                  className="hover:text-foreground transition-colors"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/component"
                  className="hover:text-foreground transition-colors"
                >
                  Free Components
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="hover:text-foreground transition-colors"
                >
                  Setup Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="xl:mx-auto">
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="xl:mx-auto">
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/license"
                  className="hover:text-foreground transition-colors"
                >
                  License Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gray-800 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Pixeldenz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
