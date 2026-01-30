"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function KeynoteCTA() {
    return (
        <section className="bg-white py-32 md:py-48 text-black overflow-hidden relative border-t-2 border-black">
            {/* Scrolling Marquee Background */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden opacity-[0.04] pointer-events-none select-none">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="whitespace-nowrap flex gap-32"
                >
                    <span className="text-[20vw] font-black uppercase tracking-tighter leading-none">
                        START THE JOURNEY
                    </span>
                    <span className="text-[20vw] font-black uppercase tracking-tighter leading-none">
                        START THE JOURNEY
                    </span>
                </motion.div>
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="space-y-12"
                >
                    <div className="inline-flex items-center gap-4 bg-black text-white py-2 px-6 rounded-full mb-4">
                        <Calendar className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Limited Availability 2024</span>
                    </div>

                    <h2 className="text-6xl md:text-[8vw] font-black tracking-tighter leading-[0.8] uppercase max-w-5xl mx-auto mix-blend-multiply">
                        Ready to transform <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-black via-black to-black/50">your culture?</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
                        <Button
                            size="lg"
                            className="bg-black text-white hover:bg-[#FFB300] hover:text-black hover:scale-105 transform border-2 border-black h-24 px-16 text-xl font-black uppercase tracking-[0.2em] rounded-none transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none"
                        >
                            Book a Consultation <ArrowRight className="ml-4 w-8 h-8" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
