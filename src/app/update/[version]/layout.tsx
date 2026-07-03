import type { Metadata } from "next";

const knownVersions = ["v1.3.0", "v1.2.0", "v1.1.0", "v1.0.0"];

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
  };
}

export default function UpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
