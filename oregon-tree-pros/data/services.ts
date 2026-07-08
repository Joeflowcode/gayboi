export type Service = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  priceRange: string;
  body: { heading: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "tree-removal",
    name: "Tree Removal",
    shortName: "Removal",
    metaTitle: "Tree Removal in Oregon | Free Estimates | Oregon Tree Pros",
    metaDescription:
      "Safe, insured tree removal across Portland, Salem, Eugene & Bend. Certified arborists, crane-assisted removals, permits handled, clean-up included. Free estimates.",
    h1: "Professional Tree Removal in Oregon",
    intro:
      "Whether it's a dying Douglas fir leaning toward your roof or a bigleaf maple whose roots are lifting your driveway, removing a large tree is one of the most dangerous jobs on any property. Our ISA certified arborists assess every tree, plan the safest takedown — rigging, sectional dismantling, or crane — and leave your yard cleaner than we found it.",
    priceRange: "$400 – $5,000+ depending on size, access, and hazards",
    body: [
      {
        heading: "When a Tree Needs to Come Down",
        text: "Not every problem tree needs removal — sometimes pruning or cabling saves it. But dead or dying trees, trunks with significant decay or cavities, trees leaning after root disturbance, and trees repeatedly dropping large limbs are genuine hazards. In Oregon's saturated winter soils, even healthy-looking conifers can fail at the roots. Our arborist will give you an honest assessment: if the tree can be saved, we'll tell you.",
      },
      {
        heading: "How We Remove Trees Safely",
        text: "Most residential removals in Oregon are sectional dismantles: a climber rigs and lowers the tree piece by piece, so nothing free-falls near your house, fence, or garden. For trees over structures or with no drop zone, we bring a crane and lift sections out over the roof. Every job includes ground protection for lawns and hardscape, a full clean-up, and debris haul-away.",
      },
      {
        heading: "Permits Handled for You",
        text: "Portland, Lake Oswego, Eugene, and many Oregon cities require permits for trees above a certain diameter. Removing a regulated tree without one can mean fines of $1,000 or more per tree. We research your city's ordinance, pull the permit, and handle any required replanting plan as part of the job.",
      },
    ],
    faqs: [
      {
        q: "How long does a tree removal take?",
        a: "A small tree takes 1–2 hours. A large conifer with tight access typically takes a half to full day. Crane removals often go faster — a 100-foot fir can be down and hauled in 3–4 hours.",
      },
      {
        q: "Will the removal damage my lawn?",
        a: "We use ground protection mats for equipment, rig sections down rather than dropping them, and rake the site afterward. Minor turf marks from foot traffic can happen but significant damage doesn't.",
      },
    ],
  },
  {
    slug: "emergency-tree-removal",
    name: "Emergency & Storm Damage Tree Removal",
    shortName: "Emergency",
    metaTitle: "24/7 Emergency Tree Removal Oregon | Storm Damage Response",
    metaDescription:
      "Tree on your house or car? 24/7 emergency tree removal across Portland, Salem, Eugene & Bend. 2–4 hour response, insurance documentation help. Call now.",
    h1: "24/7 Emergency Tree Removal & Storm Response",
    intro:
      "When an ice storm drops a fir on your roof at 2 AM, you need a crew that answers the phone. We run dedicated emergency crews across Oregon with typical response times of 2–4 hours in the Portland metro. We stabilize the scene, remove the tree without causing further damage, tarp the roof if needed, and document everything for your insurance claim.",
    priceRange: "$1,500 – $5,000+ depending on urgency and complexity",
    body: [
      {
        heading: "What Counts as a Tree Emergency",
        text: "A tree or large limb on a structure or vehicle, a tree blocking your driveway or a road, a tree resting on power service to your house, or a cracked/uprooted tree that could fail at any moment. If people or property are at immediate risk, call 911 first for downed power lines — then call us.",
      },
      {
        heading: "We Work With Your Insurance",
        text: "Most homeowners policies cover tree removal when a tree damages a covered structure. We photograph the scene before touching anything, provide itemized invoices with the documentation adjusters ask for, and can bill your insurer directly in many cases. Don't let a storm chaser pressure you into a cash deal — hire a licensed local company that will still be here next year.",
      },
      {
        heading: "Oregon Storm Season Readiness",
        text: "Between November ice storms in the Willamette Valley, spring windstorms in the Gorge, and heavy snow east of the Cascades, Oregon trees take a beating. The best emergency call is the one you never make: our arborists offer pre-season hazard assessments to find and fix the failures before the storm does.",
      },
    ],
    faqs: [
      {
        q: "How fast can you get here?",
        a: "During normal conditions, 2–4 hours in the Portland metro and same-day statewide. During major regional storm events we triage: trees on occupied homes come first.",
      },
      {
        q: "Does insurance cover emergency tree removal?",
        a: "Usually yes, when the tree hit a covered structure — most policies pay for removal from the structure plus some debris cleanup. We provide the photos and itemized invoice your adjuster needs.",
      },
    ],
  },
  {
    slug: "tree-trimming",
    name: "Tree Trimming & Pruning",
    shortName: "Trimming",
    metaTitle: "Tree Trimming & Pruning in Oregon | Certified Arborists",
    metaDescription:
      "ISA-certified tree trimming and pruning across Oregon. Crown thinning, deadwooding, clearance pruning done to ANSI A300 standards. Free estimates.",
    h1: "Tree Trimming & Pruning by Certified Arborists",
    intro:
      "Good pruning extends a tree's life and protects your property; bad pruning (topping, lion-tailing, flush cuts) creates hazards that cost thousands later. Every crew we send is led by or trained under an ISA certified arborist and prunes to ANSI A300 standards — the difference is visible for decades.",
    priceRange: "$300 – $1,500 per tree depending on size and scope",
    body: [
      {
        heading: "Pruning Services We Offer",
        text: "Crown cleaning (deadwood and hazard limbs), crown thinning for wind resistance, crown raising for clearance over roofs, driveways, and sidewalks, structural pruning for young trees, and view or solar pruning done selectively so the tree stays healthy and legal under local ordinances.",
      },
      {
        heading: "Why We Never Top Trees",
        text: "Topping — indiscriminately cutting main limbs to stubs — is the most damaging thing you can do to a tree. The regrowth is weakly attached, decay enters through the stubs, and within a few years the tree is more dangerous than before. Any company that offers topping is telling you they aren't arborists. We'll recommend crown reduction done properly instead.",
      },
      {
        heading: "The Right Season to Prune in Oregon",
        text: "Most Oregon trees are best pruned in late winter dormancy, but there are exceptions: prune cherries and plums in summer to avoid bacterial canker, avoid pruning oaks during spring sap flow, and prune storm damage whenever it happens. We'll schedule your species at the right time.",
      },
    ],
    faqs: [
      {
        q: "How often should trees be pruned?",
        a: "Mature trees every 3–5 years, young trees every 2–3 years for structure, fruit trees annually. Fast growers like poplars and willows need more frequent attention.",
      },
      {
        q: "Can you prune my neighbor's tree hanging over my yard?",
        a: "In Oregon you generally have the right to prune branches back to your property line, at your expense, as long as it doesn't destroy the tree. We handle these situations regularly and can help keep it neighborly.",
      },
    ],
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding & Removal",
    shortName: "Stumps",
    metaTitle: "Stump Grinding in Oregon | Fast, Affordable Stump Removal",
    metaDescription:
      "Professional stump grinding across Portland, Salem, Eugene & Bend. Any size stump, tight-access machines, grindings cleanup. Free instant quotes.",
    h1: "Stump Grinding & Removal",
    intro:
      "Old stumps attract carpenter ants, sprout suckers for years, wreck mower blades, and make the whole yard look unfinished. We grind stumps 6–12 inches below grade with self-propelled machines that fit through a 36-inch gate, then clean up the grindings so you can replant, re-sod, or build.",
    priceRange: "$100 – $400 per stump; multi-stump discounts",
    body: [
      {
        heading: "Grinding vs. Full Removal",
        text: "Grinding pulverizes the stump below grade and is right for 95% of situations — lawns, replanting shrubs, general cleanup. Full stump-and-root removal by excavation is only needed when you're building a structure, driveway, or new tree in the exact spot. We offer both and will tell you honestly which one your project needs.",
      },
      {
        heading: "What Happens to the Grindings",
        text: "Grinding produces a surprising pile of wood chips mixed with soil. You can keep them as mulch (great for pathways, not great against your foundation), have us backfill the hole and rake it level, or have us haul everything and bring topsoil so the spot is seed-ready.",
      },
      {
        heading: "Utilities and Access",
        text: "We call in utility locates (811) before grinding any stump near lines, and our smallest machine fits through backyard gates. Stumps against foundations, fences, or in rockeries take extra care — tell us about access when you request your quote and the price we give you is the price you pay.",
      },
    ],
    faqs: [
      {
        q: "How deep do you grind?",
        a: "Standard is 6–8 inches below grade, enough for grass or garden beds. We can grind 12+ inches for replanting or hardscape prep — just ask.",
      },
      {
        q: "Can I plant a new tree where the stump was?",
        a: "Yes, but offset it a few feet from the old stump location, or have us do a deeper grind and swap in fresh topsoil. Old root wood decaying in the soil ties up nitrogen for a few years.",
      },
    ],
  },
  {
    slug: "land-clearing",
    name: "Land & Lot Clearing",
    shortName: "Clearing",
    metaTitle: "Land Clearing & Defensible Space in Oregon | Oregon Tree Pros",
    metaDescription:
      "Lot clearing, brush removal, and wildfire defensible space services across Oregon. Build-ready site prep and Firewise clearing. Free on-site estimates.",
    h1: "Land Clearing & Wildfire Defensible Space",
    intro:
      "From clearing a building envelope on acreage outside Bend to creating the defensible space your insurer now requires, we handle vegetation clearing of any scale: tree removal, brush mastication, chipping, and haul-off, with erosion and permit considerations handled up front.",
    priceRange: "$1,500 – $10,000+ per acre depending on density",
    body: [
      {
        heading: "Defensible Space That Keeps Your Insurance",
        text: "Oregon insurers are increasingly requiring wildfire mitigation in Central and Southern Oregon. We clear ladder fuels, limb trees up 6–10 feet, create the 30-foot lean-and-green zone and 100-foot reduced-fuel zone around structures, and provide before/after photo documentation your insurance company will accept.",
      },
      {
        heading: "Build-Ready Site Preparation",
        text: "Building a home, shop, or ADU? We clear the envelope, grind or excavate stumps below foundation depth, and leave the site ready for your excavator. We coordinate with your builder on which trees to save — and protect them properly during clearing so they survive construction.",
      },
      {
        heading: "What We Do With the Debris",
        text: "Options include on-site chipping (free mulch), hauling to a biomass facility, firewood processing, or — where legal and safe — burn pile prep. On larger parcels, mastication grinds brush in place, the fastest and most economical approach for fuel reduction.",
      },
    ],
    faqs: [
      {
        q: "Do I need a permit to clear my land in Oregon?",
        a: "Possibly. Clearing near streams or wetlands, on steep slopes, or beyond certain acreage can trigger county or state permits, and some counties regulate tree removal on forest-zoned land. We flag permit issues during the free site visit.",
      },
      {
        q: "Can you clear just brush and leave the trees?",
        a: "Absolutely — selective understory clearing is most of our defensible-space work. We can masticate brush and small trees while preserving the mature canopy.",
      },
    ],
  },
  {
    slug: "arborist-consultation",
    name: "Arborist Consultations & Tree Health",
    shortName: "Arborist",
    metaTitle: "Certified Arborist Consultation Oregon | Tree Risk Assessment",
    metaDescription:
      "ISA certified arborist reports, tree risk assessments, and tree health diagnosis across Oregon. Permit support, construction protection plans, insurance documentation.",
    h1: "Certified Arborist Consultations & Risk Assessments",
    intro:
      "Sometimes you don't need a chainsaw — you need an expert opinion. Our ISA certified arborists provide written tree risk assessments, health diagnoses, permit-required arborist reports, and construction tree protection plans accepted by cities across Oregon.",
    priceRange: "$150 – $600 per assessment; credited toward work we perform",
    body: [
      {
        heading: "Tree Risk Assessments",
        text: "Using the ISA's TRAQ methodology, we evaluate the likelihood of failure, the likelihood of impact, and the consequences — then give you a written report with clear mitigation options ranked by cost. Ideal for that big tree you lie awake worrying about, for real estate transactions, and for HOA or insurance disputes.",
      },
      {
        heading: "Diagnosis & Treatment",
        text: "Browning Doug fir tops, oozing cankers on cherries, sudden dieback on maples — Oregon trees face drought stress, root rot (Phytophthora and Armillaria are common west of the Cascades), and insect pressure. We diagnose on site and prescribe realistic treatment: sometimes therapy, sometimes monitoring, sometimes removal before it becomes an emergency.",
      },
      {
        heading: "Reports Cities Accept",
        text: "Portland, Lake Oswego, West Linn, and many other Oregon cities require an arborist report for tree removal permits, development applications, or hazard tree claims. Our reports meet municipal requirements and we handle submission with your permit application.",
      },
    ],
    faqs: [
      {
        q: "Is the consultation fee credited if you do the work?",
        a: "Yes — if you hire us for the recommended work within 90 days, the consultation fee comes off the invoice.",
      },
      {
        q: "Can an arborist report lower my tree removal permit cost?",
        a: "In cities like Portland, a documented hazard or dead tree often qualifies for a fee-waived or expedited permit. A proper report frequently pays for itself.",
      },
    ],
  },
];
