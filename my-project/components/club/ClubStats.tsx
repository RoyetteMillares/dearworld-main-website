"use client";

import { motion } from "framer-motion";

export function ClubStats() {
    return (
        <section id="exclusive-partnership" className="bg-black text-white py-24 md:py-32 border-y border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-start">
                    {/* Left: Section Title */}
                    <div className="md:w-1/3 md:sticky md:top-32">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                            Exclusive <br />
                            Partnership
                        </h2>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB300]">
                            Beyond Traditional Programs
                        </span>
                    </div>

                    {/* Right: Content */}
                    <div className="md:w-2/3">
                        <p className="text-xl md:text-3xl font-medium leading-relaxed text-gray-300">
                            Each year, Companies are invited to join Dear World's most exclusive offering — the Sincerely Club. This isn't just a program; it's a partnership in shaping your leaders, deepening your culture, and telling your story in a way the world will remember.
                        </p>
                        <p className="mt-8 text-lg md:text-xl text-gray-500 leading-relaxed">
                            We believe that the most transformative leadership development happens when storytelling meets purpose, when connection drives performance, and when culture becomes your competitive advantage.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
