import Button from "components/base/Button";
import Image from "components/base/Image";
import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { setCartModal } from "redux/reducers/modalsSlice";
import {
  useAddPromocodePOSTMutation,
  useRemovePromocodePOSTMutation,
} from "api/cartApi";

const Order = ({ data }) => {
  const schema = yup.object({
    promocode: yup.string().required("Required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [promocode, setPromocode] = useState(null);
  const [addPromocode, { isLoading: isLoadingAdd, error: errorAdd }] =
    useAddPromocodePOSTMutation();
  const [removePromocode, { isLoading: isLoadingRemove, error: errorRemove }] =
    useRemovePromocodePOSTMutation();

  const onSubmit = async (formData) => {
    if (promocode) {
      const result = removePromocode(formData.promocode);
      console.log({ remove: result });
      if (result?.data) {
        setPromocode(null);
        reset();
      }
    } else {
      const result = addPromocode({ promocode: formData.promocode });
      console.log({ add: result });
      if (result?.data) {
        setPromocode({ promocode: formData.promocode });
      }
    }
    /* console.log({shipping:formData});
    setCheckoutData({
      email: formData.email,
      shipping: {
        country: selectedCountry.value,
        firstname: formData.firstname,
        lastname: formData.lastname,
        address: formData.address,
        city: formData.city,
        zipcode: formData.zipcode,
        apartment: formData.apartment,
      },
    });
    setTab(2); */
  };

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

      <form
        className="container-vertical checkout__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          className="container-vertical form__label_wrapper"
          name="promocode"
        >
          <span className="text">Promocode</span>
          <div className="container-vertical form__label_wrapper">
            <input
              className={
                errors.promocode ||
                errorAdd?.data.errors.promocode ||
                errorRemove?.data.errors.promocode
                  ? "text_light form__input form__promocode form__input_error"
                  : "text_light form__input form__promocode"
              }
              type="text"
              name="promocode"
              defaultValue={promocode ? promocode : ""}
              disabled={promocode ? "disabled" : ""}
              {...register("promocode")}
            />
            <Button
              type="submit"
              className="button_white form__promocode_button"
              value={promocode ? "Remove" : "Apply"}
            />
          </div>
          {errors.promocode && (
            <span className="text_light form__error">
              {errors.promocode?.message}
            </span>
          )}
          {errorAdd?.data.errors.promocode && (
            <span className="text_light form__error">
              {errorAdd?.data.errors.promocode[0]}
            </span>
          )}
          {errorRemove?.data.errors.promocode && (
            <span className="text_light form__error">
              {errorRemove?.data.errors.promocode[0]}
            </span>
          )}
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
            <span className="subtitle text_accent">${data.total.total}</span>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Order;
