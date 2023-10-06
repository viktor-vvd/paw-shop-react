import Button from "components/base/Button";
import Image from "components/base/Image";
import images from "imports/ImagesImport";
import React from "react";

const CheckoutShipping = ({setTab}) => {
  return (
    <form className="container-vertical checkout__form">
      <section className="container-vertical form__section">
        <h3 className="subtitle">Shipping</h3>

        <label className="container-horisontal form__radio" name="method">
          <input
            className="radio__input"
            type="radio"
            value="free"
            name="method"
            defaultChecked={true}
          />
          <span className="radio__mark"></span>
          <span className="container-horisontal text radio__label">
            Free US Shipping <b>Free</b>
          </span>
        </label>
        <label className="container-horisontal form__radio" name="method">
          <input
            className="radio__input"
            type="radio"
            value="postal"
            name="method"
            defaultChecked={false}
          />
          <span className="radio__mark"></span>
          <span className="container-horisontal text radio__label">
            US Shipping (Priority Processing - Skip The Queue & Save 24 Hours)
            <b>$1.99</b>
          </span>
        </label>
      </section>
      <Button
        value="Continue to payment"
        className="checkout__submit"
        type="submit"
        /* onClick={() => handleTabClick('shipping')} */
      />
      <div className="container-horisontal checkout__text-button__wrapper">
        <button
          type="button"
          onClick={setTab}
          className="container-horisontal text__button checkout__text-button"
        >
          <Image
            className="button__icon_arrow button__icon_arrow_right"
            src={images["leftPurpleArrow"]}
            loading="lazy"
            alt="arrow"
            width="10"
            height="10"
          />
          Go back
        </button>
      </div>
    </form>
  );
};

export default CheckoutShipping;
