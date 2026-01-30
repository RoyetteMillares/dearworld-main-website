"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function KeynoteCTA() {
    return (
        <section className="bg-white py-32 md:py-64 text-black overflow-hidden relative">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="space-y-16"
                >
                    <div className="inline-flex items-center gap-4 bg-black text-white py-2 px-6 rounded-none mb-4">
                        <Calendar className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Investment starts at $11,000</span>
                    </div>

                    <h2 className="text-6xl md:text-[8vw] font-black tracking-tighter leading-[0.75] uppercase max-w-4xl mx-auto">
                        Ready to transform <br />
                        <span className="text-black/30">your culture?</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
                        <Button
                            size="lg"
                            className="bg-black text-white border-2 border-black hover:bg-white hover:text-black h-24 px-16 text-xl font-black uppercase tracking-[0.2em] rounded-none transition-all duration-500"
                        >
                            Book a Consultation <ArrowRight className="ml-4 w-8 h-8" />
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Background Narrative Stamp */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
                <span className="text-[30vw] font-black uppercase tracking-tighter leading-none">KEYNOTE</span>
            </div>
        </section>
    );
}
