"use client";

import { FormEvent, useState } from "react";
import { X } from "lucide-react";

export type EnquiryData = {
  name: string;
  phone: string;
  note: string;
};

type Props = {
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
  onSubmit: (data: EnquiryData) => Promise<void>;
};

export function EnquiryModal({ open, title, description, onClose, onSubmit }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState<EnquiryData>({ name: "", phone: "", note: "" });

  if (!open) return null;

  function handleClose() {
    setStatus("idle");
    setForm({ name: "", phone: "", note: "" });
    onClose();
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await onSubmit(form);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4">
      <div className="relative w-full max-w-md rounded-3xl bg-cream p-8 shadow-2xl">
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-ink/50 hover:text-ink"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          <div className="py-6 text-center">
            <h3 className="font-heading text-2xl font-semibold text-ink">Thank you</h3>
            <p className="mt-3 text-ink/70">
              Your request has been received. Rajesh&apos;s team will reach out to you soon.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 rounded-full bg-burnt-orange px-6 py-2.5 text-cream transition hover:bg-ink"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="font-heading text-2xl font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm text-ink/70">{description}</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-ink/80">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-2.5 text-ink outline-none focus:border-burnt-orange"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-ink/80">Phone</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-2.5 text-ink outline-none focus:border-burnt-orange"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-ink/80">
                  Note <span className="font-normal text-ink/40">(optional)</span>
                </label>
                <textarea
                  value={form.note}
                  onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                  rows={3}
                  className="w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-2.5 text-ink outline-none focus:border-burnt-orange"
                  placeholder="Anything you'd like to share"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-700">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-full bg-burnt-orange px-6 py-3 font-medium text-cream transition hover:bg-ink disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send request"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
