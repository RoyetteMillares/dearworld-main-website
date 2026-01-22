"use client";

import { motion } from "framer-motion";

export function Validator() {
    return (
        <section className="bg-white py-32 md:py-48 overflow-hidden relative">
            {/* Background hand-drawn scribble Large */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
                <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path d="M0,500 Q250,250 500,500 T1000,500" stroke="black" strokeWidth="2" fill="none" />
                    <path d="M0,480 Q250,230 500,480 T1000,480" stroke="black" strokeWidth="1" fill="none" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.5em] text-gray-400">The Validation</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-medium italic leading-tight tracking-tight text-black"
                        style={{ fontFamily: "'Gloria Hallelujah', cursive" }}
                    >
                        "We didn't just build a methodology. We build a way for people to finally be{" "}
                        <span className="relative inline-block mx-2">
                            SEEN
                            <svg className="absolute -inset-x-4 -inset-y-2 w-[120%] h-[140%] text-[#FFB300]" viewBox="0 0 100 40">
                                <motion.ellipse
                                    cx="50" cy="20" rx="45" ry="15"
                                    stroke="currentColor" strokeWidth="2" fill="none"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                />
                            </svg>
                        </span>
                        for who they truly are."
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-16 flex flex-col items-center"
                    >
                        <div className="w-16 h-16 bg-black rounded-full mb-4 overflow-hidden border-2 border-[#FFB300]">
                            {/* Placeholder for Robert Fogarty Portrait */}
                            <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-[10px] text-white">RXF</div>
                        </div>
                        <p className="font-bold uppercase tracking-widest text-sm">Robert X. Fogarty</p>
                        <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Founder, Dear World</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
