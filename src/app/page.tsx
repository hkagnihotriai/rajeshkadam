import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Philosophy } from "@/components/Philosophy";
import { Workshops } from "@/components/Workshops";
import { Testimonials } from "@/components/Testimonials";
import { Books } from "@/components/Books";
import { Insights } from "@/components/Insights";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Workshops />
        <Testimonials />
        <Books />
        <Insights />
      </main>
      <Footer />
    </>
  );
}
