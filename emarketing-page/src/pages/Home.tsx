import React, { useState } from "react";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/info-section/Data";
import HeroSection from "../components/hero-section/HeroSection";
import InfoSection from "../components/info-section/InfoSection";
import Navbar from "../components/navbar/Nabar";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection data={homeObjOne} />
      <InfoSection data={homeObjTwo} />
      <InfoSection data={homeObjThree} />
      <Footer/>
    </>
  );
};

export default Home;
