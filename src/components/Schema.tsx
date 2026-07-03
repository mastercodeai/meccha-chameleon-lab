export function FAQSchema({ items }: { items: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function GameSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "MECCHA CHAMELEON",
    description:
      "A casual PvP hide-and-seek game where you paint your body to blend into the environment.",
    genre: "Casual",
    gamePlatform: "PC",
    applicationCategory: "Game",
    operatingSystem: "Windows",
    author: {
      "@type": "Person",
      name: "lemorion_1224",
    },
    offers: {
      "@type": "Offer",
      price: "5.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.2",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "44529",
    },
    datePublished: "2026-06-09",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function HowToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MECCHA CHAMELEON Lab",
    url: "https://mecchachameleonlab.com",
    description:
      "Free MECCHA CHAMELEON guides: best hiding spots for every map with screenshots, Workshop map database, beginner guide, and tips.",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://mecchachameleonlab.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
