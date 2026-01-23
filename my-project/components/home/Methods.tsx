"use client";

import { ArrowUpRight, Play, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import Image from "next/image";

interface MethodCardProps {
    title: string;
    description: string;
    videoSrc?: string;
    imageSrc?: string;
    fallbackImage?: string;
    href: string;
    className?: string;
    index: number;
    longDescription?: string;
    stats?: { label: string; value: string }[];
}

const MethodCard = ({ title, description, videoSrc, imageSrc, fallbackImage, href, className, index, longDescription, stats }: MethodCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const isVimeo = videoSrc?.includes("vimeo.com");

    const renderMedia = (isModal = false) => {
        if (isVimeo) {
            return (
                <div className={cn(
                    "absolute inset-0 h-full w-full overflow-hidden pointer-events-none",
                    !isModal && "opacity-40 grayscale contrast-[1.2] transition-all duration-[2s] group-hover:scale-110 group-hover:opacity-60 group-hover:grayscale-0"
                )}>
                    <iframe
                        src={`${videoSrc}${videoSrc?.includes('?') ? '&' : '?'}background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1`}
                        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 aspect-video"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                    />
                </div>
            );
        }

        if (videoSrc) {
            return (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={cn(
                        "h-full w-full object-cover",
                        !isModal && "opacity-40 grayscale contrast-[1.2] transition-all duration-[2s] group-hover:scale-110 group-hover:opacity-60 group-hover:grayscale-0"
                    )}
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            );
        }

        if (imageSrc) {
            return (
                <div className={cn(
                    "relative h-full w-full transition-all duration-[2s]",
                    !isModal && "opacity-40 grayscale contrast-[1.2] group-hover:scale-110 group-hover:opacity-60 group-hover:grayscale-0"
                )}>
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            );
        }

        return <div className={cn("h-full w-full bg-linear-to-br transition-all duration-[2s]", !isModal && "opacity-20 grayscale group-hover:scale-110 group-hover:opacity-40 group-hover:grayscale-0", fallbackImage || "from-zinc-900 to-black")} />;
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <div
                    className={cn(
                        "group relative flex min-h-[70vh] md:min-h-[85vh] w-full cursor-pointer flex-col justify-end overflow-hidden border-r border-white/5 bg-zinc-900 p-10 md:p-16 transition-all duration-700",
                        className
                    )}
                >
                    {/* Cinematic Ambient Background */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 z-10 bg-black/60 transition-colors duration-500 group-hover:bg-black/40" />

                        {renderMedia(false)}
                    </div>

                    {/* Content */}
                    <div className="relative z-20 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <h3 className="font-oswald text-6xl font-black uppercase tracking-[-0.04em] text-white md:text-7xl lg:text-8xl leading-[0.8]">
                                    {title.split(' ').map((word, i) => (
                                        <span key={i} className="block group-hover:text-white transition-colors duration-500">
                                            {word}
                                        </span>
                                    ))}
                                </h3>
                                <div className="rounded-full border border-white/20 p-4 transition-all duration-500 group-hover:bg-[#FFB300] group-hover:border-transparent">
                                    <Play className="h-8 w-8 text-white group-hover:text-black transition-colors duration-500 fill-current" />
                                </div>
                            </div>

                            <p className="max-w-xs text-lg font-medium leading-relaxed text-gray-300 opacity-60 transition-all duration-500 group-hover:opacity-100 md:text-xl">
                                {description}
                            </p>
                        </motion.div>

                        {/* Hand-drawn Animation Line */}
                        <div className="relative h-1 w-full bg-white/10 overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-[#FFB300]"
                                initial={{ x: "-100%" }}
                                whileInView={{ x: "0%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "anticipate", delay: 0.5 }}
                            />
                        </div>
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent className="fixed top-0! left-0! translate-x-0! translate-y-0! w-full! h-dvh max-w-none! bg-black text-white p-0 overflow-hidden outline-none border-none shadow-none z-100">
                <div className="flex flex-col lg:flex-row h-full w-full overflow-y-auto scrollbar-hide">
                    {/* Modal Left: Video/Image Teaser */}
                    <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-full bg-zinc-900 border-b lg:border-b-0 lg:border-r border-white/5">
                        {renderMedia(true)}
                        {/* Gradient overlays to blend with the black background */}
                        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black to-transparent lg:hidden" />
                        <div className="absolute inset-y-0 right-0 w-48 bg-linear-to-r from-transparent to-black hidden lg:block" />
                    </div>

                    {/* Modal Right: Detailed Content */}
                    <div className="w-full lg:w-1/2 px-12 py-24 md:px-20 md:py-32 lg:px-32 lg:py-48 flex flex-col justify-center bg-black relative">
                        <div className="max-w-2xl mx-auto lg:mx-0">
                            <DialogHeader>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-white font-black uppercase tracking-[0.5em] text-[12px] md:text-sm"
                                >
                                    Deep Dive
                                </motion.span>
                                <DialogTitle className="text-6xl md:text-6xl lg:text-7xl font-black uppercase tracking-[-0.04em] mt-6 text-white leading-[0.85] wrap-break-word">
                                    {title}
                                </DialogTitle>
                                {/* Accessibility: Visually hidden description */}
                                <div className="sr-only">
                                    Detailed information about {title}: {description}
                                </div>
                            </DialogHeader>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-16 space-y-12"
                            >
                                <p className="text-2xl md:text-2xl text-gray-400 leading-tight font-medium max-w-xl">
                                    {longDescription}
                                </p>

                                <div className="flex flex-wrap gap-16 md:gap-24">
                                    {stats?.map((stat, i) => (
                                        <div key={i} className="space-y-2">
                                            <p className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter">{stat.value}</p>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <ul className="space-y-2 pt-12 border-t border-white/5">
                                    {[
                                        "Scientifically validated methodology",
                                        "Used by Fortune 500 leadership",
                                        "Scalable for global teams"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-6 text-lg font-medium text-gray-300">
                                            <div className="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                                <CheckCircle2 className="w-4 h-4 text-white" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-20 flex flex-col sm:flex-row gap-6"
                            >
                                <Link href={href} className="flex-1">
                                    <Button className="w-full h-20 md:h-24 bg-white text-black hover:bg-[#FFB300] hover:text-black transition-all duration-500 text-xl font-black uppercase tracking-widest rounded-none shadow-[20px_20px_0px_rgba(255,179,0,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                                        Full Resolution <ArrowUpRight className="ml-4 w-8 h-8" />
                                    </Button>
                                </Link>
                                <Link href="/contact" className="flex-1">
                                    <Button className="w-full h-20 md:h-24 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-500 text-xl font-black uppercase tracking-widest rounded-none">
                                        Book Demo
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export function Methods() {
    return (
        <section className="w-full bg-black">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <MethodCard
                    index={0}
                    videoSrc="https://player.vimeo.com/video/343367440?h=9935b4701a&badge=0&autoplay=1&loop=1&muted=1&background=1&controls=0&playsinline=1&autopause=0"
                    title="Brain Tattoo"
                    description="The psychological safety tool that builds high-performing teams."
                    longDescription="Our proprietary tool for building psychological safety. We help teams move past surface-level interactions to find the deep, authentic connection required for elite performance."
                    href="/solutions/brain-tattoo"
                    fallbackImage="from-zinc-900 to-zinc-800"
                    stats={[
                        { label: "Engagement", value: "+45%" },
                        { label: "Trust Index", value: "9.2/10" }
                    ]}
                />

                <MethodCard
                    index={1}
                    videoSrc="https://player.vimeo.com/video/1028996468?h=ccd6086897&badge=0&autoplay=1&loop=1&muted=1&background=1&controls=0&playsinline=1&autopause=0"
                    title="Prtrait Process"
                    description="Visual storytelling that captures the authentic self."
                    longDescription="More than just a photo. The Portrait Process is a transformative experience where individuals are seen for their authentic truths, creating a visual library of shared humanity."
                    href="/solutions/portrait"
                    fallbackImage="from-zinc-800 to-zinc-900"
                    stats={[
                        { label: "Portraits", value: "50k+" },
                        { label: "Countries", value: "40+" }
                    ]}
                />

                <MethodCard
                    index={2}
                    imageSrc="/assets/loyl.jpg"
                    title="Loyl Leaders"
                    description="Executive coaching for specific leadership narratives."
                    longDescription="Helping high-stakes leaders refine their personal narrative. LOYL (Love of Your Life) focuses on the core motivations that drive world-class leadership and decision-making."
                    href="/solutions/loyl"
                    fallbackImage="from-zinc-900 to-black"
                    stats={[
                        { label: "C-Suite", value: "500+" },
                        { label: "Impact", value: "Deep" }
                    ]}
                />
            </div>
        </section>
    );
}

