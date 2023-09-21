import React, { useState } from "react";
import ProductNavigation from "./ProductNavigation";
import ProductDescription from "./ProductTabs/ProductDescription";
import ProductReviews from "./ProductTabs/ProductReviews";
import AddReview from "./ProductTabs/AddReview";

const ProductContent = ({ item }) => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <ProductNavigation tab={tab} setTab={setTab} />
      <div className="container-horisontal outer-container product__content__container">
        <div className="container-vertical container product__content">
          {tab == 1 && <ProductDescription />}
          {tab == 2 && <ProductReviews rate={item.rate} />}
          {tab == 3 && <AddReview />}
        </div>
      </div>
    </>
  );
};

export default ProductContent;
