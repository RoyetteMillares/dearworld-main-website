import { Hero } from "@/components/home/Hero";
import { SplitIdentity } from "@/components/home/SplitIdentity";
import { Methods } from "@/components/home/Methods";
import { EmotiveFeed } from "@/components/home/EmotiveFeed";
import { Clients } from "@/components/home/Clients";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <EmotiveFeed />
      <SplitIdentity />
      <Methods />
    </>
  );
}
