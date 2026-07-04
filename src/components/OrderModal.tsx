"use client";

import Image from "next/image";
import { X } from "lucide-react";
import type { Book } from "@/lib/data";

type Props = {
  book: Book | null;
  onClose: () => void;
};

const qrImageUrl = process.env.NEXT_PUBLIC_UPI_QR_IMAGE_URL || "/images/upi-qr.png";
const googleFormEmbedUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_EMBED_URL;

export function OrderModal({ book, onClose }: Props) {
  if (!book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-ink/40 px-4 py-8">
      <div className="relative w-full max-w-lg rounded-3xl bg-cream p-8 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-ink/50 hover:text-ink"
        >
          <X size={20} />
        </button>

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
              Scan the QR code with any UPI app to pay ₹{book.price}. Then fill in the
              form below with your shipping address and payment screenshot to confirm
              your order.
            </p>

            <div className="mt-4 flex justify-center">
              <Image
                src={qrImageUrl}
                alt="UPI QR code for Rajesh Anant Kadam"
                width={220}
                height={280}
                className="w-48 rounded-xl border border-ink/10 bg-white object-contain"
              />
            </div>
          </div>
        )}

        <div className="mt-6">
          {googleFormEmbedUrl ? (
            <iframe
              src={googleFormEmbedUrl}
              title="Order confirmation form"
              className="h-[520px] w-full rounded-2xl border border-ink/10"
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
  );
}
