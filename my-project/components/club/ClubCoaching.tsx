"use client";

import { motion } from "framer-motion";

export function ClubCoaching() {
    return (
        <section className="bg-white text-black py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left: Main Content */}
                    <div className="lg:w-2/3 space-y-16">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400 mb-4 block">
                                Executive Development
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                                Direct Coaching <br />
                                <span className="text-neutral-400">with Robert X. Fogarty</span>
                            </h2>
                            <h3 className="text-2xl font-bold mb-6">One-on-One Executive Coaching</h3>
                            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl">
                                Each member company designates one executive to work directly with Robert X. Fogarty in a private coaching engagement. These sessions go beyond advice — they are deep dives into leadership challenges, vision alignment, and the stories that shape how you lead and inspire.
                            </p>
                            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mt-6">
                                Expect a mix of strategy, accountability, and narrative mastery designed to help you lead with clarity, communicate with impact, and build a culture that lasts.
                            </p>
                        </div>

                        <div className="border-t border-black/10 pt-12">
                            <h3 className="text-2xl font-bold mb-6">Extended Team Development</h3>
                            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl">
                                Additional executives can receive private sessions with other Dear World facilitators, ensuring your leadership team builds clarity, communication mastery, and a shared storytelling culture.
                            </p>
                        </div>
                    </div>

                    {/* Right: Stats/Meta */}
                    <div className="lg:w-1/3 flex flex-row lg:flex-col gap-8 lg:gap-12 border-t lg:border-t-0 lg:border-l border-black/10 pt-12 lg:pt-0 lg:pl-12">
                        <div>
                            <span className="text-4xl md:text-6xl font-black block mb-2">1:1</span>
                            <span className="text-sm font-bold uppercase tracking-widest text-neutral-500">Direct Access</span>
                        </div>
                        <div>
                            <span className="text-4xl md:text-6xl font-black block mb-2">∞</span>
                            <span className="text-sm font-bold uppercase tracking-widest text-neutral-500">Ongoing</span>
                        </div>
                        <div>
                            <span className="text-4xl md:text-6xl font-black block mb-2">360°</span>
                            <span className="text-sm font-bold uppercase tracking-widest text-neutral-500">Holistic</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
