import { cn } from "@/lib/utils";
import { Gloria_Hallelujah } from "next/font/google";

// Handwritten font for the emotive feel
const handwritten = Gloria_Hallelujah({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-handwritten",
});

const MESSAGES = [
    "I am not my mistakes.",
    "I found my voice.",
    "We are stronger together.",
    "My story matters.",
    "Courage is a choice.",
    "Vulnerability is strength.",
    "Lead with empathy.",
    "Everyone has a story.",
    "Listen deeply.",
    "Connect authentically."
];

export function EmotiveFeed() {
    return (
        <section className={cn("w-full overflow-hidden bg-[#FFB300] py-6", handwritten.variable)}>
            <div className="relative flex w-full overflow-x-hidden">
                <div className="animate-marquee flex whitespace-nowrap py-4">
                    {MESSAGES.map((msg, i) => (
                        <span
                            key={i}
                            className="mx-8 text-4xl font-handwritten text-black md:text-6xl"
                            style={{ fontFamily: "var(--font-handwritten)" }}
                        >
                            {msg} <span className="mx-4 opacity-50">•</span>
                        </span>
                    ))}
                </div>

                {/* Duplicate for seamless loop */}
                <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap py-4">
                    {MESSAGES.map((msg, i) => (
                        <span
                            key={`dup-${i}`}
                            className="mx-8 text-4xl font-handwritten text-black md:text-6xl"
                            style={{ fontFamily: "var(--font-handwritten)" }}
                        >
                            {msg} <span className="mx-4 opacity-50">•</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
