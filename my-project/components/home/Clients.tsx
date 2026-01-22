"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CLIENTS = [
    { name: "Accenture", type: "serif" },
    { name: "Verizon", type: "sans" },
    { name: "Duke", type: "serif" },
    { name: "UBS", type: "sans" },
    { name: "Salesforce", type: "sans" },
    { name: "NBA", type: "sans" },
    { name: "Morgan Stanley", type: "serif" },
    { name: "United Nations", type: "serif" }
];

export function Clients() {
    return (
        <section className="bg-white py-24 text-black border-y border-black/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">
                        The Proof / Trusted by Global Leaders
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-black/5">
                    {CLIENTS.map((client, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="bg-white group flex items-center justify-center p-8 md:p-12 transition-all duration-500 hover:bg-[#FFB300]/5"
                        >
                            <span className={cn(
                                "text-xl md:text-2xl font-black uppercase tracking-tighter opacity-30 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0",
                                client.type === "serif" ? "font-serif italic" : "font-sans"
                            )}>
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
