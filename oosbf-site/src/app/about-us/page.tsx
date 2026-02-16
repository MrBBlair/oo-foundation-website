import Link from "next/link";
import Image from "next/image";

const boardMembers = [
  { name: "Bro. Damien Johnson", title: "President", desc: "Leading strategic direction and community partnerships to expand our foundation's reach." },
  { name: "Bro. Luke B. McCoy", title: "Vice President", desc: "Overseeing operational excellence and program development for all scholarship initiatives." },
  { name: "Bro. Marc Campbell", title: "Treasurer", desc: "Ensuring fiscal responsibility and transparent financial management of our philanthropic funds." },
  { name: "Bro. Rakeem Ford", title: "Secretary", desc: "Managing organizational communications and records to maintain operational transparency." },
];

const purposeBlocks = [
  { title: "Foster/Develop excellence", text: "In education and leadership among youth in our service area." },
  { title: "Support deserving", text: "Students with financial assistance for tuition, books, and related expenses." },
  { title: "Prepare the leaders", text: "Of tomorrow through mentorship and community engagement." },
  { title: "Promote achievement", text: "In academic, civic, and service initiatives." },
];

function GoldLine({ full = false }: { full?: boolean }) {
  return <div className={full ? "gold-line-full" : "gold-line"} />;
}

export const metadata = {
  title: "About Us | Omicron Omicron Scholarship and Benevolent Foundation",
  description: "Learn about the OOSBF leadership and our mission to empower youth through scholarships and community support in Daytona Beach.",
};

export default function AboutUsPage() {
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
            About Us
          </h1>
          <GoldLine full />
        </div>
      </section>

      <div className="section-divider" />

      {/* Leadership - Board of Directors (first) */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="curve-blob curve-blob-tr" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            <div className="flex w-full shrink-0 items-center justify-center bg-royal-purple px-8 py-12 lg:w-64">
              <div className="text-center">
                <p className="font-serif text-base font-bold text-gold lg:text-lg">
                  Omicron Omicron Scholarship & Benevolent Foundation
                </p>
                <p className="mt-2 text-sm font-medium text-white">Leadership</p>
              </div>
            </div>
            <div className="flex-1 border-t-2 border-gold bg-white px-6 py-8 lg:border-t-0 lg:border-l-2 lg:border-l-gold lg:px-12">
              <h2 className="text-center font-serif text-2xl font-bold text-stone-900 lg:text-3xl">
                Board of Directors
              </h2>
              <div className="mt-3 flex items-center justify-center gap-8">
                <div className="h-0.5 w-16 bg-stone-600" />
                <div className="h-0.5 w-16 bg-stone-600" />
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {boardMembers.slice(0, 2).map((member) => (
                  <div key={member.name} className="rounded bg-stone-50 p-4">
                    <p className="font-semibold text-stone-900">
                      {member.name} | <span className="font-bold text-gold">{member.title}</span>
                    </p>
                    <p className="mt-1 text-sm text-stone-600">{member.desc}</p>
                  </div>
                ))}
              </div>
              <div className="my-6 h-px w-full bg-stone-300" />
              <div className="grid gap-6 sm:grid-cols-2">
                {boardMembers.slice(2, 4).map((member) => (
                  <div key={member.name} className="rounded bg-stone-50 p-4">
                    <p className="font-semibold text-stone-900">
                      {member.name} | <span className="font-bold text-gold">{member.title}</span>
                    </p>
                    <p className="mt-1 text-sm text-stone-600">{member.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* What We Do - Professional blurb & Purpose & Mission */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="curve-blob curve-blob-br" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-royal-purple lg:text-3xl">
            Our Purpose & Mission
          </h2>
          <GoldLine />
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-700">
            The Omicron Omicron Scholarship and Benevolent Foundation is a 501(c)(3) non-profit organization dedicated to empowering the next generation through education and community support in the Greater Daytona Beach area. Rooted in the values of excellence, service, and benevolence, we bridge the gap between potential and opportunity for local students. Through scholarships, mentorship, and hands-on community initiatives, we are committed to creating a lasting impact in the communities we serve.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {purposeBlocks.map((block, i) => (
              <div key={i} className="rounded bg-stone-50 p-4">
                <h3 className="font-semibold text-stone-900">{block.title}</h3>
                <p className="mt-1 text-sm text-stone-600">{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Hand In Hand */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:gap-12">
            <div className="shrink-0 lg:w-64">
              <div className="mb-4 h-1 w-full bg-royal-purple" />
              <h2 className="font-serif text-3xl font-bold text-royal-purple lg:text-4xl">
                Hand In Hand
              </h2>
            </div>
            <div className="mt-8 flex-1 lg:mt-0">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <div className="mb-3 h-1 w-24 bg-gold" />
                  <h3 className="font-serif text-xl font-bold text-gold lg:text-2xl">
                    The Foundation
                  </h3>
                  <p className="mt-3 text-sm text-stone-700">
                    As the 501(c)(3) non-profit arm, the Foundation manages long-term philanthropic investments and scholarship funds, ensuring fiscal sustainability and donor transparency.
                  </p>
                </div>
                <div>
                  <div className="mb-3 h-1 w-24 bg-gold" />
                  <h3 className="font-serif text-xl font-bold text-gold lg:text-2xl">
                    Local Chapter
                  </h3>
                  <p className="mt-3 text-sm text-stone-700">
                    The Omicron Omicron Chapter provides the &quot;boots on the ground,&quot; identifying immediate community needs and executing direct service projects with dedicated volunteers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-10 w-full overflow-hidden rounded-lg">
            <div className="relative aspect-[8/3] w-full">
              <Image
                src="/hand-in-hand-illustration.png"
                alt="Hand in hand - unity, support, and community across generations"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 80vw, 1200px"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-16">
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-stone-600">
            Ready to support our mission?
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
