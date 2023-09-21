import React from "react";
import ProductNavigation from "./ProductNavigation";
import ProductDescription from "./ProductTabs/ProductDescription";
import ProductReviews from "./ProductTabs/ProductReviews";
import AddReview from "./ProductTabs/AddReview";

const ProductContent = ({item}) => {
  return (
    <>
      <ProductNavigation />
      <div className="container-horisontal outer-container product__content__container">
        <div className="container-vertical container product__content">
          {/* <ProductDescription/> 
          <ProductReviews rate={item.rate}/>*/}
          <AddReview/>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
