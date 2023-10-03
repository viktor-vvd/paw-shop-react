import React, { useEffect, useState } from "react";
import ProductNavigation from "./ProductNavigation";
import ProductDescription from "./ProductTabs/ProductDescription";
import ProductReviews from "./ProductTabs/ProductReviews";
import AddReview from "./ProductTabs/AddReview";

const ProductContent = ({ item }) => {
  const [isDescrtiption, setIsDescrtiption] = useState(
    item?.data.product.body ? true : false
  );
  const [tab, setTab] = useState(isDescrtiption ? 1 : 2);
  useEffect(() => {
    setIsDescrtiption(item?.data.product.body ? true : false);
    setTab(isDescrtiption ? 1 : 2);
  }, [item, isDescrtiption]);
  return (
    <>
      <ProductNavigation
        reviews={item.data.product.comments_count}
        isDescrtiption={isDescrtiption}
        tab={tab}
        setTab={setTab}
      />
      <div className="container-horisontal outer-container product__content__container">
        <div className="container-vertical container product__content">
          {isDescrtiption && tab == 1 && <ProductDescription item={item} />}
          {tab == 2 && <ProductReviews item={item} />}
          {tab == 3 && <AddReview item={item} />}
        </div>
      </div>
    </>
  );
};

export default ProductContent;
