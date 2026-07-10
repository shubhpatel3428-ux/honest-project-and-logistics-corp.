const SERVICES = [
  {
    title: "Moving",
    priceLabel: "$130 / hr",
    short: "Residential & commercial moving — packing, transport, unloading.",
    description: "Full-service moves: packing, loading, secure transport, unloading, and unpacking. We handle fragile items and large furniture."
  },
  {
    title: "Junk removal",
    priceLabel: "Price on quote",
    short: "Fast junk removal and eco-friendly disposal.",
    description: "Household junk, appliances, renovation debris, estate cleanouts. We sort and recycle where possible."
  },
  {
    title: "Demolition",
    priceLabel: "Price on quote",
    short: "Interior and small structure demolition with debris removal.",
    description: "Selective demolition, shed and small structure removal, clean and safe site cleanup."
  },
  {
    title: "Local delivery",
    priceLabel: "Price on quote",
    short: "Same-day and scheduled local delivery for furniture & goods.",
    description: "Reliable local delivery for businesses and individuals — insured drivers and guaranteed delivery windows."
  },
  {
    title: "Long haul",
    priceLabel: "Price on quote",
    short: "Intercity and long-distance transportation and logistics.",
    description: "Cross-province and long-distance hauling with professional logistics planning."
  },
  {
    title: "Commercial deliveries",
    priceLabel: "Price on quote",
    short: "Scheduled and bulk deliveries with liftgate & pallet handling.",
    description: "Business-friendly routes, recurring schedules and invoices for commercial accounts."
  },
  {
    title: "Used furniture buying & selling",
    priceLabel: "Price on quote",
    short: "We buy and sell used furniture — pickup and delivery available.",
    description: "We purchase gently-used sofas, beds, dressers and tables; we also list and deliver items for buyers."
  },
  {
    title: "Landscaping & lawn mowing",
    priceLabel: "Price on quote",
    short: "Lawn mowing, edging, seasonal cleanups and light landscaping.",
    description: "Weekly lawn care, one-time cleanups, garden bed maintenance and light landscaping projects."
  },
  {
    title: "Pressure washing",
    priceLabel: "Price on quote",
    short: "Driveways, decks, siding and patio pressure washing.",
    description: "Appropriate PSI and detergents for safe and effective cleaning of outdoor surfaces."
  },
  {
    title: "Renovations",
    priceLabel: "Price on quote",
    short: "Kitchens, bathrooms, flooring and painting — project management.",
    description: "Small to medium renovation projects with coordination and subcontractor management."
  },
  {
    title: "Cleaning",
    priceLabel: "Price on quote",
    short: "Move-in / move-out, deep clean and post-construction cleanup.",
    description: "Residential and commercial cleaning services with eco-friendly options available."
  },
  {
    title: "Handyman services",
    priceLabel: "Price on quote",
    short: "Small repairs, installations, carpentry and painting.",
    description: "General maintenance, fixture installation, drywall patching and other small repairs."
  },
  {
    title: "Ultimate solutions",
    priceLabel: "Price on quote",
    short: "Custom multi-skill crews for complex or combined jobs.",
    description: "Complex projects requiring crew coordination, multi-skill teams, and logistics planning."
  }
];

const grid = document.querySelector('#service-grid');

grid.innerHTML = SERVICES.map((service) => `
  <article class="service-card">
    <p class="price-tag">${service.priceLabel}</p>
    <h3>${service.title}</h3>
    <p>${service.short}</p>
    <p>${service.description}</p>
  </article>
`).join('');
