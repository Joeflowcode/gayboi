"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { site } from "@/data/site";

export default function LeadForm({ defaultService, defaultCity }: { defaultService?: string; defaultCity?: string }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border-2 border-forest-600 bg-forest-50 p-8 text-center">
        <p className="text-3xl mb-2">✅</p>
        <h3 className="text-xl font-extrabold text-forest-900">Request Received!</h3>
        <p className="mt-2 text-gray-700">
          We&apos;ll call you within one business hour (7am–7pm). For emergencies, call us now at{" "}
          <a href={site.phoneHref} className="font-bold text-forest-700 underline">{site.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to form backend (Formspree, Netlify Forms, or /api/lead endpoint)
        // and fire conversion event (gtag('event','generate_lead')).
        setSent(true);
      }}
    >
      <h3 className="text-xl font-extrabold text-forest-900">Get a Fast, Free Estimate</h3>
      <p className="text-sm text-gray-600 -mt-2">No obligation. We respond within one business hour.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <input required name="name" placeholder="Name*" className="rounded-lg border border-gray-300 px-4 py-3 w-full" />
        <input required name="phone" type="tel" placeholder="Phone*" className="rounded-lg border border-gray-300 px-4 py-3 w-full" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <select name="service" defaultValue={defaultService ?? ""} required className="rounded-lg border border-gray-300 px-4 py-3 w-full bg-white">
          <option value="" disabled>Service Needed*</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
        </select>
        <select name="city" defaultValue={defaultCity ?? ""} required className="rounded-lg border border-gray-300 px-4 py-3 w-full bg-white">
          <option value="" disabled>Your Area*</option>
          {cities.map((c) => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
          <option value="other">Other / Not Listed</option>
        </select>
      </div>
      <textarea name="details" placeholder="Tell us about the job (tree size, location, urgency)…" rows={3} className="rounded-lg border border-gray-300 px-4 py-3 w-full" />
      <button type="submit" className="w-full rounded-lg bg-amber-brand text-forest-900 font-extrabold py-4 text-lg hover:opacity-90">
        Get My Free Estimate →
      </button>
      <p className="text-xs text-gray-500 text-center">
        🚨 Tree on a structure? Skip the form — call <a href={site.phoneHref} className="font-bold underline">{site.phone}</a> for 24/7 emergency response.
      </p>
    </form>
  );
}
