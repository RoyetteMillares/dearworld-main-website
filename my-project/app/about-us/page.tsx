"use client";

import { motion } from "framer-motion";
import { KeynoteRoadmap, RoadmapItem } from "@/components/experience/KeynoteRoadmap";

const MILESTONES: RoadmapItem[] = [
    {
        num: "01",
        title: "Post-Hurricane Katrina Project Begins",
        desc: "In New Orleans after Hurricane Katrina, founder Robert X. Fogarty began photographing people and asking, 'If you had one message to share with the world, what would it be?'",
        meta: "2005"
    },
    {
        num: "02",
        title: "The 'Cancer Free' Portrait",
        desc: "One night, a man's wife revealed the words 'Cancer Free' on his bare chest. This moment sparked a new vision: using a marker, a camera, and a meaningful message to create something truly transformational.",
        meta: "2005 — The Pivotal Night",
        active: true
    },
    {
        num: "03",
        title: "Growth of a Global Movement",
        desc: "Dear World expanded beyond New Orleans, capturing over one million stories of courage, joy, and triumph from people around the world.",
        meta: "2010 — 2015"
    },
    {
        num: "04",
        title: "Core Philosophy Established",
        desc: "Our core philosophy became, 'If a story has meaning to you, it has meaning to us.' We built teams of extraordinary storytellers to craft experiences for people to pause, reflect, and share stories that impact others.",
        meta: "2015 — Present"
    }
];

export default function AboutUsPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 border-b-2 border-black overflow-hidden">
                {/* Background Noise/Texture if any */}
                <div className="absolute inset-0 z-0 bg-zinc-50 opacity-50" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <span className="inline-block border border-black/20 rounded-full px-4 py-1">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/60">
                                Who We Are
                            </span>
                        </span>
                        <h1 className="text-[14vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase">
                            Storytelling <br />
                            <span className="text-black/20">That Connects</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl md:text-2xl font-medium text-black/60 leading-relaxed pt-8">
                            Dear World is a storytelling organization that helps companies build trust and connection.
                            We believe that every person has a story worth sharing.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Marker */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-px h-24 bg-linear-to-b from-black to-transparent"
                    />
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-32 px-6 border-b-2 border-black">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-6">
                        <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">
                            Our <br /> Mission
                        </h2>
                        <div className="w-12 h-1 bg-black" />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold tracking-tight text-black leading-tight">
                        "We use an interactive keynote experience to drive culture change by turning passive audiences into active participants."
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <KeynoteRoadmap
                items={MILESTONES}
                title={<>Our Story <br /> <span className="text-black/20">In Milestones</span></>}
                subtitle="The Journey"
            />

            {/* Final Quote/Vision */}
            <section className="py-48 px-6 bg-black text-white text-center border-t-2 border-black">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                        "If a story has meaning to you, it has meaning to us."
                    </h2>
                    <div className="pt-12">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-12 py-4 text-xs font-black uppercase tracking-[0.3em] hover:bg-zinc-200 transition-colors"
                        >
                            Work With Us
                        </motion.button>
                    </div>
                </div>
            </section>
        </div>
    );
}
