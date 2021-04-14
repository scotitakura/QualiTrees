import React, { useState } from "react";
import backgroundjp3 from "../../assets/images/jp3.jpg";
import Nav from "../Nav/Nav.js";
import Footer from "../Footer/Footer.js";

import About from "../../pages/About.js";
import Products from "../../pages/Products.js";
import Wisdom from "../../pages/Wisdom.js";
import FAQ from "../../pages/FAQ.js";
import TermsConditions from "../../pages/TermsConditions.js";
import PrivacyPolicy from "../../pages/PrivacyPolicy.js";

import styled from "styled-components";

const StyledBackground = styled.div`
  position: relative;
  display: flex;
  background-image: url("${backgroundjp3}");
  background-size: 50%;
  @media (max-width: 768px) {
    min-height: 300vw;
  }
`;
const SContents = styled.div`
  padding-top: 8rem;
  padding-bottom: 20rem;
  @media (min-aspect-ratio: 4/3) {
    padding-top: 10rem !important;
  }
  @media (max-width: 525px) {
    padding-bottom: 15rem !important;
  }
`;

function Body() {
  const [categories] = useState([
    { name: "mainPage", description: "Main page" },
    { name: "about", description: "About me page" },
    { name: "products", description: "Products page" },
    { name: "wisdom", description: "Wisdom page" },
    { name: "faq", description: "FAQ page" },
    { name: "termsConditions", description: "Terms and Conditions page" },
    { name: "privacyPolicy", description: "Privacy Policy page" },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <StyledBackground className="container-column">
        <SContents>
          <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            ></Nav>
          <main>
            {currentCategory.name === "mainpage"}
            {currentCategory.name === "about" && <About />}
            {currentCategory.name === "products" && <Products />}
            {currentCategory.name === "wisdom" && <Wisdom />}
            {currentCategory.name === "faq" && <FAQ />}
            {currentCategory.name === "termsConditions" && <TermsConditions />}
            {currentCategory.name === "privacyPolicy" && <PrivacyPolicy />}
          </main>
        </SContents>
        <Footer
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Footer>
      </StyledBackground>
    </div>
  );
}

export default Body;
