
import { ArrowRight } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";

export default function About() {
    return (
        <section id="about" className="section">
            <div className="wrap">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-grid">
                    {/* Left */}
                    <div>
                        <span className="label"><span className="label-dot" />About Us</span>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 20 }}>
                            Built Different.{" "}
                            <span className="g-text">Proven Results.</span>
                        </h2>
                        <p style={{ color: "#8892A4", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                            AAA Digital Media is a full-service digital agency based in Karachi, Pakistan — serving ambitious brands across 15+ countries. We combine international-level quality with the dedication of a boutique studio.
                        </p>
                        <p style={{ color: "#8892A4", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                            From day one, our mission has been simple: deliver real, measurable growth for every client we work with.
                        </p>
                        <a href="#contact" className="btn btn-primary">
                            Work With Us <ArrowRight size={15} />
                        </a>
                    </div>

                    {/* Right */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        {WHY_CHOOSE_US.map((w, i) => (
                            <div key={i} className="card" style={{ padding: 22 }}>
                                <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 9, marginBottom: 14 }}>
                                    {w.icon}
                                </div>
                                <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{w.title}</h4>
                                <p style={{ fontSize: 13, color: "#8892A4", lineHeight: 1.6 }}>{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
        </section>
    );
}
