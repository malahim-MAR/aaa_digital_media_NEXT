import { PORTFOLIO_CATEGORIES } from "@/lib/data";
import { notFound } from "next/navigation";
import CategoryNav from "@/components/portfolio/CategoryNav";
import ReelsViewer from "@/components/portfolio/ReelsViewer";


// Static generation for all 9 category slugs
export function generateStaticParams() {
    return PORTFOLIO_CATEGORIES.map((cat) => ({ category: cat.slug }));
}

// Per-page SEO metadata
export async function generateMetadata({ params }) {
    const { category } = await params;
    const cat = PORTFOLIO_CATEGORIES.find((c) => c.slug === category);
    if (!cat) return {};
    return {
        title: `${cat.title} | Portfolio — AAA Digital Media`,
        description: cat.description,
        openGraph: {
            title: `${cat.title} — AAA Digital Media`,
            description: cat.description,
            type: "website",
        },
    };
}

export default async function CategoryPage({ params }) {
    const { category } = await params;
    const cat = PORTFOLIO_CATEGORIES.find((c) => c.slug === category);
    if (!cat) notFound();

    return (
        <main style={{
            background: "#000",
            height: "100dvh",
            width: "100vw",
            overflow: "hidden",
            position: "fixed",
            inset: 0,
            zIndex: 99999, // Extreme top
        }}>
            {/* Reels viewer — full screen snap scroll */}
            <ReelsViewer
                videos={cat.videos}
                accent={cat.accent}
                categoryTitle={cat.title}
            />
        </main>
    );
}
