import React from "react";
import styled from "styled-components";
import backgroundTwo from "../../assets/images/background2.jpg"
import wood from "../../assets/images/jp3.jpg"

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const StyledFlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-around;
  text-align: center;
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
  font-size: 0.7em !important;
`;

function Footer() {
  return (
    <StyledFooter className="site-footer">
        <StyledFlexDiv className="container footer-media-adj">
          <StyledFlexItem className="footer-flex-adj">
          <StyledP>Sign Up</StyledP>
              <hr/>
            <p className="text-center">
              Addresses/contact information, social media information, email signup
            </p>
          </StyledFlexItem>

          <StyledFlexItem className="footer-flex-adj">
          <StyledP>Contact Us</StyledP>
              <hr/>
            <ul className="footer-links">
                <a href="mailto: qualitreescollective@gmail.com">qualitreescollective@gmail.com</a>
                <br></br>
                <a href="tel:">+1 (909) 551-5046</a>
              <li><a href="https://www.linkedin.com/in/scot-itakura-289376157/">Instagram</a></li>
              <StyledP>
              </StyledP>
              {/* <StyledHrSI/> */}
            </ul>
          </StyledFlexItem>

          <StyledFlexItem className="footer-flex-adj">
          <StyledP>Quick Links</StyledP>
              <hr/>
            <ul className="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Terms & Conditions</a></li>
              <li><a href="/">Privacy Policy</a></li>
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