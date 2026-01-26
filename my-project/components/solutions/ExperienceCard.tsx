"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    capacity: string;
    imageUrl?: string;
    reversed?: boolean;
}

export function ExperienceCard({
    title,
    subtitle,
    description,
    duration,
    capacity,
    imageUrl,
    reversed = false,
}: ExperienceCardProps) {
    return (
        <div className={cn(
            "flex flex-col md:flex-row items-center gap-12 py-20 border-b border-black/5",
            reversed && "md:flex-row-reverse"
        )}>
            {/* Media Side */}
            <div className="w-full md:w-1/2 aspect-video bg-zinc-100 relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                {/* Placeholder for Video/Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-300 font-bold uppercase tracking-widest text-sm italic">
                        [ {subtitle} Experience Media ]
                    </span>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFB300] -translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500" />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-8">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-black">
                        {title}
                    </h2>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">
                        {subtitle}
                    </p>
                </div>

                <p className="text-lg leading-relaxed text-gray-600">
                    {description}
                </p>

                <div className="flex gap-8 border-t border-black/10 pt-8">
                    <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-black" />
                        <span className="text-sm font-bold uppercase">{duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-black" />
                        <span className="text-sm font-bold uppercase">{capacity}</span>
                    </div>
                </div>

                <div className="pt-4">
                    <Button variant="outline" className="border-2 border-black hover:bg-black hover:text-white h-14 px-8 text-lg font-black uppercase tracking-[0.2em]">
                        Learn More <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
