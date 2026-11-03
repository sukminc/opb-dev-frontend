"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BrandMark from "./BrandMark";

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
          ? "border-b border-[#a8cfbc] bg-[linear-gradient(180deg,rgba(242,250,246,0.96),rgba(230,248,240,0.92))] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-4">
          <BrandMark size="sm" />
          <div className="hidden min-w-0 transition-opacity group-hover:opacity-82 sm:block">
            <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-[#2d2419]">
              Chris Yoon
            </span>
            <span className="mt-1 block text-[10px] font-mono uppercase tracking-[0.2em] text-[#2d6a47]">
              onepercentbetter.dev
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden md:flex items-center gap-2 rounded-full border border-[#aacfbe] bg-[linear-gradient(180deg,#f2faf6_0%,#d8f0e4_100%)] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
            <span className="h-2 w-2 rounded-full bg-[#2d6a47]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#1a3a2e]">
              Senior SDET · Data Quality
            </span>
          </div>
          <a
            href="#experience"
            className="inline-flex min-h-10 items-center rounded-full px-2 text-sm text-[#5f5a52] transition-colors hover:text-[#1a3a2e]"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="inline-flex min-h-10 items-center rounded-full px-2 text-sm text-[#5f5a52] transition-colors hover:text-[#1a3a2e]"
          >
            Projects
          </a>
          <Link
            href="/about"
            className="inline-flex min-h-10 items-center rounded-full px-2 text-sm text-[#5f5a52] transition-colors hover:text-[#1a3a2e]"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
