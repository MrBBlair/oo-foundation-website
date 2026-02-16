"use client";

import { useState } from "react";
import { Mail, Send, ExternalLink } from "lucide-react";

const FOUNDATION_EMAIL = "OO.Foundation2011@gmail.com";

function buildMailtoLink(params: { name: string; email: string; phone: string; subject: string; message: string }) {
  const body = [
    `Name: ${params.name}`,
    `Email: ${params.email}`,
    params.phone ? `Phone: ${params.phone}` : null,
    "",
    params.message,
  ]
    .filter(Boolean)
    .join("\n");
  const subject = params.subject || "Contact from OOSBF Website";
  return `mailto:${FOUNDATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildGmailLink(params: { name: string; email: string; phone: string; subject: string; message: string }) {
  const body = [
    `Name: ${params.name}`,
    `Email: ${params.email}`,
    params.phone ? `Phone: ${params.phone}` : null,
    "",
    params.message,
  ]
    .filter(Boolean)
    .join("\n");
  const subject = params.subject || "Contact from OOSBF Website";
  return `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(FOUNDATION_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildOutlookLink(params: { name: string; email: string; phone: string; subject: string; message: string }) {
  const body = [
    `Name: ${params.name}`,
    `Email: ${params.email}`,
    params.phone ? `Phone: ${params.phone}` : null,
    "",
    params.message,
  ]
    .filter(Boolean)
    .join("\n");
  const subject = params.subject || "Contact from OOSBF Website";
  return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(FOUNDATION_EMAIL)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showChoices, setShowChoices] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const params = { name, email, phone, subject, message };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setShowChoices(true);
  };

  const handleOpenEmail = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleReset = () => {
    setShowChoices(false);
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setError(null);
  };

  if (showChoices) {
    return (
      <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
        <h3 className="font-serif text-lg font-bold text-royal-purple">
          Choose your email provider
        </h3>
        <p className="mt-2 text-sm text-stone-600">
          Your message is ready. Select how you&apos;d like to send it:
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={() => handleOpenEmail(buildMailtoLink(params))}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-4 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50"
          >
            <Mail className="h-5 w-5" />
            Default Email App
          </button>
          <button
            type="button"
            onClick={() => handleOpenEmail(buildGmailLink(params))}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-red-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-red-50"
          >
            <ExternalLink className="h-5 w-5" />
            Gmail
          </button>
          <button
            type="button"
            onClick={() => handleOpenEmail(buildOutlookLink(params))}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-blue-200 bg-white px-4 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-blue-50"
          >
            <ExternalLink className="h-5 w-5" />
            Outlook
          </button>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="mt-6 text-sm text-stone-500 underline hover:text-royal-purple"
        >
          Start over
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-stone-700">
          Name *
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 focus:border-royal-purple focus:outline-none focus:ring-1 focus:ring-royal-purple"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-stone-700">
          Email *
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 focus:border-royal-purple focus:outline-none focus:ring-1 focus:ring-royal-purple"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-stone-700">
          Phone
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 focus:border-royal-purple focus:outline-none focus:ring-1 focus:ring-royal-purple"
          placeholder="(555) 123-4567"
        />
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-stone-700">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 focus:border-royal-purple focus:outline-none focus:ring-1 focus:ring-royal-purple"
          placeholder="e.g., Volunteer inquiry"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-stone-700">
          Message *
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-stone-900 focus:border-royal-purple focus:outline-none focus:ring-1 focus:ring-royal-purple"
          placeholder="How can we help?"
        />
      </div>
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-royal-purple px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-royal-purple/90"
      >
        <Send className="h-4 w-4" />
        Continue to Send
      </button>
    </form>
  );
}
