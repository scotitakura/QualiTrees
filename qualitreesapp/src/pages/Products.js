import React from "react";
import ProductsWord from "../assets/images/products-word-edit.png"
import styled from "styled-components";

const ProductsWordDiv = styled.div`
  background-image: url(${ProductsWord});
  background-size: 100% 100%;
  height: 10vh;
  width: 28vh;
  margin: 0 0 0 10% !important;
  border-style: none none double none;
  border-color: #1B5D45;
  border-width: 5px;
`

const ProductsSection = styled.div`
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const ProductsParagraph = styled.p`
  margin: 3% 10% 10% 10% !important;
`

function Products() {
  return (
    <ProductsSection>
      <ProductsWordDiv className="fade-in" />
      <ProductsParagraph className="fade-in-delay"> 
        Link to Shopify?
      </ProductsParagraph>
    </ProductsSection>
  );
}

export default Products;