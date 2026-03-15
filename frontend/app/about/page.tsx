import Link from "next/link";
import About from "../components/About";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent text-[#111111]">
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-4">
        <Link
          href="/"
          className="inline-flex min-h-10 items-center gap-2 rounded-full px-2 text-sm text-[#8b857b] transition-colors hover:text-[#111111]"
        >
          ← Back
        </Link>
      </div>
      <About />
      <Footer />
    </main>
  );
}
