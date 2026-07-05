import Image from "next/image";

const credentials = [
  "BA, PGDPC, MS in Counselling and Psychotherapy",
  "Head, Department of Spiritual Care — Bhaktivedanta Hospital & Research Institute, Mira Road",
  "34 years of professional experience; 20+ years in spiritual counselling",
  "Author of two books on emotional and spiritual healing",
  "Speaker at IIT Dhanbad, IIT Mandi, and Tata Memorial Centre",
  "Associate Counsellor, Thakur Engineering College and MCA College, Kandivali",
];

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-accent italic text-gold">About Rajesh</p>
        <h2 className="mt-2 font-heading text-3xl font-semibold text-ink md:text-4xl">
          A bridge between ancient wisdom and modern psychology
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,260px)_1fr]">
          <div className="mx-auto w-48 shrink-0 overflow-hidden rounded-3xl shadow-lg md:mx-0 md:w-full">
            <Image
              src="/images/rajesh-profile.jpg"
              alt="Rajesh Anant Kadam"
              width={600}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="space-y-4 text-ink/80">
            <p>
              Rajesh Anant Kadam has spent over two decades helping people find
              steadiness amid life&apos;s most difficult moments — grief, conflict,
              illness, and searching. He counsels not from theory alone, but
              from thousands of hours spent listening: to more than 2,000
              families across hospital wards, classrooms, and quiet
              conversations.
            </p>
            <p>
              Introduced to ISKCON in 1995 and initiated by HH Radhanath Swami
              in 2000, his work weaves Vedic psychology — most notably the
              Panch Kosh model of the five sheaths of the self — together
              with formal training in modern counselling and psychotherapy.
              The result is a practice that feels ancient and current at once:
              spiritual without being religious, practical without losing
              depth.
            </p>
          </div>
        </div>

        <ul className="mt-10 grid gap-3 rounded-3xl bg-sandalwood p-6 sm:grid-cols-2">
          {credentials.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-ink/80">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-burnt-orange" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
