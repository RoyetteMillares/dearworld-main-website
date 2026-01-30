"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Scribble } from "@/components/ui/BrandAssets";

const STATS = [
    {
        value: "10",
        label: "Companies per year",
        desc: "We limit the club to ten visionary organizations to ensure maximum impact and personal attention."
    },
    {
        value: "365",
        label: "Day Partnership",
        desc: "A year-long commitment to your leadership team's development and organizational storytelling."
    }
];

export function ClubStats() {
    return (
        <section className="bg-black text-white py-32 md:py-64 overflow-hidden relative border-y border-white/5">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8 border-b border-white/5 pb-16">
                    <div className="max-w-xl space-y-8">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Exclusivity by Design</span>
                        <h2 className="text-7xl md:text-[8vw] lg:text-[10vw] font-black tracking-tighter uppercase leading-[0.8] text-white">Impact</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={cn(
                                "group relative bg-white/2 backdrop-blur-xl border border-white/5 p-12 md:p-16 transition-all duration-700 hover:border-white/20 hover:bg-white/4",
                                i % 2 === 1 ? "md:translate-y-32" : "md:-translate-y-12"
                            )}
                        >
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">CLUB_PILAR_0{i + 1}</span>
                            </div>

                            <div className="mb-12 relative">
                                <h3 className="text-7xl md:text-8xl lg:text-[9vw] font-black uppercase tracking-tighter leading-none text-white whitespace-nowrap">
                                    {stat.value}
                                    <Scribble variant="17" className="-bottom-8 left-0 w-full h-16 grayscale opacity-20" />
                                </h3>
                            </div>

                            <div className="space-y-6 pt-8">
                                <p className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#FFB300]">
                                    {stat.label}
                                </p>
                                <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium max-w-md">
                                    {stat.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
