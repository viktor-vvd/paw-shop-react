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
import { useNavigate } from "react-router-dom";
import {
  removeCart,
  setCartCount,
  setCartTotal,
  setCart_id,
} from "redux/reducers/cartSlice";
import { setCartModal } from "redux/reducers/modalsSlice";

const CartModal = ({ buttons = true }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isVisible = useSelector((state) => state.modals.cartModal);
  const total = useSelector((state) => state.cart.cartTotal);
  const { data, isFetching, isSuccess } = useCartGETQuery();

  useEffect(() => {
    if (data?.data && data.data.purchases) {
      dispatch(setCartCount(data.data.purchases.length));
      dispatch(setCartTotal(data.total.purchases_all));
      dispatch(setCart_id(data.data.id));
      Cookies.set("cart_id", data.data.id);
    } else {
      /* Cookies.remove("cart_id", {
        path: "/",
        secure: true,
      }); */
      dispatch(removeCart());
      dispatch(setCartCount(0));
      dispatch(setCartTotal(0));
    }
/*     if(isSuccess && !data?.data)
    {
      console.log("S")
      Cookies.remove("cart_id", {
        path: "/",
        secure: true,
      });
    } */
  }, [data, isFetching, isSuccess, dispatch]);

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
            Cart Subtotal:{" "}
            <b>${data?.data ? data.total.purchases_all : total}</b>
          </span>
          {buttons && (
            <div className="container-horisontal buttons__container">
              <Button
                type="button"
                className="button_white"
                value="Keep shopping"
                onClick={() => dispatch(setCartModal(false))}
              />
              {data && data.data && (
                <Button
                  type="button"
                  value="Buy"
                  onClick={() => {
                    navigate("/checkout/");
                    dispatch(setCartModal(false));
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;
