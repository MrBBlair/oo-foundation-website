import Link from "next/link";

function GoldLine({ full = false }: { full?: boolean }) {
  return <div className={full ? "gold-line-full" : "gold-line"} />;
}

export const metadata = {
  title: "Scholarships | Omicron Omicron Scholarship and Benevolent Foundation",
  description: "Learn about the OOSBF High School Essay Contest and scholarship opportunities for students in the Greater Daytona Beach area.",
};

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <section className="relative overflow-hidden bg-white py-8 lg:py-10">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-6 inline-flex text-sm font-medium text-stone-600 transition-colors hover:text-royal-purple"
          >
            ← Back to Home
          </Link>
          <h1 className="font-serif text-3xl font-bold text-royal-purple lg:text-4xl">
            Scholarships
          </h1>
          <GoldLine full />
        </div>
      </section>

      <div className="section-divider" />

      {/* High School Essay Contest */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="curve-blob curve-blob-tr" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-royal-purple lg:text-3xl">
            High School Essay Contest
          </h2>
          <GoldLine />
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-700">
            Each year, the Omicron Omicron Chapter hosts a High School Essay Contest to recognize and reward outstanding student achievement in the Greater Daytona Beach area. This contest provides high school students with an opportunity to showcase their writing skills, critical thinking, and engagement with topics that matter to our community.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-stone-700">
            More details—including contest dates, essay topics, eligibility requirements, and award information—will be released at another time. Please check back for updates.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-16">
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-stone-600">
            Ready to support our scholarship programs?
          </p>
          <Link
            href="/donate"
            className="mt-4 inline-flex rounded bg-royal-purple px-8 py-3 font-semibold text-white transition-colors hover:bg-royal-purple/90"
          >
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  );
}
