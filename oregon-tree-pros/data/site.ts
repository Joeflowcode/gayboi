// Central site config — swap these values when a contractor licenses the site.
export const site = {
  name: "Tree Removal Oregon",
  legalName: "Tree Removal Oregon LLC",
  tagline: "Safe, Insured Tree Removal Across Oregon",
  phone: "(503) 512-5218", // CallRail tracking number (forwards to real line); swap.js may swap per-visitor
  phoneHref: "tel:503-512-5218",

  email: "quotes@treeremovaloregon.com", // TODO: set up email forwarding at registrar
  domain: "https://www.treeremovaloregon.com",
  serviceArea: "Portland Metro, Salem, Eugene & Central Oregon",
  hours: "Open 7 Days · 24/7 Emergency Response",
  license: "CCB #000000", // TODO: replace with real CCB license number
  yearFounded: 2016,
  reviewCount: 214,
  reviewAvg: 4.9,
};

export const trustBadges = [
  { title: "Licensed & Bonded", detail: `Oregon ${site.license}` },
  { title: "Fully Insured", detail: "$2M liability + workers' comp" },
  { title: "ISA Certified Arborists", detail: "On staff, on every estimate" },
  { title: "24/7 Emergency", detail: "Storm damage response" },
  { title: "Free Estimates", detail: "Fast, no-pressure quotes" },
  { title: "Clean-Up Included", detail: "We haul every branch away" },
];

export const testimonials = [
  {
    name: "Karen M.",
    city: "Beaverton",
    text: "A 90-foot Doug fir was leaning over our roof after the January ice storm. They came out the same day, craned it out in sections, and you couldn't tell they'd been here except the tree was gone. Worth every penny.",
    service: "Emergency Tree Removal",
  },
  {
    name: "Dave R.",
    city: "Salem",
    text: "Got three quotes for removing two big maples. Tree Removal Oregon wasn't the cheapest but they were the only ones who sent a certified arborist and explained exactly how they'd protect the fence and garden beds. Flawless work.",
    service: "Tree Removal",
  },
  {
    name: "Jennifer T.",
    city: "Bend",
    text: "We needed defensible space clearing before fire season — 14 junipers and a bunch of ladder fuels. Crew of four knocked it out in a day and half, chipped everything on site. Our insurance company was thrilled.",
    service: "Land & Lot Clearing",
  },
  {
    name: "Mike & Susan H.",
    city: "Eugene",
    text: "Stump grinding on six old stumps, some against the foundation. Careful, fast, and they raked out the grindings and seeded the spots. The yard finally looks like a yard again.",
    service: "Stump Grinding",
  },
];

export const faqs = [
  {
    q: "How much does tree removal cost in Oregon?",
    a: "Most standard removals in Oregon run $800–$2,000 per tree. Small trees (under 30 ft) can be as little as $400, while large conifers over structures, crane-assisted removals, or emergency storm work can run $2,500–$5,000+. Every job is different — that's why we send a certified arborist for a free on-site estimate rather than guessing over the phone.",
  },
  {
    q: "Do I need a permit to remove a tree in Oregon?",
    a: "It depends on your city. Portland requires a permit for most trees 12 inches in diameter or larger (and all street trees). Lake Oswego, Eugene, and several other cities have their own ordinances, while many suburbs only regulate street trees or protected species. We handle the permit research and paperwork for every job — it's included in your quote.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We carry an Oregon CCB license, $2 million in general liability coverage, and full workers' compensation on every crew member. Never let an uninsured crew climb a tree on your property — if someone gets hurt, you could be liable.",
  },
  {
    q: "How fast can you respond to storm damage?",
    a: "We run 24/7 emergency crews during storm season. For trees on houses, cars, or blocking driveways we typically arrive within 2–4 hours in the Portland metro and same-day in Salem, Eugene, and Bend. Call us first — we can also help document damage for your insurance claim.",
  },
  {
    q: "Is stump grinding included in tree removal?",
    a: "Stump grinding is quoted separately because not everyone wants it — some homeowners leave stumps or use them as planters. If you want the stump gone, we grind 6–12 inches below grade and can haul or spread the grindings. Bundling it with removal is cheaper than a separate visit.",
  },
  {
    q: "Will you haul away the wood and debris?",
    a: "Yes — full clean-up is included in every quote. We chip the brush, haul the logs, and rake the work area. If you'd like to keep firewood rounds, just tell the crew and we'll buck the trunk to length and stack it, which can lower your price.",
  },
  {
    q: "Can you remove a tree that's close to power lines?",
    a: "Trees touching or within 10 feet of high-voltage lines require utility coordination — we work with PGE, Pacific Power, and local utilities to de-energize or shield lines before work begins. Never attempt this yourself and never hire a crew that's willing to skip this step.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. For larger jobs ($2,000+) we offer 0% same-as-cash financing for 12 months through our lending partner, subject to credit approval. Ask for details when you get your free estimate.",
  },
];
