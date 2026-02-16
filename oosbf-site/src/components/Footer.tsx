import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-between sm:items-start">
          <Link href="/" className="shrink-0">
            <Image
              src="/OOSBF_Logo.png"
              alt="Omicron Omicron Scholarship and Benevolent Foundation"
              width={80}
              height={80}
              className="h-16 w-auto object-contain sm:h-20 sm:w-20"
            />
          </Link>
          <span className="flex items-center gap-2 text-sm text-stone-600">
            <MapPin className="h-4 w-4 shrink-0 text-royal-purple" />
            P.O. Box 9571, Daytona Beach, FL 32120
          </span>
        </div>
        <p className="mt-6 text-center text-xs text-stone-500">
          The Omicron Omicron Scholarship and Benevolent Foundation is a registered 501(c)(3) non-profit organization. Donations are tax-deductible to the fullest extent allowed by law. EIN available upon request.
        </p>
      </div>
    </footer>
  );
}
