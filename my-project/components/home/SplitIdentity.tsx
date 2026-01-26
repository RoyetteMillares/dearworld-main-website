"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function SplitIdentity() {
    return (
        <section className="relative flex flex-col md:flex-row min-h-[70vh] w-full overflow-hidden">
            {/* The Yellow Thread (Hand-drawn visual guide) */}
            <div className="absolute hidden md:block inset-0 pointer-events-none z-20">
                <svg className="w-full h-full text-white" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <motion.path
                        d="M500,0 C500,200 480,400 520,600 S500,1000 500,1000"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="10 10"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            {/* Left: Commercial (Black) */}
            <Link
                href="/solutions"
                className="group relative flex w-full flex-col items-center justify-center bg-black px-8 py-24 text-center text-white transition-all duration-700 md:w-1/2 hover:z-10"
            >
                <div className="absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/5" />

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-md space-y-8"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Organizations</span>
                    <h2 className="text-5xl font-black tracking-tighter uppercase md:text-7xl">
                        Building <br />
                        <span className="text-white">Skills</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Transform your corporate culture through the proprietary science of personal narrative.
                    </p>
                    <div className="pt-4">
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-black hover:text-white border-2 border-transparent hover:border-black h-16 px-10 text-xl font-black uppercase tracking-[0.2em] transition-all duration-300"
                        >
                            Explore Solutions <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </div>
                </motion.div>
            </Link>

            {/* Right: Foundation (Yellow) */}
            <Link
                href="/foundation"
                className="group relative flex w-full flex-col items-center justify-center bg-[#FFB300] px-8 py-24 text-center text-black transition-all duration-700 md:w-1/2 hover:z-10"
            >
                <div className="absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/10" />

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-md space-y-8"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">Communities</span>
                    <h2 className="text-5xl font-black tracking-tighter uppercase md:text-7xl">
                        Building <br />
                        <span className="text-white">Connection</span>
                    </h2>
                    <p className="text-black/70 text-lg font-medium leading-relaxed">
                        Join a global movement of individuals sharing their authentic stories with the world.
                    </p>
                    <div className="pt-4">
                        <Button
                            size="lg"
                            className="bg-black text-white hover:bg-white hover:text-black border-2 border-transparent hover:border-black h-16 px-10 text-xl font-black uppercase tracking-[0.2em] transition-all duration-300"
                        >
                            Visit Foundation <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </div>
                </motion.div>
            </Link>
        </section>
    );
}
