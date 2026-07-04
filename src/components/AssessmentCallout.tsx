"use client";

import { books } from "@/lib/data";
import { useModal } from "@/components/providers/ModalProvider";

export function AssessmentCallout() {
  const { openOrder } = useModal();
  const book = books.find((b) => b.slug === "freedom-in-and-out");

  if (!book) return null;

  return (
    <div className="mt-16 rounded-3xl bg-cream p-8 text-center shadow-sm">
      <p className="font-accent italic text-gold">Free Assessment Tool</p>
      <h3 className="mt-2 font-heading text-2xl font-semibold text-ink">
        {book.title}
      </h3>
      <p className="mx-auto mt-3 max-w-xl text-ink/70">{book.blurb}</p>
      {book.callout && (
        <p className="mx-auto mt-4 max-w-md rounded-2xl bg-gold/15 px-5 py-3 text-sm font-medium text-ink/80">
          {book.callout}
        </p>
      )}
      <button
        onClick={() => openOrder(book)}
        className="mt-6 rounded-full bg-burnt-orange px-6 py-3 font-medium text-cream transition hover:bg-ink"
      >
        Get Free Copy
      </button>
    </div>
  );
}
