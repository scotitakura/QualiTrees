import React from "react";
import styled from "styled-components";

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

const SForm = styled.form`
  margin: auto auto;
  width: 70%;
`
const SInput = styled.input`

  width: 70%
`

function Footer(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  function aboutClick() {
    setCurrentCategory({ name: "about", description: "About me page" });
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  function activateTerms() {
    setCurrentCategory({
      name: "termsConditions",
      description: "Terms and Conditions page",
    });
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  function activatePolicy() {
    setCurrentCategory({
      name: "privacyPolicy",
      description: "Privacy Policy page",
    });
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <StyledFooter className="site-footer">
      <StyledFlexDiv className="container footer-media-adj">
        <StyledFlexItem className="footer-flex-adj">
          <StyledP>Newsletter</StyledP>
          <hr />
          <p className="text-center">
            Sign up here to receive our newsletter
          </p>
          <SForm>
            <SInput placeholder="Your Email" />
            <SInput
            type="submit"
            value="Sign Up"
            />
          </SForm>
        </StyledFlexItem>

        <StyledFlexItem className="footer-flex-adj">
          <StyledP>Contact Us</StyledP>
          <hr />
          <ul className="footer-links">
            <li>
              Follow us on{" "}
              <a
                href="https://www.instagram.com/qualitreesorganics/?hl=en"
                target="__blank"
              >
                Instagram
              </a>
            </li>
            Email us at{" "}
            <a href="mailto: qualitreescollective@gmail.com">
              qualitreescollective<span className="overflow-break"> </span>
              @gmail.com
            </a>
            <br></br>
            Call us at{" "}
            <a className="no-break" href="tel:">
              +1 (909) 551-5046
            </a>
            <StyledP></StyledP>
          </ul>
        </StyledFlexItem>

        <StyledFlexItem className="footer-flex-adj">
          <StyledP>Quick Links</StyledP>
          <hr />
          <ul className="footer-links">
            <li>
              <a
                className={`pointer ${
                  currentCategory.name === "about" && "navActive"
                }`}
                onClick={aboutClick}
                key="about"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className={`pointer no-break ${
                  currentCategory.name === "termsConditions" && "navActive"
                }`}
                onClick={activateTerms}
                key="termsConditions"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                className={`pointer no-break ${
                  currentCategory.name === "privacyPolicy" && "navActive"
                }`}
                onClick={activatePolicy}
                key="privacyPolicy"
              >
                Privacy Policy
              </a>
            </li>
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
