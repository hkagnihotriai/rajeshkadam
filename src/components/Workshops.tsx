"use client";

import { Clock } from "lucide-react";
import { workshops } from "@/lib/data";
import { useModal } from "@/components/providers/ModalProvider";

export function Workshops() {
  const { openEnquiry } = useModal();

  return (
    <section id="workshops" className="bg-sandalwood/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent italic text-gold">Workshops</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-4xl">
            Learn Together, In Person
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <div
              key={workshop.title}
              className="flex flex-col rounded-3xl bg-cream p-6 shadow-sm"
            >
              <span className="w-fit rounded-full bg-gold/20 px-3 py-1 text-xs font-medium text-burnt-orange">
                {workshop.category}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-ink">
                {workshop.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-ink/70">{workshop.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-ink/50">
                  <Clock size={14} />
                  {workshop.duration}
                </span>
                <button
                  onClick={() =>
                    openEnquiry({ mode: "workshop_enquiry", workshopTitle: workshop.title })
                  }
                  className="rounded-full border border-burnt-orange px-4 py-1.5 text-sm font-medium text-burnt-orange transition hover:bg-burnt-orange hover:text-cream"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
