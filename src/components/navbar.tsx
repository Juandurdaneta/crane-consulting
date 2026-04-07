"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/business-solutions", label: "Solutions" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]) && href.split("#")[0] !== "/";
  }

  return (
    <nav className="bg-crane-surface fixed top-0 z-50 w-full border-0">
      <div className="flex justify-between items-center w-full px-6 md:px-12 py-6 md:py-8 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold font-serif text-crane-primary tracking-tight"
        >
          Crane Consulting Solutions
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-crane-blue font-semibold border-b-2 border-crane-accent pb-1"
                  : "text-crane-on-surface-variant font-medium hover:text-crane-blue"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-block bg-crane-blue text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-crane-light-blue transition-colors duration-300 active:scale-[0.99]"
        >
          Strategic Clarity Session
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-crane-primary transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-crane-primary transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-crane-primary transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-crane-surface border-t border-crane-outline-variant px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-base ${
                isActive(link.href)
                  ? "text-crane-primary font-semibold"
                  : "text-crane-on-surface-variant"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block bg-crane-primary text-crane-on-primary px-8 py-4 text-sm font-bold tracking-widest uppercase text-center"
          >
            Strategic Clarity Session
          </Link>
        </div>
      )}
    </nav>
  );
}
