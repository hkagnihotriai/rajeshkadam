import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="bg-sandalwood/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent italic text-gold">Services</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-4xl">
            Ways to Walk This Path Together
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-cream p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-heading text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
