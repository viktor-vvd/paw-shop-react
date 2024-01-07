import Button from "components/base/Button";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CheckoutContact = ({ setCheckoutData, setTab }) => {
  const schema = yup.object({
    email: yup
      .string()
      .required("E-mail is a required field")
      .email("Please enter a valid email address")
      .matches(/@[^.]*\./),
    firstname: yup.string().required("Required"),
    lastname: yup.string().required("Required"),
    address: yup.string().required("Required"),
    city: yup.string().required("Required"),
    zipcode: yup.string().required("Required"),
    apartment: yup.string().required("Required"),
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

  const onSubmit = async (formData) => {
    console.log({shipping:formData});
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
    setTab(2);
  };

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
      });
  }, []);
  return (
    <form
      className="container-vertical checkout__form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className="container-vertical form__section">
        <h3 className="subtitle">Your contact details</h3>
        <div className="container-horizontal form__account">
        <label className="container-horizontal text" name="account">
            <input
              type="radio"
              name="account"
              value="new"
              defaultChecked={true}
              className="account__input"
            />
            <span className="container-horizontal text account__item">I’m a new customer</span>            
          </label>
          <span className="text">or</span>
          <label className="container-horizontal text" name="account">
            <input
              type="radio"
              name="account"
              value="registered"
              className="account__input"
            />
            <span className="container-horizontal text account__item">I have an account</span>            
          </label>
        </div>
        <label className="container-vertical form__label_wrapper" name="email">
          <span className="text">E-mail or mobile phone number</span>
          <input
            className={
              errors.email
                ? "text_light form__input form__input_error"
                : "text_light form__input"
            }
            type="text"
            name="email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text_light form__error">
              {errors.email?.message}
            </span>
          )}
        </label>
      </section>

      <section className="container-vertical form__section">
        <h3 className="subtitle">Shipping address</h3>
        <label
          className="container-vertical form__label_wrapper"
          name="country"
        >
          <span className="text">Country</span>
          <Select
            className="text_light form__input_country"
            placeholder="Select"
            isClearable
            options={countries}
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e)}
          />
        </label>
        <div className="container-horizontal form__section_horizontal">
          <label
            className="container-vertical form__label_wrapper"
            name="firstname"
          >
            <span className="text">Name</span>
            <input
              className={
                errors.firstname
                  ? "text_light form__input form__input_error"
                  : "text_light form__input"
              }
              type="text"
              name="firstname"
              {...register("firstname")}
            />
            {errors.firstname && (
              <span className="text_light form__error">
                {errors.firstname?.message}
              </span>
            )}
          </label>
          <label
            className="container-vertical form__label_wrapper"
            name="lastname"
          >
            <span className="text">Surname</span>
            <input
              className={
                errors.lastname
                  ? "text_light form__input form__input_error"
                  : "text_light form__input"
              }
              type="text"
              name="lastname"
              {...register("lastname")}
            />
            {errors.lastname && (
              <span className="text_light form__error">
                {errors.lastname?.message}
              </span>
            )}
          </label>
        </div>
        <label
          className="container-vertical form__label_wrapper"
          name="address"
        >
          <span className="text">Address</span>
          <input
            className={
              errors.address
                ? "text_light form__input form__input_error"
                : "text_light form__input"
            }
            type="text"
            name="address"
            {...register("address")}
          />
          {errors.address && (
            <span className="text_light form__error">
              {errors.address?.message}
            </span>
          )}
        </label>
        <div className="container-horizontal form__section_horizontal">
          <label className="container-vertical form__label_wrapper" name="city">
            <span className="text">City</span>
            <input
              className={
                errors.city
                  ? "text_light form__input form__input_error"
                  : "text_light form__input"
              }
              type="text"
              name="city"
              {...register("city")}
            />
            {errors.city && (
              <span className="text_light form__error">
                {errors.city?.message}
              </span>
            )}
          </label>
          <label
            className="container-vertical form__label_wrapper"
            name="zipcode"
          >
            <span className="text">Zip code</span>
            <input
              className={
                errors.zipcode
                  ? "text_light form__input form__input_error"
                  : "text_light form__input"
              }
              type="text"
              name="zipcode"
              {...register("zipcode")}
            />
            {errors.zipcode && (
              <span className="text_light form__error">
                {errors.zipcode?.message}
              </span>
            )}
          </label>
        </div>
        <label
          className="container-vertical form__label_wrapper"
          name="apartment"
        >
          <span className="text">House, apartment number</span>
          <input
            className={
              errors.apartment
                ? "text_light form__input form__input_error"
                : "text_light form__input"
            }
            type="text"
            name="apartment"
            {...register("apartment")}
          />
          {errors.apartment && (
            <span className="text_light form__error">
              {errors.apartment?.message}
            </span>
          )}
        </label>
      </section>
      <Button
        value="Continue to shipping"
        className="checkout__submit"
        type="submit"
        /* onClick={() => handleTabClick('shipping')} */
      />
    </form>
  );
};

export default CheckoutContact;
