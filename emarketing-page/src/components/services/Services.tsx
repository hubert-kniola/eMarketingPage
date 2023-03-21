import {
  ServicesCard,
  ServicesColumn,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

interface ServicesProps {
  data: any;
}

const Services = ({ data }: ServicesProps) => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>{data.maintitle}</ServicesH1>
      <ServicesWrapper multi={data.multi}>
        <ServicesCard>
          {data.icon1 && <ServicesIcon src={data.icon1} />}
          <ServicesColumn>
            <ServicesH2>{data.subtitle1}</ServicesH2>
            <ServicesP>{data.description1}</ServicesP>
          </ServicesColumn>
        </ServicesCard>
        <ServicesCard>
          {data.icon2 && <ServicesIcon src={data.icon2} />}
          <ServicesColumn>
            <ServicesH2>{data.subtitle2}</ServicesH2>
            <ServicesP>{data.description2}</ServicesP>
          </ServicesColumn>
        </ServicesCard>
        <ServicesCard>
          {data.icon3 && <ServicesIcon src={data.icon3} />}
          <ServicesColumn>
            <ServicesH2>{data.subtitle3}</ServicesH2>
            <ServicesP>{data.description3}</ServicesP>
          </ServicesColumn>
        </ServicesCard>
        {(data.icon4 || data.subtitle4) && (
          <ServicesCard>
            {data.icon4 && <ServicesIcon src={data.icon4} />}
            <ServicesColumn>
              <ServicesH2>{data.subtitle4}</ServicesH2>
              <ServicesP>{data.description4}</ServicesP>
            </ServicesColumn>
          </ServicesCard>
        )}
        {(data.icon5 || data.subtitle5) && (
          <ServicesCard>
            {data.icon5 && <ServicesIcon src={data.icon5} />}
            <ServicesColumn>
              <ServicesH2>{data.subtitle5}</ServicesH2>
              <ServicesP>{data.description5}</ServicesP>
            </ServicesColumn>
          </ServicesCard>
        )}
        {(data.icon6 || data.subtitle6) && (
          <ServicesCard>
            {data.icon6 && <ServicesIcon src={data.icon6} />}
            <ServicesColumn>
              <ServicesH2>{data.subtitle6}</ServicesH2>
              <ServicesP>{data.description6}</ServicesP>
            </ServicesColumn>
          </ServicesCard>
        )}
        {(data.icon7 || data.subtitle7) && (
          <ServicesCard>
            {data.icon7 && <ServicesIcon src={data.icon7} />}
            <ServicesColumn>
              <ServicesH2>{data.subtitle7}</ServicesH2>
              <ServicesP>{data.description7}</ServicesP>
            </ServicesColumn>
          </ServicesCard>
        )}
        {(data.icon8 || data.subtitle8) && (
          <ServicesCard>
            {data.icon8 && <ServicesIcon src={data.icon8} />}
            <ServicesColumn>
              <ServicesH2>{data.subtitle8}</ServicesH2>
              <ServicesP>{data.description8}</ServicesP>
            </ServicesColumn>
          </ServicesCard>
        )}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
