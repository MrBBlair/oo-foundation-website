import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Donate | Omicron Omicron Scholarship and Benevolent Foundation",
  description:
    "Support OOSBF with tax-deductible donations. Give via CashApp, Zelle, or card. Your gift helps fund scholarships and community programs in Daytona Beach.",
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={null}>{children}</Suspense>;
}
