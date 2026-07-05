import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Impact } from "@/components/Impact";
import { Philosophy } from "@/components/Philosophy";
import { Workshops } from "@/components/Workshops";
import { Testimonials } from "@/components/Testimonials";
import { BookSpotlight } from "@/components/BookSpotlight";
import { Insights } from "@/components/Insights";
import { Videos } from "@/components/Videos";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Impact />
        <Philosophy />
        <Workshops />
        <Testimonials />
        <BookSpotlight />
        <Insights />
        <Videos />
      </main>
      <Footer />
    </>
  );
}
