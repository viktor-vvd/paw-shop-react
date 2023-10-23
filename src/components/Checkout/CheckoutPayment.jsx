import Button from "components/base/Button";
import Image from "components/base/Image";
import images from "imports/ImagesImport";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCheckoutPOSTMutation } from "api/checkoutApi";
import Preloader from "components/base/Preloader";
import { useDispatch } from "react-redux";
import { cartApi } from "api/cartApi";
import { useNavigate } from "react-router-dom";
import Svg from "components/base/Svg";

const CheckoutPayment = ({ checkoutData, setCheckoutData, setTab }) => {
  const [sendCheckout, { isLoading }] =
    useCheckoutPOSTMutation();
  const schema = yup.object({
    gateway: yup.string().required("Please select a payment"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    const updatedCheckoutData = {
      ...checkoutData,
      shipping: {
        ...checkoutData.shipping,
      },
      payment: {
        gateway: formData.gateway,
      },
    };
    console.log({ payment: updatedCheckoutData });

    setCheckoutData(updatedCheckoutData);
      const result = await sendCheckout(updatedCheckoutData);
      if(result?.data){
        dispatch(cartApi.util.invalidateTags(["Cart"]));
        navigate("/");
      }
    try {
      const result = await sendCheckout(updatedCheckoutData);
      console.log(result);
    } catch (error) {
      console.error("API error", error);
    }
  };

  return (
    <form
      className="container-vertical checkout__form"
      onSubmit={handleSubmit(onSubmit)}
    >
      {isLoading && <Preloader />}
      <section className="container-vertical form__section">
        <h3 className="subtitle">Payment</h3>

        <label className="container-horisontal form__radio" name="gateway">
          <input
            className="radio__input"
            type="radio"
            value="fondy"
            name="gateway"
            defaultChecked={true}
            {...register("gateway")}
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
            value="fondy"
            name="gateway"
            defaultChecked={false}
            {...register("gateway")}
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
        value="Pay now"
        className="checkout__submit"
        type="submit"
        /* onClick={() => handleTabClick('shipping')} */
      />
      <div className="container-horisontal checkout__text-button__wrapper">
        <button
          type="button"
          onClick={() => setTab(2)}
          className="container-horisontal text__button checkout__text-button"
        >
          <Svg
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

export default CheckoutPayment;
