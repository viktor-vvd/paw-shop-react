import React from "react";

const Sort = ({sortValue = { sort: "default" }, setSortValue}) => {
  const handleOptionChange = (event) => {
    setSortValue(JSON.parse(event.target.value));
  };
  return (
    <div className="container-horisontal sort__container">
      <span className="text sort__text">Sort by:</span>
      <div className="container-horisontal sort__wrapper">
        <select
          className="text sort"
          name="sortValue"
          defaultValue={JSON.stringify(sortValue)}
          onChange={handleOptionChange}
        >
          <option className="text sort__item" value={JSON.stringify({ sort: "default" })}>
            Relevance
          </option>
          <option
            className="text sort__item"
            value={JSON.stringify({ sort: "price", order: "asc" })}
          >
            Price, low to high
          </option>
          <option
            className="text sort__item"
            value={JSON.stringify({ sort: "price", order: "desc" })}
          >
            Price, high to low
          </option>
          <option
            className="text sort__item"
            value={JSON.stringify({ sort: "rating", order: "asc" })}
          >
            Rating, low to high
          </option>
          <option
            className="text sort__item"
            value={JSON.stringify({ sort: "rating", order: "desc" })}
          >
            Rating, high to low
          </option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
