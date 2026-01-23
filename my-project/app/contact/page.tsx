"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Left: Contact Info & Narrative */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-white opacity-40 font-bold uppercase tracking-[0.4em] text-sm">Get in Touch</span>
                            <h1 className="mt-4 text-6xl md:text-8xl font-black uppercase tracking-tight leading-[0.85]">
                                Start your <br />
                                <span className="text-white/20">story.</span>
                            </h1>
                            <p className="mt-8 max-w-md text-xl text-gray-400 leading-relaxed">
                                Ready to transform your culture? Our team is here to help you design an experience that matters.
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="mt-1 p-3 rounded-full border border-white/10 group-hover:bg-[#FFB300] group-hover:text-black transition-all">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-gray-500">Email Us</p>
                                    <p className="text-xl font-medium mt-1">hello@dearworld.org</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="mt-1 p-3 rounded-full border border-white/10 group-hover:bg-[#FFB300] group-hover:text-black transition-all">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-gray-500">Call Us</p>
                                    <p className="text-xl font-medium mt-1">+1 (504) 555-0123</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="mt-1 p-3 rounded-full border border-white/10 group-hover:bg-[#FFB300] group-hover:text-black transition-all">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-gray-500">Our Studio</p>
                                    <p className="text-xl font-medium mt-1">New Orleans, LA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-zinc-900/50 border border-white/10 p-8 md:p-12 backdrop-blur-sm"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-white opacity-40">Full Name</label>
                                    <Input
                                        placeholder="Robert X. Fogarty"
                                        className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-white transition-all placeholder:text-white/10"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-white opacity-40">Work Email</label>
                                    <Input
                                        type="email"
                                        placeholder="robert@organization.com"
                                        className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-white transition-all placeholder:text-white/10"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white opacity-40">Organization</label>
                                <Input
                                    placeholder="Company Name"
                                    className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-white transition-all placeholder:text-white/10"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white opacity-40">Tell us about your event</label>
                                <Textarea
                                    placeholder="What are you building?"
                                    className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-white transition-all min-h-[120px] placeholder:text-white/10"
                                />
                            </div>

                            <Button className="w-full h-16 bg-white text-black hover:bg-[#FFB300] hover:text-black text-xl font-black uppercase tracking-widest transition-all duration-300">
                                Send Message <ArrowRight className="ml-4 h-6 w-6" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
