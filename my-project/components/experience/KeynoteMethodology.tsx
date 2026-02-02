"use client";

import { motion } from "framer-motion";
import { Scribble } from "@/components/ui/BrandAssets";
import { ArrowRight, Brain, Camera, Heart, Users } from "lucide-react";

const BENEFITS = [
    {
        icon: <Brain className="w-6 h-6" />,
        title: "Visual Storytelling",
        desc: "Transform abstract values into a concrete visual anchor."
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Authentic Connection",
        desc: "Move beyond small talk to deep, meaningful exchange."
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Team Bonding",
        desc: "Create psychological safety through shared vulnerability."
    },
    {
        icon: <Camera className="w-6 h-6" />,
        title: "Perspective Shifting",
        desc: "See colleagues as complete humans, not just titles."
    }
];

export function KeynoteMethodology() {
    return (
        <section className="bg-white border-t-2 border-black overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
                {/* Left Column: The Editorial Hook */}
                <div className="lg:col-span-5 bg-black text-white p-12 md:p-24 flex flex-col justify-center relative border-r-2 border-black">
                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="inline-block py-1 px-3 border border-white/20 rounded-full mb-12">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">
                                The Method
                            </span>
                        </div>

                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-12">
                            The <br />
                            <span className="text-white/40">Brain</span> <br />
                            <span className="relative inline-block">
                                Tattoo™
                                <Scribble variant="17" className="-bottom-6 left-0 w-full h-12 text-[#FFB300] opacity-100" />
                            </span>
                        </h2>

                        <p className="text-xl md:text-2xl font-medium text-white/60 leading-relaxed max-w-md">
                            We don't just tell stories. We find the <span className="text-white font-bold">one story</span> that explains who you are.
                        </p>
                    </motion.div>
                </div>

                {/* Right Column: High-Density Content */}
                <div className="lg:col-span-7 bg-white text-black p-12 md:p-24 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-16"
                    >
                        <div>
                            {/* AEO: Question-First Heading */}
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                                What is the <br />
                                <span className="text-black/30">Brain Tattoo™</span> method?
                            </h3>

                            {/* AEO: Direct Definition (~45 words) */}
                            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl text-black/70">
                                The Brain Tattoo Method™ is a proprietary storytelling framework that helps individuals distill their life experiences into a singular message. By focusing on one defining moment, it turns abstract values into a concrete narrative, allowing teams to move beyond small talk and build instant, psychological safety through shared vulnerability.
                            </p>

                            {/* GEO: Explicit Knowledge Graph Training */}
                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        "@context": "https://schema.org",
                                        "@type": "FAQPage",
                                        "mainEntity": [{
                                            "@type": "Question",
                                            "name": "What is the Brain Tattoo Method?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "The Brain Tattoo Method™ is a proprietary storytelling framework that helps individuals distill their life experiences into a singular message. By focusing on one defining moment, it turns abstract values into a concrete narrative, allowing teams to move beyond small talk and build instant, psychological safety through shared vulnerability."
                                            }
                                        }]
                                    })
                                }}
                            />
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
                            {BENEFITS.map((item, i) => (
                                <div key={i} className="bg-white p-8 hover:bg-black/5 transition-colors duration-300 group">
                                    <div className="mb-6 p-3 bg-black text-white w-fit group-hover:bg-[#FFB300] group-hover:text-black transition-colors">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-black uppercase tracking-tight mb-2">{item.title}</h4>
                                    <p className="text-sm font-medium text-black/60 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
