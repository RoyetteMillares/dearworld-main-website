import { ServiceHero } from "@/components/solutions/ServiceHero";
import { ExperienceCard } from "@/components/solutions/ExperienceCard";
import { ROIStats } from "@/components/solutions/ROIStats";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
    return (
        <div className="bg-white">
            <ServiceHero />

            {/* Key Experiences Feed */}
            <section className="container mx-auto px-6 pb-32">
                <ExperienceCard
                    title="The Storytelling Keynote"
                    subtitle="Our Flagship Experience"
                    description="A high-intensity, immersive experience that takes teams through the science and art of personal storytelling. Designed for large conferences and global summits."
                    duration="90 - 120 Mins"
                    capacity="Unlimited"
                />

                <ExperienceCard
                    title="Brain Tattoo™ Leadership"
                    subtitle="Executive Intensive"
                    description="A deep-dive workshop for leadership teams looking to build psychological safety and trust through the proprietary Brain Tattoo methodology."
                    duration="Full Day"
                    capacity="Up to 24"
                    reversed={true}
                />

                <ExperienceCard
                    title="The Portrait Process™"
                    subtitle="Visual Culture"
                    description="Combine the power of the written word with professional portraiture. We capture the soul of your organization in a physical gallery that lives in your office."
                    duration="2 - 3 Days"
                    capacity="Site-wide"
                />
            </section>

            <ROIStats />

            {/* Final CTA */}
            <section className="bg-white py-32 text-center border-t border-black/5">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">
                        Ready to Build a <br />Better Culture?
                    </h2>
                    <p className="mt-8 text-xl text-gray-600">
                        Schedule a consultation with our Experience Architects to design a custom program for your organization.
                    </p>
                    <div className="mt-12">
                        <Button className="bg-[#FFB300] text-black hover:bg-black hover:text-white h-16 px-12 text-xl font-bold uppercase transition-all duration-300">
                            Book a Consultation
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
