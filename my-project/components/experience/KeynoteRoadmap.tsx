"use client";

import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

const PHASES = [
    {
        num: "01",
        title: "Alignment & Planning",
        desc: "We collaborate with you to clarify event goals, understand your values, and design a customized experience.",
        meta: "Phase 1"
    },
    {
        num: "02",
        title: "Leader Prep",
        desc: "We prepare your leaders through storytelling workshops, helping them articulate personal stories that align with organizational values.",
        meta: "Phase 2"
    },
    {
        num: "03",
        title: "Keynote Experience",
        desc: "Our facilitator delivers an engaging keynote, guiding your audience through the Brain Tattoo Method™.",
        active: true,
        meta: "Phase 3"
    },
    {
        num: "04",
        title: "Photo Session",
        desc: "A coordinated photo shoot of every attendee with their Brain Tattoo or Portrait message.",
        meta: "Phase 4"
    },
    {
        num: "05",
        title: "The Reveal",
        desc: "Selected participants share their refined stories live on stage, paired with value analysis.",
        meta: "Phase 5"
    }
];

export function KeynoteRoadmap() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <section className="bg-zinc-100 py-32 md:py-48 border-t-2 border-black relative overflow-hidden">
            {/* Background Ticket Texture */}
            <div className="absolute inset-x-0 top-0 h-4 bg-[url('https://www.transparenttextures.com/patterns/saw-tooth.png')] opacity-20" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24 space-y-6">
                    <span className="inline-block border border-black/20 rounded-full px-4 py-1">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/60">
                            Timeline
                        </span>
                    </span>
                    <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                        The <br /> Roadmap
                    </h2>
                </div>

                <div ref={containerRef} className="relative">
                    {/* The Timeline Line (Static Background) */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-black/10 -translate-x-1/2" />

                    {/* The Timeline Line (Animated Foreground) */}
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-black -translate-x-1/2 origin-top"
                    />

                    <div className="space-y-24">
                        {PHASES.map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className={cn(
                                    "relative flex flex-col md:flex-row gap-8 md:gap-24 items-start md:items-center",
                                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Phase Content */}
                                <div className={cn(
                                    "flex-1 space-y-4 pl-12 md:pl-0",
                                    i % 2 === 0 ? "md:text-left" : "md:text-right"
                                )}>
                                    <div className={cn(
                                        "flex gap-4 items-center mb-2",
                                        i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                    )}>
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 block">
                                            {phase.meta}
                                        </span>
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85]">
                                        {phase.title}
                                    </h3>
                                    <p className={cn(
                                        "text-lg font-medium text-black/60 leading-relaxed max-w-sm",
                                        i % 2 === 0 ? "mr-auto" : "ml-auto"
                                    )}>
                                        {phase.desc}
                                    </p>
                                </div>

                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 flex items-center justify-center">
                                    <div className={cn(
                                        "w-10 h-10 border-2 border-black bg-white flex items-center justify-center z-10 transition-colors duration-500",
                                        phase.active ? "bg-black text-white" : "text-black"
                                    )}>
                                        <span className="text-[10px] font-black">{phase.num}</span>
                                    </div>
                                </div>

                                {/* Empty Spacer for Grid Balance */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-32 flex justify-center">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ArrowDown className="w-8 h-8 text-black/20" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
