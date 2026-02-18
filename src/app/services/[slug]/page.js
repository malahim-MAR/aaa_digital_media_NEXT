import { notFound } from "next/navigation";
import { services } from "@/lib/data";
import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
    return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = services.find((s) => s.id === slug);
    if (!service) return {};
    return {
        title: `${service.title} | AAA Digital Media`,
        description: service.shortDesc,
    };
}

export default async function ServiceDetailPage({ params }) {
    const { slug } = await params;
    const service = services.find((s) => s.id === slug);
    if (!service) notFound();

    const currentIndex = services.findIndex((s) => s.id === slug);
    const nextService = services[(currentIndex + 1) % services.length];
    const prevService =
        services[(currentIndex - 1 + services.length) % services.length];

    return (
        <ServiceDetailClient
            service={service}
            nextService={nextService}
            prevService={prevService}
        />
    );
}
