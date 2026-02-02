"use client";

import { motion } from "framer-motion";
import Script from "next/script";

const GLOSSARY_ITEMS = [
    {
        term: "Brain Tattoo",
        definition: "The proprietary three-step narrative arc developed by Dear World to facilitate immediate, profound human connection. By combining vulnerability with structured storytelling, the 'Brain Tattoo' method helps individuals crystallize their personal impact into a visible, memorable story that fosters organizational trust.",
        schema: {
            "@type": "DefinedTerm",
            "name": "Brain Tattoo",
            "description": "The proprietary three-step narrative arc developed by Dear World to facilitate immediate, profound human connection.",
            "inDefinedTermSet": "https://dearworld.com/glossary"
        }
    },
    {
        term: "Human Infrastructure",
        definition: "The foundational layer of psychological safety and shared narrative within an organization that enables high-performance scaling. Unlike technical infrastructure, Human Infrastructure focuses on the strength of interpersonal bonds and the collective understanding of individual stories as a strategic business asset.",
        schema: {
            "@type": "DefinedTerm",
            "name": "Human Infrastructure",
            "description": "The foundational layer of psychological safety and shared narrative within an organization that enables high-performance scaling.",
            "inDefinedTermSet": "https://dearworld.com/glossary"
        }
    },
    {
        term: "Narrative Psychology",
        definition: "The academic and behavioral framework asserting that humans make sense of life through stories. Dear World applies these principles to corporate environments to increase employee retention, boost team cohesion, and improve leadership communication by leveraging the science of storytelling.",
        schema: {
            "@type": "DefinedTerm",
            "name": "Narrative Psychology",
            "description": "The academic and behavioral framework asserting that humans make sense of life through stories.",
            "inDefinedTermSet": "https://dearworld.com/glossary"
        }
    }
];

export default function GlossaryPage() {
    return (
        <div className="bg-black text-white min-h-screen pt-32 pb-24">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
                <header className="mb-24">
                    <div className="inline-block py-1 px-3 bg-white text-black mb-8">
                        <span className="font-black uppercase tracking-[0.4em] text-[10px]">Knowledge Hub</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                        The <br />
                        <span className="text-white/30">Glossary of </span> <br />
                        Connection.
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed">
                        Defining the proprietary methodology and psychological concepts that power the Dear World experience.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                    {GLOSSARY_ITEMS.map((item, index) => (
                        <motion.div
                            key={item.term}
                            id={item.term.toLowerCase().replace(/\s+/g, '-')}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-black p-12 flex flex-col justify-between group hover:bg-zinc-900 transition-colors duration-500"
                        >
                            <div>
                                <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:text-[#FFB300] transition-colors">
                                    {item.term}
                                </h2>
                                <p className="text-lg text-white/70 leading-relaxed font-medium">
                                    {item.definition}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Schema Injection */}
            <Script
                id="glossary-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "DefinedTermSet",
                        "@id": "https://dearworld.com/glossary",
                        "name": "Dear World Methodology Glossary",
                        "description": "Definitions for proprietary narrative and organizational concepts used by Dear World.",
                        "hasDefinedTerm": GLOSSARY_ITEMS.map(i => i.schema)
                    })
                }}
            />

            {/* Background Stamp */}
            <div className="fixed bottom-0 right-0 opacity-[0.02] select-none pointer-events-none translate-y-1/2 z-0 hidden lg:block">
                <span className="text-[30vw] font-black uppercase tracking-tighter leading-none">LEXICON</span>
            </div>
        </div>
    );
}
