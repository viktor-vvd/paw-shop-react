import React from "react";
import Button from "./Button";
import Image from "./Image";
import {
  useAddToCartPOSTMutation,
  useRemoveFromCartPOSTMutation,
} from "api/cartApi";
import { useDispatch } from "react-redux";
import { setCart_id } from "redux/reducers/cartSlice";
import Cookies from "js-cookie";
import Preloader from "./Preloader";
import { Delete } from "public/svgComponents";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const [addToCart, { isFetching }] = useAddToCartPOSTMutation();
  const [removeFromCart, { isFetching: isFetching2 }] =
    useRemoveFromCartPOSTMutation();

  const minusQuantity = async () => {
    const result = await removeFromCart({
      id: item.id,
      data: { quantity: 1 },
    });
    if (result.data) {
      dispatch(setCart_id(result.data.cart_id));
      Cookies.set("cart_id", result.data.cart_id);
    }
  };

  const deleteItem = async () => {
    const result = await removeFromCart({
      id: item.id,
      data: { quantity: item.quantity },
    });
    if (result.data) {
      dispatch(setCart_id(result.data.cart_id));
      Cookies.set("cart_id", result.data.cart_id);
    }
  };

  const plusQuantity = async () => {
    const result = await addToCart({
      id: item.variation.id,
      data: { quantity: 1 },
    });
    if (result.data) {
      dispatch(setCart_id(result.data.cart_id));
      Cookies.set("cart_id", result.data.cart_id);
    }
  };
  return (
    <>
      {isFetching && <Preloader />}
      {isFetching2 && <Preloader />}
      <div className="container-horisontal cart__item">
        <div className="container-horisontal item__image">
          <Image
            src={item.variation.images[0].conversions.preview.url}
            loading="lazy"
            alt="close"
            width="81"
            height="81"
          />
        </div>
        <div className="container-vertical item__controls">
          <span className="text item__name">{item.variation.name}</span>
          <div className="container-horisontal item__buttons">
            <Button
              type="button"
              className="button_white"
              value="-"
              title="Remove 1"
              onClick={minusQuantity}
            />
            <span className="text item__quantity">{item.quantity}</span>
            <Button
              type="button"
              className="button_white"
              value="+"
              title="Add 1"
              onClick={plusQuantity}
            />
            <span className="text item__total">
              {item.variation.prices.currency.symbol}
              {item.total}
            </span>
          </div>
        </div>
        <button type="button" onClick={deleteItem}>
          <Delete
            className="item__delete"
            loading="lazy"
            alt="close"
            width="17"
            height="21"
          />
        </button>
      </div>
    </>
  );
};

export default CartItem;
