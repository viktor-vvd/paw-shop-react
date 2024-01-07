import { CatIcon, DogIcon } from "public/svgComponents";
import React from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ item, setCurrentPage }) => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);

  const handleOptionChange = (changeEvent) => {
    navigate(`/catalog/${changeEvent.target.value}?sort=${params.get("sort") || "default"}&order=${params.get("order") || "desc"}&page=1`);
    setCurrentPage(1);
  };

  return (
    <div className="container-vertical category">
      <div className="container-horizontal category__buttons">
        <label className="container-horizontal" name="category">
          <input
            type="radio"
            name="category"
            value="cat"
            checked={item.slug === "cat"}
            className="category__input"
            onChange={handleOptionChange}
          />
          <div className="container-horizontal category__button cat">
            <span className="text__button">
              For <span className="cat">CAT</span>
            </span>
            <CatIcon
              className="button__icon"
              loading="lazy"
              alt="arrow"
              width="30"
              height="30"
            />
          </div>
        </label>
        <label className="container-horizontal" name="category">
          <input
            type="radio"
            name="category"
            value="dog"
            checked={item.slug === "dog"}
            className="category__input"
            onChange={handleOptionChange}
          />
          <div className="container-horizontal category__button dog">
            <span className="text__button">
              For <span className="dog">DOG</span>
            </span>
            <DogIcon
              className="button__icon"
              loading="lazy"
              alt="arrow"
              width="30"
              height="30"
            />
          </div>
        </label>
      </div>
      <hr />
    </div>
  );
};

export default Category;
