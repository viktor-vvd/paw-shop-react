import React from "react";
import images from "@imports/ImagesImport";

const ProductCard = ({ item }) => {
  return (
    <div className="container-vertical product-card">
      <div className="container-horisontal image__container">
        {item.discount > 0 && (
          <span className="tag tag_discount">-{item.discount}%</span>
        )}
        {item.new && <span className="tag tag_new">New</span>}
        <img
          className="image"
          width="230"
          height="194"
          src={item.image}
          loading="lazy" alt="product img"
        />
      </div>
      <h3 className="text product-card__title">{item.name}</h3>
      <div className="container-horisontal rate">
        <div className="container-horisontal rate__stars">
          {item.rate &&
            [...Array(item.rate)].map((e, i) => (
              <img
                className="stars__item"
                src={images["star"]}
                loading="lazy" alt="star"
                key={"star" + i}
                width="13"
                height="13"
              />
            ))}
        </div>
        <span className="rate__text">{item.reviews}</span>
      </div>
      <div className="container-horisontal product-card__bottom">
        <div className="container-horisontal price__container">
          {item.discount > 0 && (
            <span className="price price_new">
              $
              {Math.round(item.price * (1 - item.discount / 100))
                .toString()
                .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
            </span>
          )}
          <span className={"price" + (item.discount > 0 ? " price_old" : "")}>
            ${item.price}
          </span>
        </div>
        <div className="container-horisontal button">
          <span className="button__text">+</span>
          <img
            className="button__icon"
            src={images["basket"]}
            loading="lazy" alt="basket"
            width="20"
            height="20"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
