"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { m, AnimatePresence, useAnimation } from "framer-motion";
import { Volume2, VolumeX, ChevronUp, ChevronDown, Share2, Info, ArrowLeft, Heart, MessageCircle, Music, MoreHorizontal } from "lucide-react";
import Link from "next/link";

/* ─── Single Reel Slide ─────────────────────────────────────── */
function ReelSlide({ video, accent, categoryTitle, index, isActive, total, muted, onToggleMute }) {
    const [showMeta, setShowMeta] = useState(false);
    const [liked, setLiked] = useState(false);
    const [showHeart, setShowHeart] = useState(false);
    const heartControls = useAnimation();
    const lastTap = useRef(0);

    // Show metadata with a slight delay when slide becomes active
    useEffect(() => {
        if (isActive) {
            const t = setTimeout(() => setShowMeta(true), 400);
            return () => clearTimeout(t);
        } else {
            setShowMeta(false);
        }
    }, [isActive]);

    // Double-tap to like
    const handleDoubleTap = (e) => {
        const now = Date.now();
        if (now - lastTap.current < 300) {
            setLiked(true);
            setShowHeart(true);
            heartControls.start({
                scale: [0, 1.5, 1],
                opacity: [0, 1, 0],
                transition: { duration: 0.5 }
            }).then(() => setShowHeart(false));
        }
        lastTap.current = now;
    };

    const iframeSrc = `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=${isActive ? 1 : 0}&mute=${muted ? 1 : 0}&loop=1&playlist=${video.id}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

    return (
        <div
            style={{
                height: "100%", width: "100%",
                scrollSnapAlign: "start", scrollSnapStop: "always",
                position: "relative", overflow: "hidden", background: "#000",
            }}
            onClick={handleDoubleTap}
        >
            {/* Background Backdrop (Cinema Style) */}
            <div className="hidden lg:block" style={{
                position: "absolute", inset: "-10%",
                backgroundImage: `url(https://img.youtube.com/vi/${video.id}/maxresdefault.jpg)`,
                backgroundSize: "cover", backgroundPosition: "center",
                filter: "blur(80px) brightness(0.25)", opacity: 0.5, zIndex: 0,
            }} />

            {/* Main Content Frame */}
            <div style={{
                position: "relative", height: "100%", width: "100%",
                display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1,
            }}>
                <div style={{
                    position: "relative", height: "100%", aspectRatio: "9/16",
                    background: "#000", boxShadow: "0 0 100px rgba(0,0,0,0.8)", overflow: "hidden",
                }}>
                    {/* The Video */}
                    {isActive && (
                        <iframe
                            src={iframeSrc}
                            title={video.title}
                            allow="autoplay; encrypted-media"
                            style={{
                                position: "absolute", inset: 0, width: "100%", height: "100%",
                                border: "none", transform: "scale(1.8)", transformOrigin: "center center",
                                pointerEvents: "none"
                            }}
                        />
                    )}

                    {/* Interaction Glow / Heart Explosion on Double Tap */}
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", zIndex: 20 }}>
                        <AnimatePresence>
                            {showHeart && (
                                <m.div animate={heartControls} initial={{ scale: 0, opacity: 0 }}>
                                    <Heart size={100} fill="white" color="white" />
                                </m.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Gradients */}
                    <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 20%, transparent 50%, rgba(0,0,0,0.5) 100%)",
                        pointerEvents: "none",
                    }} />

                    {/* ── Bottom Info Area ── */}
                    <AnimatePresence>
                        {showMeta && (
                            <m.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    position: "absolute", bottom: "clamp(24px, 6vh, 40px)",
                                    left: 16, right: 64, zIndex: 10,
                                }}
                            >
                                {/* Profile Context */}
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                                    <div style={{
                                        width: 32, height: 32, borderRadius: "50%",
                                        background: `linear-gradient(45deg, ${accent}, #fff)`, padding: 1.5
                                    }}>
                                        <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 900, color: "#fff" }}>
                                            {video.client?.[0]}
                                        </div>
                                    </div>
                                    <p style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{video.client}</p>
                                    <button style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 6, padding: "3px 10px", fontSize: 10, fontWeight: 700, color: "#fff" }}>
                                        Follow
                                    </button>
                                </div>

                                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: 12, lineHeight: 1.4 }}>
                                    {video.title} ... <span style={{ color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>more</span>
                                </h3>

                                {/* Music Bar */}
                                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff", opacity: 0.8 }}>
                                    <Music size={12} />
                                    <div style={{ fontSize: 11, overflow: "hidden", whiteSpace: "nowrap", width: 140 }}>
                                        <m.div animate={{ x: [0, -100] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }}>
                                            Original Audio • {video.title} • {categoryTitle}
                                        </m.div>
                                    </div>
                                </div>
                            </m.div>
                        )}
                    </AnimatePresence>

                    {/* ── Sidebar Actions ── */}
                    <div style={{
                        position: "absolute", right: 8, bottom: "clamp(24px, 6vh, 40px)",
                        zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 20
                    }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                            <m.button whileTap={{ scale: 0.8 }} onClick={() => setLiked(!liked)} style={{ background: "none", border: "none", color: liked ? "#ff3040" : "#fff", cursor: "pointer", padding: 8 }}>
                                <Heart size={28} fill={liked ? "#ff3040" : "none"} strokeWidth={2} />
                            </m.button>
                            <span style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>{liked ? "1.2k" : "1.1k"}</span>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                            <button style={{ background: "none", border: "none", color: "#fff", padding: 8 }}>
                                <MessageCircle size={28} strokeWidth={2} />
                            </button>
                            <span style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>42</span>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                            <button style={{ background: "none", border: "none", color: "#fff", padding: 8 }}>
                                <Share2 size={26} strokeWidth={2} />
                            </button>
                            <span style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>Share</span>
                        </div>

                        {/* Mute Toggle */}
                        <m.button whileTap={{ scale: 0.8 }} onClick={onToggleMute} style={{ background: "none", border: "none", color: "#fff", padding: 8 }}>
                            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </m.button>

                        <button style={{ background: "none", border: "none", color: "#fff", padding: 8 }}>
                            <MoreHorizontal size={20} />
                        </button>

                        {/* Rotating Music Disc */}
                        <m.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{
                                width: 30, height: 30, borderRadius: "50%",
                                border: "4px solid #333", background: "linear-gradient(45deg, #111, #441111)",
                                marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center",
                                overflow: "hidden"
                            }}
                        >
                            <div style={{ width: 10, height: 10, borderRadius: "50%", background: accent }} />
                        </m.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ReelsViewer({ videos, accent, categoryTitle }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [muted, setMuted] = useState(true);
    const containerRef = useRef(null);
    const slideRefs = useRef([]);

    // ── Body Lock & UI Hiding ──
    useEffect(() => {
        // Prevent background scrolling
        const originalOverflow = document.body.style.overflow;
        const originalHeight = document.body.style.height;
        document.body.style.overflow = "hidden";
        document.body.style.height = "100dvh";

        // Find and hide global layout elements
        const nav = document.querySelector('header') || document.querySelector('[class*="Navbar"]');
        const footer = document.querySelector('footer') || document.querySelector('[class*="Footer"]');
        const cta = document.querySelector('[class*="floating-cta"]');

        if (nav) nav.style.display = "none";
        if (footer) footer.style.display = "none";
        if (cta) cta.style.display = "none";

        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.height = originalHeight;
            if (nav) nav.style.display = "";
            if (footer) footer.style.display = "";
            if (cta) cta.style.display = "";
        };
    }, []);

    // ── Intersection Observer for Active Index ──
    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const idx = slideRefs.current.indexOf(entry.target);
                        if (idx !== -1) setActiveIndex(idx);
                    }
                });
            },
            { threshold: 0.6, root: containerRef.current }
        );
        slideRefs.current.forEach(el => el && obs.observe(el));
        return () => obs.disconnect();
    }, [videos]);

    const scrollTo = useCallback((index) => {
        slideRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    return (
        <div style={{ height: "100dvh", width: "100%", background: "#000", overflow: "hidden", position: "relative" }}>
            {/* Top Bar (Context & Close) */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 100, zIndex: 100, pointerEvents: "none", background: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)" }} />

            <div style={{ position: "absolute", top: 24, left: 24, zIndex: 110, display: "flex", alignItems: "center", gap: 16 }}>
                <Link href="/portfolio" style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", pointerEvents: "auto" }}>
                    <ArrowLeft size={22} />
                </Link>
                <div style={{ pointerEvents: "auto" }}>
                    <h2 style={{ fontSize: 18, fontWeight: 900, color: "#fff", margin: 0 }}>{categoryTitle}</h2>
                    <span style={{ fontSize: 10, color: accent, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>Portfolio Showcase</span>
                </div>
            </div>

            {/* Progress Segment */}
            <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: "min(400px, 92%)", display: "flex", gap: 3, zIndex: 120 }}>
                {videos.map((_, i) => (
                    <div key={i} style={{ flex: 1, height: 2, background: "rgba(255,255,255,0.25)", borderRadius: 10, overflow: "hidden" }}>
                        <m.div
                            initial={false}
                            animate={{ width: i === activeIndex ? "100%" : i < activeIndex ? "100%" : "0%" }}
                            transition={{ duration: 0.4 }}
                            style={{ height: "100%", background: "#fff" }}
                        />
                    </div>
                ))}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex" style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", flexDirection: "column", gap: 12, zIndex: 100 }}>
                <button onClick={() => scrollTo(Math.max(0, activeIndex - 1))} style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", cursor: "pointer" }}>
                    <ChevronUp size={24} />
                </button>
                <button onClick={() => scrollTo(Math.min(videos.length - 1, activeIndex + 1))} style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", cursor: "pointer" }}>
                    <ChevronDown size={24} />
                </button>
            </div>

            {/* Scroll Container */}
            <div
                ref={containerRef}
                style={{ height: "100%", width: "100%", overflowY: "scroll", scrollSnapType: "y mandatory", scrollBehavior: "smooth", msOverflowStyle: "none", scrollbarWidth: "none" }}
                className="hide-scrollbar"
            >
                {videos.map((video, i) => (
                    <div key={i} ref={el => slideRefs.current[i] = el} style={{ height: "100%", width: "100%", scrollSnapAlign: "start" }}>
                        <ReelSlide
                            video={video}
                            accent={accent}
                            categoryTitle={categoryTitle}
                            index={i}
                            total={videos.length}
                            isActive={activeIndex === i}
                            muted={muted}
                            onToggleMute={() => setMuted(!muted)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
