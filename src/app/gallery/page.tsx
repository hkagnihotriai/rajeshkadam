import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Event Gallery — RadiantSoul",
  description:
    "Photos from Rajesh Anant Kadam's talks, workshops, and community work — conferences, academic partnerships, and outreach.",
};

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-accent italic text-gold">Event Gallery</p>
            <h1 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-4xl">
              Moments From the Work
            </h1>
            <p className="mt-4 text-ink/70">
              A glimpse into talks, workshops, and community outreach over the
              years.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-3xl bg-sandalwood shadow-sm"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4 text-sm text-ink/70">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
