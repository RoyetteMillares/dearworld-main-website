"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const METRICS = [
    { stat: "15+", label: "Years Experience", desc: "A deep legacy of cultural transformation." },
    { stat: "1M+", label: "People Impacted", desc: "Revealing the stories that matter most." },
    { stat: "100+", label: "Global Companies", desc: "From Fortune 500s to creative startups." }
];

export function KeynoteMetrics() {
    return (
        <section className="bg-black text-white py-32 md:py-64 overflow-hidden relative border-y-2 border-white/10">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8 border-b border-white/5 pb-16">
                    <div className="max-w-xl space-y-8">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">The Signature Journey</span>
                        <h2 className="text-7xl md:text-[8vw] lg:text-[10vw] font-black tracking-tighter uppercase leading-[0.8] text-white">Impact</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {METRICS.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={cn(
                                "group relative bg-white/2 backdrop-blur-xl border border-white/5 p-12 md:p-16 transition-all duration-700 hover:border-white/20 hover:bg-white/4 min-w-0",
                                i % 2 === 1 ? "md:translate-y-32" : "md:-translate-y-12"
                            )}
                        >
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">KEYNOTE_METRIC_0{i + 1}</span>
                            </div>

                            <div className="mb-12">
                                <h3 className="text-6xl md:text-7xl lg:text-[6.5vw] font-black uppercase tracking-tighter leading-[0.85] text-white whitespace-nowrap">
                                    {metric.stat}
                                </h3>
                                <div className="h-1 w-12 bg-[#FFB300] mt-6" />
                            </div>

                            <div className="space-y-4">
                                <p className="text-xl font-black uppercase tracking-widest text-white/60">
                                    {metric.label}
                                </p>
                                <p className="text-lg text-gray-400 leading-relaxed font-medium">
                                    {metric.desc}
                                </p>
                            </div>

                            {/* Background Watermark */}
                            <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none">
                                <span className="text-9xl font-black text-white italic">0{i + 1}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
