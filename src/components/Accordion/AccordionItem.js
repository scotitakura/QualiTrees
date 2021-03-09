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
    <AccordionItemHeading key={item.question}>
      <AccordionItemButton>
          {item.question}
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
    {item.answer}
    </AccordionItemPanel>
  </AccordionItem>
);

export default FAQAccordionItem;
