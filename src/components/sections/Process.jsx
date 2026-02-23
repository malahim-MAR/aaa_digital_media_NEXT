"use client";
import { m } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const STEPS = [
    {
        icon: <Search className="text-blue-400" />,
        title: "Discovery & Strategy",
        desc: "We dive deep into your brand, audience, and goals to craft a data-backed roadmap for success."
    },
    {
        icon: <Lightbulb className="text-blue-400" />,
        title: "Creative Direction",
        desc: "Our designers and storytellers bring the strategy to life with premium visuals and intuitive UX."
    },
    {
        icon: <Code2 className="text-blue-400" />,
        title: "Development & Build",
        desc: "We turn concepts into reality using cutting-edge technology, ensuring speed and scalability."
    },
    {
        icon: <Rocket className="text-blue-400" />,
        title: "Launch & Growth",
        desc: "Go-live is just the beginning. We optimize and scale your presence to maximize ROI."
    }
];

export default function Process() {
    return (
        <section className="section bg-[#020617]/50">
            <div className="wrap border-t border-white/5 pt-24">
                <div className="text-center mb-20">
                    <span className="text-[#00A6FB] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Process</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">How We Build <span className="g-text">Legacy Brands</span></h2>
                    <p className="text-[#94a3b8] max-w-2xl mx-auto text-lg">A streamlined, four-phase approach to taking your business from where it is to where it needs to be.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STEPS.map((step, i) => (
                        <m.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-slate-900/40 border border-white/5 rounded-3xl relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                        >
                            <div className="mb-6 w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                {step.icon}
                            </div>
                            <div className="absolute top-8 right-8 text-5xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors">0{i + 1}</div>
                            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                            <p className="text-[#94a3b8] leading-relaxed">{step.desc}</p>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
