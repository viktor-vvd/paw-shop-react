import Image from "components/base/Image";
import images from "imports/ImagesImport";
import React from "react";

const Category = () => {
  return (
    <div className="container-vertical category">
      <div className="container-horisontal category__buttons">
      <button type="button" className="container-horisontal category__button cat active">
          <span className="text__button">
            For <span className="cat">CAT</span>
          </span>
          <Image
            className="button__icon"
            src={images["catIcon"]}
            loading="lazy" alt="arrow"
            width="30"
            height="30"
          />
        </button>
        <button type="button" className="container-horisontal category__button dog">
          <span className="text__button">
            For <span className="dog">DOG</span>
          </span>
          <Image
            className="button__icon"
            src={images["dogIcon"]}
            loading="lazy" alt="arrow"
            width="30"
            height="30"
          />
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Category;
