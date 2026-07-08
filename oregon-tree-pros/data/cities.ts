export type City = {
  slug: string;
  name: string;
  county: string;
  region: "Portland Metro" | "Salem / Mid-Valley" | "Eugene / Springfield" | "Central Oregon";
  metaTitle: string;
  metaDescription: string;
  intro: string;
  localNotes: { heading: string; text: string }[];
  neighborhoods: string[];
};

export const cities: City[] = [
  {
    slug: "portland",
    name: "Portland",
    county: "Multnomah County",
    region: "Portland Metro",
    metaTitle: "Tree Removal Portland OR | Permits Handled | Oregon Tree Pros",
    metaDescription:
      "Tree removal, trimming & stump grinding in Portland, OR. We handle Portland Title 11 tree permits, work around tight city lots, and respond 24/7 to storm damage.",
    intro:
      "Portland's urban canopy is one of the best in the country — and one of the most regulated. Between Title 11 tree permits, street tree rules, and tight lots where a 100-foot Douglas fir stands twenty feet from three different houses, tree work here demands crews who know the city.",
    localNotes: [
      {
        heading: "Portland Tree Permits, Handled",
        text: "Portland requires a permit to remove most trees 12 inches in diameter and larger on private property, and any street tree regardless of size. Dead, dying, and dangerous trees can qualify for expedited or fee-waived permits with an arborist report — which we write and submit for you. Skipping the permit risks fines starting at $1,000 per tree.",
      },
      {
        heading: "Tight-Access City Lots",
        text: "Much of our Portland work is craning trees over houses in Laurelhurst, Irvington, and Sellwood, or dismantling firs piece-by-piece in backyards with 30-inch gate access. We plan every removal around your structures, your neighbor's structures, and Portland's parking-strip realities.",
      },
      {
        heading: "Storm Response East and West of the River",
        text: "From ice storms that hammer the east side to wind events in the West Hills, our Portland emergency crews typically arrive within 2–4 hours. We tarp roofs, clear driveways, and document everything for your insurance adjuster.",
      },
    ],
    neighborhoods: ["Laurelhurst", "Irvington", "Sellwood", "St. Johns", "Multnomah Village", "Montavilla", "West Hills", "Woodstock"],
  },
  {
    slug: "beaverton",
    name: "Beaverton",
    county: "Washington County",
    region: "Portland Metro",
    metaTitle: "Tree Removal Beaverton OR | Free Estimates | Oregon Tree Pros",
    metaDescription:
      "Tree removal, pruning & stump grinding in Beaverton, OR. Licensed, insured crews serving Washington County neighborhoods. Free same-week estimates.",
    intro:
      "Beaverton's mature neighborhoods — Cedar Hills, West Slope, Garden Home — were planted out in firs and maples fifty-plus years ago, and many of those trees are now oversized for their lots. We remove, prune, and maintain trees across Washington County with fast scheduling and clean job sites.",
    localNotes: [
      {
        heading: "Big Firs on Suburban Lots",
        text: "The classic Beaverton job: a 90-foot Douglas fir dropping limbs on two roofs at once. We dismantle these safely with rigging or a crane, and our arborist can assess whether thinning for wind resistance could save a healthy tree you'd rather keep.",
      },
      {
        heading: "City of Beaverton Tree Rules",
        text: "Beaverton regulates significant trees, landscape trees required by development conditions, and all street trees. We check your tree's status before quoting so there are no surprises after the work is done.",
      },
    ],
    neighborhoods: ["Cedar Hills", "West Slope", "Garden Home", "Sexton Mountain", "Cooper Mountain", "Five Oaks"],
  },
  {
    slug: "gresham",
    name: "Gresham",
    county: "Multnomah County",
    region: "Portland Metro",
    metaTitle: "Tree Removal Gresham OR | Storm Damage Experts | Oregon Tree Pros",
    metaDescription:
      "Tree removal, emergency storm response & stump grinding in Gresham, OR. East county ice storm specialists. Licensed, insured, free estimates.",
    intro:
      "East Multnomah County takes the brunt of every Gorge wind and ice event, and Gresham's trees show it. We're in Gresham year-round for removals, pruning, and stump grinding — and all winter for emergency storm response from Troutdale to Happy Valley.",
    localNotes: [
      {
        heading: "Ice Storm Capital of the Metro",
        text: "When freezing rain funnels out of the Columbia River Gorge, Gresham gets coated first and worst. We pre-stage crews east of I-205 ahead of forecast ice events, which is why our east county response times beat companies dispatching from across town.",
      },
      {
        heading: "Older Trees, Bigger Jobs",
        text: "Gresham's established neighborhoods carry big cottonwoods, poplars, and firs — fast-growing species that shed limbs and fail in wind. If you have a cottonwood within reach of your house, an assessment now is a lot cheaper than a roof later.",
      },
    ],
    neighborhoods: ["Powell Valley", "Kelly Creek", "Hollybrook", "Centennial", "Rockwood", "Persimmon"],
  },
  {
    slug: "hillsboro",
    name: "Hillsboro",
    county: "Washington County",
    region: "Portland Metro",
    metaTitle: "Tree Removal Hillsboro OR | Licensed & Insured | Oregon Tree Pros",
    metaDescription:
      "Professional tree removal, trimming & lot clearing in Hillsboro, OR. Serving Orenco, Tanasbourne & rural Washington County. Free estimates.",
    intro:
      "From ornamental pears dropping limbs in Orenco Station to full-grown oaks on rural properties out toward Forest Grove, Hillsboro tree work spans city lots and acreage. We handle both, with equipment sized for each.",
    localNotes: [
      {
        heading: "Oregon White Oaks Are Protected — and Worth Protecting",
        text: "Washington County's signature Oregon white oaks are slow-growing, increasingly rare, and often regulated. Before you remove one, let our arborist evaluate it: many 'problem' oaks just need deadwooding, and a healthy oak adds real property value.",
      },
      {
        heading: "Acreage and Orchard Work",
        text: "West of Hillsboro we do lot clearing, hazard tree removal along driveways, and cleanup of old orchard and Christmas tree stock. Larger parcels get our chipper and mini-loader crews for efficient one-day jobs.",
      },
    ],
    neighborhoods: ["Orenco", "Tanasbourne", "Jackson School", "Witch Hazel", "Reedville", "Shute Park"],
  },
  {
    slug: "lake-oswego",
    name: "Lake Oswego",
    county: "Clackamas County",
    region: "Portland Metro",
    metaTitle: "Tree Removal Lake Oswego OR | Permit Experts | Oregon Tree Pros",
    metaDescription:
      "Tree removal & pruning in Lake Oswego, OR. We navigate LO's strict tree code, write arborist reports, and protect high-value landscapes. Free estimates.",
    intro:
      "Lake Oswego has one of the strictest tree codes in Oregon — nearly every tree over 6 inches in diameter requires a permit to remove. We know the code, write the arborist reports, and work clean on high-value properties from First Addition to Skylands.",
    localNotes: [
      {
        heading: "Navigating the Lake Oswego Tree Code",
        text: "LO's tree removal permits require justification — hazard, dead/dying status, development, or landscaping criteria — and often an arborist report and replanting (mitigation) plan. We've taken hundreds of trees through this process and include permit handling in every Lake Oswego quote.",
      },
      {
        heading: "Estate and Lakefront Work",
        text: "Steep lakefront lots, irrigated landscapes, and specimen trees call for surgical work: crane picks over houses, protection for hardscape and gardens, and crews that treat the property like their own. That's our default standard in LO.",
      },
    ],
    neighborhoods: ["First Addition", "Lake Grove", "Mountain Park", "Skylands", "Palisades", "Westlake"],
  },
  {
    slug: "salem",
    name: "Salem",
    county: "Marion County",
    region: "Salem / Mid-Valley",
    metaTitle: "Tree Removal Salem OR | Fast Free Estimates | Oregon Tree Pros",
    metaDescription:
      "Tree removal, trimming & stump grinding in Salem and Keizer, OR. Licensed CCB crews, 24/7 storm response, free estimates within 48 hours.",
    intro:
      "Salem's tree-lined older neighborhoods — from the giant sequoias near the Capitol to century-old oaks in South Salem — need real arborists, not just chainsaw crews. We serve Salem and Keizer with full removal, pruning, and emergency services.",
    localNotes: [
      {
        heading: "Willamette Valley Oaks and Ash",
        text: "South and West Salem carry beautiful Oregon white oak stands, and low-lying areas are full of Oregon ash — a species now threatened by the emerald ash borer confirmed in the Willamette Valley. If you have ash trees, get them assessed now; pre-emptive removal or treatment is far cheaper than emergency removal of a brittle dead tree.",
      },
      {
        heading: "2021 Ice Storm Lessons",
        text: "The February 2021 ice storm devastated Salem's canopy and taught the whole city what deferred tree maintenance costs. Many storm-damaged trees are still standing with hidden cracks and decay. A one-hour arborist walk-through can find the ones that won't survive the next event.",
      },
    ],
    neighborhoods: ["South Salem", "West Salem", "Keizer", "Englewood", "Candalaria", "Four Corners"],
  },
  {
    slug: "albany-corvallis",
    name: "Albany & Corvallis",
    county: "Linn & Benton Counties",
    region: "Salem / Mid-Valley",
    metaTitle: "Tree Removal Albany & Corvallis OR | Oregon Tree Pros",
    metaDescription:
      "Tree removal, pruning & land clearing in Albany, Corvallis & Lebanon, OR. Licensed, insured mid-valley crews. Free on-site estimates.",
    intro:
      "We cover the mid-valley from Albany's historic districts to Corvallis hillsides, plus rural properties in Lebanon, Philomath, and Jefferson. Removals, orchard cleanup, land clearing, and storm response with local crews.",
    localNotes: [
      {
        heading: "Historic District Trees in Albany",
        text: "Albany's Hackleman and Monteith districts have mature street and yard trees that predate the houses' plumbing. We prune and remove around historic structures with rigging-first methods — nothing free-falls near a 130-year-old house.",
      },
      {
        heading: "Corvallis Hillside and Campus-Area Work",
        text: "Corvallis regulates street trees and trees in certain overlay zones, and hillside properties in southwest Corvallis add slope and access challenges. We quote these on site, free, and handle any city requirements.",
      },
    ],
    neighborhoods: ["Hackleman", "Monteith", "North Albany", "Southwest Corvallis", "Philomath", "Lebanon"],
  },
  {
    slug: "eugene",
    name: "Eugene",
    county: "Lane County",
    region: "Eugene / Springfield",
    metaTitle: "Tree Removal Eugene OR | Certified Arborists | Oregon Tree Pros",
    metaDescription:
      "Tree removal, trimming & stump grinding in Eugene & Springfield, OR. Certified arborists, city permit handling, 24/7 emergency response. Free estimates.",
    intro:
      "Eugene takes its trees seriously — and so do we. From the big firs of the south hills to sweetgums lifting sidewalks in Friendly, our Eugene crews handle removals, fine pruning, and emergency response across Lane County.",
    localNotes: [
      {
        heading: "South Hills Conifers",
        text: "Homes in the south hills sit under some of the biggest residential Douglas firs in Oregon. Wind-firm assessment matters here: removing the wrong tree from a grove can expose the remaining ones to failure. Our arborists evaluate the stand, not just the tree.",
      },
      {
        heading: "Eugene Street Tree and Permit Rules",
        text: "Eugene requires permits for street trees and regulates removal in some zones. We confirm your tree's status with the city before work and pull any required permit as part of the job.",
      },
      {
        heading: "Springfield and Rural Lane County",
        text: "We serve Springfield, Thurston, and out the McKenzie corridor — including fire-hardening and defensible space work for properties that saw how fast the Holiday Farm Fire moved in 2020.",
      },
    ],
    neighborhoods: ["South Hills", "Friendly", "Whiteaker", "Cal Young", "Thurston", "River Road"],
  },
  {
    slug: "bend",
    name: "Bend",
    county: "Deschutes County",
    region: "Central Oregon",
    metaTitle: "Tree Removal Bend OR | Defensible Space Experts | Oregon Tree Pros",
    metaDescription:
      "Tree removal, ponderosa thinning & wildfire defensible space in Bend, OR. Insurance-accepted fuel reduction, juniper removal, free estimates.",
    intro:
      "Tree work in Bend is different: ponderosa pines with beetle pressure, junipers drinking the water table dry, and insurance companies demanding defensible space before they'll renew your policy. Our Central Oregon crews specialize in all three.",
    localNotes: [
      {
        heading: "Defensible Space Your Insurer Will Accept",
        text: "We create Firewise-aligned defensible space: ladder fuel removal, canopy spacing, juniper and bitterbrush clearing, and limbing to 6–10 feet — with before/after photo documentation formatted for insurance review. Many Bend clients call us after a non-renewal notice; get ahead of it instead.",
      },
      {
        heading: "Ponderosa Health and Beetle Pressure",
        text: "Drought-stressed ponderosas invite western pine beetle, and a beetle-killed pine goes from green to hazard fast. Fading crowns, pitch tubes on the bark, and sawdust at the base are the signs. We assess, treat where viable, and remove where necessary.",
      },
      {
        heading: "Winter Access and Snow Load Damage",
        text: "Heavy Cascade snow snaps juniper and pine limbs every winter. We run winter crews in Bend, Redmond, and Sisters for snow-load damage, and our equipment handles unplowed driveways and acreage access.",
      },
    ],
    neighborhoods: ["Awbrey Butte", "NorthWest Crossing", "Deschutes River Woods", "Tumalo", "Sisters", "Redmond"],
  },
];

export const regions = [...new Set(cities.map((c) => c.region))];
