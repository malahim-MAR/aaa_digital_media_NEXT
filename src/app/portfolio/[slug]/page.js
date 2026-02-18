import { notFound } from "next/navigation";
import { portfolioItems } from "@/lib/data";
import CaseStudyClient from "./CaseStudyClient";

export async function generateStaticParams() {
    return portfolioItems.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const item = portfolioItems.find((p) => p.id === slug);
    if (!item) return {};
    return {
        title: `${item.title} — Case Study | AAA Digital Media`,
        description: item.challenge,
    };
}

export default async function CaseStudyPage({ params }) {
    const { slug } = await params;
    const item = portfolioItems.find((p) => p.id === slug);
    if (!item) notFound();

    return <CaseStudyClient item={item} />;
}
