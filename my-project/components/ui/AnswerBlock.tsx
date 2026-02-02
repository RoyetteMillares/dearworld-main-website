"use client";

import React from "react";
import Script from "next/script";

interface AnswerBlockProps {
    question: string;
    answer: string;
    id?: string;
    className?: string;
}

/**
 * AnswerBlock Component
 * Designed for Answer Engine Optimization (AEO) & Generative Engine Optimization (GEO).
 *
 * AEO Rules:
 * - Answer text should be STRICTLY 40-60 words.
 * - Question should be a natural language query (e.g., "What is...").
 *
 * GEO Rules:
 * - Include "Semantic Depth" (vocab like "Behavior Change", "Active Participants").
 * - This component injects FAQPage Schema automatically.
 */
export function AnswerBlock({ question, answer, id, className = "" }: AnswerBlockProps) {
    // Generate valid FAQ Schema
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
        <section id={id} className={`py-8 md:py-12 max-w-4xl mx-auto px-4 ${className}`}>
            {/* JSON-LD Schema for AI Crawlers */}
            <Script
                id={`faq-schema-${id || question.substring(0, 10).replace(/\s+/g, '-')}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <div className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-bold font-serif leading-tight">
                    {question}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-sans">
                    {answer}
                </p>
            </div>
        </section>
    );
}
