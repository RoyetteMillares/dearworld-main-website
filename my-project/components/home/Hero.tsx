"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
    const [showCircle, setShowCircle] = useState(false);

    useEffect(() => {
        // Trigger animation after mount
        setShowCircle(true);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-80">
                <Image
                    src="/hero_portrait.png"
                    alt="Hero Portrait"
                    fill
                    className="object-cover object-center grayscale contrast-125"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <h1 className="max-w-4xl text-6xl font-bold leading-tight tracking-tight md:text-8xl lg:text-9xl">
                    <span className="relative inline-block">
                        CULTURE CHANGE
                        {/* Hand-drawn Circle Animation */}
                        <svg
                            className={`absolute -bottom-2 -left-4 -right-4 -top-6 h-[140%] w-[120%] pointer-events-none transition-opacity duration-1000 ${showCircle ? "opacity-100" : "opacity-0"
                                }`}
                            viewBox="0 0 300 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10,50 C30,10 270,10 290,50 C270,90 30,90 10,50"
                                stroke="#FFB300"
                                strokeWidth="8"
                                strokeLinecap="round"
                                fill="none"
                                strokeDasharray="600"
                                strokeDashoffset={showCircle ? "0" : "600"}
                                className="transition-[stroke-dashoffset] duration-[1.5s] ease-in-out delay-500"
                            />
                        </svg>
                    </span>
                    <br />
                    that matters.
                </h1>
                <p className="mt-6 max-w-xl text-lg font-light tracking-wide text-gray-200 md:text-2xl">
                    Built on the power of storytelling.
                </p>
            </div>
        </section>
    );
}
