import React from "react";
import { Button } from "../ButtonElements";
import { NavBtn, NavBtnLink } from "../navbar/NavbarElements";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoSectionElements";
import { animateScroll as scroll } from "react-scroll";

interface InfoSectionProps {
  data: any;
}

const InfoSection = ({ data }: InfoSectionProps) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <InfoContainer lightBg={data.lightBg} id={data.id}>
      <InfoWrapper>
        <InfoRow imgStart={data.imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{data.topLine}</TopLine>
              <Heading lightText={data.lightText}>{data.headline}</Heading>
              <Subtitle darkText={data.darkText}>{data.description}</Subtitle>
              {data.withButton && (
                <BtnWrap>
                  <Button
                    to={data.to ? data.to : "home"}
                    big={false}
                    fontBig={false}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    primary={data.primary ? true : false}
                    dark={data.dark ? true : false}
                  >
                    {data.buttonLabel}
                  </Button>
                </BtnWrap>
              )}
              {data.withNavButton && (
                <NavBtn>
                  <NavBtnLink to={data.to} onClick={toggleHome}>{data.buttonLabel}</NavBtnLink>
                </NavBtn>
              )}
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={data.img} alt={data.alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
