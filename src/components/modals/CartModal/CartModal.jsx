import { useCartGETQuery, useLazyCartGETQuery } from "api/cartApi";
import Button from "components/base/Button";
import CartItem from "components/base/CartItem";
import Image from "components/base/Image";
import images from "imports/ImagesImport";
import Cookies from "js-cookie";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartCount, setCart_id } from "redux/reducers/cartSlice";
import { setCartModal } from "redux/reducers/modalsSlice";

const CartModal = ({ subtotal = 0 }) => {
  const dataa = [
    {
      id: 0,
      image: images["product1"],
      name: "Ball for a dog «Denta Fun» d=5 см (rubber)",
      price: 4,
      quantity: 1,
    },
    {
      id: 1,
      image: images["product2"],
      name: "Dog Toys Big Dog barbell Chew toy Interactive Stress Relief Dog Toy",
      price: 10,
      quantity: 1,
    },
  ];

  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.modals.cartModal);

  const { data } = useCartGETQuery();
  /* console.log(data); */
  useEffect(() => {
    if (data&&data?.data) {
        console.log(data.length);
        dispatch(setCartCount(data.data.purchases.length));
        dispatch(setCart_id(data.data.id));
        Cookies.set("cart_id", data.data.id);
    } else {
      dispatch(setCartCount(0));
    }
  }, [data]);

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
        {data?.data && (
          <>
            <div className="container-vertical cart__list">
              {data?.data.purchases &&
                data?.data.purchases.map((item, index) => (
                  <CartItem item={item} key={index} />
                ))}
            </div>
            <hr />
            <div className="container-vertical cart__bottom">
              <span className="text">
                Cart Subtotal: <b>${data?.total.total}</b>
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
          </>
        )}
      </div>
    </>
  );
};

export default CartModal;
