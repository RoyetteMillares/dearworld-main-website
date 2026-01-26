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
            playColor: "bg-red-600 text-white shadow-[#EF4444]/20",
        },
    ];

    return (
        <section
            className={cn(
                "bg-white py-32 md:py-48 text-black relative overflow-hidden",
                handwritten.variable
            )}
        >
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
                {/* Header Content */}
                <div className="text-center space-y-8 mb-24 px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block py-1.5 px-4 bg-black text-white rounded-full mb-4"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                            Non-Profit Impact
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-black tracking-[-0.04em] uppercase leading-[0.85]"
                    >
                        Help others tell <br />
                        <span className=" relative italic inline-block">
                            their stories
                            <Scribble variant="17" className="-bottom-10 md:-bottom-12 left-0 w-full h-16 md:h-24 grayscale opacity-40" />
                        </span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl mx-auto text-black/60 text-xl md:text-2xl leading-relaxed font-medium"
                    >
                        <p>
                            Since 2011, we've traveled the world through{" "}
                            <span className="text-black font-bold">dearworld.org</span>.
                        </p>
                        <p className="mt-4 text-sm md:text-base opacity-70">
                            Every story shared is a bridge built. You can donate to us to help
                            keep telling the stories of our generation.
                        </p>
                    </motion.div>


                </div>

                {/* Tabbed Navigation */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-24">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "group relative overflow-hidden flex items-center gap-3 px-8 py-4 text-sm font-black uppercase tracking-widest transition-all duration-300 border-2 select-none rounded-full", // Added rounded-full for softer buttons too, remove if you want square buttons
                                activeTab === tab.id
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-black border-black/10 hover:border-black"
                            )}
                        >
                            <span
                                className={cn(
                                    "transition-colors",
                                    activeTab === tab.id
                                        ? "text-white"
                                        : "text-black group-hover:text-black/60"
                                )}
                            >
                                {tab.icon}
                            </span>
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="tabUnderline"
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-black"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Bento Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-6 min-h-[800px]"
                    >
                        {videos.map((video, idx) => (
                            <div
                                key={video.id}
                                className={cn(
                                    "group relative cursor-pointer overflow-hidden border border-black/5 rounded-2xl h-[400px] md:h-auto", // Updated: rounded-2xl
                                    video.className
                                )}
                            >
                                {/* Cinematic Image Container */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={video.thumbnail}
                                        alt={video.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-all duration-[2s] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-3xl font-black uppercase tracking-tight text-white leading-tight">
                                                {video.title}
                                            </h3>
                                            <div
                                                className={cn(
                                                    "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 scale-90 group-hover:scale-110",
                                                    video.playColor
                                                )}
                                            >
                                                <Play className="w-5 h-5 fill-current ml-1" />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                            <p className="text-white/60 text-sm font-medium tracking-wide">
                                                {video.subtitle}
                                            </p>
                                            <ArrowUpRight className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Decorative Callout Card */}
                        <div className="md:col-span-1 md:row-span-1 flex flex-col justify-center p-12 bg-black text-white relative group min-h-[400px] md:min-h-auto overflow-hidden rounded-2xl">
                            <p className=" text-3xl mb-8">
                                "The story you <br /> carry matters."
                            </p>
                            <p className="text-gray-400 text-sm mb-12 uppercase tracking-[0.2em] font-bold">
                                Join over 50,000 people who have shared their truth.
                            </p>
                            <button className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] transition-all ">
                                Support us <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}