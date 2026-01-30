"use client";

import { ClubHero } from "@/components/club/ClubHero";
import { ClubStats } from "@/components/club/ClubStats";
import { ClubOfferings } from "@/components/club/ClubOfferings";
import { ClubLocations } from "@/components/club/ClubLocations";
import { ClubCoaching } from "@/components/club/ClubCoaching";
import { ClubProfile } from "@/components/club/ClubProfile";
import { ClubCTA } from "@/components/club/ClubCTA";

export default function SincerelyClubPage() {
    return (
        <main className="min-h-screen bg-black selection:bg-[#FFB300] selection:text-black">
            <ClubHero />
            <ClubStats />
            <ClubOfferings />
            <ClubLocations />
            <ClubCoaching />
            <ClubProfile />
            <ClubCTA />
        </main>
    );
}
