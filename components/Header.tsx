"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-bg-line"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-[72px]">
        <a href="#hero">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          <a href="#problema" className="hover:text-ink transition">
            Problema
          </a>
          <a href="#servicios" className="hover:text-ink transition">
            Servicios
          </a>
          <a href="#proceso" className="hover:text-ink transition">
            Cómo trabajo
          </a>
          <a href="#sobre" className="hover:text-ink transition">
            Sobre Mi
          </a>
        </nav>

      </div>
    </header>
  );
}
