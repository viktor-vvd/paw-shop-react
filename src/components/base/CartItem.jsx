import React, { useState } from "react";
import Button from "./Button";
import images from "imports/ImagesImport";
import Image from "./Image";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const minusQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="container-horisontal cart__item">
      <div className="container-horisontal item__image">
        <Image
          src={item.image}
          loading="lazy"
          alt="close"
          width="81"
          height="81"
        />
      </div>
      <div className="container-vertical item__controls">
        <span className="text item__name">{item.name}</span>
        <div className="container-horisontal item__buttons">
          <Button
            type="button"
            className="button_white"
            value="-"
            title="Remove 1"
            onClick={() => minusQuantity()}
          />
          <span className="text item__quantity">{quantity}</span>
          <Button
            type="button"
            className="button_white"
            value="+"
            title="Add 1"
            onClick={() => plusQuantity()}
          />
          <span className="text item__total">${quantity*item.price}</span>
        </div>
      </div>
      <button type="button">
        <Image
          className="item__delete"
          src={images["deleteIcon"]}
          loading="lazy"
          alt="close"
          width="17"
          height="21"
        />
      </button>
    </div>
  );
};

export default CartItem;
