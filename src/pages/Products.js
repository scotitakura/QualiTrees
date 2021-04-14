import React from "react";
import ProductsWord from "../assets/images/products-word-edit.png"
import styled from "styled-components";

const ProductsWordDiv = styled.div`
  background-image: url(${ProductsWord});
  background-size: 100% 100%;
  margin: 0 0 0 10% !important;
  border-style: none none double none;
  border-color: #1B5D45;
  border-width: 5px;
  height: 120px;
  width: 350px;
  @media (max-width: 768px) {
    height: 17vw;
    width: 50vw;
  }
`

const ProductsSection = styled.div`
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const ProductsParagraph = styled.p`
  margin: 3vw 10vw 5vw 10vw !important;
`
const SCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: centered;
  justify-content: centered;
`
const STitle = styled.h4`
  margin-left: auto;
  margin-right: auto;
`
const SPhoto = styled.img`
  margin-left: auto;
  margin-right: auto;
`
const SDescription = styled.p`
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
`

function Products() {
  return (
    <ProductsSection>
    <hr className="fade-in-hrdelay" />
      <ProductsWordDiv className="fade-in" />
      <ProductsParagraph className="row fade-in-delay"> 
        <a href="https://www.wpdispensary.com/">Link</a>
        <SCard className="col s3">
          <STitle>Title of products</STitle>
          <SPhoto></SPhoto>
          <SDescription>Small description</SDescription>
        </SCard>
        <SCard className="col s3">
          <STitle>Title of products</STitle>
          <SPhoto></SPhoto>
          <SDescription>Small description</SDescription>
        </SCard>
        <SCard className="col s3">
          <STitle>Title of products</STitle>
          <SPhoto></SPhoto>
          <SDescription>Small description</SDescription>
        </SCard>
      </ProductsParagraph>
    </ProductsSection>
  );
}

export default Products;