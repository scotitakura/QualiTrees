import React from "react";
import wood from "../../assets/images/jp3.jpg"
// import Body from "../Body/Body.js";
// import Footer from "../Footer/Footer.js";

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

function MainPage() {
  return (  
    <div></div>
    // <StyledBackground>
    //   <Body />
    //   <Footer />
    // </StyledBackground>
  );
}

export default MainPage;