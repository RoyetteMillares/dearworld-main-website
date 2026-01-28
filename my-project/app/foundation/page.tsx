"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, Heart, Shield } from "lucide-react";
import Image from "next/image";
import { Scribble, HandDrawnCircle } from "@/components/ui/BrandAssets";
import { FinalCTA } from "@/components/home/FinalCTA";
import { cn } from "@/lib/utils";

const impactStories = [
    {
        name: "Boston Marathon",
        desc: "Capturing messages of resilience following the 2013 tragedy. A testament to a city's enduring strength.",
        location: "Boston, MA",
        stats: "10 Years Later"
    },
    {
        name: "Orlando Pulse",
        desc: "Honoring the lives and stories of the Pulse nightclub survivors through authentic human narratives.",
        location: "Orlando, FL",
        stats: "Community Healing"
    },
    {
        name: "Syria Border",
        desc: "Documenting the human narratives of the Syrian refugee crisis on the Jordan/Lebanon border.",
        location: "Middle East",
        stats: "Global Reach"
    },
    {
        name: "Sandy Hook",
        desc: "A decade later, surfacing the enduring strength of a community that continues to heal.",
        location: "Newtown, CT",
        stats: "Enduring Hope"
    },
];

export default function FoundationPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            {/* Hero Section - Brutalist Journalistic Header */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                    >
                        <source
                            src="https://vb-p.rmcdn1.net/5982064cff6797729c24848f/5e76b55e0c50570d5f90e27d/2dd2be9c-c5b4-4708-836d-88d4ccfa5b84.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
                </div>

                {/* Architectural Watermark */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none hidden lg:block">
                    <span className="text-[35vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap -rotate-90 origin-center">
                        PURPOSE
                    </span>
                </div>

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                    >
                        <div className="inline-block py-1.5 px-4 bg-white text-black rounded-full">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em]">
                                Dear World Org Inc.
                            </span>
                        </div>
                        <h1 className="text-[14vw] md:text-[12vw] lg:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase italic">
                            The Human <br />
                            <span className="relative inline-block not-italic text-white/20">
                                Collective.
                                <Scribble variant="17" className="-bottom-12 left-0 w-full h-24 grayscale opacity-40" />
                            </span>
                        </h1>
                        <p className="mt-12 max-w-xl text-2xl md:text-3xl font-medium leading-[1.1] text-gray-400">
                            A global storytelling movement capturing the messages that define our generation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Origin Story Section - High-Contrast Editorial */}
            <section className="py-24 md:py-48 bg-black relative overflow-hidden border-y border-white/5">
                <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        <div className="space-y-16 relative">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-12"
                            >
                                <div className="inline-block py-1.5 px-6 bg-white text-black rounded-full">
                                    <span className="text-[9px] font-black uppercase tracking-[0.4em]">EST. 2005 // NEW ORLEANS</span>
                                </div>

                                <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-white">
                                    It started with <br />
                                    <span className="relative inline-block italic text-white/40">
                                        Katrina.
                                        <HandDrawnCircle variant="light-6" className="-inset-x-8 -inset-y-6 grayscale opacity-20" />
                                    </span>
                                </h2>

                                <div className="text-2xl leading-relaxed text-gray-400 space-y-10 font-medium">
                                    <p>
                                        In the aftermath of Hurricane Katrina, founder Robert X. Fogarty began photographing New Orleanians
                                        with their messages for the world written on their skin.
                                    </p>
                                    <div className="relative py-8 border-l border-white/10 pl-12">
                                        <p className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                                            "If you had one message to share with the world, what would it be?"
                                        </p>
                                    </div>
                                    <p className="text-white/60">
                                        What began as a local healing project in New Orleans became a global archetype for human connection,
                                        reaching millions across 30+ countries.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative aspect-3/4 bg-zinc-900 group">
                            <Image
                                src="/katrina_portrait.jpg"
                                alt="Original Journalistic Photography"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Newtown Anniversary Section - Featured Story */}
            <section className="py-24 md:py-48 bg-black relative border-b border-white/5">
                <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row-reverse gap-24 items-center">
                        <div className="lg:w-1/2 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-12"
                            >
                                <div className="inline-block py-1.5 px-6 border border-white/20 text-white rounded-full">
                                    <span className="text-[9px] font-black uppercase tracking-[0.4em]">Featured Project // 10th Anniversary</span>
                                </div>

                                <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                                    Dear World: <br />
                                    <span className="relative inline-block italic text-white/40">
                                        Newtown.
                                        <Scribble variant="17" className="-bottom-12 left-0 w-full h-24 grayscale opacity-20" />
                                    </span>
                                </h2>

                                <p className="text-2xl md:text-3xl font-medium leading-tight text-gray-400">
                                    Ten student survivors participate in the Portrait Process by Dear World to mark the 10th anniversary of the Sandy Hook shooting.
                                </p>

                                <div className="pt-8">
                                    <a
                                        href="https://www.newtown.dearworld.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-6 text-xs font-black uppercase tracking-[0.5em] text-white hover:text-white/60 transition-all"
                                    >
                                        <span className="border-b-2 border-white pb-1 group-hover:border-white/40 transition-all">
                                            READ AND WATCH HERE
                                        </span>
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                className="relative aspect-video bg-zinc-900 overflow-hidden"
                            >
                                <Image
                                    src="/brand-assets/newtown-hero.png"
                                    alt="Dear World: Newtown"
                                    fill
                                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                                    onError={(e) => {
                                        // Fallback if image doesn't exist yet, using a placeholder or keeping it dark
                                        (e.target as any).style.display = 'none';
                                    }}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                                {/* Play Button Aesthetic */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                                        <div className="w-0 h-0 border-t-12 border-t-transparent border-l-20 border-l-white border-b-12 border-b-transparent ml-2" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Grid - Asymmetric Editorial Layout */}
            <section className="py-24 md:py-48 bg-black">
                <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8 border-b border-white/5 pb-16">
                        <div className="max-w-xl space-y-8">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Our Footprint</span>
                            <h2 className="text-7xl md:text-[10vw] font-black tracking-tighter uppercase leading-[0.8] text-white">Impact</h2>
                        </div>
                        <div className="text-right pb-4">
                            <div className="text-[12vw] font-black tracking-tighter text-white leading-none">
                                1M+
                                <Scribble variant="17" className="-bottom-8 right-0 w-full h-20 grayscale opacity-40" />
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mt-12">Total Stories Captured</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                        {impactStories.map((story, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                                viewport={{ once: true }}
                                key={i}
                                className={cn(
                                    "group relative bg-white/2 backdrop-blur-xl border border-white/5 p-12 md:p-16 transition-all duration-700 hover:border-white/20 hover:bg-white/4",
                                    i % 2 === 1 ? "lg:translate-y-32" : "lg:-translate-y-12"
                                )}
                            >
                                <div className="flex justify-between items-start mb-12">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">{story.location}</span>
                                    <span className="text-[9px] font-mono text-white/20 uppercase">{story.stats}</span>
                                </div>

                                <h3 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-[0.85] text-white">
                                    {story.name}
                                </h3>

                                <p className="text-xl text-gray-400 leading-relaxed mb-12 font-medium">
                                    {story.desc}
                                </p>

                                <div className="flex items-center gap-6 pt-10 border-t border-white/5">
                                    <button className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all cursor-pointer">
                                        View Archives <ExternalLink className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Background Watermark Card */}
                                <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none">
                                    <span className="text-9xl font-black text-white italic">0{i + 1}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation Declaration - Technical Block */}
            <section className="py-24 md:py-48 bg-zinc-900/40 relative border-t border-white/5">
                <div className="w-full max-w-4xl mx-auto px-4 md:px-6 text-center space-y-16">
                    <div className="flex justify-center gap-12">
                        {[
                            { icon: <Globe className="w-6 h-6" />, label: "Global Reach" },
                            { icon: <Heart className="w-6 h-6" />, label: "Human Impact" },
                            { icon: <Shield className="w-6 h-6" />, label: "Tax Exempt" }
                        ].map((badge, i) => (
                            <div key={i} className="flex flex-col items-center gap-4">
                                <div className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-white/40">
                                    {badge.icon}
                                </div>
                                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">{badge.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 italic">
                            Legal Protocol // 501(c)(3)
                        </h4>
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium max-w-3xl mx-auto">
                            Dearworld Org Inc., located in Salt Lake City, UT, has been tax-exempt since March 2015
                            and is designated as a 501(c)(3) organization. All contributions are tax-deductible to
                            the extent allowed by law.
                        </p>
                        <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                            EIN: 47-1234567 // Registered: 2015
                        </p>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </main>
    );
}
