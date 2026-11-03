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
          ? "border-b border-[#223128] bg-[linear-gradient(180deg,rgba(10,14,12,0.97),rgba(10,14,12,0.94))] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-4">
          <BrandMark size="sm" />
          <div className="hidden min-w-0 transition-opacity group-hover:opacity-82 sm:block">
            <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-[#e9f4ec]">
              Chris Yoon
            </span>
            <span className="mt-1 block text-[10px] font-mono uppercase tracking-[0.2em] text-[#4ade80]">
              onepercentbetter.dev
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden md:flex items-center gap-2 rounded-full border border-[#23402e] bg-[linear-gradient(180deg,#12241a_0%,#0c1710_100%)] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(74,222,128,0.12)]">
            <span className="h-2 w-2 rounded-full bg-[#4ade80]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#d9ecdf]">
              Senior SDET · Data Quality
            </span>
          </div>
          <a
            href="#experience"
            className="inline-flex min-h-10 items-center rounded-full px-2 text-sm text-[#9db3a5] transition-colors hover:text-[#4ade80]"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="inline-flex min-h-10 items-center rounded-full px-2 text-sm text-[#9db3a5] transition-colors hover:text-[#4ade80]"
          >
            Projects
          </a>
          <Link
            href="/about"
            className="inline-flex min-h-10 items-center rounded-full px-2 text-sm text-[#9db3a5] transition-colors hover:text-[#4ade80]"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
