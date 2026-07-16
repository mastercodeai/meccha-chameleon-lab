import Link from "next/link";

interface RelatedPage {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

interface NextStep {
  label: string;
  title: string;
  description: string;
  href: string;
  icon?: string;
}

interface RelatedPagesProps {
  pages: RelatedPage[];
  nextSteps?: NextStep[];
}

export default function RelatedPages({ pages, nextSteps }: RelatedPagesProps) {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-gutter py-stack-lg">
      {/* Where to Go Next */}
      {nextSteps && nextSteps.length > 0 && (
        <section className="mb-stack-lg">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
            Where to Go Next
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {nextSteps.map((step) => (
              <Link
                key={step.href}
                href={step.href}
                className="group bg-primary/5 border border-primary/20 rounded-lg p-5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
              >
                <span className="font-label-caps text-label-caps text-primary/70 block mb-2">
                  {step.label}
                </span>
                <div className="flex items-center gap-2 mb-2">
                  {step.icon && <span className="text-xl">{step.icon}</span>}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                  {step.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Pages */}
      <section>
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
    </div>
  );
}
