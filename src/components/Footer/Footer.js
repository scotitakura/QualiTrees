import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  justify-content: center;
  align-items: center;
  background-color: #A29169;
`;

const StyledFlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-around;
  text-align: center;
`;

const StyledHrSI = styled.hr`
  width: 100px;
`;

const StyledP = styled.p`
  font-weight: bold;
  font-variant: small-caps;
  margin: 10px 0 5px 0;
`;

const StyledFlexItem = styled.div`
  width: 25%;
`;

const StyledCopyright = styled.div`
  text-align: right;
  font-size: 1em !important;
`;

function Footer() {
  return (
    <StyledFooter className="site-footer">
        <StyledFlexDiv className="container footer-media-adj">
          <StyledFlexItem className="footer-flex-adj">
          <StyledP>About</StyledP>
              <hr/>
            <p className="text-center">
              Here at Garage Collage, we are trying to help the lives of people
              in the COVID-19 pandemic by allowing them to safely and
              effectively host a garage sale over our platform. Whether you're
              trying to make money off of bulk things that you may not need, or
              you're looking to purchase some things at a possibly lower retail
              price or find something antique, Garage Collage is the place for
              you!
            </p>
          </StyledFlexItem>

          <StyledFlexItem className="footer-flex-adj">
          <StyledP>Who We Are</StyledP>
              <hr/>
            <ul className="footer-links">
              <StyledP>Scot Itakura</StyledP>
              <StyledHrSI/>
              <li><a href="https://www.linkedin.com/in/scot-itakura-289376157/">Linkedin</a></li>
              <li><a href="https://github.com/scotitakura">Github</a></li>
            </ul>
          </StyledFlexItem>

          <StyledFlexItem className="footer-flex-adj">
          <StyledP>Quick Links</StyledP>
              <hr/>
            <ul className="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Contribute</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Sitemap</a></li>
            </ul>
          </StyledFlexItem>
        </StyledFlexDiv>
      <StyledCopyright>
        <p className="container">
          Copyright &copy; 2020 All Rights (Not Yet) Reserved
        </p>
      </StyledCopyright>
    </StyledFooter>
  );
}

export default Footer;