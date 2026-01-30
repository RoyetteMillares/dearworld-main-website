"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function PartnershipCTA() {
    return (
        <section className="bg-white py-32 md:py-48 text-black overflow-hidden relative">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="space-y-12"
                >
                    <h2 className="text-6xl md:text-[8vw] font-black tracking-tighter leading-[0.8] uppercase max-w-5xl mx-auto">
                        Ready to start <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-black via-black to-black/50">your chapter?</span>
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                        <Button
                            size="lg"
                            className="bg-black text-white hover:bg-[#FFB300] hover:text-black hover:scale-105 transform border-2 border-black h-20 px-12 text-lg font-black uppercase tracking-[0.2em] rounded-none transition-all duration-300 w-full md:w-auto"
                        >
                            Business Inquiry <Mail className="ml-4 w-5 h-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white text-black hover:bg-black hover:text-white border-2 border-black h-20 px-12 text-lg font-black uppercase tracking-[0.2em] rounded-none transition-all duration-300 w-full md:w-auto"
                        >
                            Storyteller App <ArrowRight className="ml-4 w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scrolling Marquee Background */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.04] pointer-events-none select-none border-t border-black">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="whitespace-nowrap flex gap-32 py-4"
                >
                    <span className="text-[10vw] font-black uppercase tracking-tighter leading-none">JOIN THE MOVEMENT</span>
                    <span className="text-[10vw] font-black uppercase tracking-tighter leading-none">JOIN THE MOVEMENT</span>
                    <span className="text-[10vw] font-black uppercase tracking-tighter leading-none">JOIN THE MOVEMENT</span>
                </motion.div>
            </div>
        </section>
    );
}
