export type Post = {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  excerpt: string;
  sections: { heading: string; text: string }[];
};

export const posts: Post[] = [
  {
    slug: "tree-removal-cost-oregon",
    title: "How Much Does Tree Removal Cost in Oregon? (2026 Pricing Guide)",
    metaDescription:
      "Real 2026 tree removal prices in Oregon: by tree size, by city, emergency vs. scheduled, plus the factors that raise or lower your quote.",
    date: "2026-06-15",
    excerpt:
      "Most Oregon homeowners pay $800–$2,000 to remove a tree, but quotes range from $400 to over $5,000. Here's exactly what drives the price — and how to keep yours down.",
    sections: [
      {
        heading: "Average Tree Removal Prices in Oregon",
        text: "For 2026, expect roughly: small trees under 30 feet, $400–$800; medium trees 30–60 feet, $800–$1,500; large conifers 60–100 feet, $1,500–$3,500; and very large or crane-assisted removals, $3,000–$5,000+. Portland metro prices run 10–20% above Salem and Eugene due to labor costs and permit overhead, while Central Oregon prices vary most with access and haul distance.",
      },
      {
        heading: "The Five Factors That Drive Your Quote",
        text: "1) Size — height and trunk diameter set the baseline hours. 2) Location on the lot — a tree in an open field is a fraction of the cost of the same tree between two houses. 3) Condition — dead and decayed trees are more dangerous to climb, which raises the price. 4) Access — gate width, slope, and distance to the chip truck all matter. 5) Local permits — cities like Portland and Lake Oswego add permit fees and sometimes replanting requirements.",
      },
      {
        heading: "Emergency vs. Scheduled Removal",
        text: "The same tree that costs $1,200 as scheduled work can cost $2,500–$3,500 as a 2 AM emergency on your roof. If your arborist tells you a tree is failing, scheduling the removal this month is the cheapest option you'll ever get. Insurance typically covers removal only after the tree hits a covered structure — not preventive removal.",
      },
      {
        heading: "How to Keep the Price Down",
        text: "Bundle multiple trees into one visit (mobilization is a big fixed cost). Keep the wood — bucked firewood rounds left on site can trim the bill. Schedule in late fall or winter when demand dips. And always compare quotes on scope, not just price: 'removal' without cleanup, hauling, or stump grinding isn't the same product.",
      },
    ],
  },
  {
    slug: "do-i-need-permit-remove-tree-portland",
    title: "Do I Need a Permit to Remove a Tree in Portland? (Title 11 Explained)",
    metaDescription:
      "Portland's Title 11 tree code explained in plain English: which trees need a removal permit, what it costs, dead-tree exemptions, and fines for skipping it.",
    date: "2026-05-20",
    excerpt:
      "In Portland, most trees 12 inches in diameter or larger need a city permit before removal — and the fine for skipping it starts around $1,000 per tree. Here's how the process actually works.",
    sections: [
      {
        heading: "The Basic Rule",
        text: "Portland's Title 11 tree code requires a permit to remove any tree 12 inches in diameter or greater (measured 4.5 feet up the trunk) on most private property, and a permit for any street tree — the ones in the planting strip — regardless of size. Smaller private yard trees generally don't need a permit, with exceptions in environmental overlay zones.",
      },
      {
        heading: "Dead, Dying, and Dangerous Trees",
        text: "Portland expedites permits for trees that are dead, dying, or dangerous, and these applications are typically free. You'll usually need photos and, for 'dangerous' claims, an arborist's documentation. In a genuine emergency — a tree actively failing — you can remove first and document after, but photograph everything before the saw touches wood.",
      },
      {
        heading: "What It Costs and How Long It Takes",
        text: "Standard removal permits carry a modest fee and often require replanting a tree (or paying into the city tree fund). Straightforward applications typically process in days to a few weeks. Development-related removals are a different, more involved track.",
      },
      {
        heading: "Let Your Tree Company Handle It",
        text: "A reputable Portland tree service handles the permit as part of the job — research, application, arborist report if needed, and posting requirements. If a company tells you 'don't worry about the permit' on a clearly regulated tree, that's your cue to hire someone else: the fine lands on the property owner.",
      },
    ],
  },
  {
    slug: "storm-damaged-tree-what-to-do",
    title: "A Tree Fell on Your House in Oregon: The First 24 Hours, Step by Step",
    metaDescription:
      "Tree on your house? Step-by-step guide for Oregon homeowners: safety, insurance calls, photos, emergency tree removal, and avoiding storm-chaser scams.",
    date: "2026-04-10",
    excerpt:
      "Ice storm at midnight, fir on the roof at 12:15. What you do in the next 24 hours determines how smooth your insurance claim goes — and whether you get scammed.",
    sections: [
      {
        heading: "Step 1: Safety First",
        text: "Get everyone out of rooms under the damage. If any power line is involved — even just resting against a branch — stay away and call 911 and your utility. Don't walk under the tree: hung limbs ('widowmakers') kill more people after the storm than during it.",
      },
      {
        heading: "Step 2: Document Before Anything Moves",
        text: "Photograph and video everything from every safe angle: the tree, the entry point, interior damage, the base of the trunk. Your insurer will pay based on what you can show. Only after documenting should any tarping or removal begin.",
      },
      {
        heading: "Step 3: Call Insurance, Then a Licensed Local Tree Company",
        text: "Open the claim right away — after a regional storm, adjusters queue up fast. Then call a licensed, insured local tree service for emergency removal; most policies cover removal from the structure plus temporary roof protection. Keep every invoice.",
      },
      {
        heading: "Step 4: Avoid the Storm Chasers",
        text: "After every Oregon ice storm, out-of-state crews with fresh magnetic door signs appear, demanding cash and vanishing before the stump cools. Verify an Oregon CCB license (search the CCB site), ask for certificates of insurance, and be suspicious of anyone who knocks on your door offering to start 'right now for cash.'",
      },
      {
        heading: "Step 5: Assess the Survivors",
        text: "The tree that fell is rarely the only one damaged. Cracks, lifted root plates, and torn limbs on the remaining trees are tomorrow's emergency. Have an arborist walk the property once the urgent work is done — it's the cheapest insurance you'll buy all year.",
      },
    ],
  },
  {
    slug: "signs-tree-is-dying-oregon",
    title: "7 Signs Your Tree Is Dying (And Which Ones Mean 'Call Today')",
    metaDescription:
      "How to tell if your Oregon tree is dying: fungal conks, bark loss, lean changes, dieback, and the warning signs that mean immediate hazard.",
    date: "2026-03-05",
    excerpt:
      "Trees rarely fail without warning — the warnings are just easy to miss. Here are the seven signs Oregon arborists look for, ranked from 'monitor it' to 'call today.'",
    sections: [
      {
        heading: "Monitor: Thinning Crown and Early Fall Color",
        text: "A crown that's thinner than its neighbors or turns color weeks early is stressed — often drought, root damage, or early disease. Not an emergency, but worth an arborist visit this season.",
      },
      {
        heading: "Concerning: Deadwood, Bark Loss, and Sucker Growth",
        text: "Large dead limbs, bark sloughing off in sheets, and desperate sprout growth from the trunk or base all signal serious decline. In Douglas firs, a browning top is a classic drought-stress flag that invites beetles.",
      },
      {
        heading: "Call Today: Fungal Conks, Root Lift, and a New Lean",
        text: "Shelf fungus (conks) on the trunk means internal decay is advanced. Soil heaving or cracking on one side of the base means the root plate is moving. And any tree that leans more than it did last month is failing in slow motion. Any of these within striking distance of a structure is a same-week call, not a someday call.",
      },
      {
        heading: "The West-of-Cascades Wildcard: Root Rot",
        text: "Laminated root rot and Armillaria kill trees from below with almost no visible symptoms until the tree simply falls over — commonly in groups, since the fungus spreads root-to-root. If a neighboring tree fell with rotted, blackened roots, get the rest of the grove assessed immediately.",
      },
    ],
  },
];
