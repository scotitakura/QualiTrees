import React, { useState } from "react";
import Nav from "../Nav/Nav.js"
import wood from "../../assets/images/jp3.jpg"
import Footer from "../Footer/Footer.js";

import aboutIcon from "../../assets/images/about-icon.png";
import productsIcon from "../../assets/images/products-icon.png";
import shineLogo from "../../assets/images/shine-logo.png";
import wisdomIcon from "../../assets/images/wisdom-icon.png";
import faqIcon from "../../assets/images/faq-icon.png";

import MainPage from "../MainPage/MainPage.js";
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
  background-image: url('${wood}');
  background-size: 50%;
  @media (max-width: 768px) {
    min-height: 300vw;
  }
`
function Body() {
  const [categories] = useState([
    { name: "MainPage", description: "Blank home page" },
    { name: "About", description: "About me page" },
    { name: "Products", description: "Products page" },
    { name: "Wisdom", description: "Wisdom page" },
    { name: "FAQ", description: "FAQ page" },
    { name: "TermsConditions", description: "Terms and Conditions" },
    { name: "PrivacyPolicy", description: "Privacy Policy" },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <StyledBackground>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}>
      </Nav>
      <main>
        {currentCategory.name === "MainPage" && <MainPage />}
        {currentCategory.name === "About" && <About />}
        {currentCategory.name === "Products" && <Products />}
        {currentCategory.name === "Wisdom" && <Wisdom />}
        {currentCategory.name === "FAQ" && <FAQ />}
        {currentCategory.name === "TermsConditions" && <TermsConditions />}
        {currentCategory.name === "PrivacyPolicy" && <PrivacyPolicy />}
      </main>
      <Footer />
    </StyledBackground>
  );
}

export default Body;