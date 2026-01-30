"use client";

import { PartnershipHero } from "@/components/partnerships/PartnershipHero";
import { PartnershipPathways } from "@/components/partnerships/PartnershipPathways";
import { PartnershipROI } from "@/components/partnerships/PartnershipROI";
import { PartnershipMetrics } from "@/components/partnerships/PartnershipMetrics";
import { PartnershipCTA } from "@/components/partnerships/PartnershipCTA";

export default function PartnershipsPage() {
    return (
        <div className="bg-white min-h-screen">
            <PartnershipHero />
            <PartnershipPathways />
            <PartnershipROI />
            <PartnershipMetrics />
            <PartnershipCTA />
        </div>
    );
}
