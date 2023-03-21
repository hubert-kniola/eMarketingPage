import React, { useState } from "react";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo, homeObjFive, homeObjSix, homeObjSeven, homeObjEight } from "../components/info-section/Data";
import HeroSection from "../components/hero-section/HeroSection";
import InfoSection from "../components/info-section/InfoSection";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";
import ContactSection from "../components/info-section/ContactSection";
import Services from "../components/services/Services";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection data={homeObjOne} />
      <Services data={homeObjFive}/>
      <InfoSection data={homeObjTwo} />
      <InfoSection data={homeObjThree} />
      <Services data={homeObjSix}/>
      <InfoSection data={homeObjSeven} />
      <InfoSection data={homeObjEight} />
      <ContactSection data={homeObjFour}/>
      <Footer/>
    </>
  );
};

export default Home;
