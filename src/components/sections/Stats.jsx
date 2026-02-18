
import { STATS } from "@/lib/data";

export default function Stats() {
    return (
        <section style={{ padding: "72px 0", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
            <div style={{
                position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)",
                width: 600, height: 300, background: "rgba(37,99,235,0.05)",
                borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none",
            }} />
            <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: 16,
                }}>
                    {STATS.map((s, i) => (
                        <div key={i} className="card" style={{ padding: "36px 24px", textAlign: "center" }}>
                            <div className="g-text" style={{ fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 900, letterSpacing: "-.03em", lineHeight: 1 }}>
                                {s.value}
                            </div>
                            <p style={{ marginTop: 10, fontSize: 13, fontWeight: 500, color: "#8892A4" }}>{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
