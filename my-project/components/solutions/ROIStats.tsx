"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const STATS = [
    { label: "Stories Shared", value: "1M+", sub: "Globally" },
    { label: "Fortune 500", value: "150+", sub: "Clients" },
    { label: "Employee Retention", value: "24%", sub: "Average Increase" },
    { label: "Psych Safety", value: "98%", sub: "Rating" }
];

export function ROIStats() {
    return (
        <section className="bg-black py-32 text-white overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-white opacity-40">
                        Proven Impact
                    </span>
                    <h2 className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl tracking-tighter max-w-4xl mx-auto">
                        What is the ROI of corporate storytelling?
                    </h2>
                    <p className="mt-8 text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                        Corporate storytelling delivers measurable ROI by increasing employee retention, accelerating psychological safety, and unifying leadership vision. When teams feel seen and heard, engagement scores rise, and turnover costs drop, creating a direct financial impact on the bottom line.
                    </p>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                "mainEntity": [{
                                    "@type": "Question",
                                    "name": "What is the ROI of corporate storytelling?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Corporate storytelling delivers measurable ROI by increasing employee retention, accelerating psychological safety, and unifying leadership vision. When teams feel seen and heard, engagement scores rise, and turnover costs drop, creating a direct financial impact on the bottom line."
                                    }
                                }]
                            })
                        }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-center text-center group border border-white/5 bg-white/2 p-12 transition-all duration-700 hover:border-white/20 hover:bg-white/4"
                        >
                            <span className="text-7xl md:text-9xl font-black italic tracking-tighter text-white transition-transform duration-700 group-hover:scale-105">
                                {stat.value}
                            </span>
                            <h3 className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                                {stat.label}
                            </h3>
                            <p className="mt-2 text-gray-500 text-xs font-medium uppercase tracking-widest">
                                {stat.sub}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/5 whitespace-nowrap pointer-events-none select-none">
                DATA IMPACT RESULTS ROI DATA IMPACT RESULTS ROI
            </div>
        </section>
    );
}
