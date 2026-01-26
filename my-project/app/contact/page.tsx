"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24 text-white">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Left: Contact Info & Narrative */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block py-1.5 px-4 bg-white text-black rounded-full mb-4">
                                <span className="font-bold uppercase tracking-[0.4em] text-[10px]">Get in Touch</span>
                            </div>
                            <h1 className="mt-4 text-6xl md:text-8xl lg:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] transition-all">
                                Start your <br />
                                <span className="text-white/20">story.</span>
                            </h1>
                            <p className="mt-8 max-w-md text-xl text-gray-400 leading-relaxed font-medium">
                                Ready to transform your culture? Our team is here to help you design an experience that matters.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {[
                                { icon: <Mail className="w-6 h-6" />, label: "Email Us", value: "hello@dearworld.org" },
                                { icon: <Phone className="w-6 h-6" />, label: "Call Us", value: "+1 (504) 555-0123" },
                                { icon: <MapPin className="w-6 h-6" />, label: "Our Studio", value: "New Orleans, LA" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-6 group">
                                    <div className="mt-1 p-3 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">{item.label}</p>
                                        <p className="text-xl font-medium mt-1">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Booking Form Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-zinc-900/30 border border-white/5 p-8 md:p-12 backdrop-blur-sm rounded-2xl"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
