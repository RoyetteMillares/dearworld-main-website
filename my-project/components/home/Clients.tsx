"use client";

import Image from "next/image"
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Logos = ({ interactive = true }: { interactive?: boolean }) => {
    const media = [
        { name: "CNN", src: "/cnn-logo.svg", url: "https://www.cnn.com/videos/bestoftv/2012/05/22/exp-point-robert-fogarty.cnn" },
        { name: "The New York Times", src: "/The_New_York_Times_logo.png", url: "https://www.nytimes.com/2013/04/23/sports/marathon-survivors-messages-written-on-skin.html" },
        { name: "ESPN", src: "/ESPN_logo.png", url: "https://www.espn.com/video/clip/_/id/12999718" },
        { name: "MSNBC", src: "/MSNBC-Logo.png", url: "https://www.msnbc.com/11th-hour/watch/sandy-hook-one-decade-later-157521989879" },
        { name: "Esquire", src: "/Esquire_logo_(1993).svg", url: "https://www.esquire.com/news-politics/news/a23214/robert-fogarty-dear-world-interview/" },
        { name: "Fox News", src: "/Fox_News_Channel_logo.svg", url: "https://www.foxnews.com/lifestyle/dear-world-founder-robert-fogarty-on-telling-your-story" },
    ];

    return (
        <section id="logos" className="py-24 bg-black overflow-hidden relative border-y border-white/5">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
                <div className="flex items-center gap-6 mb-24">
                    <span className="h-px grow bg-white/10"></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 whitespace-nowrap">
                        As Featured In
                    </span>
                    <span className="h-px grow bg-white/10"></span>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    {media.map((logo, i) => {
                        const content = (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={cn(
                                    "relative h-8 md:h-12 w-24 md:w-36 transition-all duration-700 flex items-center justify-center opacity-30 hover:opacity-100"
                                )}
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    fill
                                    className="object-contain grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </motion.div>
                        );

                        if (!interactive) return <div key={logo.name}>{content}</div>;

                        return (
                            <a
                                key={logo.name}
                                href={logo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                {content}
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Logos;
