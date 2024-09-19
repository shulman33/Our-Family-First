import MainHero from "@/app/ui/main-hero";
import OurMission from "@/app/ui/our-mission";
import Articles from "@/app/ui/articles";
import MassonryGallery from "@/app/ui/massonry-gallery";
import CTA from "@/app/ui/cta";
import Testimonial from "@/app/ui/testimonial";
import NewCta from "./ui/new-cta";

export default function Home() {
  return (
    <main>
      <MainHero />
      <OurMission />
      <Testimonial />
      <Articles />
      <MassonryGallery />
      {/* <CTA /> */}
      <NewCta />
    </main>
  );
}
