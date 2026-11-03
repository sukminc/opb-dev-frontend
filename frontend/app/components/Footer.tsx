import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import BrandMark from "./BrandMark";

export default function Footer() {
  return (
    <footer className="section-shell py-8 px-6">
      <div className="relative max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <BrandMark size="sm" showWordmark={true} subtitle="Senior SDET · Data Quality" />
        </div>
        <div className="flex items-center gap-5">
          <Link href="/about" className="text-xs text-[#4a7a62] transition-colors hover:text-[#1a3a2e]">
            © 2026 Chris Yoon
          </Link>
          <a
            href="https://linkedin.com/in/sukminyoon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#4a7a62] transition-colors hover:text-[#1a3a2e]"
          >
            <Linkedin size={12} />
            sukminyoon
          </a>
          <a
            href="https://github.com/sukminc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#4a7a62] transition-colors hover:text-[#1a3a2e]"
          >
            <Github size={12} />
            sukminc
          </a>
          <a
            href="mailto:sukminc@gmail.com"
            className="flex items-center gap-1.5 text-xs text-[#4a7a62] transition-colors hover:text-[#1a3a2e]"
          >
            <Mail size={12} />
            sukminc@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
