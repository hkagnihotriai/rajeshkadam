"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { EnquiryModal, EnquiryData } from "@/components/EnquiryModal";
import { OrderModal } from "@/components/OrderModal";
import type { Book } from "@/lib/data";

export type EnquiryMode = "session" | "workshop_invite" | "workshop_enquiry";

type EnquiryRequest = {
  mode: EnquiryMode;
  workshopTitle?: string;
};

type ModalContextValue = {
  openEnquiry: (request: EnquiryRequest) => void;
  openOrder: (book: Book) => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

const enquiryCopy: Record<EnquiryMode, { title: string; description: string }> = {
  session: {
    title: "Book a Session",
    description: "Share your details and Rajesh's team will get in touch to schedule your session.",
  },
  workshop_invite: {
    title: "Invite for a Workshop",
    description: "Tell us a little about your event and we'll follow up with availability.",
  },
  workshop_enquiry: {
    title: "Enquire About This Workshop",
    description: "Leave your details and we'll share more information and next steps.",
  },
};

async function submitEnquiry(request: EnquiryRequest, data: EnquiryData) {
  await new Promise((resolve) => setTimeout(resolve, 600));
  console.info("Enquiry submitted (not yet persisted):", { ...request, ...data });
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [enquiry, setEnquiry] = useState<EnquiryRequest | null>(null);
  const [orderBook, setOrderBook] = useState<Book | null>(null);

  const value: ModalContextValue = {
    openEnquiry: (request) => setEnquiry(request),
    openOrder: (book) => setOrderBook(book),
  };

  const copy = enquiry ? enquiryCopy[enquiry.mode] : null;

  return (
    <ModalContext.Provider value={value}>
      {children}

      {copy && enquiry && (
        <EnquiryModal
          open={Boolean(enquiry)}
          title={enquiry.workshopTitle ? `${copy.title}: ${enquiry.workshopTitle}` : copy.title}
          description={copy.description}
          onClose={() => setEnquiry(null)}
          onSubmit={(data) => submitEnquiry(enquiry, data)}
        />
      )}

      <OrderModal book={orderBook} onClose={() => setOrderBook(null)} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
