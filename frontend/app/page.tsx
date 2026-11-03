import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-transparent text-[#111111]">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <AboutSection />
      <Footer />
    </main>
  );
}
