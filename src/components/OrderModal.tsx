"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { Book } from "@/lib/data";

type Props = {
  book: Book | null;
  onClose: () => void;
};

const googleFormEmbedUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL;

export function OrderModal({ book, onClose }: Props) {
  useEffect(() => {
    if (!book) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [book, onClose]);

  if (!book) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4 py-8"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[85vh] w-full max-w-lg flex-col rounded-3xl bg-cream shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 z-10 rounded-full bg-cream/90 p-1 text-ink/50 hover:text-ink"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto p-8">
          <h3 className="font-heading text-2xl font-semibold text-ink">{book.title}</h3>
          <p className="mt-2 text-sm text-ink/70">{book.blurb}</p>
          <p className="mt-3 font-heading text-xl font-semibold text-burnt-orange">
            {book.free ? "Free" : `₹${book.price}`}
          </p>

          {book.free ? (
            <div className="mt-6 rounded-2xl bg-sandalwood p-5">
              <p className="text-sm text-ink/80">
                This handbook is free. Fill in the form below with your email and
                we&apos;ll send your copy.
              </p>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl bg-sandalwood p-5">
              <p className="text-sm text-ink/80">
                Fill in the form below to pay ₹{book.price} via UPI and confirm your
                shipping address.
              </p>
            </div>
          )}

          <div className="mt-6">
            {googleFormEmbedUrl ? (
              <iframe
                src={googleFormEmbedUrl}
                title="Order confirmation form"
                className="h-[420px] w-full rounded-2xl border border-ink/10"
              >
                Loading form…
              </iframe>
            ) : (
              <div className="flex h-64 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-ink/20 bg-white/40 text-center text-sm text-ink/50">
                <span className="px-6">
                  {book.free
                    ? "Free copy request form placeholder — set NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL to embed a real form"
                    : "Order confirmation form placeholder — set NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL to embed the real Google Form"}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
