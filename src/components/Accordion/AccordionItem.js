import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FAQAccordionItem = ({ item }) => (
  <AccordionItem>
        <AccordionItemHeading key={item.question} className="faq__question">
          <AccordionItemButton className="row no-outline">
            <div className="col s3 q-a-header">Q. &nbsp; </div>
            <div className="col s9">{item.question}</div>
          </AccordionItemButton>
        </AccordionItemHeading>
    <AccordionItemPanel className="faq__answer row fade-in-fast">
      <div className="col s3 q-a-header">A. &nbsp; </div>
      <div className="col s9">{item.answer}</div>
    </AccordionItemPanel>
    <hr/>
  </AccordionItem>
);  

export default FAQAccordionItem;
