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

export default function Home() {
  return (
    <>
      <Hero />
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
