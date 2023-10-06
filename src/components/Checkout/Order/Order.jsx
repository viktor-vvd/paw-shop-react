import Button from "components/base/Button";
import Image from "components/base/Image";
import React from "react";
import { useDispatch } from "react-redux";
import { setCartModal } from "redux/reducers/modalsSlice";

const Order = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <aside className="container-vertical checkout__order">
      <div className="container-horisontal order__header">
        <h3 className="subtitle">My order</h3>
        <button
          type="button"
          onClick={() => dispatch(setCartModal(true))}
          className="container-horisontal text__button checkout__text-button"
        >
          Edit cart
        </button>
      </div>
      <div className="container-vertical order__list">
        {data && data.data ? (
          data.data.purchases &&
          data.data.purchases.map((item, index) => (
            <div className="container-horisontal order__item" key={index}>
              <div className="image__container">
                <Image
                  className="image"
                  width="70"
                  height="70"
                  src={item.variation.images[0].conversions.preview.url}
                  loading="lazy"
                  alt="product Image"
                />
                <span className="text quantity-tag">{item.quantity}</span>
              </div>
              <span className="text order__item__name">
              {item.variation.name}
              </span>
              <span className="text">
                {item.variation.prices.currency.symbol}
                {item.total}
              </span>
            </div>
          ))
        ) : (
          <span className="text">Cart is empty</span>
        )}
      </div>

      <form className="container-vertical checkout__form">
        <label
          className="container-vertical form__label_wrapper"
          name="promocode"
        >
          <span className="text">Promocode</span>
          <input
            className="text_light form__input form__promocode"
            type="text"
            name="promocode"
          />
          <Button
            type="submit"
            className="button_white form__promocode_button"
            value="Apply"
            /* onClick={() => dispatch(setCartModal(false))} */
          />
        </label>
      </form>
      {data && data.data && (
        <div className="container-vertical order__details">
          <div className="container-horisontal order__details__item">
            <span className="text">Goods:</span>
            <span className="text">${data.total.purchases_all}</span>
          </div>
          <div className="container-horisontal order__details__item">
            <span className="text">Delivery:</span>
            <span className="text">${data.total.delivery_all}</span>
          </div>
          <div className="container-horisontal order__details__item">
            <span className="text">Discount:</span>
            <span className="text">${data.total.total_discount}</span>
          </div>
          <div className="container-horisontal order__details__item">
            <span className="subtitle">Order total</span>
            <span className="subtitle text_accent">
              ${data.total.total}
            </span>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Order;
