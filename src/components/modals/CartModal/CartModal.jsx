import { useCartGETQuery, useLazyCartGETQuery } from "api/cartApi";
import Button from "components/base/Button";
import CartItem from "components/base/CartItem";
import Image from "components/base/Image";
import Preloader from "components/base/Preloader";
import images from "imports/ImagesImport";
import Cookies from "js-cookie";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartCount,
  setCartTotal,
  setCart_id,
} from "redux/reducers/cartSlice";
import { setCartModal } from "redux/reducers/modalsSlice";

const CartModal = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.modals.cartModal);
  const total = useSelector((state) => state.cart.cartTotal);
  const { data, isFetching } = useCartGETQuery();

  useEffect(() => {
    if (data?.data) {
      dispatch(setCartCount(data.data.purchases.length));
      dispatch(setCartTotal(data.total.total));
      dispatch(setCart_id(data.data.id));
      Cookies.set("cart_id", data.data.id);
    } else {
      dispatch(setCartCount(0));
    }
  }, [data, isFetching]);

  return (
    <>
      <div
        className={isVisible ? "overlay show" : "overlay hide"}
        style={{ zIndex: 13 }}
      ></div>
      <div
        className={
          isVisible
            ? "container-vertical cart show"
            : "container-vertical cart hide"
        }
        style={{ zIndex: 13 }}
      >
        <div className="container-horisontal cart__top">
          <div className="container-horisontal cart__header">
            <Image
              className="cart__icon"
              src={images["cartPurple"]}
              loading="lazy"
              alt="icon"
              width="40"
              height="40"
            />
            <h2 className="title">Cart</h2>
          </div>
          <Image
            className="cart__icon close__icon"
            src={images["closePurple"]}
            loading="lazy"
            alt="close"
            width="47"
            height="47"
            onClick={() => dispatch(setCartModal(false))}
          />
        </div>
        <hr />
        <div className="container-vertical cart__list">
          {isFetching && <Preloader />}
          {data && data.data ? (
            data.data.purchases &&
            data.data.purchases.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          ) : (
            <span className="text">Cart is empty</span>
          )}
        </div>
        <hr />
        <div className="container-vertical cart__bottom">
          <span className="text">
            Cart Subtotal: <b>${data?.data ? data.total.total : total}</b>
          </span>
          <div className="container-horisontal buttons__container">
            <Button
              type="button"
              className="button_white"
              value="Keep shopping"
              onClick={() => dispatch(setCartModal(false))}
            />
            <Button type="submit" value="Buy" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
