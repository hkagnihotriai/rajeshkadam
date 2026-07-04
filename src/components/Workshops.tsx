"use client";

import { Clock } from "lucide-react";
import { services, workshops } from "@/lib/data";
import { useModal } from "@/components/providers/ModalProvider";

export function Workshops() {
  const { openEnquiry } = useModal();

  return (
    <section id="workshops" className="bg-sandalwood/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent italic text-gold">Workshops &amp; Sessions</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-4xl">
            Ways to Walk This Path Together
          </h2>
        </div>

        <h3 className="mt-14 text-center font-heading text-xl font-semibold text-ink md:text-2xl">
          One-on-One Sessions
        </h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-cream p-6 shadow-sm transition hover:shadow-md"
            >
              <h4 className="font-heading text-lg font-semibold text-ink">
                {service.title}
              </h4>
              <p className="mt-2 text-sm text-ink/70">{service.description}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-center font-heading text-xl font-semibold text-ink md:text-2xl">
          Group Workshops
        </h3>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <div
              key={workshop.title}
              className="flex flex-col rounded-3xl bg-cream p-6 shadow-sm"
            >
              <span className="w-fit rounded-full bg-gold/20 px-3 py-1 text-xs font-medium text-burnt-orange">
                {workshop.category}
              </span>
              <h4 className="mt-4 font-heading text-lg font-semibold text-ink">
                {workshop.title}
              </h4>
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
