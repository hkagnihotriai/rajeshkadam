import { impactHighlights } from "@/lib/data";

export function Impact() {
  return (
    <section id="impact" className="bg-sandalwood/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent italic text-gold">Impact &amp; Recognition</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-4xl">
            A Life of Service Beyond the Counselling Room
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {impactHighlights.map((item) => (
            <div key={item.title} className="rounded-3xl bg-cream p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
