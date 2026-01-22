"use client";

import { motion } from "framer-motion";

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
                    <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFB300]">
                        Proven Impact
                    </span>
                    <h2 className="mt-6 text-4xl font-bold md:text-6xl tracking-tighter">
                        The ROI of Human Connection.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <span className="text-6xl md:text-8xl font-black font-sans tracking-tighter text-[#FFB300] transition-transform duration-500 group-hover:scale-110">
                                {stat.value}
                            </span>
                            <h3 className="mt-4 text-xl font-bold uppercase tracking-widest">
                                {stat.label}
                            </h3>
                            <p className="mt-1 text-gray-500 text-sm">
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
