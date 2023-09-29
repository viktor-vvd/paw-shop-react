import React from "react";

const ProductDescription = ({ item }) => {
  return (
    <>
      {item?.data && item?.data.product.body ? (
        <div
          className="container-vertical container product__description"
          dangerouslySetInnerHTML={{ __html: item?.data.product.body }}
        />
      ) : (
        <span className="text">
          Press <b>F</b> to pay respect
        </span>
      )}
    </>
  );
};

export default ProductDescription;
