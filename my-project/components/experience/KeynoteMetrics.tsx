"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Camera, Mic, Sparkles } from "lucide-react";
import Image from "next/image";

const ACTS = [
    {
        id: "ACT_01",
        title: "The Workshop",
        subtitle: "Interactive Discovery",
        desc: "A high-energy, guided session where teams learn the Brain Tattoo Method™. Breakouts, rapid-fire sharing, and deep connection.",
        icon: <Sparkles className="w-8 h-8" />,
        theme: "dark",
        image: "/act1_workshop.jpg" // Placeholder
    },
    {
        id: "ACT_02",
        title: "The Studio",
        subtitle: "Portrait & Video",
        desc: "Professional portraiture and video interviews. Participants step in front of the lens to capture their story in high fidelity.",
        icon: <Camera className="w-8 h-8" />,
        theme: "light",
        image: "/act2_studio.jpg" // Placeholder
    },
    {
        id: "ACT_03",
        title: "The Reveal",
        subtitle: "Shared Experience",
        desc: "The culmination of the day. A gallery walk or live storytelling session where the hidden narratives of the team are finally seen.",
        icon: <Mic className="w-8 h-8" />,
        theme: "dark",
        image: "/act3_reveal.jpg" // Placeholder
    }
];

export function KeynoteMetrics() {
    return (
        <section className="bg-black text-white relative">
            {ACTS.map((act, i) => (
                <div key={i} className={cn(
                    "relative min-h-[80vh] flex flex-col lg:flex-row",
                    act.theme === "light" ? "bg-white text-black" : "bg-black text-white"
                )}>
                    {/* Content Side */}
                    <div className={cn(
                        "w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center relative z-10 order-2 lg:order-1",
                        i % 2 === 1 ? "lg:order-2 border-l-2 border-black/10" : "border-r-2 border-white/10"
                    )}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className={cn(
                                    "text-[10px] font-black uppercase tracking-[0.4em] py-1 px-3 border rounded-full",
                                    act.theme === "light" ? "border-black/20 text-black/60" : "border-white/20 text-white/60"
                                )}>
                                    {act.id}
                                </span>
                            </div>

                            <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-4">
                                {act.title}
                            </h3>
                            <p className={cn(
                                "text-2xl font-medium mb-8 italic",
                                act.theme === "light" ? "text-black/40" : "text-white/40"
                            )}>
                                {act.subtitle}
                            </p>
                            <p className={cn(
                                "text-lg md:text-xl font-medium leading-relaxed max-w-md",
                                act.theme === "light" ? "text-black/70" : "text-white/70"
                            )}>
                                {act.desc}
                            </p>
                        </motion.div>
                    </div>

                    {/* Image Side */}
                    <div className={cn(
                        "w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-auto order-1 lg:order-2 overflow-hidden group",
                        i % 2 === 1 ? "lg:order-1" : ""
                    )}>
                        <div className={cn(
                            "absolute inset-0 z-10 opacity-20 transition-opacity duration-700 group-hover:opacity-0",
                            act.theme === "light" ? "bg-white" : "bg-black"
                        )} />

                        {/* Placeholder for actual images - using grayscale filter for noir feel */}
                        <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white/20 text-9xl font-black uppercase tracking-tighter opacity-50 rotate-[-15deg]">
                                {act.title}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
