import React from "react";
import wood from "../../assets/images/jp3.jpg"
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer.js";

import styled from "styled-components";

const StyledBackground = styled.div`
  position: relative;
  display: flex;
  background-image: url('${wood}');
  background-size: 50%;
  min-height: 100vw;
  width: 100vw;
  @media (max-width: 768px) {
    min-height: 300vw;
  }
`

function MainPage() {
  return (  
    <StyledBackground>
      <Nav />
      <Footer />
    </StyledBackground>
  );
}

export default MainPage;