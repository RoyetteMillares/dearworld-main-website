"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export function KeynoteHero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Full-Bleed Video Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Cinematic Tint */}
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black z-10" />

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-80"
                >
                    <source src="https://player.vimeo.com/external/451670966.sd.mp4?s=6a9d708761173981140049536868661601662998&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
                </video>
            </motion.div>

            {/* Content Overlay */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <span className="inline-block border border-white/30 rounded-full px-4 py-1.5 backdrop-blur-md bg-white/5">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                            The Signature Experience
                        </span>
                    </span>
                </motion.div>

                <motion.h1
                    style={{ opacity }}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter mix-blend-overlay text-white drop-shadow-2xl"
                >
                    Culture <br />
                    <span className="text-white/60">Driver.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">
                        Scroll to Explore
                    </span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-6 h-6 text-white/40" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
