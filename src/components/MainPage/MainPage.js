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
  min-height: 100vh;
  width: 100vw;
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