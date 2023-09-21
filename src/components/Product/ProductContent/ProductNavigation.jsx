import React from "react";

const ProductNavigation = () => {
  return (
    <>
      <div className="container-horisontal outer-container product__navigation">
        <label className="container-horisontal" name="tab">
          <input
            type="radio"
            name="tab"
            value="description"
            defaultChecked={true}
            className="navigation__input"
          />
          <span className="container-horisontal subtitle navigation__item">
            Description
          </span>
        </label>
        <label className="container-horisontal" name="tab">
          <input
            type="radio"
            name="tab"
            value="reviews"
            className="navigation__input"
          />
          <span className="container-horisontal subtitle navigation__item">
            Reviews (3)
          </span>
        </label>
        <label className="container-horisontal" name="tab">
          <input
            type="radio"
            name="tab"
            value="addReview"
            className="navigation__input"
          />
          <span className="container-horisontal subtitle navigation__item accent">
            Write a review
          </span>
        </label>
      </div>
      <hr />
    </>
  );
};

export default ProductNavigation;
