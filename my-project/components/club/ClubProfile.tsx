"use client";

import { motion } from "framer-motion";

const PROFILES = [
    {
        title: "Culture-Driven Executives",
        description: "Executive teams committed to shaping culture as much as hitting targets"
    },
    {
        title: "Storytelling Leaders",
        description: "Organizations that see storytelling as a leadership skill, not just a marketing tool"
    },
    {
        title: "Connection-Focused Companies",
        description: "Leaders who believe connection is a competitive advantage"
    }
];

export function ClubProfile() {
    return (
        <section className="bg-black text-white py-24 md:py-32 border-y border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-24">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FFB300] mb-4 block">
                        Ideal Partnership
                    </span>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
                        Who It's For
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {PROFILES.map((profile, i) => (
                        <div key={i} className="group border-t border-white/20 pt-8 hover:border-[#FFB300] transition-colors duration-500">
                            <span className="text-sm font-mono text-white/40 mb-8 block">0{i + 1}</span>
                            <h3 className="text-2xl md:text-3xl font-black italic mb-6 min-h-[3em]">
                                {profile.title}
                            </h3>
                            <p className="text-lg text-white/60 leading-relaxed">
                                {profile.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl md:text-3xl font-medium leading-relaxed text-white">
                        The Sincerely Club is designed for organizations ready to invest in transformational leadership development that goes beyond traditional programs to create lasting cultural change.
                    </p>
                </div>
            </div>
        </section>
    );
}
