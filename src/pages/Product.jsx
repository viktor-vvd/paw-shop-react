import Breadcrumbs from "components/base/Breadcrumbs";
import React from "react";

const Product = () => {
  return (
    <div className="container-vertical page-container product">
      <div className="container-vertical container product__top">
        <Breadcrumbs />
        <div className="container-vertical">
          <div className="container-horisontal">
            <h2 className="title">KONG Squeezz Ball Dog Toy</h2>
            
          </div>
          <span>
            <span>SKU:</span> 1541428774
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
