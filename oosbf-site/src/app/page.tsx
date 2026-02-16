"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Facebook,
  MessageCircle,
  Download,
  ExternalLink,
  Twitter,
  Share2,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const missionStatements = [
  "Dedicated to empowering the next generation through education and community support.",
  "Rooted in the values of excellence, service, and benevolence.",
  "Bridging the gap between potential and opportunity for local students.",
  "Committed to creating a lasting impact in the communities we serve.",
];

const purposeBlocks = [
  { title: "Foster/Develop excellence", text: "In education and leadership among youth in our service area." },
  { title: "Support deserving", text: "Students with financial assistance for tuition, books, and related expenses." },
  { title: "Prepare the leaders", text: "Of tomorrow through mentorship and community engagement." },
  { title: "Promote achievement", text: "In academic, civic, and service initiatives." },
];

const scholarshipBlocks = [
  { title: "Annual Awards", text: "Scholarships for high school seniors and undergraduate students demonstrating academic promise and community involvement." },
  { title: "Mentorship", text: "Connecting recipients with professionals and Brothers for guidance throughout their educational journey." },
  { title: "Greater Florida", text: "Serving students across the Greater Daytona Beach and Florida region." },
  { title: "Career Teaching", text: "Providing tools and resources to support our graduates as they achieve their goals." },
];

const benevolenceBlocks = [
  { title: "Working for Widows", text: "Our Brothers provide yard work, home repairs, and maintenance for widows and seniors in the community, ensuring they can remain safely in their homes." },
  { title: "One Yard, One Home", text: "Monthly service projects helping residents with yard work, repairs, and household needs across the Greater Daytona Beach area." },
  { title: "Campus Cleanups", text: "Partnering with local schools and universities to beautify campuses, remove litter, and create cleaner learning environments for students." },
  { title: "Adopt a Road", text: "We maintain adopted roadways through regular cleanups, keeping our community streets clean and demonstrating our commitment to civic responsibility." },
  { title: "Community Outreach", text: "Engaging youth and families in educational programs, mentorship, and enrichment initiatives that strengthen our neighborhoods." },
  { title: "Service in Action", text: "Bridging the chapter and community through hands-on volunteerism, food drives, and partnerships with local organizations." },
];

const impactBlocks = [
  { title: "Direct Funding", text: "100% of donations go directly to scholarships and community programs." },
  { title: "Expanding Reach", text: "Your support helps us serve more students and families each year." },
  { title: "Transparency", text: "Regular updates on how your contributions create measurable impact." },
  { title: "Mission First", text: "Every partnership drives our service and scholarship mission forward." },
];

function SectionDivider() {
  return <div className="section-divider" />;
}

