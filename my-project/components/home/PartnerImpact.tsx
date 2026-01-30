"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const IMPACT_METRICS = [
    {
        icon: <Users className="w-8 h-8" />,
        stat: "15,000+",
        label: "Employees Impacted",
        desc: "Across global teams at Accenture & Verizon."
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        stat: "92%",
        label: "Retention Rate",
        desc: "Of employees feeling deeply seen by leadership."
    },
    {
        icon: <Heart className="w-8 h-8" />,
        stat: "100%",
        label: "Human Centric",
        desc: "Proven narrative science for culture change."
    }
];

export function PartnerImpact() {
    return (
        <section className="bg-white py-48 md:py-64 text-black border-t-2 border-black overflow-hidden relative">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 items-start">
                    {/* Left: Content */}
                    <div className="w-full lg:w-1/2 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="inline-block py-1 px-3 bg-black text-white mb-12">
                                <span className="font-black uppercase tracking-[0.4em] text-[10px]">Case Study / Impact</span>
                            </div>
                            <h2 className="text-6xl md:text-8xl lg:text-[7vw] font-black uppercase tracking-tighter leading-[0.75]">
                                Partnerships that <br />
                                <span className="text-black/30">transform</span> <br />
                                systems.
                            </h2>
                            <p className="mt-12 text-2xl md:text-3xl font-black uppercase tracking-tight text-black leading-[0.9] max-w-xl">
                                We go beyond "team building." We use narrative science to unlock psychological safety and deep connection at scale.
                            </p>

                            <div className="pt-12">
                                <Link href="/contact" className="inline-block w-full sm:w-auto">
                                    <Button size="lg" className="h-24 px-16 bg-black text-white border-2 border-black hover:bg-white hover:text-black text-xs font-black uppercase tracking-[0.4em] transition-all duration-500 rounded-none">
                                        Check Availability <ArrowRight className="ml-4 h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black">
                            {IMPACT_METRICS.map((metric, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    className="p-12 border-2 border-black -ml-[2px] -mt-[2px] space-y-8 group hover:bg-black hover:text-white transition-colors duration-500"
                                >
                                    <div className="p-4 border-2 border-black group-hover:border-white w-fit transition-colors">
                                        {metric.icon}
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-6xl font-black tracking-tighter leading-none">{metric.stat}</h4>
                                        <div className="space-y-1">
                                            <p className="font-black uppercase tracking-[0.3em] text-xs">{metric.label}</p>
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-60">{metric.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Cinematic Imagery Blend */}
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-0 border-2 border-black">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative h-[400px] border-r-2 border-b-2 border-black overflow-hidden"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Team Impact"
                                fill
                                className="object-cover transition-all duration-1000 scale-110 hover:scale-100"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative h-[400px] border-b-2 border-black overflow-hidden"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                                alt="Culture Change"
                                fill
                                className="object-cover transition-all duration-1000 scale-110 hover:scale-100"
                            />
                        </motion.div>
                        <div className="col-span-2 relative h-[300px] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                                alt="Corporate Workshop"
                                fill
                                className="object-cover transition-all duration-1000 scale-110 hover:scale-100"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Narrative Stamp */}
            <div className="absolute bottom-0 right-4 opacity-[0.03] select-none pointer-events-none translate-y-1/2">
                <span className="text-[25vw] font-black uppercase tracking-tighter leading-none">CULTURE</span>
            </div>
        </section>
    );
}
