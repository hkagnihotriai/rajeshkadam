"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useModal } from "@/components/providers/ModalProvider";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#workshops", label: "Workshops" },
  { href: "#books", label: "Books" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { openEnquiry } = useModal();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-heading text-lg font-semibold text-ink">
          Rajesh Kadam
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 transition hover:text-burnt-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => openEnquiry({ mode: "session" })}
          className="hidden rounded-full bg-burnt-orange px-5 py-2 text-sm font-medium text-cream transition hover:bg-ink lg:inline-block"
        >
          Book a Session
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="text-ink lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 px-6 pb-4 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-ink/70 transition hover:text-burnt-orange"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              openEnquiry({ mode: "session" });
            }}
            className="mt-2 rounded-full bg-burnt-orange px-5 py-2 text-center text-sm font-medium text-cream"
          >
            Book a Session
          </button>
        </nav>
      )}
    </header>
  );
}
