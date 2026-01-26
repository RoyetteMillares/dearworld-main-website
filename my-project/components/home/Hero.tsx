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
            {/* Background Image - Editorial Moment */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, filter: "contrast(1.1) brightness(1)" }}
                    animate={{ scale: 1, filter: "contrast(1.1) brightness(0.6)" }}
                    transition={{ duration: 10, ease: "easeOut" }}
                    className="h-full w-full"
                >
                    <Image
                        src="/hero_portrait.png"
                        alt="Hero Portrait"
                        fill
                        className="object-cover object-[50%_20%]"
                        priority
                    />
                </motion.div>
                {/* Texture/Grain Overlay could go here */}
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black" />
            </div>


            {/* <div className="relative z-10 flex h-full flex-col items-center justify-center w-full max-w-[1400px] mx-auto px-4 md:px-6 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-8"
                >
                    EST. 2009 — WORLDWIDE
                </motion.span>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="max-w-7xl text-[12vw] font-black leading-[0.8] tracking-[-0.05em] uppercase md:text-[10vw] lg:text-[8vw]">
                        <span className="block">CULTURE</span>
                        <span className="relative inline-block text-white">
                            THAT
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                animate={{ opacity: showCircle ? 1 : 0, scale: showCircle ? 1 : 0.8, rotate: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <HandDrawnCircle
                                    variant="light"
                                    className="-inset-x-12 -inset-y-8"
                                />
                            </motion.div>
                        </span>
                        <br />
                        <span className="text-white">MATTERS.</span>
                    </h1>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-12 max-w-xl text-lg font-black uppercase tracking-[0.3em] text-white md:text-xl"
                >
                    Built on the power of storytelling.
                </motion.p>
            </div> */}

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-10 z-20 hidden md:flex flex-col items-start gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 vertical-text origin-left rotate-90 translate-y-20">
                    Keep Exploring
                </span>
                <motion.div
                    animate={{ height: [0, 60, 0], y: [0, 0, 60] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px bg-white/20"
                />
            </div>
        </section >
    );
}
