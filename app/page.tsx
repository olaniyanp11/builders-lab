import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Departments from "@/components/Departments";
import Structure from "@/components/Structure";
import Levels from "@/components/Levels";
import Vision from "@/components/Vision";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Departments />
      <Structure />
      <Levels />
      <Vision />
      <CTA />
      <Footer />
    </main>
  );
}
