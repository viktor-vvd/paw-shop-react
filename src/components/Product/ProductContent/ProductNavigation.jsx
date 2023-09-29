import React from "react";

const ProductNavigation = ({ reviews, tab, setTab, isDescrtiption }) => {
  const handleOptionChange = (changeEvent) => {
    setTab(changeEvent.target.value);
  };
  return (
    <>
      <div className="container-horisontal outer-container product__navigation">
        {isDescrtiption && (
          <label className="container-horisontal" name="tab">
            <input
              type="radio"
              name="tab"
              value={1}
              checked={tab == 1}
              onChange={handleOptionChange}
              className="navigation__input"
            />
            <span className="container-horisontal subtitle navigation__item">
              Description
            </span>
          </label>
        )}
        <label className="container-horisontal" name="tab">
          <input
            type="radio"
            name="tab"
            value={2}
            checked={tab == 2}
            onChange={handleOptionChange}
            className="navigation__input"
          />
          <span className="container-horisontal subtitle navigation__item">
            Reviews ({reviews})
          </span>
        </label>
        <label className="container-horisontal" name="tab">
          <input
            type="radio"
            name="tab"
            value={3}
            checked={tab == 3}
            onChange={handleOptionChange}
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
