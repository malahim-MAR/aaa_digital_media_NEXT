"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" style={{ padding: "128px 0", borderTop: "1px solid rgba(0, 166, 251, 0.1)", position: "relative", overflow: "hidden" }}>
            <div className="wrap" style={{ position: "relative", zIndex: 10 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: "block", fontSize: 13, fontWeight: 700, letterSpacing: "0.2em",
                            textTransform: "uppercase", color: "#00A6FB", marginBottom: 32, /* Cyan */
                        }}
                    >
                        Ready for Growth?
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: "clamp(3rem, 10vw, 8rem)", fontWeight: 800, lineHeight: 0.8,
                            marginBottom: 48, letterSpacing: "-0.04em",
                            color: "#FFFFFF"
                        }}
                    >
                        Start Your <br />
                        <span style={{ color: "#0077B6" }}>Project Today.</span> {/* Royal Blue */}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ marginTop: 48, marginBottom: 48 }}
                    >
                        <a href="mailto:contact@aaadigitalmedia.com" className="btn btn-primary" style={{ fontSize: 20, padding: "24px 48px", borderRadius: 100, fontWeight: 700, gap: 16 }}>
                            Get a Free Quote <ArrowUpRight size={24} />
                        </a>
                    </motion.div>

                    <div style={{ display: "flex", gap: 32, marginTop: 64 }}>
                        {[
                            { icon: <Github size={20} />, href: "#" },
                            { icon: <Linkedin size={20} />, href: "#" },
                            { icon: <Twitter size={20} />, href: "#" },
                            { icon: <Mail size={20} />, href: "mailto:contact@aaadigitalmedia.com" },
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                style={{
                                    width: 56, height: 56, borderRadius: 50, border: "1px solid rgba(255,255,255,0.1)",
                                    display: "flex", alignItems: "center", justifyContent: "center", color: "#CECECE",
                                    transition: "all 0.3s"
                                }}
                                /* Hover: Cyan Glow */
                                onMouseEnter={(e) => {
                                    e.target.style.color = "#00A6FB";
                                    e.target.style.borderColor = "#00A6FB";
                                    e.target.style.boxShadow = "0 0 15px rgba(0, 166, 251, 0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = "#CECECE";
                                    e.target.style.borderColor = "rgba(255,255,255,0.1)";
                                    e.target.style.boxShadow = "none";
                                }}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <p style={{ marginTop: 96, fontSize: 13, color: "#94a3b8", fontFamily: "monospace" }}>
                        © {new Date().getFullYear()} AAA Digital Media. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Background Glow - Royal Blue */}
            <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 600, background: "rgba(0, 119, 182, 0.15)", filter: "blur(120px)", borderRadius: "50%", zIndex: -1 }}></div>
        </footer>
    );
}
