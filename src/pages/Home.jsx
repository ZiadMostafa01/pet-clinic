import Landing from "../components/Home/Landing";
import PetCareSection from "../components/Home/PetCareSection";
import PricingSection from "../components/Home/PricingSection";
import WhatWeOffer from "../components/Home/WhatWeOffer";
import ValueSection from "../components/Home/ValueSection";
import TeamSection from "../components/Home/TeamSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";

function Home() {
  return (
    <>
      <Landing />
      <PetCareSection />
      <ValueSection />
      <WhatWeOffer />
      <TeamSection />
      <PricingSection />
      {/* <WhyChooseUs /> */}
    </>
  );
}
export default Home;
