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
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { X } from "lucide-react";

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
                    "absolute inset-0 h-full w-full overflow-hidden",
                    !isModal && "pointer-events-none opacity-40 transition-all duration-[2s] group-hover:scale-110 group-hover:opacity-60"
                )}>
                    <iframe
                        src={`${videoSrc}${videoSrc?.includes('?') ? '&' : '?'}${isModal ? "autoplay=1&title=0&byline=0&portrait=0&badge=0" : "background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1"}`}
                        className={cn(
                            isModal ? "w-full h-full" : "absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 aspect-video"
                        )}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                    />
                </div>
            );
        }

        if (videoSrc) {
            return (
                <video
                    autoPlay
                    loop
                    muted={!isModal}
                    controls={isModal}
                    playsInline
                    className={cn(
                        "h-full w-full object-cover",
                        !isModal && "opacity-40 transition-all duration-[2s] group-hover:scale-110 group-hover:opacity-60"
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
                    !isModal && "opacity-40 group-hover:scale-110 group-hover:opacity-60"
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

        return <div className={cn("h-full w-full bg-linear-to-br transition-all duration-[2s]", !isModal && "opacity-20 group-hover:scale-110 group-hover:opacity-40", fallbackImage || "from-zinc-900 to-black")} />;
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Card
                    className={cn(
                        "group relative flex min-h-[70vh] md:min-h-[85vh] w-full cursor-pointer flex-col justify-end overflow-hidden border-r border-white/5 bg-zinc-900 p-10 md:p-16 transition-all duration-700 rounded-none border-none shadow-none",
                        className
                    )}
                >
                    {/* Cinematic Ambient Background */}
                    <div className="absolute inset-0 z-0 text-clip">
                        <div className="absolute inset-0 z-10 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" />
                        <div className="absolute inset-x-0 bottom-0 top-1/2 z-10 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                        {renderMedia(false)}
                    </div>

                    {/* Content */}
                    <CardContent className="relative z-20 space-y-6 p-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <CardTitle className="text-6xl font-black uppercase tracking-tighter text-white md:text-7xl lg:text-8xl leading-[0.85] md:leading-[0.8] drop-shadow-lg">
                                    {title.split(' ').map((word, i) => (
                                        <span key={i} className="block group-hover:text-white transition-colors duration-500">
                                            {word}
                                        </span>
                                    ))}
                                </CardTitle>
                                <div className="rounded-full border border-white/20 p-4 transition-all duration-500 group-hover:bg-white group-hover:border-transparent">
                                    <Play className="h-8 w-8 text-white group-hover:text-black transition-colors duration-500 fill-current" />
                                </div>
                            </div>

                            <p className="max-w-xs text-lg font-medium leading-relaxed text-gray-300 opacity-60 transition-all duration-500 group-hover:opacity-100 md:text-xl drop-shadow-md">
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
                    </CardContent>
                </Card>
            </DialogTrigger>

            <DialogContent showCloseButton={false} className="fixed top-0! left-0! translate-x-0! translate-y-0! w-full! h-dvh max-w-none! bg-black text-white p-0 overflow-hidden outline-none border-none shadow-none z-100">
                <DialogClose className="absolute top-8 right-8 z-60 group p-2 rounded-full bg-black/20 hover:bg-white/20 backdrop-blur-md transition-all duration-300">
                    <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                        <X className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="sr-only">Close</span>
                </DialogClose>

                <div className="flex flex-col h-full w-full overflow-y-auto scrollbar-hide">
                    {/* Modal Top: Video/Image Full Bleed */}
                    <div className="relative w-full aspect-video shrink-0 bg-zinc-900 border-b border-white/5">
                        {renderMedia(true)}
                        {/* Gradient overlay to blend with the content below */}
                        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black to-transparent" />
                    </div>

                    {/* Modal Bottom: Detailed Content */}
                    <div className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-32 lg:py-32 flex flex-col justify-center bg-black relative">
                        <div className="max-w-4xl mx-auto">
                            <DialogHeader>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="inline-block py-1 px-3 bg-white text-black rounded-full"
                                >
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                                        Deep Dive
                                    </span>
                                </motion.div>
                                <DialogTitle className="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-[-0.04em] mt-6 text-white leading-[0.85] wrap-break-word">
                                    {title}
                                </DialogTitle>
                                {/* Accessibility: Visually hidden description */}
                                <div className="sr-only">
                                    Detailed information about {title}: {description}
                                </div >
                            </DialogHeader>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-16 space-y-12"
                            >
                                <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 leading-tight font-medium max-w-2xl">
                                    {longDescription}
                                </p>

                                <div className="flex flex-wrap gap-16 md:gap-24">
                                    {stats?.map((stat, i) => (
                                        <div key={i} className="space-y-2">
                                            <p className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">{stat.value}</p>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <ul className="space-y-4 pt-12 border-t border-white/5">
                                    {[
                                        "Scientifically validated methodology",
                                        "Used by Fortune 500 leadership",
                                        "Scalable for global teams"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-6 text-lg md:text-xl font-medium text-gray-300">
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
                                className="mt-20 flex flex-col sm:flex-row gap-6 max-w-2xl"
                            >
                                <Link href={href} className="flex-1">
                                    <Button className="w-full h-20 md:h-24 bg-white text-black border-2 border-white hover:bg-black hover:text-white transition-all duration-500 text-xl font-black uppercase tracking-[0.2em] rounded-none">
                                        Full Resolution <ArrowUpRight className="ml-4 w-8 h-8" />
                                    </Button>
                                </Link>
                                <Link href="/contact" className="flex-1">
                                    <Button className="w-full h-20 md:h-24 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-500 text-xl font-black uppercase tracking-[0.2em] rounded-none">
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
                    videoSrc="https://player.vimeo.com/video/1058254816?h=69304c2099&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
                    videoSrc="https://player.vimeo.com/video/1057692815?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
                    videoSrc="https://player.vimeo.com/video/593509917?h=09c54eebcb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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

