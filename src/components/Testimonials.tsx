import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent italic text-gold">Testimonials</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-4xl">
            Words From Those He Has Walked With
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl bg-sandalwood p-6">
              <Quote className="h-6 w-6 text-burnt-orange/50" />
              <p className="mt-3 font-accent italic text-ink/80">{t.quote}</p>
              <p className="mt-4 text-sm font-medium text-ink">{t.name}</p>
              <p className="text-xs text-ink/50">{t.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
