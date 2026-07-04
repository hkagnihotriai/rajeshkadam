"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { books } from "@/lib/data";
import { useModal } from "@/components/providers/ModalProvider";

export function BookSpotlight() {
  const { openOrder } = useModal();
  const book = books.find((b) => b.slug === "from-hurt-to-harmony");

  if (!book || !book.endorsements) return null;

  return (
    <section id="books" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent italic text-gold">Featured Book</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-4xl">
            {book.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[360px_1fr]">
          <div className="h-fit lg:sticky lg:top-28">
            {book.coverImageUrl && (
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={book.coverImageUrl}
                  alt={`${book.title} cover`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <p className="mt-5 text-xs uppercase tracking-wide text-ink/50">
              {book.author}
            </p>
            <p className="mt-2 text-sm text-ink/70">{book.blurb}</p>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-heading text-xl font-semibold text-burnt-orange">
                ₹{book.price}
              </span>
              <button
                onClick={() => openOrder(book)}
                className="rounded-full bg-burnt-orange px-6 py-2.5 text-sm font-medium text-cream transition hover:bg-ink"
              >
                Order copy
              </button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {book.endorsements.map((e) => (
              <div key={e.name} className="rounded-3xl bg-sandalwood p-6">
                <Quote className="h-5 w-5 text-burnt-orange/50" />
                <p className="mt-3 font-accent italic text-ink/80">
                  &ldquo;{e.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-medium text-ink">{e.name}</p>
                <p className="text-xs text-ink/50">{e.context}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
