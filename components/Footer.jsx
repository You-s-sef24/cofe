import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "All Rights Reserved", href: "#" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="w-full border-t border-gray-100 bg-white px-6 py-8 md:px-12">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
        <p>
          Copyright © {currentYear} Developed by{" "}
          <span className="font-bold text-gray-500">TEQNEIA</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {links.map((link, i) => (
            <span key={link.name} className="flex items-center gap-2">
              <Link
                href={link.href}
                className="hover:text-blue-800 transition-colors"
              >
                {link.name}
              </Link>
              {i < links.length - 1 && <span className="text-gray-300">|</span>}
            </span>
          ))}
        </div>
      </div>

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
      </a>
    </footer>
  );
}
