
import { Sparkles, ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section style={{
            padding: "96px 0",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            position: "relative", overflow: "hidden",
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.1) 0%, transparent 70%)",
        }}>
            <div className="grid-bg" style={{ position: "absolute", inset: 0 }} />
            <div className="wrap" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <span className="label" style={{ justifyContent: "center" }}>
                    <Sparkles size={11} color="#60A5FA" />
                    Let&apos;s Build Something Great
                </span>
                <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", maxWidth: 700, margin: "0 auto 20px" }}>
                    Ready to Scale Your Business{" "}
                    <span className="g-text">Globally?</span>
                </h2>
                <p style={{ color: "#8892A4", fontSize: 17, maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>
                    Whether you&apos;re a startup or an enterprise — let&apos;s build something extraordinary together.
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                    <a href="#contact" className="btn btn-primary" style={{ fontSize: 15, padding: "14px 32px" }}>
                        Start Your Project <ArrowRight size={16} />
                    </a>
                    <a href="#services" className="btn btn-ghost" style={{ fontSize: 15, padding: "14px 32px" }}>
                        Explore Services
                    </a>
                </div>
                <p style={{ marginTop: 28, fontSize: 12, color: "#3D4A5C" }}>
                    Free consultation · No commitment · Response within 24 hours
                </p>
            </div>
        </section>
    );
}
