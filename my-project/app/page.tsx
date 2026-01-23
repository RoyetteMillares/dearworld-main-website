import { Hero } from "@/components/home/Hero";
import { SplitIdentity } from "@/components/home/SplitIdentity";
import { Methods } from "@/components/home/Methods";
import { EmotiveFeed } from "@/components/home/EmotiveFeed";
import { Clients } from "@/components/home/Clients";
import { Validator } from "@/components/home/Validator";
import { PartnerImpact } from "@/components/home/PartnerImpact";
import { Foundation } from "@/components/home/Foundation";
import { FinalCTA } from "@/components/home/FinalCTA";
import SpeakingTestimonials from "@/components/home/SpeakingTestimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />

      {/* Hand-drawn Transition Scribble */}
      <div className="bg-white py-12 flex justify-center overflow-hidden">
        <svg className="w-64 h-8 text-black/10" viewBox="0 0 200 20">
          <path d="M0,10 Q50,0 100,10 T200,10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <EmotiveFeed />
      <PartnerImpact />
      <Validator />
      <SplitIdentity />
      <Methods />
      <SpeakingTestimonials />
      <Foundation />
      <FinalCTA />
    </>
  );
}
