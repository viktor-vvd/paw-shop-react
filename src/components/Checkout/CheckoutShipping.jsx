import Button from "components/base/Button";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LeftPurpleArrow } from "public/svgComponents";

const CheckoutShipping = ({ checkoutData, setCheckoutData, setTab }) => {
  const schema = yup.object({
    method: yup.string().required("Please select a shipping method"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    const updatedCheckoutData = {
      ...checkoutData,
      shipping: {
        ...checkoutData.shipping,
        method: formData.method,
      },
    };

    console.log({shipping:updatedCheckoutData});
    setCheckoutData(updatedCheckoutData);
    setTab(3);
  };

  return (
    <form
      className="container-vertical checkout__form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="container-vertical form__section">
        <h3 className="subtitle">Shipping</h3>

        <label className="container-horisontal form__radio" name="method">
          <input
            className="radio__input"
            type="radio"
            value="free"
            name="method"
            defaultChecked={true}
            {...register("method")}
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
            value="fast"
            name="method"
            defaultChecked={false}
            {...register("method")}
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
          onClick={() => setTab(1)}
          className="container-horisontal text__button checkout__text-button"
        >
          <LeftPurpleArrow
            className="button__icon_arrow button__icon_arrow_right"
            name="leftPurpleArrow"
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
