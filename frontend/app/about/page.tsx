import Link from "next/link";
import About from "../components/About";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent text-[#e9f4ec]">
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-4">
        <Link
          href="/"
          className="inline-flex min-h-10 items-center gap-2 rounded-full px-2 text-sm text-[#7d8f84] transition-colors hover:text-[#e9f4ec]"
        >
          ← Back
        </Link>
      </div>
      <About />
      <Footer />
    </main>
  );
}
