"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PATHS = [
    {
        title: "Business Partners",
        meta: "Agencies & Bureaus",
        desc: "For collaborators who want to introduce Dear World's award-winning experiences to their clients and organizations.",
        benefits: ["Revenue sharing", "Priority booking", "Co-marketing support"],
        icon: <Globe className="w-8 h-8" />,
        theme: "light"
    },
    {
        title: "Certified Storytellers",
        meta: "Certification",
        desc: "For those who want to master our proprietary methods and deliver Dear World experiences within their own communities.",
        benefits: ["Mastery training", "Licensing tools", "Global partner directory"],
        icon: <Users className="w-8 h-8" />,
        theme: "dark"
    }
];

export function PartnershipPathways() {
    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {PATHS.map((path, i) => (
                    <Card
                        key={i}
                        className={cn(
                            "relative overflow-hidden p-12 md:p-24 flex flex-col justify-between min-h-[70vh] border-black rounded-none border-none shadow-none",
                            path.theme === "dark" ? "bg-black text-white" : "bg-white text-black border-t-2 md:border-t-0 md:border-l-2"
                        )}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className={cn(
                                "text-[10px] font-black uppercase tracking-[0.4em] mb-8 block",
                                path.theme === "dark" ? "text-white/40" : "text-black/40"
                            )}>
                                {path.meta}
                            </span>

                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                                {path.title}
                            </h2>

                            <CardContent className="p-0">
                                <p className={cn(
                                    "text-xl md:text-2xl font-medium leading-[1.2] mb-12 max-w-md",
                                    path.theme === "dark" ? "text-gray-400" : "text-gray-600"
                                )}>
                                    {path.desc}
                                </p>

                                <ul className="space-y-4 mb-16">
                                    {path.benefits.map((benefit, j) => (
                                        <li key={j} className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em]">
                                            <div className={cn("w-2 h-2", path.theme === "dark" ? "bg-white" : "bg-black")} />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </motion.div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Button
                                className={cn(
                                    "h-20 px-10 text-xs font-black uppercase tracking-[0.3em] rounded-none border-2 transition-all duration-500",
                                    path.theme === "dark"
                                        ? "bg-white text-black border-white hover:bg-black hover:text-white"
                                        : "bg-black text-white border-black hover:bg-white hover:text-black"
                                )}
                            >
                                Learn More <ArrowRight className="ml-4 w-5 h-5" />
                            </Button>
                        </div>

                        {/* Background Icon Stamp */}
                        <div className={cn(
                            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[4] pointer-events-none",
                            path.theme === "dark" ? "text-white" : "text-black"
                        )}>
                            {path.icon}
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
