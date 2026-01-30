"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const METHODS = [
    {
        title: "The Brain Tattoo Method™",
        meta: "Our Signature Experience",
        desc: "A singular phrase that represents your most important message. We provide the framework to find it, own it, and share it.",
        theme: "dark"
    },
    {
        title: "The Portrait Process™",
        meta: "Photography Meets Storytelling",
        desc: "Participants interview and photograph one another, resulting in powerful images that reveal their singular message to the world.",
        theme: "light"
    }
];

export function KeynoteMethodology() {
    return (
        <section className="bg-white border-t-2 border-black">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {METHODS.map((method, i) => (
                    <div
                        key={i}
                        className={cn(
                            "relative p-12 md:p-24 flex flex-col justify-center min-h-[60vh] border-black",
                            method.theme === "dark" ? "bg-black text-white" : "bg-white text-black border-t-2 md:border-t-0 md:border-l-2"
                        )}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className={cn(
                                "text-[10px] font-black uppercase tracking-[0.4em] mb-8 block",
                                method.theme === "dark" ? "text-white/40" : "text-black/40"
                            )}>
                                {method.meta}
                            </span>

                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                                {method.title}
                            </h2>

                            <p className={cn(
                                "text-xl md:text-2xl font-medium leading-[1.2] max-w-md",
                                method.theme === "dark" ? "text-gray-400" : "text-gray-600"
                            )}>
                                {method.desc}
                            </p>
                        </motion.div>

                        {/* Brutalist Stripe Accent */}
                        <div className={cn(
                            "absolute bottom-0 left-0 h-4 w-full",
                            method.theme === "dark" ? "bg-white opacity-10" : "bg-black opacity-10"
                        )} />
                    </div>
                ))}
            </div>
        </section>
    );
}
