"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Fresh vegetables & fruits", href: "/category/freshvegfruit" },
    { name: "Frozen vegetables", href: "/category/frozenveg" },
    { name: "Frozen fish & shrimp", href: "/category/frozenfish" },
    { name: "Snacks", href: "/category/snacks" },
    { name: "Cosmetics", href: "/category/cosmetics" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <div className="hidden md:flex md:items-center md:justify-center md:gap-1 lg:gap-2 w-full">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 rounded-full hover:text-blue-600 ${
                  isActive
                    ? "text-blue-600 bg-blue-50/80"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex w-full items-center justify-start md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 top-[57px] z-40  backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute top-full left-0 z-50 w-full border-b border-gray-100 bg-white p-4 shadow-xl md:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
