"use client";
// Centralised icon resolver — maps iconName strings to Lucide components.
// Import this in any component that needs to render icons from data.js.

import {
    Camera, Globe, Smartphone, TrendingUp, Star, CheckCircle2, Sparkles,
    Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter,
    Video, Mic, Radio, Users, Film, BookOpen, Shirt, LayoutTemplate, Share2,
    Code2,
} from "lucide-react";

export const ICON_MAP = {
    Camera, Globe, Smartphone, TrendingUp, Star, CheckCircle2, Sparkles,
    Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter,
    Video, Mic, Radio, Users, Film, BookOpen, Shirt, LayoutTemplate, Share2,
    Code2,
};

/** Renders a lucide icon by name string. Falls back to a neutral box if unknown. */
export function Icon({ name, size = 18, ...props }) {
    const Comp = ICON_MAP[name];
    if (!Comp) return <span style={{ width: size, height: size, display: "inline-block" }} />;
    return <Comp size={size} {...props} />;
}
