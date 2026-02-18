
import { ArrowUpRight } from "lucide-react";
import { WORK } from "@/lib/data";

export default function Work() {
    return (
        <section id="work" className="section">
            <div className="wrap">
                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 56 }}>
                    <div>
                        <span className="label"><span className="label-dot" />Portfolio</span>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            Work That <span className="g-text">Speaks Results</span>
                        </h2>
                    </div>
                    <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "#8892A4", textDecoration: "none" }}>
                        View all work <ArrowUpRight size={14} />
                    </a>
                </div>

                {/* Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                    {WORK.map((w, i) => (
                        <div key={i} style={{
                            position: "relative", borderRadius: 14, overflow: "hidden",
                            aspectRatio: i === 0 ? "16/8" : "4/3",
                            gridColumn: i === 0 ? "1 / -1" : undefined,
                            border: "1px solid rgba(255,255,255,0.07)",
                            cursor: "pointer",
                        }}
                            className="card"
                        >
                            {/* BG */}
                            <div style={{
                                position: "absolute", inset: 0,
                                background: `linear-gradient(135deg, ${w.color} 0%, #0A0D12 100%)`,
                            }} />
                            {/* Glow */}
                            <div style={{
                                position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)",
                                width: 200, height: 200, borderRadius: "50%",
                                background: w.accent, filter: "blur(70px)", opacity: .18,
                            }} />
                            {/* Overlay */}
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,13,18,.9) 0%, transparent 60%)" }} />
                            {/* Content */}
                            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 28px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
                                <div>
                                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: w.accent, marginBottom: 6 }}>
                                        {w.industry}
                                    </p>
                                    <h3 style={{ fontSize: i === 0 ? 24 : 18, fontWeight: 800 }}>{w.title}</h3>
                                    <p style={{ marginTop: 4, fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{w.result}</p>
                                </div>
                                <div style={{
                                    width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    <ArrowUpRight size={16} color="#fff" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
