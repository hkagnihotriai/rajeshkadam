import { insightPreviews } from "@/lib/data";

export function Insights() {
  return (
    <section id="insights" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent italic text-gold">Insights</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-4xl">
            Writing on the Quiet Life
          </h2>
          <p className="mt-4 text-ink/70">
            A blog is on the way — reflections on grief, growth, and the Panch
            Kosh, written by Rajesh.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {insightPreviews.map((post) => (
            <div key={post.title} className="rounded-3xl bg-sandalwood p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-burnt-orange">
                {post.date}
              </p>
              <h3 className="mt-2 font-heading text-lg font-semibold text-ink">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
