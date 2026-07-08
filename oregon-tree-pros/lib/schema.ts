import { site } from "@/data/site";
import { cities } from "@/data/cities";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.domain}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.domain,
    telephone: site.phone,
    email: site.email,
    description: `${site.tagline}. Tree removal, trimming, stump grinding, and emergency storm response across ${site.serviceArea}.`,
    foundingDate: String(site.yearFounded),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "OR",
      addressCountry: "US",
    },
    areaServed: cities.map((c) => ({ "@type": "City", name: `${c.name}, OR` })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.reviewAvg,
      reviewCount: site.reviewCount,
    },
    openingHours: "Mo-Su 00:00-24:00",
    sameAs: [
      // TODO: add real GBP, Facebook, Nextdoor, Yelp URLs
    ],
  };
}

export function serviceSchema(serviceName: string, description: string, urlPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    url: `${site.domain}${urlPath}`,
    provider: { "@id": `${site.domain}/#business` },
    areaServed: { "@type": "State", name: "Oregon" },
  };
}
