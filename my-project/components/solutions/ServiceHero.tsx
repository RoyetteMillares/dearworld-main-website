"use client";

import { motion } from "framer-motion";

export function ServiceHero() {
    return (
        <section className="bg-black py-32 md:py-48 relative overflow-hidden">
            {/* Background Architectural Watermark */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
                <span className="text-[30vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap">
                    SOLUTIONS
                </span>
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="inline-block py-1.5 px-4 bg-white text-black rounded-full">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em]">
                                The Methodology
                            </span>
                        </div>
                        <h1 className="mt-12 text-[12vw] md:text-[10vw] lg:text-[8vw] font-black leading-[0.8] tracking-tighter text-white uppercase italic">
                            Human <br />
                            <span className="text-white/20 not-italic">Infrastructure.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mt-16 max-w-2xl text-2xl leading-relaxed text-gray-400 font-medium"
                    >
                        We build the psychological safety and authentic connection
                        required for elite performance in complex organizations.
                    </motion.p>
                </div>
            </div>

            {/* Brutalist Divider */}
            <div className="mt-32 h-px w-full bg-white/10" />
        </section>
    );
}
