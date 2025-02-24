import { Benefits } from "../components/app/benefits";
import { Browsing } from "../components/app/browsing";
import { Experience } from "../components/app/experience";
import { Footer } from "../components/app/footer";
import { Header } from "../components/app/header";
import Hero from "../components/app/hero";
import { Intersection } from "../components/app/intersection";
import { PartnerShip } from "../components/app/partnership";
import { Performance } from "../components/app/performance";
import { SectionImg } from "../components/app/section-img";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-home_bg overflow-x-hidden">
      <Header />
      <Hero />
      <Browsing />
      <Performance />
      <SectionImg />
      <PartnerShip />
      <Benefits />
      <Intersection />
      <Experience />
      <Footer />
    </div>
  );
}
