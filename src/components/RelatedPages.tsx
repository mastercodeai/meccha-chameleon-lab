import Link from "next/link";

interface RelatedPage {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

interface RelatedPagesProps {
  pages: RelatedPage[];
}

export default function RelatedPages({ pages }: RelatedPagesProps) {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-gutter py-stack-lg">
      <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
        Related Pages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group bg-surface border border-outline-variant rounded-lg p-5 hover:border-primary/50 hover:scale-105 transition-all duration-200"
          >
            {page.icon && (
              <span className="text-2xl mb-2 block">{page.icon}</span>
            )}
            <h3 className="font-label-caps text-label-caps text-on-surface group-hover:text-primary transition-colors mb-2">
              {page.title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              {page.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
