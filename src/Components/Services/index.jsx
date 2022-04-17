import React from "react";
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from "./ServicesElements";
import Icon1 from "../../Images/s1.svg"
import Icon2 from "../../Images/s2.svg"
import Icon3 from "../../Images/s3.svg"

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Courses Feature</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Project Oriented</ServicesH2>
            <ServicesP>Use many projects for learning better</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Free Courses</ServicesH2>
            <ServicesP>Use many projects for learning better</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>VIP Account</ServicesH2>
            <ServicesP>Use many projects for learning better</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
