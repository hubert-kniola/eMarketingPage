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

const ContactSection = ({ data }: InfoSectionProps) => {
  return (
    <InfoContainer lightBg={data.lightBg} id={data.id}>
      <InfoWrapper>
        <InfoRow imgStart={data.imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{data.topLine}</TopLine>
              <Heading lightText={data.lightText}>{data.headline}</Heading>
              <Subtitle darkText={data.darkText}>{data.description}</Subtitle>
              {data.description1 && (
                <Subtitle darkText={data.darkText}>
                  {data.description1}
                </Subtitle>
              )}
              {data.description2 && (
                <Subtitle darkText={data.darkText}>
                  {data.description2}
                </Subtitle>
              )}
              {data.description3 && (
                <Subtitle darkText={data.darkText}>
                  {data.description3}
                </Subtitle>
              )}
              {data.description4 && (
                <Subtitle darkText={data.darkText}>
                  {data.description4}
                </Subtitle>
              )}
              {data.withButton && (
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
                    onClick={() =>
                      window.open(
                        "mailto:diet-genz@example.com?subject=[DIET-GENZ] Kontakt ze strony&body=Witam, ..."
                      )
                    }
                  >
                    {data.buttonLabel}
                  </Button>
                </BtnWrap>
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

export default ContactSection;
