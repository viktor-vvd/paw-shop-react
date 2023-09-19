import React from "react";

const Sort = () => {
  return (
    <div className="container-horisontal sort__container">
      <span className="text sort__text">Sort by:</span>
      <div className="container-horisontal sort__wrapper">
        <select
          className="text sort"
          name="sort"
          defaultValue="relevance"
        >
          <option className="text sort__item" value="relevance">
            Relevance
          </option>
          <option className="text sort__item" value="priceLowtoHigh">
            Price, low to high
          </option>
          <option className="text sort__item" value="priceHightoLow">
          Price, high to low
          </option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
