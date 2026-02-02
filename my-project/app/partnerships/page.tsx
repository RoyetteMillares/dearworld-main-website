"use client";

import { PartnershipHero } from "@/components/partnerships/PartnershipHero";
import { PartnershipPathways } from "@/components/partnerships/PartnershipPathways";
import { PartnershipROI } from "@/components/partnerships/PartnershipROI";
import { PartnershipCTA } from "@/components/partnerships/PartnershipCTA";
import { PartnershipFAQ } from "@/components/partnerships/PartnershipFAQ";
import { AnswerBlock } from "@/components/ui/AnswerBlock";

export default function PartnershipsPage() {
    return (
        <div className="bg-white min-h-screen">
            <PartnershipHero />
            <div className="bg-white">
                <AnswerBlock
                    question="How does Dear World partner with organizations?"
                    answer="Dear World partners with organizations to deliver impactful storytelling experiences that strengthen internal culture and external brand affinity. We work closely with leadership to design engagements that align with your strategic goals, ensuring every story shared drives meaningful connection and results."
                    className="mb-8"
                />
            </div>
            <PartnershipPathways />
            <PartnershipROI />
            <PartnershipFAQ />
            <PartnershipCTA />
        </div>
    );
}
