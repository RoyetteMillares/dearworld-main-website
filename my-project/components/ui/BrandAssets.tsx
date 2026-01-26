import Image from 'next/image';
import { cn } from "@/lib/utils";

export const HandDrawnCircle = ({
    className = "",
    variant = "heavy",
    imageClassName = ""
}: {
    className?: string,
    variant?: "heavy" | "light" | "light-5" | "light-6",
    imageClassName?: string
}) => {
    const assets = {
        heavy: "/brand-assets/Heavy-Circle 11.png",
        light: "/brand-assets/Light-Circle-11.png",
        "light-5": "/brand-assets/Light-Circle-5.png",
        "light-6": "/brand-assets/Light-Circle-6.png",
    };

    return (
        <div className={cn("absolute pointer-events-none select-none", className)}>
            <Image
                src={assets[variant]}
                alt="Highlight Circle"
                fill
                className={cn(imageClassName)}
                priority
            />
        </div>
    );
};

export const Scribble = ({
    variant = "13",
    className = "",
    imageClassName = ""
}: {
    variant?: "13" | "17" | "18",
    className?: string,
    imageClassName?: string
}) => {
    const assets = {
        "13": "/brand-assets/Scribble-13.png",
        "17": "/brand-assets/Scribble-17.png",
        "18": "/brand-assets/Scribble-18.png",
    };

    return (
        <div className={cn("absolute pointer-events-none select-none", className)}>
            <Image
                src={assets[variant]}
                alt="Scribble Accent"
                fill
                className={cn(imageClassName)}
            />
        </div>
    );
};
