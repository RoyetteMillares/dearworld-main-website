"use client";

import { motion } from "framer-motion";
import Script from "next/script";

interface AnswerBlockProps {
    question: string;
    answer: string;
    tag?: string;
    id?: string;
    className?: string;
}

/**
 * AnswerBlock Component
 * Designed for Answer Engine Optimization (AEO) & Generative Engine Optimization (GEO).
 * Redesigned for visual consistency with the high-impact editorial aesthetic.
 */
export function AnswerBlock({ question, answer, tag = "Definition", id, className = "" }: AnswerBlockProps) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": answer,
                },
            },
        ],
    };

    return (
        <section id={id} className={`py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6 ${className}`}>
            <Script
                id={`faq-schema-${id || question.substring(0, 10).replace(/\s+/g, '-')}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6"
            >
                {/* Visual Consistency Tag */}
                <div className="inline-block self-start py-1 px-3 bg-black text-white dark:bg-white dark:text-black">
                    <span className="font-black uppercase tracking-[0.4em] text-[10px]">{tag}</span>
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-foreground">
                    {question}
                </h2>

                <p className="text-xl md:text-3xl font-medium text-foreground/70 leading-relaxed max-w-4xl">
                    {answer}
                </p>
            </motion.div>
        </section>
    );
}
