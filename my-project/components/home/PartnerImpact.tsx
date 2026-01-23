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
        <section className="bg-white py-32 text-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left: Content */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-gray-400 font-bold uppercase tracking-[0.4em] text-xs">Our Impact</span>
                            <h2 className="mt-4 text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.85]">
                                Partnerships that <br />
                                <span className="text-black">transform</span> <br />
                                organizations.
                            </h2>
                            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
                                We go beyond "team building." We use narrative science to unlock psychological safety and deep connection at scale.
                            </p>

                            <div className="pt-8">
                                <Link href="/contact">
                                    <Button size="lg" className="h-16 px-10 bg-black text-white hover:bg-[#FFB300] hover:text-black text-xl font-black uppercase tracking-widest transition-all duration-300">
                                        Schedule Discovery Call <ArrowRight className="ml-4 h-6 w-6" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-black/5">
                            {IMPACT_METRICS.map((metric, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="space-y-4"
                                >
                                    <div className="text-black">{metric.icon}</div>
                                    <h4 className="text-4xl font-black tracking-tight">{metric.stat}</h4>
                                    <div>
                                        <p className="font-bold uppercase tracking-widest text-sm">{metric.label}</p>
                                        <p className="text-gray-500 text-sm mt-1">{metric.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Cinematic Imagery Blend */}
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 h-[600px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative rounded-2xl overflow-hidden grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Team Impact"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative mt-12 rounded-2xl overflow-hidden grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                                alt="Culture Change"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <div className="col-span-2 relative -mt-12 rounded-2xl overflow-hidden h-[250px] grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                                alt="Corporate Workshop"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[#FFB300]/10 mix-blend-overlay" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
