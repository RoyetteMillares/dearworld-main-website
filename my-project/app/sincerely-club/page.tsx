"use client";

import { ClubHero } from "@/components/club/ClubHero";
import { ClubStats } from "@/components/club/ClubStats";
import { ClubOfferings } from "@/components/club/ClubOfferings";
import { ClubLocations } from "@/components/club/ClubLocations";
import { ClubCTA } from "@/components/club/ClubCTA";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function SincerelyClubPage() {
    return (
        <main className="min-h-screen bg-black selection:bg-white selection:text-black">
            <ClubHero />
            <ClubStats />
            <ClubOfferings />
            <ClubLocations />
            <ClubCTA />
            <FinalCTA />
        </main>
    );
}
