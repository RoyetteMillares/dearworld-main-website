"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Heart, Target, Sparkles, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Gloria_Hallelujah } from "next/font/google";
import { Scribble } from "@/components/ui/BrandAssets";

const handwritten = Gloria_Hallelujah({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-handwritten",
});

const TABS = [
    { id: "mission", label: "Our Mission", icon: <Target className="w-4 h-4" /> },
    { id: "vision", label: "Our Vision", icon: <Sparkles className="w-4 h-4" /> },
    { id: "values", label: "Our Values", icon: <Heart className="w-4 h-4" /> },
];

export function Foundation() {
    const [activeTab, setActiveTab] = useState("mission");

    const videos = [
        {
            id: 1,
            title: "Dear Victory",
            subtitle: "Finding strength in vulnerability",
            thumbnail:
                "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
            className: "md:col-span-2 md:row-span-2",
            playColor: "bg-white text-black",
        },
        {
            id: 2,
            title: "Dear Hope",
            subtitle: "A light in the darkness",
            thumbnail:
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
            className: "md:col-span-1 md:row-span-1",
            playColor: "bg-white text-black",
        },
    ];

    return (
        <section
            className={cn(
                "bg-white py-32 md:py-64 text-black relative overflow-hidden border-t-2 border-black",
                handwritten.variable
            )}
        >
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
                {/* Header Content */}
                <div className="text-left space-y-12 mb-32 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block py-1 px-3 bg-black text-white"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                            Impact / Non-Profit
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-[10vw] font-black tracking-[-0.05em] uppercase leading-[0.8]"
                    >
                        Help others <br />
                        <span className="relative inline-block mt-4">
                            tell their stories
                            <Scribble variant="17" className="-bottom-8 left-0 w-full h-12 opacity-100 invert" />
                        </span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl text-black text-xl md:text-3xl leading-tight font-black uppercase tracking-tight"
                    >
                        <p>
                            Since 2011, we've traveled the world through{" "}
                            <span className="bg-black text-white px-2">dearworld.org</span>.
                        </p>
                        <p className="mt-8 text-sm md:text-base font-black opacity-40 tracking-[0.2em]">
                            Every story shared is a bridge built. Your donation helps keep telling the truths of our generation.
                        </p>
                    </motion.div>
                </div>

                {/* Tabbed Navigation - Brutalist Style */}
                <div className="inline-flex flex-wrap justify-start gap-0 mb-12 border-2 border-black">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "group relative flex items-center gap-4 px-12 py-6 text-xs font-black uppercase tracking-[0.3em] transition-all duration-300 border-r-2 last:border-r-0 border-black select-none",
                                activeTab === tab.id
                                    ? "bg-black text-white"
                                    : "bg-white text-black hover:bg-black/5"
                            )}
                        >
                            <span className="shrink-0">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Bento Grid - Sharp Edges */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-0 border-2 border-black"
                    >
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className={cn(
                                    "group relative cursor-pointer overflow-hidden border-black md:even:border-l-2 md:even:border-r-2 md:nth-2:border-b-2 h-[450px] md:h-auto",
                                    video.className
                                )}
                            >
                                {/* Cinematic Image Container */}
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <Image
                                        src={video.thumbnail}
                                        alt={video.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-all duration-[1.5s] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/10" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                                    <div className="space-y-4">
                                        <div className="flex items-end justify-between border-b-2 border-white/20 pb-4 group-hover:border-white transition-colors">
                                            <h3 className="text-4xl font-black uppercase tracking-tighter text-white leading-none">
                                                {video.title}
                                            </h3>
                                            <div className="w-10 h-10 bg-white text-black flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                                                <Play className="w-4 h-4 fill-current ml-0.5" />
                                            </div>
                                        </div>
                                        <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                            {video.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Decorative Callout Card - High Contrast */}
                        <div className="md:col-span-1 md:row-span-1 flex flex-col justify-between p-12 bg-black text-white relative group min-h-[450px] md:min-h-auto overflow-hidden">
                            <div className="space-y-8">
                                <p className="text-4xl font-black uppercase tracking-tighter leading-[0.9]">
                                    "The story <br /> you carry <br /> matters."
                                </p>
                                <div className="h-1 w-12 bg-white" />
                                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-black leading-relaxed">
                                    Join over 50,000 truth-tellers worldwide.
                                </p>
                            </div>

                            <button className="flex items-center justify-between w-full p-6 border-2 border-white text-xs font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                                Support Us <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}