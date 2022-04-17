import React, { useState } from "react";
import { Button } from "../ButtonElements";
import Video from "../../Videos/video-back.mp4";
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
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>JS Is The King</HeroH1>
          <HeroP>Learning JS And FrameWork</HeroP>
          <HeroBtnWrapper>
            <Button to="/" primary dark onMouseEnter={onHover} onMouseLeave={onHover}>
              Get Started
              {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
