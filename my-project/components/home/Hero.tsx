"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Hero() {
    const [showCircle, setShowCircle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowCircle(true), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-80 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="h-full w-full"
                >
                    <Image
                        src="/hero_portrait.png"
                        alt="Hero Portrait"
                        fill
                        className="object-cover object-[50%_20%]"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
            </div>


            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                {/* Content Overlay 
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="max-w-5xl text-[10vw] font-black leading-[0.85] tracking-[-0.05em] uppercase md:text-[7vw] lg:text-[5vw]">
                        <span className="relative inline-block pb-4">
                            CULTURE
                            <br />
                            <span className="relative text-[#FFB300]">
                                <svg
                                    className="absolute -inset-x-8 -inset-y-6 h-[140%] w-[120%] pointer-events-none"
                                    viewBox="0 0 300 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <motion.path
                                        d="M10,50 C20,10 280,10 290,50 C280,90 20,90 10,50"
                                        stroke="#FFB300"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: showCircle ? 1 : 0 }}
                                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                                    />
                                    <motion.path
                                        d="M15,45 C25,15 275,15 285,45 C275,85 25,85 15,45"
                                        stroke="#FFB300"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        opacity={0.6}
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: showCircle ? 1 : 0 }}
                                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
                                    />
                                </svg>
                            </span>
                        </span>
                        <br />
                        <span className="text-white">that matters.</span>
                    </h1>
                </motion.div>
                */}

            </div>

            {/* Scroll Indicator Overlay */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="relative mt-8"
                >
                    <p className="max-w-xl text-center text-lg font-bold tracking-widest text-white md:text-2xl uppercase italic opacity-80">
                        Built on the power of storytelling.
                    </p>
                    <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-4 text-white/40" viewBox="0 0 200 20">
                        <motion.path
                            d="M5,15 C40,5 160,5 195,15"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        />
                    </svg>
                </motion.div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 italic">Scroll</span>
                <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
            </div>
        </section >
    );
}
