"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function PartnershipHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden text-white border-b-2 border-black">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/partnership-hero.jpg"
                    alt="Dear World Partnership"
                    className="w-full h-full object-cover"
                    fill
                    priority
                />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-8 lg:p-12">
                <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] border border-black/20 px-3 py-1 rounded-full">
                        Offerings 2024
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] hidden md:block">
                        Global Impact
                    </span>
                </div>

                <motion.div
                    style={{ y, opacity }}
                    className="flex flex-col justify-center items-center h-full"
                >
                    <h1 className="text-[18vw] leading-[0.75] font-black uppercase tracking-tighter text-center mix-blend-multiply">
                        <motion.span
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="block"
                        >
                            Partner
                        </motion.span>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                            className="h-[2px] bg-black my-4 md:my-8 w-full"
                        />
                        <motion.span
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="block text-[4vw] md:text-[3vw] leading-none font-serif italic font-normal tracking-normal mb-4 md:mb-8"
                        >
                            with Dear World
                        </motion.span>
                    </h1>
                </motion.div>

                <div className="flex justify-between items-end">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="max-w-xs text-xs font-medium uppercase tracking-widest leading-relaxed"
                    >
                        Join the movement to uncover the stories that transform culture.
                    </motion.p>
                    <div className="animate-bounce">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
