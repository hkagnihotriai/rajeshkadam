import { panchKosh, stats } from "@/lib/data";
import { PanchKoshRings } from "@/components/icons/DecorativeArt";
import { AssessmentCallout } from "@/components/AssessmentCallout";

export function Philosophy() {
  return (
    <section id="philosophy" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent italic text-gold">Philosophy</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-4xl">
            The Panch Kosh: Five Layers of Self
          </h2>
          <p className="mt-4 text-ink/70">
            A Vedic model of human experience — from the physical body to the
            quiet joy that lies beneath it — used throughout Rajesh&apos;s
            counselling and workshops.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
          <PanchKoshRings className="mx-auto h-72 w-72 text-burnt-orange" />

          <div className="space-y-5">
            {panchKosh.map((kosh) => (
              <div key={kosh.name} className="flex gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <div>
                  <h3 className="font-heading font-semibold text-ink">
                    {kosh.name}{" "}
                    <span className="font-accent italic font-normal text-ink/50">
                      — {kosh.subtitle}
                    </span>
                  </h3>
                  <p className="text-sm text-ink/70">{kosh.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl bg-sandalwood p-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-semibold text-burnt-orange">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink/70">{stat.label}</p>
            </div>
          ))}
        </div>

        <AssessmentCallout />
      </div>
    </section>
  );
}
