"use client";

import { BookOpen } from "lucide-react";
import { books } from "@/lib/data";
import { useModal } from "@/components/providers/ModalProvider";

export function Books() {
  const { openOrder } = useModal();

  return (
    <section id="books" className="bg-sandalwood/50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent italic text-gold">Books</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-4xl">
            Writings on Healing and Inner Freedom
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {books.map((book) => (
            <div key={book.slug} className="rounded-3xl bg-cream p-6 shadow-sm">
              <div className="flex aspect-[3/4] items-center justify-center rounded-2xl bg-gradient-to-br from-burnt-orange/20 to-gold/30">
                <BookOpen className="h-16 w-16 text-burnt-orange/60" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-ink">
                {book.title}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-ink/50">
                {book.author}
              </p>
              <p className="mt-2 text-sm text-ink/70">{book.blurb}</p>

              {book.endorsements && (
                <div className="mt-4 space-y-3 border-t border-ink/10 pt-4">
                  {book.endorsements.map((e) => (
                    <div key={e.name}>
                      <p className="font-accent italic text-sm text-ink/70">
                        &ldquo;{e.quote}&rdquo;
                      </p>
                      <p className="mt-1 text-xs text-ink/50">
                        — {e.name}, {e.context}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 flex items-center justify-between">
                <span className="font-heading text-lg font-semibold text-burnt-orange">
                  ₹{book.price}
                </span>
                <button
                  onClick={() => openOrder(book)}
                  className="rounded-full bg-burnt-orange px-5 py-2 text-sm font-medium text-cream transition hover:bg-ink"
                >
                  Order copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
