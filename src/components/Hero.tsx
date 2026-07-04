"use client";

import { DiyaArt, LotusIcon } from "@/components/icons/DecorativeArt";
import { useModal } from "@/components/providers/ModalProvider";

export function Hero() {
  const { openEnquiry } = useModal();

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-16 md:pt-24">
      <LotusIcon className="pointer-events-none absolute -left-6 -top-4 -z-10 h-20 w-32 text-burnt-orange/40 md:h-28 md:w-48" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="font-accent italic text-lg text-gold">
            Where Vedic wisdom meets modern psychology
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight text-ink md:text-5xl">
            A quieter mind. <span className="text-burnt-orange">A wiser heart.</span>
          </h1>
          <p className="mt-6 max-w-lg text-ink/70">
            Rajesh Anant Kadam is a spiritual counsellor, educator, and Head of the
            Department of Spiritual Care at Bhaktivedanta Hospital &amp; Research
            Institute. For over 20 years, he has walked beside individuals and
            families through life&apos;s hardest questions — with warmth, patience,
            and the steady clarity of Vedic wisdom.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => openEnquiry({ mode: "session" })}
              className="rounded-full bg-burnt-orange px-6 py-3 font-medium text-cream transition hover:bg-ink"
            >
              Book a Session
            </button>
            <button
              onClick={() => openEnquiry({ mode: "workshop_invite" })}
              className="rounded-full border border-burnt-orange px-6 py-3 font-medium text-burnt-orange transition hover:bg-burnt-orange hover:text-cream"
            >
              Invite for Workshop
            </button>
            <a
              href="#philosophy"
              className="rounded-full px-6 py-3 font-medium text-ink/70 underline decoration-gold decoration-2 underline-offset-4 transition hover:text-ink"
            >
              Explore Teachings
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative aspect-square w-full max-w-sm rounded-[2.5rem] bg-gradient-to-br from-sandalwood to-gold/30 p-8 shadow-xl">
            <DiyaArt className="h-full w-full" />
          </div>

          <div className="absolute -bottom-6 left-1/2 w-64 -translate-x-1/2 rounded-2xl bg-white/90 p-5 text-center shadow-lg backdrop-blur md:-right-8 md:left-auto md:translate-x-0">
            <p className="font-accent italic text-ink/80">
              &ldquo;Peace is not the absence of noise, but the presence of a
              quiet heart.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
