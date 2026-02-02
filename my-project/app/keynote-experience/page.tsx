"use client";

import { KeynoteHero } from "@/components/experience/KeynoteHero";
import { KeynoteMethodology } from "@/components/experience/KeynoteMethodology";
import { KeynoteRoadmap } from "@/components/experience/KeynoteRoadmap";
import { KeynoteMetrics } from "@/components/experience/KeynoteMetrics";
import { KeynoteCTA } from "@/components/experience/KeynoteCTA";
import { AnswerBlock } from "@/components/ui/AnswerBlock";

export default function KeynoteExperiencePage() {
    return (
        <div className="bg-white min-h-screen">
            <KeynoteHero />
            <div className="bg-white">
                <AnswerBlock
                    question="What is an interactive keynote experience?"
                    answer="An interactive keynote experience drives culture change by turning passive audiences into active participants. We use unique methodology, real stories, and shared moments to create trust, alignment, and lasting behavior change across your entire organization."
                    className="mb-8"
                />
            </div>
            <KeynoteMethodology />
            <KeynoteRoadmap />
            <KeynoteMetrics />
            <KeynoteCTA />
        </div>
    );
}
