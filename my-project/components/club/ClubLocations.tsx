"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HandDrawnCircle } from "@/components/ui/BrandAssets";

const LOCATIONS = [
    {
        name: "The Mary Beth Hotel",
        city: "New Orleans",
        desc: "A sanctum of hospitality and history in the heart of New Orleans, providing an intimate backdrop for deep storytelling.",
        image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2070&auto=format&fit=crop"
    },
    {
        name: "House of Rhythm & Greens",
        city: "Salt Lake City",
        desc: "A sprawling estate designed for clarity and expansion, set against the powerful landscapes of the Utah mountains.",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2065&auto=format&fit=crop"
    }
];

export function ClubLocations() {
    return (
        <section className="bg-black text-white py-32 md:py-64">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
                <div className="mb-32 text-center space-y-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 italic">Global Bases</span>
                    <h2 className="text-7xl md:text-[8vw] font-black tracking-tighter uppercase leading-[0.8] text-white">
                        Legendary <br />
                        <span className="relative inline-block italic text-white/20">
                            Backdrops.
                            <HandDrawnCircle variant="light-6" className="-inset-x-8 -inset-y-6 grayscale opacity-20" />
                        </span>
                    </h2>
                </div>

                <div className="space-y-32">
                    {LOCATIONS.map((loc, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2 relative aspect-video grayscale hover:grayscale-0 transition-all duration-1000 group overflow-hidden border border-white/10"
                            >
                                <Image
                                    src={loc.image}
                                    alt={loc.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="lg:w-1/2 space-y-8"
                            >
                                <div className="inline-block py-1 px-4 border border-white/10 text-white/40 rounded-full text-[9px] uppercase tracking-[0.3em]">
                                    {loc.city}
                                </div>
                                <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">{loc.name}</h3>
                                <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
                                    {loc.desc}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
