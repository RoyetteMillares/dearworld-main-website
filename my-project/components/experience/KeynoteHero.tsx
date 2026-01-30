"use client";

import { motion } from "framer-motion";

export function KeynoteHero() {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden bg-black text-white">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black z-10" />
                <div className="h-full w-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_100%)] from-zinc-800" />
            </div>

            <div className="relative z-20 flex h-full flex-col items-center justify-center container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 px-4 py-1 border border-white/10">
                        The Signature Experience
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[13vw] md:text-[11vw] lg:text-[10vw] font-black leading-[0.85] md:leading-[0.8] tracking-tighter uppercase italic"
                >
                    Your Stories <br />
                    <span className="not-italic text-white/20">Drive Your</span> <br />
                    <span className="not-italic">Culture.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-16 relative"
                >
                    <p className="max-w-xl text-[10px] font-black uppercase tracking-[0.6em] text-white/60">
                        We help you tell them better.
                    </p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="h-px w-24 bg-white/20 mx-auto mt-6"
                    />
                </motion.div>
            </div>
        </section>
    );
}
