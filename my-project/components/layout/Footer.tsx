"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-black py-20 text-white border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand & Mission */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-4xl font-bold tracking-tighter uppercase">Dear World</h2>
                        <p className="max-w-md text-gray-400 text-lg leading-relaxed">
                            We help people and organizations find their voice through the power of storytelling. Born in New Orleans, shared with the world.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/press" className="text-sm font-medium hover:text-white transition-colors underline underline-offset-4">Press Kit</Link>
                            <Link href="/legal" className="text-sm font-medium hover:text-white transition-colors underline underline-offset-4">Privacy Policy</Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-bold uppercase tracking-widest text-white text-sm">Services</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/solutions/keynote" className="hover:text-white transition-colors">Keynote Experiences</Link></li>
                            <li><Link href="/solutions/brain-tattoo" className="hover:text-white transition-colors">Brain Tattoo™</Link></li>
                            <li><Link href="/solutions/portrait" className="hover:text-white transition-colors">Portrait Process™</Link></li>
                            <li><Link href="/sincerely-club" className="hover:text-white transition-colors">The Sincerely Club</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div className="space-y-6">
                        <h3 className="font-bold uppercase tracking-widest text-white text-sm">Join the Movement</h3>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-zinc-900 border-b border-white/20 py-3 px-0 focus:outline-none focus:border-white transition-colors"
                            />
                            <button className="absolute right-0 top-1/2 -translate-y-1/2">
                                <MoveRight className="text-white w-6 h-6" />
                            </button>
                        </div>
                        <p className="text-xs text-gray-500">
                            Sign up for stories that inspire and updates on our global impact.
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Dear World. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                        <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                        <Link href="#" className="hover:text-white transition-colors">X / Twitter</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
