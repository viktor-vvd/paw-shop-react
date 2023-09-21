import React, { useState } from "react";
import images from "imports/ImagesImport";
import Image from "components/base/Image";
import Button from "../base/Button";

const ProductOptions = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const minusQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="product-options">
      <span className="text">Size:</span>
      <ul className="container-horisontal product-options__list">
        <li className="container-horisontal">
          <label className="container-horisontal text" name="size">
            <input
              type="radio"
              name="size"
              value="Small"
              defaultChecked={true}
              className="product-options__input"
            />
            <span className="container-horisontal text product-options__item">
              Small (Ø 2 inch)
            </span>
          </label>
        </li>
        <li className="container-horisontal">
          <label className="container-horisontal text" name="size">
            <input
              type="radio"
              name="size"
              value="Large"
              className="product-options__input"
            />
            <span className="container-horisontal text product-options__item">
              Large (Ø 3 inch)
            </span>
          </label>
        </li>
      </ul>
      <span className="text">Color:</span>
      <ul className="container-horisontal product-options__list">
        <li className="container-horisontal">
          <label className="container-horisontal text" name="color">
            <input
              type="radio"
              name="color"
              value="Small"
              defaultChecked={true}
              className="product-options__input"
            />
            <div className="container-horisontal product-options__item product-options__item_color">
              <Image
                src={images["product1"]}
                alt={"Red"}
              />
            </div>
          </label>
        </li>
        <li className="container-horisontal">
          <label className="container-horisontal text" name="color">
            <input
              type="radio"
              name="color"
              value="Large"
              className="product-options__input"
            />
            <div className="container-horisontal product-options__item product-options__item_color">
              <Image src={images["product2"]} alt={"Blue"} />
            </div>
          </label>
        </li>
      </ul>
      <span className="text">Quantity:</span>
      <div className="container-horisontal product-options__buttons">
        <Button
          type="button"
          className="button_white quantity__button"
          value="-"
          title="Remove 1"
          onClick={() => minusQuantity()}
        />
        <span className="text product-options__quantity">{quantity}</span>
        <Button
          type="button"
          className="button_white quantity__button"
          value="+"
          title="Add 1"
          onClick={() => plusQuantity()}
        />
      </div>
      <div className="container-vertical product-options__price">
        <span className={"price" + (item.discount > 0 ? " price_old" : "")}>
          ${item.price}
        </span>
        {item.discount > 0 && (
          <span className="price price_new">
            $
            {Math.round(item.price * (1 - item.discount / 100))
              .toString()
              .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
          </span>
        )}
      </div>
      <div className="container-horisontal product-options__buttons product-options__buttons_buy">
        <Button type="button" value="Add to cart" />
        <Button type="button" className="button_white" value="Buy 1 click" />
      </div>
      <div className="container-horisontal product-options__return">
        <Image src={images["returnIcon"]} alt={"return"} />
        <span className="text">Free return within 15 days</span>
      </div>
      <span className="text">Share:</span>
      <ul className="container-horisontal product-options__list product-options__list_socials">
        <li className="container-horisontal">
          <Button
            type="button"
            className="button_white telegram"
            icon={images["telegramColor"]}
          />
        </li>
        <li className="container-horisontal">
          <Button
            type="button"
            className="button_white facebook"
            icon={images["facebookColorMini"]}
          />
        </li>
        <li className="container-horisontal">
          <Button
            type="button"
            className="button_white twitter"
            icon={images["twitterColor"]}
          />
        </li>
      </ul>
    </div>
  );
};

export default ProductOptions;
