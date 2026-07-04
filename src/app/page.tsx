import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Philosophy } from "@/components/Philosophy";
import { Books } from "@/components/Books";
import { Testimonials } from "@/components/Testimonials";
import { Workshops } from "@/components/Workshops";
import { Insights } from "@/components/Insights";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Philosophy />
        <Books />
        <Testimonials />
        <Workshops />
        <Insights />
      </main>
      <Footer />
    </>
  );
}
