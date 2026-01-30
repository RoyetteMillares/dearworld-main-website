"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ClubCTA() {
    return (
        <section className="bg-white text-black py-32 md:py-48 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] block mb-8">
                        Membership Inquiry
                    </span>

                    <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8]">
                        Ready to <br />
                        <span className="italic font-black">Apply?</span>
                    </h2>

                    <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                        Applications are reviewed on a rolling basis. Membership is strictly limited to 10 organizations annually.
                    </p>

                    <div className="flex justify-center pt-8">
                        <Link href="/contact" className="group relative inline-flex items-center gap-4 px-12 py-6 bg-black text-white rounded-full overflow-hidden transition-all hover:pr-16">
                            <span className="text-sm font-black uppercase tracking-widest relative z-10">
                                Request Access
                            </span>
                            <ArrowRight className="w-5 h-5 absolute right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10" />
                            <div className="absolute inset-0 bg-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scrolling Marquee Background */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.03] select-none pointer-events-none">
                <div className="whitespace-nowrap text-[20vw] font-black uppercase leading-none animate-marquee text-black">
                    The Sincerely Club — The Sincerely Club — The Sincerely Club —
                </div>
            </div>
        </section>
    );
}
