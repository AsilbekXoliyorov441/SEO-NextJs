import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900"
        >
          Logo
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-gray-600 transition hover:text-black"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="text-gray-600 transition hover:text-black"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="text-gray-600 transition hover:text-black"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="text-gray-600 transition hover:text-black"
              >
                Products
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;