
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" style={{
            minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
            background: "radial-gradient(ellipse 80% 60% at 20% -10%, rgba(37,99,235,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 110%, rgba(0,194,255,0.07) 0%, transparent 60%), #0A0D12",
        }}>
            {/* Grid */}
            <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 1 }} />

            <div className="wrap" style={{ position: "relative", zIndex: 1, paddingTop: 120, paddingBottom: 80, textAlign: "center" }}>
                {/* Badge */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
                    <span className="label">
                        <span className="label-dot" />
                        Full-Service Digital Agency · 15+ Countries
                    </span>
                </div>

                {/* Headline */}
                <h1 style={{
                    fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.035em",
                    lineHeight: 1.02,
                    maxWidth: 820,
                    margin: "0 auto",
                }}>
                    We Build Brands That{" "}
                    <span className="g-text">Win Globally</span>
                </h1>

                {/* Sub */}
                <p style={{
                    marginTop: 24, fontSize: "clamp(1rem, 2vw, 1.15rem)",
                    color: "#8892A4", maxWidth: 520, margin: "24px auto 0",
                    lineHeight: 1.7,
                }}>
                    From visual content and performance marketing to custom web and mobile apps —
                    we handle every digital touchpoint for ambitious brands.
                </p>

                {/* CTAs */}
                <div style={{ marginTop: 40, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                    <a href="#contact" className="btn btn-primary" style={{ fontSize: 15, padding: "14px 28px" }}>
                        Start Your Project <ArrowRight size={16} />
                    </a>
                    <a href="#work" className="btn btn-ghost" style={{ fontSize: 15, padding: "14px 28px" }}>
                        View Our Work
                    </a>
                </div>

                {/* Trusted by */}
                <div style={{ marginTop: 72 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "#3D4A5C", marginBottom: 16 }}>
                        Trusted by teams at
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 32px" }}>
                        {["Shopify", "Google", "Meta", "AWS", "Stripe", "Vercel"].map(b => (
                            <span key={b} style={{ fontSize: 13, fontWeight: 700, color: "#1E2A3A", letterSpacing: "-.01em" }}>{b}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll hint */}
            <div style={{
                position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                animation: "float 2.5s ease-in-out infinite",
            }}>
                <ChevronDown size={20} color="#1E2A3A" />
            </div>

            <style>{`@keyframes float { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }`}</style>
        </section>
    );
}
