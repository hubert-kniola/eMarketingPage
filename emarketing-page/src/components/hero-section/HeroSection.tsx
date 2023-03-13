import React, { useState } from "react";
import Gym1 from "../../videos/gym1.mp4";
import { Button } from "../ButtonElements";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted>
          <source src={Gym1} type="video/mp4"></source>
        </VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Generator DIET-GENZ</HeroH1>
        <HeroP>Oblicz swoje BMR i wygeneruj dietę</HeroP>
      </HeroContent>
      <HeroBtnWrapper>
        <Button
          to="/product"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary={true}
          dark={true}
          big={false}
          fontBig={false}
        >
          Rozpocznij {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroBtnWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
