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
      <AccordionItemButton>
        {item.question}
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel className="faq__answer">
    {item.answer}
    </AccordionItemPanel>
  </AccordionItem>
);

export default FAQAccordionItem;
