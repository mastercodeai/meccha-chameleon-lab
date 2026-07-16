import Link from "next/link";

interface SeriesLink {
  title: string;
  href: string;
  icon?: string;
  current?: boolean;
}

interface GuideSeriesProps {
  parentTitle: string;
  parentHref: string;
  seriesTitle: string;
  pages: SeriesLink[];
}

export default function GuideSeries({
  parentTitle,
  parentHref,
  seriesTitle,
  pages,
}: GuideSeriesProps) {
  return (
    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 mb-6">
      <p className="font-body-sm text-on-surface-variant mb-2">
        Part of the{" "}
        <Link
          href={parentHref}
          className="text-primary font-medium hover:underline"
        >
          {parentTitle}
        </Link>{" "}
        series
      </p>
      <nav aria-label={seriesTitle} className="flex flex-wrap items-center gap-1">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded font-body-sm transition-colors ${
              page.current
                ? "bg-primary text-surface font-medium"
                : "text-on-surface-variant hover:bg-primary/10 hover:text-primary"
            }`}
          >
            {page.icon && <span className="text-sm">{page.icon}</span>}
            <span>{page.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
