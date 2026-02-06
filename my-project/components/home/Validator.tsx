"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Scribble } from "@/components/ui/BrandAssets";

export function Validator() {
    return (
        <section className="bg-black text-white min-h-screen flex flex-col lg:flex-row border-t-2 border-white/10 relative overflow-hidden">
            {/* Left Column: Typography */}
            <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 pr-12 md:pr-24 lg:pr-32 flex flex-col justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="inline-block py-1 px-4 border border-white/20 rounded-full mb-8">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">
                            Founder Intent
                        </span>
                    </div>

                    <h2 className="h-section text-white">
                        "We didn't just build a
                        <span className="text-white/30"> methodology.</span> <br />
                        We built a way to finally be{" "}
                        <span className="relative inline-block text-[#FFB300]">
                            SEEN.
                            <Scribble
                                variant="17"
                                className="-bottom-6 left-0 w-[120%] h-16 opacity-100 invert-0"
                            />
                        </span>"
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center gap-6"
                >
                    <div className="h-px w-12 bg-white/30" />
                    <div className="space-y-1">
                        <p className="text-xl font-black uppercase tracking-tight">Robert X. Fogarty</p>
                        <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.4em]">Founder / Dear World</p>
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Cinematic Image */}
            <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-auto relative border-l border-white/10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/robert_fogarty.jpg"
                        alt="Robert Fogarty"
                        fill
                        className="object-cover object-top"
                    />
                    {/* Noir Overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                </motion.div>
            </div>

            {/* Architectural Background Text */}
            <div className="absolute bottom-0 right-0 opacity-[0.05] select-none pointer-events-none translate-y-1/2 z-0 hidden lg:block">
                <span className="text-[20vw] font-black uppercase tracking-tighter leading-none text-white">TRUTH</span>
            </div>
        </section>
    );
}
