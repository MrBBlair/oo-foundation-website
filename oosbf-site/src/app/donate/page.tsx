"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function GoldLine({ full = false }: { full?: boolean }) {
  return <div className={full ? "gold-line-full" : "gold-line"} />;
}

// Update these with your actual payment details
const CASHAPP_TAG = "$OOSBF";
const ZELLE_EMAIL = "OO.Foundation2011@gmail.com";

export default function DonatePage() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [canceledMessage, setCanceledMessage] = useState<string | null>(null);

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setSuccessMessage("Thank you for your donation! Your support makes a difference.");
    }
    if (searchParams.get("canceled") === "true") {
      setCanceledMessage("Your donation was canceled. You can try again whenever you're ready.");
    }
  }, [searchParams]);

  const handleStripeDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const numAmount = parseFloat(amount);
    if (!amount || isNaN(numAmount) || numAmount < 0.5) {
      setError("Please enter a valid amount (minimum $0.50).");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: numAmount }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Payment failed");
      if (data.url) window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast - for now we'll keep it simple
    alert(`${label} copied to clipboard!`);
  };

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
            Donate
          </h1>
          <GoldLine full />
          {successMessage && (
            <div className="mt-6 rounded-lg bg-green-50 p-4 text-green-800">
              {successMessage}
            </div>
          )}
          {canceledMessage && (
            <div className="mt-6 rounded-lg bg-amber-50 p-4 text-amber-800">
              {canceledMessage}
            </div>
          )}
        </div>
      </section>

      <div className="section-divider" />

      {/* Why Donate */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="curve-blob curve-blob-tr" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-royal-purple lg:text-3xl">
            Why Your Donation Matters
          </h2>
          <GoldLine />
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-700">
            Your generous support enables the Omicron Omicron Scholarship and Benevolence Fund Foundation to expand our impact throughout the year. Every contribution helps us offer more scholarships to deserving students in the Greater Daytona Beach area, fund our High School Essay Contest, and sustain our community service initiatives.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-stone-700">
            As a 501(c)(3) non-profit organization, your donations are tax-deductible to the fullest extent allowed by law. 100% of your gift goes directly toward scholarships and community programs—empowering the next generation through education and service.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Payment Options */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20">
        <div className="curve-blob curve-blob-br" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-royal-purple lg:text-3xl">
            Ways to Give
          </h2>
          <GoldLine />

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* CashApp */}
            <div className="rounded-lg border border-stone-200 bg-stone-50/50 p-6">
              <h3 className="font-serif text-xl font-bold text-gold">CashApp</h3>
              <p className="mt-2 text-sm text-stone-600">
                Send your donation via CashApp to our official account.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <code className="rounded bg-white px-3 py-2 font-mono text-lg font-bold text-royal-purple">
                  {CASHAPP_TAG}
                </code>
                <button
                  type="button"
                  onClick={() => copyToClipboard(CASHAPP_TAG, "CashApp tag")}
                  className="rounded bg-royal-purple px-3 py-2 text-sm font-medium text-white hover:bg-royal-purple/90"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Zelle */}
            <div className="rounded-lg border border-stone-200 bg-stone-50/50 p-6">
              <h3 className="font-serif text-xl font-bold text-gold">Zelle</h3>
              <p className="mt-2 text-sm text-stone-600">
                Use Zelle to send your donation directly from your bank app.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <code className="break-all rounded bg-white px-3 py-2 font-mono text-sm text-royal-purple">
                  {ZELLE_EMAIL}
                </code>
                <button
                  type="button"
                  onClick={() => copyToClipboard(ZELLE_EMAIL, "Zelle email")}
                  className="rounded bg-royal-purple px-3 py-2 text-sm font-medium text-white hover:bg-royal-purple/90"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Stripe / Card */}
            <div className="rounded-lg border border-stone-200 bg-stone-50/50 p-6">
              <h3 className="font-serif text-xl font-bold text-gold">
                Credit or Debit Card
              </h3>
              <p className="mt-2 text-sm text-stone-600">
                Donate securely with your card via Stripe.
              </p>
              <form onSubmit={handleStripeDonate} className="mt-4 space-y-3">
                <div>
                  <label htmlFor="amount" className="sr-only">
                    Amount (USD)
                  </label>
                  <div className="flex gap-2">
                    <span className="flex items-center rounded-l-md border border-stone-300 bg-white px-3 text-stone-600">
                      $
                    </span>
                    <input
                      id="amount"
                      type="number"
                      min="0.5"
                      step="0.01"
                      placeholder="25.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full rounded-r-md border border-stone-300 px-3 py-2 focus:border-royal-purple focus:outline-none focus:ring-1 focus:ring-royal-purple"
                    />
                  </div>
                </div>
                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded bg-royal-purple px-4 py-3 font-semibold text-white transition-colors hover:bg-royal-purple/90 disabled:opacity-50"
                >
                  {loading ? "Processing…" : "Donate with Card"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-16">
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-stone-600">
            Questions about donating? We&apos;re here to help.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded bg-royal-purple px-8 py-3 font-semibold text-white transition-colors hover:bg-royal-purple/90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
