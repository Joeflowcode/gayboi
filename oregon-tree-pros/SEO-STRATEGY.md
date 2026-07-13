# Tree Removal Oregon (treeremovaloregon.com) — SEO & Lead-Gen Strategy

Rank-and-rent asset: rank statewide + city pages for tree service keywords, capture exclusive
leads, sell/rent to a local licensed tree company. **Replace placeholders before launch:**
phone (tracking number), CCB license, email, domain, review counts, and testimonial content
in `data/site.ts`.

## URL Structure (already built)
- `/` — statewide money page ("tree removal Oregon")
- `/services/{service}/` — 6 service pages (removal, emergency, trimming, stumps, clearing, arborist)
- `/locations/{city}/` — 9 city pages (Portland, Beaverton, Gresham, Hillsboro, Lake Oswego, Salem, Albany-Corvallis, Eugene, Bend)
- `/blog/{slug}/` — informational content targeting cost/permit/how-to queries

## Internal Linking Plan (already built)
- Every service page links to all city pages and all sibling services.
- Every city page links to all service pages and nearby cities in-region.
- Blog posts link to related service pages; homepage links to everything.
- Footer carries full service + city link blocks sitewide.
- Next tier: add `/locations/{city}/{service}/` combo pages ONLY after the base pages index
  and rank — start with the 3 highest-volume combos (portland/tree-removal,
  portland/emergency-tree-removal, bend/land-clearing).

## Keyword Targets by Page
| Page | Primary keyword | Secondary |
|---|---|---|
| Home | tree removal oregon | tree service oregon, tree company near me |
| /services/tree-removal/ | tree removal cost, tree removal near me | cut down tree service |
| /services/emergency-tree-removal/ | emergency tree removal, tree fell on house | 24 hour tree service |
| /services/stump-grinding/ | stump grinding near me | stump removal cost |
| /locations/portland/ | tree removal portland | portland tree service, tree removal permit portland |
| /locations/bend/ | tree removal bend oregon | defensible space bend, juniper removal |
| Blog: cost guide | how much does tree removal cost oregon | (feeds removal page) |

## Google Business Profile Checklist (needed to rank in the map pack)
1. Real address or service-area business setup per city you want map-pack presence in
   (one GBP per legal entity — for rank-and-rent, the renting contractor's GBP gets the site link).
2. Category: primary "Tree service"; secondary "Arborist and tree surgeon", "Lawn care service" (if applicable).
3. Phone = same tracking number as the website (NAP consistency).
4. All 6 services added as GBP Services with descriptions.
5. 15+ real photos (crews, equipment, before/after) at launch; add 2–4/month.
6. Weekly GBP posts (job highlights, storm-prep tips).
7. Review velocity: ask every customer via SMS link; target 5+/month; reply to all.
8. Q&A: seed 5 questions (cost, permits, insurance, response time, free estimates).

## Citations & Links (first 90 days)
- Core citations: Yelp, Angi, Thumbtack, HomeAdvisor, BBB, Nextdoor, Houzz, Porch.
- Oregon-specific: Oregon CCB directory listing, local chamber(s), Firewise USA program pages.
- Digital PR: pitch storm-prep quotes to local TV/news each fall; sponsor a Little League team
  per market ($300 gets a real local link).

## Content Calendar — 12 Months of Blog Ideas
Already live: cost guide, Portland permits, storm-damage steps, dying-tree signs.
1. Jul — Wildfire defensible space requirements in Central Oregon (insurance angle)
2. Aug — Best time of year to remove a tree in Oregon (and why summer costs more)
3. Sep — Fall storm-prep checklist: 10 things to inspect before November
4. Oct — Who's responsible when a neighbor's tree falls on your property in Oregon?
5. Nov — Emerald ash borer in the Willamette Valley: what ash owners must do now
6. Dec — Ice storm survival guide: before, during, after
7. Jan — Tree removal permits: Lake Oswego vs Portland vs Eugene compared
8. Feb — Why topping kills trees (and what to ask for instead)
9. Mar — Root rot west of the Cascades: the silent tree killer
10. Apr — How to hire a tree service in Oregon: CCB license lookup walkthrough
11. May — Douglas fir drought stress: browning tops explained
12. Jun — Stump grinding vs removal: costs, timelines, replanting

## Conversion / Lead Handling (before selling leads)
- Wire `components/LeadForm.tsx` to a backend (Formspree free tier is fine at launch) — TODO marked in code.
- Buy a CallRail (or similar) tracking number per market; forward to the buyer contractor.
- Fire `generate_lead` conversion events for form submits + call clicks (add GA4 + gtag).
- Lead value benchmark: exclusive tree leads sell for $35–$100+; emergency leads more.

## Technical Notes
- Static export (`output: "export"`) — deploy `out/` to Vercel/Netlify/Cloudflare Pages free.
- LocalBusiness + Service + FAQPage + Article schema already emitted.
- Images: replace gallery placeholders with real WebP photos ≤200KB; add descriptive alt text
  with city/service keywords where honest.
