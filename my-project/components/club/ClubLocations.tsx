"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

const LOCATIONS = [
    {
        id: "nola",
        name: "The Mary Beth Hotel",
        location: "New Orleans, Louisiana",
        coords: "29.9511° N, 90.0715° W",
        description: "An art-filled sanctuary dedicated to creativity, reflection, and renewal, housed in a 19-bedroom, 12,000-square-foot hotel Robert named after his mother. It has welcomed leaders, visionaries, and A-listers. This 2-day retreat is designed to go deep on personal narrative, family history and art as a vehicle for storytelling.",
        image: "/club-nola.jpg"
    },
    {
        id: "slc",
        name: "House of Rhythm & Greens",
        location: "Salt Lake City, Utah",
        coords: "40.7608° N, 111.8910° W",
        description: "A secret club in a house overlooking the Wasatch mountains with the most private short golf course west of the Mississippi. This 2-day retreat blends leadership coaching, storytelling training, and the discipline of sport to set intentions, inspire focus, resilience, and connection.",
        image: "/club-slc.jpg"
    }
];

export function ClubLocations() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section className="bg-black text-white pt-24 md:pt-32">
            <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-24 text-center">
                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                    Exclusive Retreat Locations
                </h2>
                <p className="text-lg md:text-2xl text-white/60 font-medium max-w-3xl mx-auto leading-relaxed">
                    Two iconic spaces designed for transformation, reflection, and connection
                </p>
            </div>

            <div className="relative w-full h-screen md:h-[80vh] flex flex-col md:flex-row border-y border-white/10 overflow-hidden">
                {LOCATIONS.map((loc) => (
                    <div
                        key={loc.id}
                        className="relative flex-1 group overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-white/10 last:border-none"
                        onMouseEnter={() => setHovered(loc.id)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {/* Background Image (Placeholder until assets provided) */}
                        {/* Background Video */}
                        <div className="absolute inset-0 bg-neutral-900 transition-transform duration-1000 group-hover:scale-105 pointer-events-none">
                            <iframe
                                src={loc.id === 'nola'
                                    ? "https://player.vimeo.com/video/945862029?h=3935b4701a&badge=0&autoplay=1&loop=1&muted=1&background=1&controls=0"
                                    : "https://player.vimeo.com/video/1100169656?h=8e64b814db&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1&controls=0"
                                }
                                className="w-full h-full object-cover"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title={loc.name}
                            />
                            {/* Cinematic Gradient Overlay */}
                            <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 transition-all duration-500 bg-black/20 hover:bg-black/40">
                            {/* Top Meta */}
                            <div className="flex justify-between items-start">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] border border-white/20 px-3 py-1 rounded-full">
                                    {loc.location}
                                </span>
                                <span className="text-xs font-bold opacity-60 hidden md:block">
                                    {loc.coords}
                                </span>
                            </div>

                            {/* Bottom Info */}
                            <div className="space-y-4 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-4xl md:text-6xl font-black italic">
                                    {loc.name}
                                </h3>
                                <p className="max-w-md text-lg text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {loc.description}
                                </p>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
