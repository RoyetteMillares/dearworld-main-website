"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Scribble } from "@/components/ui/BrandAssets";

interface ExperienceEditorialCardProps {
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    capacity: string;
    index: number;
    className?: string;
    scribbleVariant?: "13" | "17" | "18";
}

export function ExperienceEditorialCard({
    title,
    subtitle,
    description,
    duration,
    capacity,
    index,
    className,
    scribbleVariant = "17"
}: ExperienceEditorialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1
            }}
            className={cn(
                "group relative bg-white/2 backdrop-blur-3xl border border-white/5 p-10 md:p-16 transition-all duration-700 hover:border-white/20 hover:bg-white/4",
                className
            )}
        >
            <div className="relative z-10 space-y-12">
                {/* Meta Tags */}
                <div className="flex flex-wrap gap-4">
                    <div className="inline-block py-1 px-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                        {subtitle}
                    </div>
                    <div className="flex items-center gap-2 py-1 px-3 border border-white/10 rounded-full bg-white/5">
                        <Clock className="w-3 h-3 text-white/40" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                            {duration}
                        </span>
                    </div>
                </div>

                {/* Massive Title */}
                <div className="relative">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                        {title.split(' ').map((word, i) => (
                            <span key={i} className="block last:text-white/20 group-hover:last:text-white transition-colors duration-700">
                                {word}
                            </span>
                        ))}
                    </h2>
                    <Scribble
                        variant={scribbleVariant}
                        className="-bottom-12 left-0 w-3/4 h-24 opacity-100 pointer-events-none"
                    />
                </div>

                {/* Description */}
                <div className="pt-8 space-y-8">
                    <p className="max-w-md text-xl text-gray-400 leading-relaxed font-medium">
                        {description}
                    </p>

                    <div className="flex items-center gap-6 pt-4">
                        <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-white/40" />
                            <span className="text-sm font-bold uppercase tracking-widest text-white/60">
                                {capacity}
                            </span>
                        </div>
                        <button className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-white hover:text-[#FFB300] transition-colors duration-300">
                            Learn more <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                <span className="text-9xl font-black text-white italic">
                    {String(index + 1).padStart(2, '0')}
                </span>
            </div>
        </motion.div>
    );
}
