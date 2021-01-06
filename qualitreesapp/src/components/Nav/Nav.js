import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import aboutIcon from "../../assets/images/about-icon.png";
import productsIcon from "../../assets/images/products-icon.png";
import shineLogo from "../../assets/images/shine-logo.png";
import wisdomIcon from "../../assets/images/wisdom-icon.png";
import faqIcon from "../../assets/images/faq-icon.png";

import About from "../../pages/About.js";
import Products from "../../pages/Products.js";
import Wisdom from "../../pages/Wisdom.js";
import FAQ from "../../pages/FAQ.js";

// import styled from "styled-components";

// const StyledIcons = styled.img`
  // position: absolute;
  // height: 50vh;
  // width: 33vh;
  // padding: 10vh;
// `

function Nav() {
  function aboutClick() {
    const mainToNav = document.getElementById("nav");
    mainToNav.className += " becomeNav";
  };
  function productsClick() {
    const mainToNav = document.getElementById("nav");
    mainToNav.className += " becomeNav";
  };
  function wisdomClick() {
    const mainToNav = document.getElementById("nav");
    mainToNav.className += " becomeNav";
  };
  function faqClick() {
    const mainToNav = document.getElementById("nav");
    mainToNav.className += " becomeNav";
  };

  return (
    <Router>
      <div class="icon-container">
        <div class="row valign-wrapper">
          <Link to="/about" class="icon menu-icon outer-icon left-icon about-icon col s2 center-align" onClick={aboutClick}>
            <img class="menu-icon-image center-align" src={aboutIcon} alt="QualiTrees Logo" />
          </Link>

          <Link to="/products" class="icon menu-icon left-icon products-icon col s2" onClick={productsClick}>
            <img class="menu-icon-image center-aligned" src={productsIcon} alt="Products Icon" />
          </Link>

          <Link to="/" class="icon primary-icon col s4">
            <img class="background-icon" src={shineLogo} alt="QualiTrees Logo" />
          </Link>

          <Link to="/wisdom" class="icon menu-icon right-icon wisdom-icon col s2" onClick={wisdomClick}>
            <img class="menu-icon-image center-aligned" src={wisdomIcon} alt="QualiTrees Logo" />
          </Link>

          <Link to="/faq" class="icon menu-icon outer-icon right-icon faq-icon col s2" onClick={faqClick}>
            <img class="menu-icon-image center-aligned" src={faqIcon} alt="QualiTrees Logo" />
          </Link>
        </div>
      </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/wisdom">
            <Wisdom />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
        </Switch>
    </Router>

  );
}

export default Nav;
