import React from "react";
import { Button } from "../ButtonElements";
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

interface InfoSectionProps {
  data: any;
}

const InfoSection = ({ data }: InfoSectionProps) => {
  return (
    <InfoContainer lightBg={data.lightBg} id={data.id}>
      <InfoWrapper>
        <InfoRow imgStart={data.imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{data.topLine}</TopLine>
              <Heading lightText={data.lightText}>{data.headline}</Heading>
              <Subtitle darkText={data.darkText}>{data.description}</Subtitle>
              <BtnWrap>
                <Button
                  to="home"
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
