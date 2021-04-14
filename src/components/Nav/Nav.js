import React from "react";

import aboutIcon from "../../assets/images/about-icon.png";
import productsIcon from "../../assets/images/products-icon.png";
import shineLogo from "../../assets/images/shine-logo.png";
import wisdomIcon from "../../assets/images/wisdom-icon.png";
import faqIcon from "../../assets/images/faq-icon.png";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  function aboutClick() {
    setCurrentCategory({ name: "about", description: "About me page" });
    const mainToNav = document.getElementById("nav");
    mainToNav.className += " becomeNav becomeNavMobile";
    setTimeout(
      () => (mainToNav.className += " startFloat startMobileFloat"),
      2000
    );
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  function productsClick() {
    setCurrentCategory({ name: "products", description: "Products page" });
    const mainToNav = document.getElementById("nav");
    mainToNav.className += " becomeNav becomeNavMobile";
    setTimeout(
      () => (mainToNav.className += " startFloat startMobileFloat"),
      2000
    );
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  function mainClick() {
    window.location.href = "/";
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  function wisdomClick() {
    setCurrentCategory({ name: "wisdom", description: "Wisdom page" });
    const mainToNav = document.getElementById("nav");
    mainToNav.className += " becomeNav becomeNavMobile";
    setTimeout(
      () => (mainToNav.className += " startFloat startMobileFloat"),
      2000
    );
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  function faqClick() {
    setCurrentCategory({ name: "faq", description: "FAQ page" });
    const mainToNav = document.getElementById("nav");
    mainToNav.className += " becomeNav becomeNavMobile";
    setTimeout(
      () => (mainToNav.className += " startFloat startMobileFloat"),
      2000
    );
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
      <div
        id="nav"
        className="row valign-wrapper clickTransform icon-container"
      >
        <div
          className={`icon menu-icon outer-icon left-icon about-icon col s2 center-align ${
            currentCategory.name === "about" && "navActive"
          }`}
          onClick={aboutClick}
          key="about"
        >
          <img
            className="menu-icon-image "
            src={aboutIcon}
            alt="QualiTrees Logo"
          />
        </div>

        <div
          className={`icon menu-icon left-icon products-icon col s2 ${
            currentCategory.name === "products" && "navActive"
          }`}
          onClick={productsClick}
          key="products"
        >
          <img
            className="menu-icon-image"
            src={productsIcon}
            alt="Products Icon"
          />
        </div>

        <div class="icon primary-icon col s4" onClick={mainClick}>
          <img
            className="background-icon"
            src={shineLogo}
            alt="QualiTrees Logo"
          />
        </div>

        <div
          className={`icon menu-icon right-icon wisdom-icon col s2 ${
            currentCategory.name === "wisdom" && "navActive"
          }`}
          onClick={wisdomClick}
          key="wisdom"
        >
          <img
            className="menu-icon-image"
            src={wisdomIcon}
            alt="QualiTrees Logo"
          />
        </div>

        <div
          className={`icon menu-icon outer-icon right-icon faq-icon col s2 ${
            currentCategory.name === "faq" && "navActive"
          }`}
          onClick={faqClick}
          key="faq"
        >
          <img
            className="menu-icon-image"
            src={faqIcon}
            alt="QualiTrees Logo"
          />
        </div>
      </div>

    // <Router>
    //   <SContents className="column-container">
    //     <div id="nav" className="row valign-wrapper clickTransform icon-container">
    //       <Link
    //         to="/about"
    //         className="icon menu-icon outer-icon left-icon about-icon col s2 center-align"
    //         onClick={aboutClick}
    //       >
    //         <img
    //           className="menu-icon-image "
    //           src={aboutIcon}
    //           alt="QualiTrees Logo"
    //         />
    //       </Link>

    //       <Link
    //         to="/products"
    //         className="icon menu-icon left-icon products-icon col s2"
    //         onClick={productsClick}
    //       >
    //         <img
    //           className="menu-icon-image"
    //           src={productsIcon}
    //           alt="Products Icon"
    //         />
    //       </Link>

    //       <Link to="/" class="icon primary-icon col s4" onClick={mainClick}>
    //         <img
    //           className="background-icon"
    //           src={shineLogo}
    //           alt="QualiTrees Logo"
    //         />
    //       </Link>

    //       <Link
    //         to="/wisdom"
    //         className="icon menu-icon right-icon wisdom-icon col s2"
    //         onClick={wisdomClick}
    //       >
    //         <img
    //           className="menu-icon-image"
    //           src={wisdomIcon}
    //           alt="QualiTrees Logo"
    //         />
    //       </Link>

    //       <Link
    //         to="/faq"
    //         className="icon menu-icon outer-icon right-icon faq-icon col s2"
    //         onClick={faqClick}
    //       >
    //         <img className="menu-icon-image" src={faqIcon} alt="QualiTrees Logo" />
    //       </Link>
    //     </div>
    //     <Switch>
    //       <Route path="/about">
    //         <hr className="fade-in-hrdelay" />
    //         <About />
    //       </Route>
    //       <Route path="/products">
    //         <hr className="fade-in-hrdelay" />
    //         <Products />
    //       </Route>
    //       <Route path="/wisdom">
    //         <hr className="fade-in-hrdelay" />
    //         <Wisdom />
    //       </Route>
    //       <Route path="/faq">
    //         <hr className="fade-in-hrdelay" />
    //         <FAQ />
    //       </Route>
    //       <Route path="/terms-and-conditions">
    //         <hr className="fade-in-hrdelay" />
    //         <TermsConditions />
    //       </Route>
    //       <Route path="/privacy-policy">
    //         <hr className="fade-in-hrdelay" />
    //         <PrivacyPolicy />
    //       </Route>
    //     </Switch>
    //   </SContents>
    // </Router>
  );
}

export default Nav;
