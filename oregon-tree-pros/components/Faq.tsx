export default function Faq({
  items,
  title = "Frequently Asked Questions",
}: {
  items: { q: string; a: string }[];
  title?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="my-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="text-2xl md:text-3xl font-extrabold text-forest-900 mb-6">{title}</h2>
      <div className="space-y-3">
        {items.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-gray-200 bg-white open:shadow-sm"
          >
            <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-forest-900 flex justify-between items-center gap-4">
              {f.q}
              <span className="text-forest-600 group-open:rotate-45 transition-transform text-xl leading-none">＋</span>
            </summary>
            <p className="px-5 pb-5 text-gray-700 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
