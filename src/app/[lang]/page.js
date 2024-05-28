import SideToSide from "@/components/home/DoubleSideToSide";
import InfiniteLogoSlider from "@/components/motions/InfiniteLogoSlider";
import HeroSlider from "@/components/sliders/HeroSlider";
import TopicsFocus from "@/components/home/TopicsFocus";
import TalkToTeam from "@/components/home/TalkToTeam";
import SideToSideText from "@/components/home/SideToSideText";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import MiniPortfolio from "@/components/home/MiniPortfolio";
import ContactSection from "@/components/home/ContactSection";
import { Suspense } from "react";
import LoadingHero from "@/components/sliders/LoadingHero";
import { getDictionary } from "@/lib/dictionary";
import ImageHero from "@/components/sliders/ImageHero";

export default async function Home({ params }) {
  const lang = params.lang;
  const { homeDic } = await getDictionary(lang);
  return (
    <div className=" overflow-x-hidden">
      <Suspense fallback={<LoadingHero />}>
        <ImageHero homeDic={homeDic} />
        <HeroSlider homeDic={homeDic} />
        <TopicsFocus lang={lang} />
        <InfiniteLogoSlider homeDic={homeDic} />
        <SideToSide homeDic={homeDic} />
        <TalkToTeam homeDic={homeDic} />
        <SideToSideText homeDic={homeDic} />
        <MiniPortfolio homeDic={homeDic} />
        {/* <WhyUs /> */}
        <TestimonialSlider homeDic={homeDic} />
        <ContactSection params={params} />
        {/* <HeroComp /> */}
        {/* <FlipBoxesComp /> */}
        {/* <PricingTable /> */}
      </Suspense>
    </div>
  );
}
