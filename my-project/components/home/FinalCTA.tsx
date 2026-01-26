"use client";

import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { Scribble } from '@/components/ui/BrandAssets'

export function FinalCTA() {
    return (
        <section id="contact" className="py-24 md:py-48 bg-black text-white overflow-hidden relative border-t border-white/5">
            {/* Background Texture Accents */}
            <Scribble variant="13" className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] absolute -bottom-40 -left-40 md:-bottom-60 md:-left-60 scale-150 invert opacity-10 pointer-events-none" />
            <Scribble variant="18" className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] absolute -top-20 -right-20 md:-top-40 md:-right-40 rotate-12 invert opacity-10 pointer-events-none" />

            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
                <div className="text-center space-y-12 md:space-y-16">
                    <h2 className="text-6xl md:text-8xl lg:text-8xl font-black tracking-tighter leading-[0.8] uppercase max-w-5xl mx-auto">
                        If your people are <br className="hidden md:block" />
                        <span className="relative inline-block px-4 md:px-12 text-white/40">
                            navigating change,
                        </span><br className="hidden md:block" />
                        <span className="relative inline-block">
                            this work helps them move forward.
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-bold italic">
                        Let’s talk about what your moment requires.
                    </p>

                    <div className="flex flex-col max-w-[350px] md:max-w-none mx-auto sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4 md:pt-8 w-full">
                        <Link href="/contact" className="w-full sm:w-auto h-20 px-12 bg-white text-black text-sm font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300 border-2 border-white flex items-center justify-center rounded-full">
                            <span>Check Availability</span>
                            <Calendar className="w-5 h-5 ml-4" />
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto h-20 px-12 border-2 border-white/20 text-white text-sm font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center rounded-full">
                            <span>Contact Robert</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
