import React from "react";
import backgroundOne from "../../assets/images/background-1.jpg"
import wood from "../../assets/images/brown.jpg"
import Nav from "../Nav/Nav";

import styled from "styled-components";

const StyledBackground = styled.div`
  display: flex;
  background-image: url('${wood}');
  background-size: 70vh;
  height: 100%;
  width: 100%;
`

function MainPage() {
  return (  
    <StyledBackground>
      <Nav />
    </StyledBackground>
  );
}

export default MainPage;