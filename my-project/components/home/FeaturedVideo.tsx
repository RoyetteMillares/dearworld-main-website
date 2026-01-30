"use client";

import { motion } from "framer-motion";
import { Scribble } from "@/components/ui/BrandAssets";
import { Quote } from "lucide-react";

export function FeaturedVideo() {
    return (
        <section className="relative bg-black py-24 md:py-32 overflow-hidden border-t border-white/10">
            {/* Background Architectural Text */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none select-none w-full text-center">
                <span className="text-[25vw] font-black uppercase tracking-tighter leading-none text-white whitespace-nowrap">
                    METHOD
                </span>
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10 mb-24 md:mb-32">
                <div className="flex flex-col items-center text-center space-y-12">
                    {/* Metadata Stamp */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block py-1 px-4 border border-white/20 rounded-full bg-black"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                            Methodology / Process
                        </span>
                    </motion.div>

                    <h2 className="text-6xl md:text-8xl lg:text-[10vw] font-black uppercase tracking-tighter text-white leading-[0.8]">
                        <motion.span
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="block"
                        >
                            HOW THE
                        </motion.span>
                        <span className="relative inline-block">
                            <motion.span
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="block z-10 relative"
                            >
                                BRAIN
                            </motion.span>
                            <Scribble variant="13" className="-top-4 -right-12 w-32 h-32 opacity-80 invert absolute z-0 hidden md:block" />
                        </span> <br />
                        <span className="relative inline-block text-white">
                            <motion.span
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="block z-10 relative"
                            >
                                TATTOO
                            </motion.span>
                            <Scribble variant="17" className="-bottom-6 left-0 w-[110%] h-20 opacity-100 absolute z-0" />
                        </span> <br />
                        <motion.span
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="block text-white/40"
                        >
                            WORKS.
                        </motion.span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-xl md:text-3xl font-medium text-white/70 max-w-2xl mx-auto leading-relaxed"
                    >
                        "The story you carry is the foundation of the culture you build."
                    </motion.p>
                </div>
            </div>

            {/* Full Bleed Cinema Video */}
            <div className="w-full overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative w-screen aspect-video md:h-[85vh]"
                >
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/GrZKPan2xFs?si=XK_GGbWNFoinWQnL&amp;start=4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    {/* Gradient Overlay for seamless transition */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-black to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
