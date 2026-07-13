import type { Metadata } from "next";
import { site } from "@/data/site";
import Cta from "@/components/Cta";
import { TrustBadges, Reviews } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About Us | Licensed Oregon Tree Service",
  description:
    "Tree Removal Oregon is a licensed, bonded, insured tree service with ISA certified arborists serving Portland, Salem, Eugene & Bend since 2016.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-forest-900">
        Oregon Trees Deserve Oregon Arborists
      </h1>
      <div className="mt-6 space-y-5 text-gray-700 leading-relaxed text-lg">
        <p>
          {site.name} started in {site.yearFounded} with one climber, one chipper, and one rule:
          treat every property like it belongs to your mother. Today we run crews across four
          Oregon regions, but the rule hasn&apos;t changed.
        </p>
        <p>
          Tree work is a trade where corners get cut — uninsured crews, topped trees, &quot;permits are
          your problem&quot; contracts, and storm chasers who vanish with deposits. We built this company
          to be the opposite: ISA certified arborists on every estimate, ANSI A300 pruning standards
          on every job, permits handled by us, and a written scope so the price you&apos;re quoted is the
          price you pay.
        </p>
        <p>
          We know Oregon trees because they&apos;re ours too — the Doug firs that grow ten feet a decade,
          the white oaks worth saving, the ash threatened by borer, the junipers that have to go
          before fire season. When we tell you a tree can be saved, we&apos;re turning down removal
          revenue. That honesty is why more than half our work comes from referrals.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-extrabold text-forest-900">Why Homeowners Choose Us</h2>
      <ul className="mt-4 space-y-3 text-gray-700">
        <li>✅ <strong>Licensed & insured:</strong> Oregon {site.license}, bonded, $2M liability, workers&apos; comp on every climber.</li>
        <li>✅ <strong>Certified arborists:</strong> ISA credentials, TRAQ risk assessments, written reports cities accept.</li>
        <li>✅ <strong>Real local crews:</strong> Based in the Portland metro, Salem, Eugene, and Bend — not dispatched from out of state.</li>
        <li>✅ <strong>Clean-up included:</strong> Every quote covers chipping, hauling, and raking. You get your yard back, not a mess.</li>
        <li>✅ <strong>24/7 emergency line:</strong> A human answers, and a crew follows.</li>
      </ul>

      <TrustBadges />
      <Reviews />
      <Cta />
    </div>
  );
}
