import type { Metadata } from "next";
import { site } from "@/data/site";
import LeadForm from "@/components/LeadForm";
import { TrustBadges } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Free Tree Service Estimate | Contact Oregon Tree Pros",
  description:
    "Request a free tree removal or trimming estimate anywhere in our Oregon service area. Call, text, or send the form — we respond within one business hour.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-forest-900">
            Get Your Free Estimate
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Tell us what&apos;s going on with your trees and we&apos;ll respond within one business hour,
            7am–7pm, seven days a week. On-site estimates are free and usually scheduled within
            48 hours.
          </p>
          <div className="mt-8 space-y-4">
            <a href={site.phoneHref} className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 hover:border-forest-600">
              <span className="text-3xl">📞</span>
              <span>
                <span className="block font-bold text-forest-900">Call or Text</span>
                <span className="text-forest-700 font-semibold">{site.phone}</span>
                <span className="block text-sm text-gray-500">{site.hours}</span>
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 hover:border-forest-600">
              <span className="text-3xl">✉️</span>
              <span>
                <span className="block font-bold text-forest-900">Email</span>
                <span className="text-forest-700 font-semibold">{site.email}</span>
                <span className="block text-sm text-gray-500">Attach photos for faster ballpark quotes</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5">
              <span className="text-3xl">💬</span>
              <span>
                <span className="block font-bold text-forest-900">Live Chat</span>
                {/* TODO: drop in chat widget (Tawk.to / Podium / LeadConnector) */}
                <span className="block text-sm text-gray-500">Coming soon — call or use the form for now</span>
              </span>
            </div>
          </div>
          <div className="mt-8 rounded-2xl bg-red-50 border border-red-200 p-5">
            <p className="font-bold text-red-800">🚨 Tree Emergency?</p>
            <p className="text-sm text-red-700 mt-1">
              Tree on a house, car, or blocking access? Don&apos;t wait on a form — call{" "}
              <a href={site.phoneHref} className="font-bold underline">{site.phone}</a> now.
              If power lines are involved, call 911 and your utility first.
            </p>
          </div>
        </div>
        <LeadForm />
      </div>
      <TrustBadges />
    </div>
  );
}
