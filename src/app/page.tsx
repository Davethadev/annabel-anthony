import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/Hero";
import SkillsAndTools from "../components/SkillsAndTools";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main id="top" className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <SkillsAndTools />
      <Testimonials />
      <Footer />
    </main>
  );
}
