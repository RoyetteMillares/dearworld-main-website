"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
    return (
        <section className="relative bg-black py-40 overflow-hidden">
            {/* Background Hand-drawn Circle Animation (Large) */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
                <svg className="w-[800px] h-[800px] text-black" viewBox="0 0 100 100">
                    <motion.circle
                        cx="50" cy="50" r="45"
                        stroke="currentColor" strokeWidth="0.5" fill="none"
                        initial={{ pathLength: 0, rotate: 0 }}
                        whileInView={{ pathLength: 1, rotate: 360 }}
                        viewport={{ once: true }}
                        transition={{ duration: 4, ease: "linear" }}
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tight text-white leading-none">
                        Didn't find what you were <br />
                        <span className="text-white opacity-80">looking for?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto">
                        Or perhaps you're just ready to start. Either way, our team is standing by to help you build something that matters.
                    </p>

                    <div className="pt-8">
                        <Link href="/contact">
                            <Button size="lg" className="h-20 px-12 bg-[#FFB300] text-black hover:bg-white hover:text-black text-2xl font-black uppercase tracking-widest transition-all duration-300">
                                Connect With Us <ArrowRight className="ml-4 h-8 w-8" />
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-40">
                        <span className="text-xs font-bold uppercase tracking-[0.5em] text-white">New Orleans</span>
                        <span className="text-xs font-bold uppercase tracking-[0.5em] text-white">London</span>
                        <span className="text-xs font-bold uppercase tracking-[0.5em] text-white">Singapore</span>
                        <span className="text-xs font-bold uppercase tracking-[0.5em] text-white">Global</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
