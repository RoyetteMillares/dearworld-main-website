"use client";

import { motion } from "framer-motion";
import { HandDrawnCircle } from "@/components/ui/BrandAssets";

export function ClubHero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24 bg-black">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover opacity-50 grayscale"
                >
                    <source
                        src="https://vb-p.rmcdn1.net/5982064cff6797729c24848f/5e76b55e0c50570d5f90e27d/2dd2be9c-c5b4-4708-836d-88d4ccfa5b84.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-12"
                >
                    <div className="inline-block py-1.5 px-6 border border-white/20 text-white rounded-full">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em]">
                            Most Exclusive Offering
                        </span>
                    </div>

                    <h1 className="text-[14vw] md:text-[12vw] lg:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase italic text-white">
                        The <br />
                        <span className="relative inline-block not-italic">
                            Club.
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1.2 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="absolute -inset-12 md:-inset-24 z-[-1]"
                            >
                                <HandDrawnCircle variant="light" className="w-full h-full grayscale opacity-40" />
                            </motion.div>
                        </span>
                    </h1>

                    <p className="mt-12 max-w-2xl mx-auto text-2xl md:text-3xl font-medium leading-[1.1] text-gray-400">
                        Leadership. Storytelling. Purpose. <br />
                        A 365-day partnership in shaping leaders and deepening culture.
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] rotate-90 origin-left translate-x-1/2">
                    Scroll
                </div>
            </div>
        </section>
    );
}