function GoldLine({ full = false }: { full?: boolean }) {
  return <div className={full ? "gold-line-full" : "gold-line"} />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero / Header Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="curve-blob curve-blob-tr" />
        <div className="relative flex min-h-[420px] flex-col">
          <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-12 lg:px-12 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex justify-center"
            >
              <Image
                src="/logo.png"
                alt="Omicron Omicron Scholarship and Benevolence Fund Foundation"
                width={686}
                height={455}
                className="h-[235px] w-auto sm:h-[314px] lg:h-[393px]"
                priority
              />
            </motion.div>
            <motion.h1
              className="font-serif text-2xl font-bold text-royal-purple sm:text-3xl lg:text-4xl xl:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Omicron Omicron
              <br />
              Scholarship and Benevolence Fund
              <br />
              Foundation, Inc.
            </motion.h1>
            <motion.p
              className="mt-3 font-serif text-base font-bold text-gold lg:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering Excellence & Service
            </motion.p>
            <motion.div
              className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2"
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="rounded bg-stone-50 p-4 text-sm text-royal-purple sm:pr-3">
                {missionStatements[0]}
              </motion.div>
              <motion.div variants={fadeInUp} className="rounded bg-stone-50 p-4 text-sm text-royal-purple sm:pl-3">
                {missionStatements[1]}
              </motion.div>
              <div className="gold-line-full max-w-full" />
              <div className="gold-line-full max-w-full" />
              <motion.div variants={fadeInUp} className="rounded bg-stone-50 p-4 text-sm text-royal-purple sm:pr-3">
                {missionStatements[2]}
              </motion.div>
              <motion.div variants={fadeInUp} className="rounded bg-stone-50 p-4 text-sm text-royal-purple sm:pl-3">
                {missionStatements[3]}
              </motion.div>
              <div className="gold-line-full max-w-full" />
              <div className="gold-line-full max-w-full" />
            </motion.div>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded bg-royal-purple px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-royal-purple/90"
              >
                Donate Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Our Purpose & Mission - Image first, then text */}
      <section id="about" className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="curve-blob curve-blob-br" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] w-full overflow-hidden rounded-lg">
            <Image
              src="/scholarship-awards-group.png"
              alt="Scholarship award recipients and foundation members with certificates"
              width={1200}
              height={514}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="font-serif text-2xl font-bold text-royal-purple lg:text-3xl">
                Our Purpose & Mission
              </h2>
              <GoldLine />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {purposeBlocks.map((block, i) => (
                <div key={i} className="rounded bg-stone-50 p-4">
                  <h3 className="font-semibold text-stone-900">{block.title}</h3>
                  <p className="mt-1 text-sm text-stone-600">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Investing in the Future (Scholarship) */}
      <section id="scholarships" className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="curve-blob curve-blob-br" />
        <div className="relative flex">
          <div className="hidden w-24 shrink-0 items-center justify-center bg-royal-purple lg:flex">
            <span
              className="font-serif text-base font-bold text-white"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
            >
              Scholarship
            </span>
          </div>
          <div className="flex-1">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <h2 className="font-serif text-2xl font-bold text-royal-purple lg:text-3xl">
                Investing in the Future
              </h2>
              <GoldLine />
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div className="flex justify-center lg:justify-start">
                  <div className="aspect-[4/3] w-full max-w-[60%] overflow-hidden rounded-lg">
                    <Image
                      src="/scholarship-check-presentation.png"
                      alt="Scholarship award presentation - Kaia Horn, 1st place essay contest winner, with Vice Basileus Bro. Marc Campbell"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 1024px) 60vw, 30vw"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {scholarshipBlocks.map((block, i) => (
                    <div key={i} className="rounded bg-stone-50 p-4">
                      <h3 className="font-semibold text-stone-900">{block.title}</h3>
                      <p className="mt-1 text-sm text-stone-600">{block.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded bg-royal-purple px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-royal-purple/90"
                >
                  <Download className="h-4 w-4" />
                  Download Application
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded border-2 border-royal-purple px-6 py-3 text-sm font-semibold text-royal-purple transition-colors hover:bg-royal-purple/5"
                >
                  <ExternalLink className="h-4 w-4" />
                  Apply Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* The Impact Of Your Support - Text top, image bottom */}
      <section id="donate" className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="curve-blob curve-blob-tl" />
        <div className="curve-blob curve-blob-br" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-stone-900 lg:text-3xl">
            The Impact Of Your Support
          </h2>
          <GoldLine />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {impactBlocks.map((block, i) => (
              <div key={i} className="rounded bg-stone-50 p-4">
                <h3 className="font-semibold text-stone-900">{block.title}</h3>
                <p className="mt-1 text-sm text-stone-600">{block.text}</p>
              </div>
            ))}
          </div>
          <Link
            href="/donate"
            className="mt-8 inline-flex items-center justify-center rounded bg-gold px-8 py-4 font-semibold text-royal-purple transition-colors hover:bg-gold-light"
          >
            Donate Now
          </Link>
          <div className="mt-10 w-full overflow-hidden rounded-lg">
            <Image
              src="/impact-volunteer-food-service.png"
              alt="Volunteers and community members at a food distribution event - community service in action"
              width={1200}
              height={800}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Benevolence & Que-mmunity Service */}
      <section id="programs" className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="curve-blob curve-blob-tr" />
        <div className="curve-blob curve-blob-bl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-12">
            {/* Article block - left */}
            <div className="flex w-full shrink-0 flex-col lg:w-96">
              <a
                href="https://daytonaques.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-medium text-stone-900 hover:text-royal-purple"
              >
                Local Omegas help widows through their &apos;Que-mmunity Service&apos; initiative
              </a>
              <GoldLine />
              <div className="mt-4 flex gap-3">
                <a href="#" className="rounded p-2 text-stone-500 hover:bg-stone-100 hover:text-royal-purple" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="rounded p-2 text-stone-500 hover:bg-stone-100 hover:text-royal-purple" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="rounded p-2 text-stone-500 hover:bg-stone-100 hover:text-royal-purple" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="#" className="rounded p-2 text-stone-500 hover:bg-stone-100 hover:text-royal-purple" aria-label="Pinterest">
                  <Share2 className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-4 overflow-hidden rounded-lg lg:min-h-0 lg:flex-1">
                <Image
                  src="/que-mmunity-service-article.png"
                  alt="Local Omegas help widows through their Que-mmunity Service initiative - Daytona Times article"
                  width={800}
                  height={1200}
                  className="h-auto w-full object-contain lg:h-full lg:object-contain lg:object-top"
                  sizes="(max-width: 1024px) 100vw, 384px"
                />
              </div>
            </div>
            {/* Right content */}
            <div className="flex flex-1 flex-col pt-8 lg:pt-0 lg:min-w-0">
              <h2 className="font-serif text-2xl font-bold text-royal-purple lg:text-3xl">
                Benevolence & Que-mmunity Service
              </h2>
              <GoldLine />
              <p className="mt-4 text-stone-600 leading-relaxed">
                Through our Que-mmunity Service initiative, the Omicron Omicron Chapter puts brotherhood into action—supporting widows, maintaining our roads and campuses, and partnering with local families to build a stronger community.
              </p>
              <div className="mt-auto grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-3">
                {benevolenceBlocks.map((block, i) => (
                  <div key={i} className="rounded-lg border border-stone-100 bg-stone-50/50 p-4">
                    <h3 className="font-semibold text-stone-900">{block.title}</h3>
                    <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{block.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Get Involved & Contact Us */}
      <section id="contact" className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="curve-blob curve-blob-tr" />
        <div className="curve-blob curve-blob-br" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {/* Text content - always on top */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900 lg:text-3xl">
                Get Involved & Contact Us
              </h2>
              <GoldLine />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded bg-stone-50 p-4">
                  <h3 className="font-semibold text-stone-900">Donate</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    Support our mission through tax-deductible contributions. Every gift makes a difference.
                  </p>
                </div>
                <div className="rounded bg-stone-50 p-4">
                  <h3 className="font-semibold text-stone-900">Volunteer</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    Partner with us in community service and educational initiatives.
                  </p>
                </div>
                <div className="gold-line-full max-w-full" />
                <div className="gold-line-full max-w-full" />
              </div>
              <p className="mt-6 text-sm font-medium text-stone-700">Email Inquiries:</p>
              <a
                href="mailto:OO.Foundation2011@gmail.com"
                className="mt-1 inline-flex items-center gap-2 text-royal-purple hover:underline"
              >
                <Mail className="h-5 w-5" />
                OO.Foundation2011@gmail.com
              </a>
            </div>
            {/* Three photos - always below text, stay in a row when stretched */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="aspect-[3/4] w-full max-w-[280px] shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/get-involved-community-service.png"
                  alt="Omega Psi Phi brothers in community service - members in purple at a service project"
                  width={420}
                  height={560}
                  className="h-full w-full object-cover object-center"
                  sizes="280px"
                />
              </div>
              <div className="aspect-[3/4] w-full max-w-[280px] shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/essay-contest-2026.png"
                  alt="2026 Omicron Omicron High School Essay Contest - Coming Soon!"
                  width={420}
                  height={560}
                  className="h-full w-full object-cover object-center"
                  sizes="280px"
                />
              </div>
              <div className="aspect-[3/4] w-full max-w-[280px] shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/donation-best-nation.png"
                  alt="Donation is the best Nation"
                  width={420}
                  height={560}
                  className="h-full w-full object-cover object-center"
                  sizes="280px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer Bar */}
      <div className="bg-black py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-12 px-4 sm:gap-16">
          <a href="tel:+1234567890" className="flex flex-col items-center gap-2 text-white transition-opacity hover:opacity-80">
            <Phone className="h-6 w-6 text-green-400" />
            <span className="text-sm">Phone</span>
          </a>
          <a href="mailto:OO.Foundation2011@gmail.com" className="flex flex-col items-center gap-2 text-white transition-opacity hover:opacity-80">
            <Mail className="h-6 w-6 text-pink-400" />
            <span className="text-sm">Email</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-2 text-white transition-opacity hover:opacity-80">
            <Facebook className="h-6 w-6 text-blue-400" />
            <span className="text-sm">Facebook</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-2 text-white transition-opacity hover:opacity-80">
            <MessageCircle className="h-6 w-6 text-blue-400" />
            <span className="text-sm">Chat</span>
          </a>
        </div>
      </div>
    </div>
  );
}
