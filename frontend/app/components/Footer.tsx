import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import BrandMark from "./BrandMark";

export default function Footer() {
  return (
    <footer className="section-shell py-8 px-6">
      <div className="relative max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <BrandMark size="sm" showWordmark={true} subtitle="dev · public build surface" />
        </div>
        <div className="flex items-center gap-5">
          <Link href="/about" className="text-xs text-[#8b857b] hover:text-[#111111] transition-colors">
            © 2026 1% Better
          </Link>
          <a
            href="https://linkedin.com/in/sukminyoon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#8b857b] hover:text-[#111111] transition-colors"
          >
            <Linkedin size={12} />
            sukminyoon
          </a>
          <a
            href="https://github.com/sukminc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#8b857b] hover:text-[#111111] transition-colors"
          >
            <Github size={12} />
            sukminc
          </a>
        </div>
      </div>
    </footer>
  );
}
