import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

function GoldLine({ full = false }: { full?: boolean }) {
  return <div className={full ? "gold-line-full" : "gold-line"} />;
}

export const metadata = {
  title: "Contact | Omicron Omicron Scholarship and Benevolent Foundation",
  description:
    "Get in touch with OOSBF. Send us a message about volunteering, donations, or general inquiries.",
};

export default function ContactPage() {
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
            Contact Us
          </h1>
          <GoldLine full />
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact form */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="curve-blob curve-blob-tr" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-xl text-stone-600">
            Have a question or want to get involved? Fill out the form below and we&apos;ll get back to you.
          </p>
          <div className="mt-8 max-w-xl">
            <ContactForm />
          </div>
          <p className="mt-6 text-sm text-stone-500">
            Or email directly:{" "}
            <a
              href="mailto:OO.Foundation2011@gmail.com"
              className="text-royal-purple hover:underline"
            >
              OO.Foundation2011@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
