import Image from "next/image";
import MainHero from "@/app/ui/main-hero";
import OurMission from "@/app/ui/our-mission";
import Articles from "@/app/ui/articles";
import MassonryGallery from "@/app/ui/massonry-gallery";
import CTA from "@/app/ui/cta";

export default function Home() {
  return (
    <main>
      <MainHero />
      <OurMission />
      <Articles />
      <MassonryGallery />
      <CTA />
    </main>
  );
}
