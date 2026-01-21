"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();
    const isFoundation = pathname?.startsWith("/foundation");

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-6 transition-all duration-300 backdrop-blur-md",
                isFoundation ? "bg-black/90 text-white" : "bg-white/90 text-black border-b border-gray-100"
            )}
        >
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">
                Dear World
                {isFoundation && <span className="text-[#FFB300] ml-2 font-normal normal-case">Foundation</span>}
            </Link>

            {/* Center Nav - Hidden on mobile, flex on md */}
            <div className="hidden md:flex items-center gap-8 font-medium">
                <Link href="/solutions" className="hover:text-[#FFB300] transition-colors">
                    Solutions
                </Link>
                <Link href="/results" className="hover:text-[#FFB300] transition-colors">
                    Our Work
                </Link>
                <Link href="/sincerely-club" className="hover:text-[#FFB300] transition-colors">
                    The Club
                </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                {!isFoundation ? (
                    <Link href="/foundation" className="hidden md:block text-sm font-medium hover:underline">
                        Foundation
                    </Link>
                ) : (
                    <Link href="/" className="hidden md:block text-sm font-medium hover:underline">
                        For Business
                    </Link>
                )}

                <Link href="/contact">
                    <Button
                        className={cn(
                            "font-bold uppercase tracking-wide",
                            isFoundation
                                ? "bg-[#FFB300] text-black hover:bg-[#FFB300]/90"
                                : "bg-black text-white hover:bg-black/80"
                        )}
                    >
                        {isFoundation ? "Donate" : "Book Demo"}
                    </Button>
                </Link>
            </div>
        </nav>
    );
}
