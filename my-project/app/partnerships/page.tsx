"use client";

import { PartnershipHero } from "@/components/partnerships/PartnershipHero";
import { PartnershipPathways } from "@/components/partnerships/PartnershipPathways";
import { PartnershipROI } from "@/components/partnerships/PartnershipROI";
import { PartnershipCTA } from "@/components/partnerships/PartnershipCTA";
import { PartnershipFAQ } from "@/components/partnerships/PartnershipFAQ";

export default function PartnershipsPage() {
    return (
        <div className="bg-white min-h-screen">
            <PartnershipHero />
            <PartnershipPathways />
            <PartnershipROI />
            <PartnershipFAQ />
            <PartnershipCTA />
        </div>
    );
}
