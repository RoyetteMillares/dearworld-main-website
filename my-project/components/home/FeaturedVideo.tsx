"use client";

import { motion } from "framer-motion";
import { Scribble } from "@/components/ui/BrandAssets";
import { Quote } from "lucide-react";

export function FeaturedVideo() {
    return (
        <section className="relative bg-black py-48 md:py-64 overflow-hidden border-b border-white/5">
            {/* Background Architectural Text */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none hidden lg:block">
                <span className="text-[30vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap -rotate-90 origin-center">
                    VOICE
                </span>
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 lg:gap-16 xl:gap-32 items-center">
                    {/* Left Content Column */}
                    <div className="lg:w-1/2 space-y-16 relative">
                        {/* Background Quote Watermark */}
                        <Quote className="absolute -top-32 -left-20 w-64 h-64 text-white opacity-[0.03] pointer-events-none" />

                        <div className="relative space-y-8 z-10">
                            {/* Metadata Stamp */}
                            <div className="inline-flex items-center py-1.5 px-4 bg-white text-black rounded-full">
                                <span className="text-[9px] font-black uppercase tracking-[0.4em]">
                                    Methodology
                                </span>
                            </div>

                            <h2 className="text-6xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-[7vw] font-black uppercase tracking-tighter text-white leading-[0.8]">
                                HOW THE <br />
                                <span className="relative inline-block">
                                    BRAIN
                                    <Scribble variant="13" className="-top-4 -right-8 w-24 h-24 opacity-20 rotate-12" />
                                </span> <br />
                                <span className="relative inline-block text-white">
                                    TATTOO
                                    <Scribble variant="17" className="-bottom-10 md:-bottom-12 left-0 w-full h-16 md:h-24 grayscale opacity-20" />
                                </span> <br />
                                WORKS.
                            </h2>
                        </div>

                        <div className="relative pt-8">
                            {/* Serif Italic Quote Accent */}
                            <p className="text-2xl md:text-3xl font-serif italic font-bold text-white/60 leading-tight max-w-lg">
                                "The story you carry is the foundation of the culture you build."
                            </p>
                        </div>
                    </div>

                    {/* Right Media Column */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative">
                            {/* Cinematic Frame */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                className="relative aspect-video bg-zinc-900 overflow-hidden group z-20"
                            >
                                <iframe className="w-full h-full" src="https://www.youtube.com/embed/GrZKPan2xFs?si=Nz0BK253I87CbN83" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </motion.div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
