"use client";

import { motion } from "framer-motion";

const OFFERINGS = [
    {
        id: "01",
        meta: "2 retreats per year",
        title: "Two Immersive Retreats",
        subtitle: "At Iconic Dear World Spaces",
        description: "Exclusive access to The Mary Beth Hotel in New Orleans and House of Rhythm & Greens in Salt Lake City. Send up to 12 leaders for transformative experiences blending leadership coaching, storytelling training, and curated moments of belonging."
    },
    {
        id: "02",
        meta: "1 event per year",
        title: "External Event Leadership",
        subtitle: "Led by Robert X. Fogarty",
        description: "Bring Dear World to your people — anywhere in the world. Robert will craft and deliver a tailored storytelling experience for your team, clients, or community, designed to amplify your purpose and inspire action."
    },
    {
        id: "03",
        meta: "Ongoing coaching",
        title: "Executive Coaching",
        subtitle: "Private Sessions with Robert X. Fogarty",
        description: "One executive receives ongoing leadership and storytelling coaching directly with Robert. Deep dives into leadership challenges, vision alignment, and narrative mastery designed to help you lead with clarity and impact."
    }
];

export function ClubOfferings() {
    return (
        <section className="bg-black text-white py-24 md:py-48">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-24 md:mb-32">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">
                        What You <br /> Receive
                    </h2>
                    <p className="text-xl md:text-2xl text-white/60 max-w-2xl">
                        Three transformative components designed to elevate your leadership team and organizational culture
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
                    {OFFERINGS.map((offer, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 1 }}
                            className="group relative border-t-2 border-white pt-8"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-4xl md:text-6xl font-black text-white/20 group-hover:text-[#FFB300] transition-colors duration-500">
                                    {offer.id}
                                </span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] border border-white/20 px-3 py-1 rounded-full">
                                    {offer.meta}
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-black italic mb-2 group-hover:translate-x-2 transition-transform duration-500">
                                {offer.title}
                            </h3>
                            <p className="text-sm font-bold uppercase tracking-widest text-[#FFB300] mb-8">
                                {offer.subtitle}
                            </p>

                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                                {offer.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
