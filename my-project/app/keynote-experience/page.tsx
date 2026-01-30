"use client";

import { KeynoteHero } from "@/components/experience/KeynoteHero";
import { KeynoteMethodology } from "@/components/experience/KeynoteMethodology";
import { KeynoteRoadmap } from "@/components/experience/KeynoteRoadmap";
import { KeynoteMetrics } from "@/components/experience/KeynoteMetrics";
import { KeynoteCTA } from "@/components/experience/KeynoteCTA";

export default function KeynoteExperiencePage() {
    return (
        <div className="bg-white min-h-screen">
            <KeynoteHero />
            <KeynoteMethodology />
            <KeynoteRoadmap />
            <KeynoteMetrics />
            <KeynoteCTA />
        </div>
    );
}
