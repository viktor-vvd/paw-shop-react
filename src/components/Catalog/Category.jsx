import Image from "components/base/Image";
import images from "imports/ImagesImport";
import React from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ item }) => {
  const navigate = useNavigate();

  const handleOptionChange = (changeEvent) => {
    navigate("/catalog/" + changeEvent.target.value);
  };

  return (
    <div className="container-vertical category">
      <div className="container-horisontal category__buttons">
        <label className="container-horisontal" name="category">
          <input
            type="radio"
            name="category"
            value="1"
            checked={item.id === "1"}
            className="category__input"
            onChange={handleOptionChange}
          />
          <div className="container-horisontal category__button cat">
            <span className="text__button">
              For <span className="cat">CAT</span>
            </span>
            <Image
              className="button__icon"
              src={images["catIcon"]}
              loading="lazy"
              alt="arrow"
              width="30"
              height="30"
            />
          </div>
        </label>
        <label className="container-horisontal" name="category">
          <input
            type="radio"
            name="category"
            value="2"
            checked={item.id === "2"}
            className="category__input"
            onChange={handleOptionChange}
          />
          <div className="container-horisontal category__button dog">
            <span className="text__button">
              For <span className="dog">DOG</span>
            </span>
            <Image
              className="button__icon"
              src={images["dogIcon"]}
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
