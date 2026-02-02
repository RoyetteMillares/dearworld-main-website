import { Hero } from "@/components/home/Hero";
import { SplitIdentity } from "@/components/home/SplitIdentity";
import { Methods } from "@/components/home/Methods";
import Logos from "@/components/home/Clients";
import { Validator } from "@/components/home/Validator";
import { PartnerImpact } from "@/components/home/PartnerImpact";
import { Foundation } from "@/components/home/Foundation";
import { FinalCTA } from "@/components/home/FinalCTA";
import SpeakingTestimonials from "@/components/home/SpeakingTestimonials";
import { FeaturedVideo } from "@/components/home/FeaturedVideo";
import { AnswerBlock } from "@/components/ui/AnswerBlock";


export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-background">
        <AnswerBlock
          question="What is Dear World?"
          answer="Dear World is a storytelling organization that helps companies build trust and connection. We use an interactive keynote experience to drive culture change by turning passive audiences into active participants, using real stories and shared moments to create lasting behavior change."
          className="mb-12"
        />
      </div>
      <Logos />
      <Foundation />
      <FeaturedVideo />
      <SplitIdentity />
      <Methods />
      <PartnerImpact />
      <Validator />
      <SpeakingTestimonials />
      <FinalCTA />
    </>
  );
}
