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

import styled from "styled-components";

const SContents = styled.div`
  padding-top: 5rem;
  padding-bottom: 20rem;
`;

function Nav() {
  function aboutClick() {
    const mainToNav = document.getElementById("nav");
    mainToNav.className += " becomeNav becomeNavMobile";
    setTimeout(() => (mainToNav.className += " startFloat startMobileFloat"), 2000);
    window.scroll({top:0, left:0, behavior:"smooth"});
  }
  function productsClick() {
    const mainToNav = document.getElementById("nav");
    mainToNav.className += " becomeNav becomeNavMobile";
    setTimeout(() => (mainToNav.className += " startFloat startMobileFloat"), 2000);
    window.scroll({top:0, left:0, behavior:"smooth"});
  }
  function mainClick() {
    window.location.href = "/";
    window.scroll({top:0, left:0, behavior:"smooth"});
  }
  function wisdomClick() {
    const mainToNav = document.getElementById("nav");
    mainToNav.className += " becomeNav becomeNavMobile";
    setTimeout(() => (mainToNav.className += " startFloat startMobileFloat"), 2000);
    window.scroll({top:0, left:0, behavior:"smooth"});
  }
  function faqClick() {
    const mainToNav = document.getElementById("nav");
    mainToNav.className += " becomeNav becomeNavMobile";
    setTimeout(() => (mainToNav.className += " startFloat startMobileFloat"), 2000);
    window.scroll({top:0, left:0, behavior:"smooth"});
  }

  return (
    <Router>
      <SContents className="column-container">
        <div id="nav" className="row valign-wrapper clickTransform icon-container">
          <Link
            to="/about"
            className="icon menu-icon outer-icon left-icon about-icon col s2 center-align"
            onClick={aboutClick}
          >
            <img
              className="menu-icon-image "
              src={aboutIcon}
              alt="QualiTrees Logo"
            />
          </Link>

          <Link
            to="/products"
            className="icon menu-icon left-icon products-icon col s2"
            onClick={productsClick}
          >
            <img
              className="menu-icon-image"
              src={productsIcon}
              alt="Products Icon"
            />
          </Link>

          <Link to="/" class="icon primary-icon col s4" onClick={mainClick}>
            <img
              className="background-icon"
              src={shineLogo}
              alt="QualiTrees Logo"
            />
          </Link>

          <Link
            to="/wisdom"
            className="icon menu-icon right-icon wisdom-icon col s2"
            onClick={wisdomClick}
          >
            <img
              className="menu-icon-image"
              src={wisdomIcon}
              alt="QualiTrees Logo"
            />
          </Link>

          <Link
            to="/faq"
            className="icon menu-icon outer-icon right-icon faq-icon col s2"
            onClick={faqClick}
          >
            <img className="menu-icon-image" src={faqIcon} alt="QualiTrees Logo" />
          </Link>
        </div>
        <Switch>
          <Route path="/about">
            <hr className="fade-in-hrdelay" />
            <About />
          </Route>
          <Route path="/products">
            <hr className="fade-in-hrdelay" />
            <Products />
          </Route>
          <Route path="/wisdom">
            <hr className="fade-in-hrdelay" />
            <Wisdom />
          </Route>
          <Route path="/faq">
            <hr className="fade-in-hrdelay" />
            <FAQ />
          </Route>
        </Switch>
      </SContents>
    </Router>
  );
}

export default Nav;
