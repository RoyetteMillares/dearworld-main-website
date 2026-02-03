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
        { href: "/keynote-experience", label: "Keynote Speaking" },
        { href: "/partnerships", label: "Partnerships" },
        { href: "/sincerely-club", label: "The Sincerely Club" },
        { href: "/contact", label: "Contact" },
        { href: "/foundation", label: "Foundation" },
    ];

    return (
        <motion.nav
            aria-label="Main navigation"
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex h-24 items-center transition-all duration-300 bg-black border-b border-white/10 font-sans"
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
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mt-1">
                            Foundation
                        </span>
                    )}
                </Link>

                {/* Desktop Nav - Unified Horizontal Strip */}
                <div className="hidden lg:flex items-center gap-10 font-black uppercase">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-white hover:text-white/50 text-[12px] font-black uppercase transition-all duration-300",
                                pathname === link.href ? "opacity-100" : "opacity-90"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link href="/contact">
                        <Button
                            className="h-12 px-8 rounded-full font-black uppercase tracking-[0.2em] text-[10px] bg-white text-black hover:bg-gray-200 transition-all duration-500"
                        >
                            Book Demo
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex lg:hidden items-center gap-4">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white p-2 focus:outline-none z-50 relative"
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
                                        className="text-4xl font-black uppercase tracking-tight text-white hover:text-white/50 transition-colors block py-2"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="mt-8"
                            >
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full h-16 rounded-full font-black uppercase tracking-[0.2em] text-sm bg-white text-black hover:bg-gray-200">
                                        Book Demo
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
