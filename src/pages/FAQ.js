import React from "react";
import FAQWord from "../assets/images/faq-word-edit.png";
import styled from "styled-components";
import Accordion2 from "../components/Accordion/Accordion.js"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FAQData = [
  {
    question: "How can I order from the QualiTrees website?",
    answer:
      "Please contact the phone number or email provided on the website to get started on your order, our friendly staff will be more than happy to help you right away!",
  },
  {
    question:
      "Do I require a medical recommendation to purchase Cannabis from QualiTrees?",
    answer:
      "Yes, you must first become a member of our collective through contacting the phone number or email provided on the bottom of our website. After approval we can get started on supplying you with incredible Cannabis!",
  },
  {
    question:
      "Can I purchase CBD products or merchandise without a medical recommendation?",
    answer:
      "Yes, you can purchase all non-THC products directly off our website!",
  },
  {
    question: "Are all QualiTrees products organic?",
    answer:
      "Yes, we take pride in providing purely 100% organic cannabis, edibles, tinctures, and vapes. All of our merchandise is made from organic Hemp. ",
  },
  {
    question: "Will vaping or smoking hemp get me high?",
    answer:
      "Consuming hemp will not get you high, however it will certainly relax you and calm your mood.",
  },
  {
    question: "Can QualiTrees deliver its THC products to other states?",
    answer:
      "We cannot send THC products to other states, only California. However, we can send CBD products to all compliant states. Learn about which states are legal here: https://blog.plainjane.com/legal-status-of-cbd-around-the-world/",
  },
  {
    question:
      "Can QualiTrees deliver its CBD products to other states or countries?",
    answer:
      "Yes we ship to all compliant states and countries. Find out more about which states are legal here: https://blog.plainjane.com/legal-status-of-cbd-around-the-world/",
  },
  {
    question: "What does the word “QualiTrees” mean?",
    answer: "QualiTrees = Quality + Trees",
  },
];

const FAQWordDiv = styled.div`
  background-image: url(${FAQWord});
  background-size: 100% 100%;
  height: 10vh;
  width: 20vh;
  margin: 0 0 0 10% !important;
  border-style: none none double none;
  border-color: #1b5d45;
  border-width: 5px;
`;

const FAQSection = styled.div`
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const FAQParagraph = styled.p`
  margin: 3% 10% 10% 10% !important;
`;

function FAQ() {
  return (
    <FAQSection>
      <FAQWordDiv className="fade-in" />
      <FAQParagraph className="fade-in-delay">
          <Accordion>
            <Accordion2 questionsAnswers={FAQData}></Accordion2>
          </Accordion>
      </FAQParagraph>
    </FAQSection>
  );
}

export default FAQ;
