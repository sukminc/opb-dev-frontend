"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f7f5f1]/88 backdrop-blur-xl border-b border-[#ddd8cf]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.svg"
            alt="1% Better"
            className="h-8 w-8 transition-opacity group-hover:opacity-80"
            width={32}
            height={32}
          />
          <div className="hidden sm:block">
            <span className="block text-sm font-semibold text-[#111111] tracking-[0.14em] uppercase leading-none">
              1% Better
            </span>
            <span className="block text-[10px] text-[#8b857b] font-mono mt-1">
              ship small. learn fast.
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden md:flex items-center gap-2 rounded-full border border-[#ddd8cf] bg-[#fbfaf7] px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#111111]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#5f5a52]">
              building in public
            </span>
          </div>
          <a href="#projects" className="text-sm text-[#5f5a52] hover:text-[#111111] transition-colors">
            Projects
          </a>
          <Link href="/about" className="text-sm text-[#5f5a52] hover:text-[#111111] transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
