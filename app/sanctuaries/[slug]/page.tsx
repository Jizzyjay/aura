import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SanctuaryDetails } from "@/components/sanctuary/sanctuary-details";
import { getSanctuary, sanctuaries } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sanctuaries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sanctuary = getSanctuary(slug);
  if (!sanctuary) return { title: "Sanctuary" };
  return { title: sanctuary.name };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const sanctuary = getSanctuary(slug);
  if (!sanctuary) notFound();
  return <SanctuaryDetails sanctuary={sanctuary} />;
}
