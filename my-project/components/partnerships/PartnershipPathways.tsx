"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const PATHS = [
    {
        id: "business",
        title: "Business Partners",
        subtitle: "For Agencies & Bureaus",
        desc: "Bring Dear World to your clients. Priority access, revenue sharing, and co-marketing.",
        theme: "light",
        image: "/partnership-business.jpg"
    },
    {
        id: "storyteller",
        title: "Certified Storytellers",
        subtitle: "For Facilitators & Coaches",
        desc: "Master the method. Become a licensed practitioner and deliver the experience.",
        theme: "dark",
        image: "/partnership-storyteller.png"
    }
];

export function PartnershipPathways() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section className="relative h-dvh md:h-[80vh] w-full flex flex-col md:flex-row bg-black overflow-hidden border-b-2 border-black">
            {PATHS.map((path) => (
                <motion.div
                    key={path.id}
                    className={cn(
                        "relative flex-1 flex flex-col justify-center p-8 md:p-16 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group border-black overflow-hidden",
                        path.theme === "light" ? "bg-white text-black" : "bg-black text-white",
                        // Mobile: Border bottom. Desktop: Border right logic.
                        path.id === "business" ? "border-b-2 md:border-b-0 md:border-r-2" : ""
                    )}
                    // Hover Interaction Logic (Desktop Only)
                    animate={{
                        flex: hovered === path.id ? 2 : hovered ? 1 : 1.5
                    }}
                    onMouseEnter={() => setHovered(path.id)}
                    onMouseLeave={() => setHovered(null)}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={path.image}
                            alt={path.title}
                            className="w-full h-full object-cover transition-transform duration-1000 scale-100 hover:scale-105"
                        />
                        {/* Subtle text protection gradient instead of flat overlay */}
                        <div className={cn(
                            "absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-60",
                            path.theme === "light" ? "from-white" : "from-black"
                        )} />
                    </div>

                    <div className="relative z-10 space-y-6 max-w-xl mx-auto md:mx-0">
                        <span className={cn(
                            "inline-block text-[10px] font-black uppercase tracking-[0.4em] px-3 py-1 border rounded-full",
                            path.theme === "light" ? "border-black/20 text-black/60" : "border-white/20 text-white/60"
                        )}>
                            0{path.id === "business" ? "1" : "2"}
                        </span>

                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                            {path.title}
                        </h2>

                        <p className={cn(
                            "text-xl font-medium italic",
                            path.theme === "light" ? "text-black/60" : "text-white/60"
                        )}>
                            {path.subtitle}
                        </p>

                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: hovered === path.id ? "auto" : 0,
                                opacity: hovered === path.id ? 1 : 0
                            }}
                            className="overflow-hidden"
                        >
                            <p className="text-sm font-medium leading-relaxed max-w-sm mb-6">
                                {path.desc}
                            </p>
                            <div className={cn(
                                "flex items-center gap-2 text-xs font-black uppercase tracking-widest",
                                path.theme === "light" ? "text-black" : "text-white"
                            )}>
                                Explore Path <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.div>

                        {/* Mobile Visible Desc (Desktop hidden unless hover) */}
                        <div className="block md:hidden mt-4">
                            <div className={cn(
                                "flex items-center gap-2 text-xs font-black uppercase tracking-widest",
                                path.theme === "light" ? "text-black" : "text-white"
                            )}>
                                Explore <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </section>
    );
}
