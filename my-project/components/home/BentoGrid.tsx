import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BentoCardProps {
    title: string;
    description: string;
    className?: string; // For grid span
    theme: "dark" | "light";
    href: string;
}

const BentoCard = ({ title, description, className, theme, href }: BentoCardProps) => {
    return (
        <Link
            href={href}
            className={cn(
                "group relative flex flex-col justify-between p-8 transition-all duration-500 hover:scale-[1.01]",
                theme === "dark"
                    ? "bg-black text-white hover:bg-white hover:text-black border-2 border-transparent hover:border-black"
                    : "bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:border-white",
                className
            )}
        >
            <div className="flex justify-between items-start">
                <h3 className="text-3xl font-black tracking-tighter uppercase md:text-5xl">
                    {title}
                </h3>
                <ArrowUpRight className={cn(
                    "w-8 h-8 transition-transform duration-300 group-hover:rotate-45",
                    theme === "dark" ? "text-white" : "text-black"
                )} />
            </div>

            <p className="mt-4 max-w-sm text-lg font-medium leading-relaxed opacity-90">
                {description}
            </p>
        </Link>
    );
};

export function BentoGrid() {
    return (
        <section className="bg-white px-4 py-20 md:px-8">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-black">
                        The Methods
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 h-auto md:h-[800px]">
                    {/* Brain Tattoo - Large Card */}
                    <BentoCard
                        title="Brain Tattoo™"
                        description="The core methodology. Helping teams find their individual stories to build psychological safety."
                        theme="dark"
                        href="/methods/brain-tattoo"
                        className="md:col-span-2 md:row-span-2"
                    />

                    {/* Prtrait - Medium Card */}
                    <BentoCard
                        title="Prtrait™"
                        description="Visual storytelling captured in a single, powerful moment."
                        theme="light"
                        href="/methods/prtrait"
                        className="md:col-span-1 md:row-span-1"
                    />

                    {/* Loyl - Medium Card */}
                    <BentoCard
                        title="Loyl™"
                        description="Executive coaching and leadership narrative development."
                        theme="light"
                        href="/methods/loyl"
                        className="md:col-span-1 md:row-span-1 bg-gray-50"
                    />
                </div>
            </div>
        </section>
    );
}
