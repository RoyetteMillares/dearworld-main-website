"use client";

import { motion } from "framer-motion";

export function ServiceHero() {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFB300]">
                            Professional Services
                        </span>
                        <h1 className="mt-8 text-5xl font-bold leading-[1.1] tracking-tighter text-black md:text-7xl lg:text-8xl">
                            Human Solutions for <br />
                            <span className="text-gray-400">Complex Businesses.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="mt-12 max-w-2xl text-xl leading-relaxed text-gray-600 md:text-2xl"
                    >
                        We help the world's leading organizations build psychological safety,
                        resilience, and connection through the transformative power of storytelling.
                    </motion.p>
                </div>
            </div>

            {/* Brutalist Divider */}
            <div className="mt-24 h-px w-full bg-black/10" />
        </section>
    );
}
