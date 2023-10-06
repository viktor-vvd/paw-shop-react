import Button from "components/base/Button";
import Image from "components/base/Image";
import images from "imports/ImagesImport";
import React from "react";

const CheckoutPayment = ({setTab}) => {
  return (
    <form className="container-vertical checkout__form">
      <section className="container-vertical form__section">
        <h3 className="subtitle">Payment</h3>

        <label className="container-horisontal form__radio" name="gateway">
          <input
            className="radio__input"
            type="radio"
            value="card"
            name="gateway"
            defaultChecked={true}
          />
          <span className="radio__mark"></span>
          <span className="container-horisontal text radio__label">
            Credit or debit card{" "}
            <div>
              <Image
                src={images["mastercard2"]}
                loading="lazy"
                alt="arrow"
                width="43"
                height="24"
              />
              <Image
                src={images["visa2"]}
                loading="lazy"
                alt="arrow"
                width="43"
                height="24"
              />
            </div>
          </span>
        </label>
        <label className="container-horisontal form__radio" name="gateway">
          <input
            className="radio__input"
            type="radio"
            value="pay_pal"
            name="gateway"
            defaultChecked={false}
          />
          <span className="radio__mark"></span>
          <div className="container-horisontal text radio__label">
            <Image
              src={images["paypal"]}
              loading="lazy"
              alt="arrow"
              width="90"
              height="24"
            />
          </div>
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

export default CheckoutPayment;
