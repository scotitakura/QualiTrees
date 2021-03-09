import React from "react";
import AboutWord from "../assets/images/about-word-edit.png";
import styled from "styled-components";

const AboutWordDiv = styled.div`
  background-image: url(${AboutWord});
  background-size: 100% 100%;
  height: 12vh;
  width: 35vh;
  margin: 0 0 0 10% !important;
  border-style: none none double none;
  border-color: #1b5d45;
  border-width: 5px;
`;

const AboutSection = styled.div`
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const AboutParagraph = styled.p`
  margin: 3% 10% 10% 10% !important;
`;

function About() {
  return (
    <AboutSection>
      <AboutWordDiv className="fade-in" />
      <AboutParagraph className="fade-in-delay">
        QualiTrees was born from two enthusiastic California Cannabis
        connoisseurs on a mission to exclusively provide phenomenal clean
        organic California Cannabis. We are dedicated to curing our patients
        mind, body, and soul through supplying exceptionally medicinal quality
        trees. Our half Californian half Japanese founders apply their mindful
        Japanese heritage and their OG Californian culture to blend the pure and
        wonderful world of Cannabis together. From the beginning of time, our
        members have enthusiastically believed in the transformative healing
        powers of Cannabis. Our main goal is to pass on these mindful benefits
        of this beautiful plant by providing extraordinary 100% organic health
        conscious Cannabis products. We have spent over a decade obsessively
        exploring ways to optimily consume cannabis and are positively thrilled
        to share nature’s essential blessings of longevity and euphoria with
        you. 
        <br></br>
        <br></br>
        At QualiTrees, we welcome you back to your beautiful self.
      </AboutParagraph>
    </AboutSection>
  );
}

export default About;
