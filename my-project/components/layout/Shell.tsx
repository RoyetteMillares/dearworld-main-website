"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function Shell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAcademy = pathname?.startsWith("/choc-x-dear-world-academy");

    if (isAcademy) {
        return <main className="min-h-screen">{children}</main>;
    }

    return (
        <>
            <Navbar />
            <main className="grow pt-20">{children}</main>
            <Footer />
        </>
    );
}
