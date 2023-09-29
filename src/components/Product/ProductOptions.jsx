import React, { useEffect, useState } from "react";
import images from "imports/ImagesImport";
import Image from "components/base/Image";
import Button from "../base/Button";

const ProductOptions = ({ item }) => {
  const [data, setData] = useState(item);
  const [quantity, setQuantity] = useState(1);

  const minusQuantity = () => {
    if (quantity > data.data.min_qty) setQuantity(quantity - 1);
  };

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };

  /* const handleOptionChange = (event) => {
    const newState = {
      ...data,
      switching: {
          ...data.switching,
          [key]: value,
      },
  };
    setData((prevState) => {
      switching: prevState.switching.map((el) =>
        el.attribute.slug === event.target.name
          ? el.properties.map((propert) =>
              propert.property.slug === event.target.value
                ? { ...propert, is_current: true }
                : { ...propert, is_current: false }
            )
          : el
      );
      /* return {
        ...current,
        event.target.name: {
          ...current.address,

          // 👇️ override value for nested country property
          country: 'Germany',
        },
      }; 
    });
  }; */

  useEffect(() => {
    setData(item);
    setQuantity(item.data.min_qty)
    console.log(data);
  }, [data, item]);

  return (
    <div className="container-vertical product-options">
      {data?.switching &&
        data?.switching.map((option, index) => (
          <div
            className="container-horisontal product-options__wrapper"
            key={index}
          >
            <span className="text">{option.attribute.name}:</span>
            <ul className="container-horisontal product-options__list">
              {option?.properties &&
                option?.properties.map((property, i) => (
                  <li className="container-horisontal" key={i}>
                    <label
                      className="container-horisontal text"
                      name={option.attribute.slug}
                    >
                      <input
                        type="radio"
                        name={option.attribute.slug}
                        value={property.slug}
                        /* onChange={handleOptionChange} */
                        defaultChecked={property.is_current}
                        className="product-options__input"
                      />
                      <span
                        className={
                          property.property.image
                            ? "container-horisontal text product-options__item product-options__item_image"
                            : "container-horisontal text product-options__item"
                        } title={property.property.value}
                      >
                        {option.attribute.format === "text" &&
                          property.property.value}
                        {property.property.image && (
                          <Image src={property.property.image} alt={property.property.value} />
                        )}
                      </span>
                    </label>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      <div className="container-horisontal product-options__wrapper">
        <span className="text">Quantity:</span>
        <div className="container-horisontal product-options__buttons">
          <Button
            type="button"
            className="button_white quantity__button"
            value="-"
            title="Remove 1"
            onClick={() => minusQuantity()}
          />
          <span className="text product-options__quantity">{quantity}</span>
          <Button
            type="button"
            className="button_white quantity__button"
            value="+"
            title="Add 1"
            onClick={() => plusQuantity()}
          />
        </div>
      </div>
      <div className="container-horisontal product-options__wrapper">
        <div className="container-vertical product-options__price">
          {item.data.discount_percent > 0 ? (
            <>
              <span className="price price_new">
                {item.data.prices.currency.symbol}
                {item.data.prices.now}
              </span>
              <span className="price price_old">
                {item.data.prices.currency.symbol}
                {item.data.prices.old}
              </span>
            </>
          ) : (
            <span className="price">
              {item.data.prices.currency.symbol}
              {item.data.price}
            </span>
          )}
        </div>
        <div className="container-horisontal product-options__buttons product-options__buttons_buy">
          <Button type="button" value="Add to cart" />
          <Button type="button" className="button_white" value="Buy 1 click" />
        </div>
      </div>
      <div className="container-horisontal product-options__return">
        <Image src={images["returnIcon"]} alt={"return"} />
        <span className="text">Free return within 15 days</span>
      </div>
      <div className="container-horisontal product-options__wrapper">
        <span className="text">Share:</span>
        <ul className="container-horisontal product-options__list product-options__list_socials">
          <li className="container-horisontal">
            <Button
              type="button"
              className="button_white telegram"
              icon={images["telegramColor"]}
            />
          </li>
          <li className="container-horisontal">
            <Button
              type="button"
              className="button_white facebook"
              icon={images["facebookColorMini"]}
            />
          </li>
          <li className="container-horisontal">
            <Button
              type="button"
              className="button_white twitter"
              icon={images["twitterColor"]}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductOptions;
