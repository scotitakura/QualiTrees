import React from "react";
import FAQWord from "../assets/images/faq-word-edit.png"
import styled from "styled-components";

const FAQWordDiv = styled.div`
  background-image: url(${FAQWord});
  background-size: 100% 100%;
  height: 10vh;
  width: 20vh;
  margin: 0 0 0 10% !important;
  border-style: none none double none;
  border-color: #1B5D45;
  border-width: 5px;
`

const FAQSection = styled.div`
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const FAQParagraph = styled.p`
  margin: 3% 10% 10% 10% !important;
`

function FAQ() {
  return (
    <FAQSection className="fade-in">
      <FAQWordDiv />
      <FAQParagraph> 
        How do you want this to be?
      </FAQParagraph>
    </FAQSection>
  );
}

export default FAQ;