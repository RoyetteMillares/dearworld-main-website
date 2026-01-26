import { ServiceHero } from "@/components/solutions/ServiceHero";
import { ExperienceEditorialCard } from "@/components/solutions/ExperienceEditorialCard";
import { ROIStats } from "@/components/solutions/ROIStats";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function SolutionsPage() {
    return (
        <main className="bg-black min-h-screen">
            <ServiceHero />

            {/* Key Experiences Feed - Asymmetric Editorial Grid */}
            <section className="w-full max-w-[1400px] mx-auto px-4 md:px-6 py-32 relative">
                {/* Background Architectural Watermark */}
                <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none -translate-y-24">
                    <span className="text-[25vw] font-black uppercase tracking-tighter leading-none">
                        ARCHIVE
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                    {/* Item 01 - Stays at top */}
                    <div className="lg:translate-y-0">
                        <ExperienceEditorialCard
                            index={0}
                            title="Storytelling Keynote"
                            subtitle="Flagship Experience"
                            description="A high-intensity, immersive experience that takes teams through the science and art of personal storytelling. Designed for large conferences and global summits."
                            duration="90 - 120 Mins"
                            capacity="Unlimited"
                            scribbleVariant="17"
                        />
                    </div>

                    {/* Item 02 - Offset downwards */}
                    <div className="lg:translate-y-32">
                        <ExperienceEditorialCard
                            index={1}
                            title="Leadership Intensive"
                            subtitle="Executive Track"
                            description="A deep-dive workshop for leadership teams looking to build psychological safety and trust through the proprietary Brain Tattoo™ methodology."
                            duration="Full Day"
                            capacity="Up to 24"
                            scribbleVariant="13"
                            className="bg-white/4 border-white/10"
                        />
                    </div>

                    {/* Item 03 - Offset slightly downwards from Item 01 */}
                    <div className="lg:-translate-y-16">
                        <ExperienceEditorialCard
                            index={2}
                            title="Portrait Process"
                            subtitle="Visual Culture"
                            description="Combine the power of the written word with professional portraiture. We capture the soul of your organization in a physical gallery."
                            duration="2 - 3 Days"
                            capacity="Site-wide"
                            scribbleVariant="18"
                        />
                    </div>

                    {/* Decorative Callout or 4th Item */}
                    <div className="lg:translate-y-16 flex items-center justify-center p-12 border-2 border-dashed border-white/5 rounded-3xl">
                        <div className="text-center space-y-8">
                            <p className="text-2xl font-black uppercase tracking-widest text-white/20 italic">
                                "The story you carry is the <br /> foundation of the culture <br /> you build."
                            </p>
                            <div className="h-px w-12 bg-white/20 mx-auto" />
                            <div className="inline-block py-1.5 px-3 bg-white text-black rounded-full">
                                <p className="text-[10px] font-black uppercase tracking-[0.4em]">
                                    W+K Narrative Strategy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-24">
                <ROIStats />
            </div>

            <FinalCTA />
        </main>
    );
}
