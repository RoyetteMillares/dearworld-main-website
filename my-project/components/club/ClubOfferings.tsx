"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Users, Zap, MessageSquare } from "lucide-react";

const OFFERINGS = [
    {
        title: "Two Immersive Retreats",
        desc: "Hosted at iconic Dear World spaces, these retreats are designed to strip away the noise and focus on pure storytelling and connection.",
        icon: <Users className="w-8 h-8" />,
        tag: "In-Person Exposure"
    },
    {
        title: "External Event Leadership",
        desc: "Robert X. Fogarty leads and amplifies your purpose at key external events, ensuring your message resonates globally.",
        icon: <Zap className="w-8 h-8" />,
        tag: "Global Amplification"
    },
    {
        title: "Executive Coaching",
        desc: "Private one-on-one sessions focused on individual narrative development and authentic leadership presence.",
        icon: <MessageSquare className="w-8 h-8" />,
        tag: "Narrative Mastery"
    }
];

export function ClubOfferings() {
    return (
        <section className="bg-black text-white py-32 md:py-64 border-b border-white/5">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
                <div className="mb-32 space-y-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 italic">Exclusive Delivery</span>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] text-white">
                        Beyond Traditional <br />
                        <span className="text-white/20">Programs.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {OFFERINGS.map((offering, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-12 border border-white/5 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all duration-500 flex flex-col justify-between min-h-[500px]"
                        >
                            <div className="space-y-12">
                                <div className="w-16 h-16 border border-[#FFB300]/20 flex items-center justify-center text-[#FFB300]">
                                    {offering.icon}
                                </div>
                                <div className="space-y-6">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#FFB300]/60">{offering.tag}</span>
                                    <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">{offering.title}</h3>
                                    <p className="text-lg text-gray-400 font-medium leading-relaxed">
                                        {offering.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="text-[9px] font-mono text-white/20 mt-12">
                                DW_SINCERELY_OFFERING_0{i + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
