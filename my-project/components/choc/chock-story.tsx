import Link from "next/link";
import { cn } from "@/lib/utils";

interface ChocStorySectionProps {
    imageSrc: string;
    title: string;
    ctaHref: string;
    variant?: "full" | "partial";
}

export function ChocStorySection({
    imageSrc,
    title,
    ctaHref,
    variant = "full",
}: ChocStorySectionProps) {
    return (
        <div className={cn("flex flex-col gap-6", variant === "full" ? "w-full mb-16 px-4 md:px-12" : "w-full")}>
            <div className="relative overflow-hidden group">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-4">
                <h3 className={cn(
                    "font-bold uppercase tracking-tight text-neutral-900",
                    variant === "full" ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"
                )}>
                    {title}
                </h3>

                <Link
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest bg-[#eab308f2] text-black px-8 py-4 w-fit hover:bg-yellow-500 transition-colors"
                >
                    View Collection
                    <span className="text-lg">→</span>
                </Link>
            </div>
        </div>
    );
}
