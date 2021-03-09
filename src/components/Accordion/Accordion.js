import React, { useState } from "react";
import FAQAccordionItem from "./AccordionItem.js";

const Accordion2 = ({ questionsAnswers }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <FAQAccordionItem
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <div>
      <dl>{renderedQuestionsAnswers}</dl>
    </div>
  );
};

export default Accordion2;