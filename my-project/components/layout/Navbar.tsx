"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();
    const isFoundation = pathname?.startsWith("/foundation");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        // { href: "/solutions", label: "Solutions" },
        { href: "/keynote-experience", label: "Keynote Speaking" },
        { href: "/partnerships", label: "Partnerships" },
        { href: "/sincerely-club", label: "The Sincerely Club" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <motion.nav
            aria-label="Main navigation"
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex h-24 items-center transition-all duration-300 font-sans bg-black border-b border-white/10"
            )}
        >
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2 z-50 relative" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                        src="/Dear-world-logo-white.png"
                        alt="Dear World Logo"
                        width={170}
                        height={150}
                    />
                    {isFoundation && (
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mt-1">
                            Foundation
                        </span>
                    )}
                </Link>

                {/* Desktop Nav - Hidden on mobile */}
                <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.4em]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-white hover:text-gray-500 text-xs font-black tracking-widest uppercase transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Right Actions & Mobile Toggle */}
                <div className="flex items-center gap-8 z-50 relative">
                    <div className="hidden lg:block">
                        {!isFoundation ? (
                            <Link href="/foundation" className="text-white hover:text-gray-500 text-xs font-black tracking-widest uppercase transition-colors">
                                Foundation
                            </Link>
                        ) : (
                            <Link href="/" className="text-white hover:text-gray-500 text-xs font-black tracking-widest uppercase transition-colors">
                                For Business
                            </Link>
                        )}
                    </div>

                    <div className="hidden lg:block">
                        <Link href="/contact">
                            <Button
                                className={cn(
                                    "h-14 px-8 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all duration-500",
                                    isFoundation
                                        ? "bg-white text-black hover:bg-gray-200"
                                        : "bg-white text-black hover:bg-gray-200"
                                )}
                            >
                                {isFoundation ? "Donate" : "Book Demo"}
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-white p-2 focus:outline-none"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-8 h-8" />
                        ) : (
                            <Menu className="w-8 h-8" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-black z-40 flex flex-col pt-32 px-6 overflow-y-auto lg:hidden"
                    >
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-4xl font-black uppercase tracking-tight text-white hover:text-gray-500 transition-colors block py-2"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="h-px w-full bg-white/10 my-4" />

                            {/* Mobile Foundation Link */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                {!isFoundation ? (
                                    <Link
                                        href="/foundation"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-xl font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors block py-2"
                                    >
                                        Foundation
                                    </Link>
                                ) : (
                                    <Link
                                        href="/"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-xl font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors block py-2"
                                    >
                                        For Business
                                    </Link>
                                )}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="mt-8"
                            >
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full h-16 rounded-full font-black uppercase tracking-[0.2em] text-sm bg-white text-black hover:bg-gray-200">
                                        {isFoundation ? "Donate" : "Book Demo"}
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
