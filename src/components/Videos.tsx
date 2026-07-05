import { Play } from "lucide-react";
import { YouTubeIcon } from "@/components/icons/DecorativeArt";
import { featuredVideoIds, youtubeChannel } from "@/lib/data";

export function Videos() {
  return (
    <section id="videos" className="bg-sandalwood/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent italic text-gold">Watch &amp; Learn</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-4xl">
            Talks, Teachings, and Reflections
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          {featuredVideoIds.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {featuredVideoIds.map((id) => (
                <div
                  key={id}
                  className="aspect-video overflow-hidden rounded-3xl shadow-sm"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title="Rajesh Anant Kadam — YouTube video"
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-ink/20 bg-white/40 text-center text-sm text-ink/50">
              <Play size={28} />
              <span className="px-6">
                Featured videos coming soon — add video IDs to
                featuredVideoIds in src/lib/data.ts to embed them here
              </span>
            </div>
          )}

          <div className="flex flex-col items-center justify-center rounded-3xl bg-cream p-8 text-center shadow-sm">
            <YouTubeIcon className="h-10 w-14 text-burnt-orange" />
            <h3 className="mt-4 font-heading text-lg font-semibold text-ink">
              {youtubeChannel.name}
            </h3>
            <p className="mt-1 text-sm text-ink/60">{youtubeChannel.handle}</p>
            <p className="mt-3 text-sm text-ink/70">
              Subscribe for talks on spiritual counselling, the Panch Kosh,
              and everyday emotional wellness.
            </p>
            <a
              href={youtubeChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 rounded-full bg-burnt-orange px-6 py-2.5 text-sm font-medium text-cream transition hover:bg-ink"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
