"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export function Navbar() {
    const pathname = usePathname();
    const isFoundation = pathname?.startsWith("/foundation");

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex h-24 items-center transition-all duration-300 font-sans bg-black border-b border-white/10"
            )}
        >
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
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

                {/* Center Nav - Hidden on mobile, flex on md */}
                <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.4em]">
                    <Link href="/solutions" className="text-white hover:text-gray-500 text-xs font-black tracking-widest uppercase transition-colors">
                        Solutions
                    </Link>
                    <Link href="/results" className="text-white hover:text-gray-500 text-xs font-black tracking-widest uppercase transition-colors">
                        Our Work
                    </Link>
                    <Link href="/sincerely-club" className="text-white hover:text-gray-500 text-xs font-black tracking-widest uppercase transition-colors">
                        The Club
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-8">
                    {!isFoundation ? (
                        <Link href="/foundation" className="text-white hover:text-gray-500 text-xs font-black tracking-widest uppercase transition-colors">
                            Foundation
                        </Link>
                    ) : (
                        <Link href="/" className="text-white hover:text-gray-500 text-xs font-black tracking-widest uppercase transition-colors">
                            For Business
                        </Link>
                    )}

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
            </div>
        </motion.nav>
    );
}
