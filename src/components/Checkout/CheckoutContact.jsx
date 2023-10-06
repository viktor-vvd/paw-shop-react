import Button from "components/base/Button";
import React, { useEffect, useState } from "react";
import Select from 'react-select';

const CheckoutContact = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  useEffect(() => {
    fetch(
      'https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code'
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
      });
  }, []);
  return (
    <form className="container-vertical checkout__form">
      <section className="container-vertical form__section">
        <h3 className="subtitle">Your contact details</h3>
        <div className="container-horisontal form__account">
          <button className="text form__account__button form__account__button_active">
            I’m a new customer
          </button>
          <span className="text">or</span>
          <button className="text form__account__button">
            I have an account
          </button>
        </div>
        <label className="container-vertical form__label_wrapper" name="email">
          <span className="text">E-mail or mobile phone number</span>
          <input className="text_light form__input" type="text" name="email" />
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
        <div className="container-horisontal form__section_horisontal">
          <label className="container-vertical form__label_wrapper" name="name">
            <span className="text">Name</span>
            <input className="text_light form__input" type="text" name="name" />
          </label>
          <label
            className="container-vertical form__label_wrapper"
            name="surname"
          >
            <span className="text">Surname</span>
            <input
              className="text_light form__input"
              type="text"
              name="surname"
            />
          </label>
        </div>
        <label
          className="container-vertical form__label_wrapper"
          name="address"
        >
          <span className="text">Address</span>
          <input
            className="text_light form__input"
            type="text"
            name="address"
          />
        </label>
        <div className="container-horisontal form__section_horisontal">
          <label className="container-vertical form__label_wrapper" name="city">
            <span className="text">City</span>
            <input className="text_light form__input" type="text" name="city" />
          </label>
          <label className="container-vertical form__label_wrapper" name="zip">
            <span className="text">Zip code</span>
            <input className="text_light form__input" type="text" name="zip" />
          </label>
        </div>
        <label className="container-vertical form__label_wrapper" name="house">
          <span className="text">House, apartment number</span>
          <input className="text_light form__input" type="text" name="house" />
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
