"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HandDrawnCircle } from "@/components/ui/BrandAssets";

export function Hero() {
    const [showCircle, setShowCircle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowCircle(true), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background Video - Cinematic Atmosphere */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <iframe
                    src="https://www.youtube.com/embed/IE40JUB1lfA?autoplay=1&mute=1&loop=1&playlist=IE40JUB1lfA&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1"
                    className="absolute min-w-full min-h-full object-cover aspect-video"

                    allow="autoplay; fullscreen"
                />
                <Image
                    src="/hero-video.png"
                    alt="Background Image"
                    fill
                    className="object-cover object-center -z-10"
                />

            </div>


            <div className="relative hidden z-10 flex h-full flex-col items-center justify-center w-full max-w-[1400px] mx-auto px-4 md:px-6 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-[10px] font-black uppercase tracking-[0.6em] text-white/50 mb-12"
                >
                    EST. 2009 — WORLDWIDE — DEAR WORLD
                </motion.span>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="max-w-[95vw] text-[13vw] md:text-[11vw] lg:text-[10vw] font-black leading-[0.85] md:leading-[0.8] tracking-tighter uppercase italic">
                        <span className="block overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="block"
                            >
                                CULTURE
                            </motion.span>
                        </span>
                        <span className="relative inline-block text-white overflow-hidden not-italic">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="block"
                            >
                                THAT
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                    animate={{ opacity: showCircle ? 1 : 0, scale: showCircle ? 1 : 0.8, rotate: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="absolute inset-x-[-20%] inset-y-[-20%] md:inset-x-[-40%] md:inset-y-[-40%] z-[-1]"
                                >
                                    <HandDrawnCircle
                                        variant="light"
                                        className="w-full h-full scale-125 md:scale-150 grayscale opacity-40"
                                    />
                                </motion.div>
                            </motion.span>
                        </span>
                        <br />
                        <span className="text-white/20 block overflow-hidden not-italic">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="block"
                            >
                                MATTERS.
                            </motion.span>
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-16 flex flex-col items-center gap-6"
                >
                    <p className="max-w-xl text-xs font-black uppercase tracking-[0.4em] text-white">
                        Built on the power of storytelling.
                    </p>
                    <div className="h-24 w-px bg-white/20 overflow-hidden">
                        <motion.div
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="h-full w-full bg-white"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator - Redesigned for Brutalist style */}
            <div className="absolute bottom-12 right-12 z-20 hidden md:flex flex-col items-end gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                    Scroll to Explore
                </span>
                <div className="h-px w-12 bg-white/40" />
            </div>
        </section >
    );
}
