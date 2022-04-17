import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItem,
  FooterLinksTitle,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLinks,
  SocialIcons,
  SocialLogo,
  SocialMediaContainer,
  SocialMediaWrap,
  WebSiteRights,
} from "./FooterElements";
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinksItem>
                <FooterLinksTitle>About Us</FooterLinksTitle>
                <FooterLink to="home">Home</FooterLink>
                <FooterLink to="courses">Courses</FooterLink>
                <FooterLink to="blog">Blog</FooterLink>
                <FooterLink to="roadmap">Road Map</FooterLink>
              </FooterLinksItem>
              <FooterLinksItem>
                <FooterLinksTitle>About Us</FooterLinksTitle>
                <FooterLink to="home">Home</FooterLink>
                <FooterLink to="courses">Courses</FooterLink>
                <FooterLink to="blog">Blog</FooterLink>
                <FooterLink to="roadmap">Road Map</FooterLink>
              </FooterLinksItem>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinksItem>
                <FooterLinksTitle>About Us</FooterLinksTitle>
                <FooterLink to="home">Home</FooterLink>
                <FooterLink to="courses">Courses</FooterLink>
                <FooterLink to="blog">Blog</FooterLink>
                <FooterLink to="roadmap">Road Map</FooterLink>
              </FooterLinksItem>
              <FooterLinksItem>
                <FooterLinksTitle>About Us</FooterLinksTitle>
                <FooterLink to="home">Home</FooterLink>
                <FooterLink to="courses">Courses</FooterLink>
                <FooterLink to="blog">Blog</FooterLink>
                <FooterLink to="roadmap">Road Map</FooterLink>
              </FooterLinksItem>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMediaContainer>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                MOSTAFA SHAHNANI
              </SocialLogo>
              <WebSiteRights>MOSTAFA SHAHNANI copy rights 2022</WebSiteRights>
              <SocialIcons>
                <SocialIconLinks>
                  <FaFacebook />
                </SocialIconLinks>
                <SocialIconLinks>
                  <FaYoutube />
                </SocialIconLinks>
                <SocialIconLinks>
                  <FaInstagram />
                </SocialIconLinks>
                <SocialIconLinks>
                  <FaTwitter />
                </SocialIconLinks>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMediaContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
