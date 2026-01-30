"use client";

import { motion } from "framer-motion";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PHASES = [
    { num: "01", title: "Alignment", desc: "We deep-dive into your organizational goals to customize the narrative experience." },
    { num: "02", title: "Activation", desc: "The live event: interactive workshops and professional portrait captures." },
    { num: "03", title: "Integration", desc: "Weaving the captured stories into your internal and external communications." },
    { num: "04", title: "Sustainability", desc: "Long-term tools and frameworks to keep the storytelling culture alive." },
    { num: "05", title: "Strategy", desc: "Data-driven insights from the stories shared to inform future culture shifts." }
];

export function KeynoteRoadmap() {
    return (
        <section className="py-32 md:py-64 border-t-2 border-black overflow-hidden bg-zinc-50/30">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
                <div className="mb-24">
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-black/40 mb-4 block">Transformation Journey</span>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">The Keynote <br /> Roadmap</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8">
                    {PHASES.map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={cn(
                                i % 2 === 1 ? "md:translate-y-12" : "md:-translate-y-4"
                            )}
                        >
                            <Card className="bg-white/50 backdrop-blur-sm border-2 border-black/10 p-8 group hover:bg-black hover:text-white hover:border-black transition-all duration-700 rounded-none h-full flex flex-col justify-between">
                                <CardContent className="p-0 space-y-6">
                                    <span className="text-4xl font-black block text-black/10 group-hover:text-white/20 transition-colors">
                                        {phase.num}
                                    </span>
                                    <div className="space-y-4">
                                        <CardTitle className="text-2xl font-black uppercase tracking-tighter leading-[0.9]">
                                            {phase.title}
                                        </CardTitle>
                                        <p className="text-sm font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                                            {phase.desc}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
