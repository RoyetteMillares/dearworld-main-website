"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Added this import for the new Image component

export function Validator() {
    return (
        <section className="bg-white py-48 md:py-64 overflow-hidden relative border-t-2 border-black">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block py-1 px-3 bg-black text-white mb-12"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                            Verification / Founder Intent
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-6xl md:text-[8vw] lg:text-[7vw] font-black uppercase leading-[0.75] tracking-tighter text-black"
                    >
                        "We didn't just build a
                        <span className="text-black/30"> methodology.</span> We build a way to finally be{" "}
                        <span className="relative inline-block">
                            SEEN.
                            <svg className="absolute -inset-x-8 -inset-y-4 w-[130%] h-[150%] text-black opacity-100" viewBox="0 0 100 40">
                                <motion.ellipse
                                    cx="50" cy="20" rx="48" ry="18"
                                    stroke="currentColor" strokeWidth="1" fill="none"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                />
                            </svg>
                        </span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-24 flex items-center gap-8"
                    >
                        <div className="w-24 h-24 bg-black border-2 border-black overflow-hidden relative">
                            <Image
                                src="/robert_fogarty.png"
                                alt="Robert Fogarty"
                                fill
                                className="object-cover transition-all duration-700"
                            />
                        </div>
                        <div className="space-y-1">
                            <p className="font-black uppercase tracking-[0.3em] text-sm">Robert X. Fogarty</p>
                            <p className="text-[10px] text-black/40 font-black uppercase tracking-[0.4em]">Founder / Dear World</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Architectural Background Text */}
            <div className="absolute bottom-0 right-0 opacity-[0.03] select-none pointer-events-none translate-y-1/2">
                <span className="text-[20vw] font-black uppercase tracking-tighter leading-none">TRUTH</span>
            </div>
        </section>
    );
}
