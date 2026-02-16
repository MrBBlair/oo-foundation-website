import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FirebaseAnalytics } from "@/components/FirebaseAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omicron Omicron Scholarship and Benevolent Foundation | Daytona Beach",
  description:
    "The OOSBF is a 501(c)(3) non-profit providing scholarships to youth in the Greater Daytona Beach area and supporting community uplift through benevolent giving.",
  keywords: ["scholarship", "Daytona Beach", "501(c)(3)", "non-profit", "community", "Omega Psi Phi"],
  icons: {
    icon: "/OOSBF_Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased font-sans">
        <FirebaseAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
