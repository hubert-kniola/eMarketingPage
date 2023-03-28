import Footer from "../components/footer/Footer";
import HeroSection from "../components/hero-section/HeroSection";
import ContactSection from "../components/info-section/ContactSection";
import { compObjFour, homeObjEight, homeObjFive, homeObjFour, homeObjOne, homeObjSeven, homeObjSix, homeObjThree, homeObjTwo } from "../components/info-section/Data";
import InfoSection from "../components/info-section/InfoSection";
import Services from "../components/services/Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection data={homeObjOne} />
      <Services data={homeObjFive}/>
      <InfoSection data={homeObjTwo} />
      <InfoSection data={homeObjThree} />
      <Services data={homeObjSix}/>
      <InfoSection data={homeObjSeven} />
      <InfoSection data={homeObjEight} />
      <Services data={compObjFour} />
      <ContactSection data={homeObjFour}/>
      <Footer/>
    </>
  );
};

export default Home;
