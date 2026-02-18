
import { SERVICES } from "@/lib/data";

export default function Services() {
    return (
        <section id="services" className="section">
            <div className="wrap">
                {/* Header */}
                <div style={{ maxWidth: 560, marginBottom: 56 }}>
                    <span className="label"><span className="label-dot" />Services</span>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 16 }}>
                        Everything Your Brand Needs,{" "}
                        <span className="g-text">Under One Roof</span>
                    </h2>
                    <p style={{ color: "#8892A4", fontSize: 17, lineHeight: 1.7 }}>
                        From strategy to execution — we handle every digital touchpoint so you can focus on growing.
                    </p>
                </div>

                {/* Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: 16,
                }}>
                    {SERVICES.map((s, i) => (
                        <div key={i} className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 20 }}>
                            <div className="icon-box">{s.icon}</div>
                            <div>
                                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                                <p style={{ color: "#8892A4", fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                                {s.tags.map(t => (
                                    <span key={t} style={{
                                        fontSize: 11, fontWeight: 600, padding: "4px 10px",
                                        borderRadius: 100, background: "rgba(37,99,235,0.08)",
                                        border: "1px solid rgba(37,99,235,0.16)", color: "#60A5FA",
                                    }}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
