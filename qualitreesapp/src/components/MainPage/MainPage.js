import React from "react";
import backgroundOne from "../../assets/images/background-1.jpg"
import Nav from "../Nav/Nav";

import styled from "styled-components";

const StyledBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('${backgroundOne}');
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  // height: 100%;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: repeat;
  z-index: -1; 
  // padding-top: 100vh;
`

function MainPage() {
  return (  
    <StyledBackground>
      <Nav />
    </StyledBackground>
  );
}

export default MainPage;