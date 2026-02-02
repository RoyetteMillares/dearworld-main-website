"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";

export function AuthoritySpotlight() {
    return (
        <section className="bg-black text-white min-h-screen flex flex-col lg:flex-row border-t-2 border-white/10 relative overflow-hidden">
            {/* Left Column: AEO Content */}
            <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block py-1 px-3 bg-white text-black mb-8">
                        <span className="font-black uppercase tracking-[0.4em] text-[10px]">CEO Perspective</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-[5vw] font-black uppercase tracking-tighter leading-[0.9] mb-8">
                        What do CEOs say about Dear World?
                    </h2>

                    <p className="text-xl md:text-2xl font-medium text-white/70 leading-relaxed max-w-xl">
                        Leaders like Mark D. Benjamin (CEO, Nuance Communications) describe Dear World as a critical tool for <Link href="/glossary#human-infrastructure" className="underline decoration-white/30 hover:decoration-white transition-all">leadership alignment</Link>. Drawing on his experience as President of NCR Corporation, Mark emphasizes how the methodology unifies global teams around a shared human narrative.
                    </p>

                    <Script
                        id="ceo-faq-schema"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                "mainEntity": [{
                                    "@type": "Question",
                                    "name": "What do CEOs say about Dear World?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Leaders like Mark D. Benjamin (CEO, Nuance Communications) describe Dear World as a critical tool for leadership alignment. Drawing on his experience as President of NCR Corporation, Mark emphasizes how the methodology unifies global teams around a shared human narrative."
                                    }
                                }]
                            })
                        }}
                    />
                </motion.div>
            </div>

            {/* Right Column: Full Bleed Video */}
            <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-auto relative border-l border-white/10 bg-zinc-900 group">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0"
                >
                    <iframe
                        className="w-full h-full object-cover"
                        src="https://player.vimeo.com/video/1160284403?h=7b30cfc381&badge=0&autopause=0&player_id=0&app_id=58479"
                        title="Mark D. Benjamin Testimonial"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </div>

            {/* Architectural Background Text */}
            <div className="absolute bottom-0 right-0 opacity-[0.05] select-none pointer-events-none translate-y-1/2 z-0 hidden lg:block">
                <span className="text-[20vw] font-black uppercase tracking-tighter leading-none text-white">LEADERSHIP</span>
            </div>
        </section>
    );
}
