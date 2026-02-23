import Contact from "@/components/sections/Contact";

export const metadata = {
    title: "Contact Us | AAA Digital Media",
    description: "Get a free consultation for your project. We'll get back to you within 24 hours.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col gap-0 overflow-x-hidden pt-24">
            <Contact />
        </div>
    );
}
