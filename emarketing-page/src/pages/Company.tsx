import React from "react";
import Footer from "../components/footer/Footer";
import ContactSection from "../components/info-section/ContactSection";
import { compObjOne, compObjTwo, compObjThree, compObjFour, compObjFive, compObjSix, compObjSeven } from "../components/info-section/Data";
import InfoSection from "../components/info-section/InfoSection";
import Services from "../components/services/Services";

const Company = () => {
  return (
    <>
      <InfoSection data={compObjOne} />
      <InfoSection data={compObjSeven} />
      <InfoSection data={compObjTwo} />
      <InfoSection data={compObjThree} />
      <ContactSection data={compObjFive} />
      <Services data={compObjSix} column={true} />
      <Footer />
    </>
  );
};

export default Company;
