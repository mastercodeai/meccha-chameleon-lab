import type { Metadata } from "next";

const knownVersions = ["v2.5.0", "v2.4.1", "v2.4.0", "v2.3.2", "v2.3.1", "v2.3.0", "v2.2.1", "v2.2.0", "v2.1.0", "v2.0.0", "v1.9.0", "v1.8.1", "v1.8.0", "v1.7.0", "v1.6.1", "v1.6.0", "v1.5.1", "v1.5.0", "v1.4.1", "v1.4.0", "v1.3.1", "v1.3.0", "v1.2.2", "v1.2.1", "v1.2.0", "v1.1.1", "v1.1.0", "v1.0.3", "v1.0.2", "v1.0.1"];

type Props = {
  params: Promise<{ version: string }>;
};

export async function generateStaticParams() {
  return knownVersions.map((version) => ({ version }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { version } = await params;
  const decoded = decodeURIComponent(version);

  const title = `MECCHA CHAMELEON ${decoded} Update — Patch Notes`;
  const description = `Full patch notes for MECCHA CHAMELEON ${decoded} update. See what changed, what was fixed, and what's new.`;

  const isOld = version.startsWith("v1.") || version.startsWith("1.");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://mecchachameleonlab.com/update/${version}`,
      type: "article",
    },
    alternates: {
      canonical: `https://mecchachameleonlab.com/update/${version}`,
    },
    // Noindex old v1.x pages — thin content, dilutes crawl budget
    ...(isOld && {
      robots: { index: false, follow: true },
    }),
  };
}

export default function UpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
