import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#111] py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#333] font-mono">
          © {new Date().getFullYear()} Sukmin Yoon — built with AI.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/in/sukminyoon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#333] hover:text-[#007AFF] transition-colors font-mono"
          >
            <Linkedin size={12} />
            sukminyoon
          </a>
          <a
            href="https://github.com/sukminc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#333] hover:text-[#007AFF] transition-colors font-mono"
          >
            <Github size={12} />
            sukminc
          </a>
        </div>
      </div>
    </footer>
  );
}
