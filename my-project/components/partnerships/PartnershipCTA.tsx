"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Scribble } from "@/components/ui/BrandAssets";

export function PartnershipCTA() {
    return (
        <section className="bg-white py-32 md:py-64 text-black overflow-hidden relative border-t-2 border-black">
            {/* Decorative Accents */}
            <Scribble variant="13" className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] absolute -bottom-40 -left-40 md:-bottom-60 md:-left-60 scale-150 opacity-10 pointer-events-none" />

            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="space-y-16"
                >
                    <h2 className="text-6xl md:text-[8vw] lg:text-[10vw] font-black tracking-tighter leading-[0.85] md:leading-[0.8] uppercase max-w-5xl mx-auto italic">
                        Ready to join <br />
                        <span className="not-italic text-black/20">our movement?</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <Button
                            size="lg"
                            className="bg-black text-white border-2 border-black hover:bg-white hover:text-black h-24 px-16 text-xl font-black uppercase tracking-[0.2em] rounded-none transition-all duration-500"
                        >
                            Apply to Partner <ArrowRight className="ml-4 w-8 h-8" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
