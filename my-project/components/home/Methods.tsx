"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MethodCardProps {
    title: string;
    description: string;
    videoSrc?: string; // Optional video
    fallbackImage?: string; // Fallback branding color or image
    href: string;
    className?: string;
}

const MethodCard = ({ title, description, videoSrc, fallbackImage, href, className }: MethodCardProps) => {
    return (
        <Link
            href={href}
            className={cn(
                "group relative flex min-h-[60vh] md:min-h-[80vh] w-full flex-col justify-end overflow-hidden border-r border-white/10 bg-zinc-900 p-8 md:p-12 transition-all hover:bg-zinc-800/80",
                className
            )}
        >
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 z-10 bg-black/40 transition-opacity duration-500 group-hover:bg-black/20" />
                {videoSrc ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                ) : (
                    // Fallback Gradient if no video
                    <div className={cn("h-full w-full bg-gradient-to-br", fallbackImage || "from-gray-900 to-black")} />
                )}
            </div>

            {/* Content */}
            <div className="relative z-20 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-oswald text-4xl font-bold uppercase tracking-tighter text-white md:text-5xl lg:text-6xl">
                        {title}
                    </h3>
                    <ArrowUpRight className="h-8 w-8 text-[#FFB300] opacity-0 transition-all duration-300 group-hover:opacity-100 md:h-12 md:w-12" />
                </div>

                <p className="max-w-md text-lg font-medium leading-relaxed text-gray-200 opacity-0 transition-all duration-500 group-hover:opacity-100 md:text-xl">
                    {description}
                </p>

                {/* Decoration Line */}
                <div className="mt-8 h-1 w-0 bg-[#FFB300] transition-all duration-500 group-hover:w-full" />
            </div>
        </Link>
    );
};

export function Methods() {
    return (
        <section className="w-full bg-black">
            {/* 
        Full Bleed Grid: 
        - 1 Column on Mobile 
        - 3 Columns on Desktop
        - Minimal borders
      */}
            <div className="grid grid-cols-1 md:grid-cols-3">
                <MethodCard
                    title="Brain Tattoo"
                    description="The psychological safety tool that builds high-performing teams."
                    href="/solutions/brain-tattoo"
                    // Placeholder for user to add actual video
                    // videoSrc="/videos/brain-tattoo.mp4" 
                    fallbackImage="from-zinc-900 to-zinc-800"
                />

                <MethodCard
                    title="Prtrait"
                    description="Visual storytelling that captures the authentic self."
                    href="/solutions/portrait"
                    fallbackImage="from-zinc-800 to-zinc-900"
                />

                <MethodCard
                    title="Loyl"
                    description="Executive coaching for specific leadership narratives."
                    href="/solutions/loyl"
                    fallbackImage="from-zinc-900 to-black"
                />
            </div>
        </section>
    );
}
