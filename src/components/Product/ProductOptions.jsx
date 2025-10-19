import React, { useEffect, useState } from "react";
import Image from "components/base/Image";
import Button from "../base/Button";
import { useAddToCartPOSTMutation } from "api/cartApi";
import { useDispatch } from "react-redux";
import { setCart_id } from "redux/reducers/cartSlice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import {
  FacebookColorMini,
  Return,
  TelegramColor,
  TwitterColor,
} from "public/svgComponents";

const ProductOptions = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [dataItem, setDataItem] = useState(item);
  const [quantity, setQuantity] = useState(1);

  const [addToCart, { data }] = useAddToCartPOSTMutation();

  const minusQuantity = () => {
    if (quantity > dataItem.data.min_qty) setQuantity(quantity - 1);
  };

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = async () => {
    const result = await addToCart({
      id: item.variations.filter((element) => element.is_current)[0].id,
      data: { quantity: quantity },
    });
    if (result.data) {
      console.log(result.data.cart_id);
      Cookies.set("cart_id", result.data.cart_id);
      dispatch(setCart_id(result.data.cart_id));
    }
  };

  useEffect(() => {
    setDataItem(item);
    setQuantity(item.data.min_qty);
    console.log(dataItem);
  }, [dataItem, item]);

  return (
    <div className="container-vertical product-options">
      {dataItem?.switching &&
        dataItem.switching.map((option, index) => (
          <div
            className="container-horizontal product-options__wrapper"
            key={index}
          >
            <span className="text">{option.attribute.name}:</span>
            <ul className="container-horizontal product-options__list">
              {option?.properties &&
                option.properties.map((property, i) => (
                  <li className="container-horizontal" key={i}>
                    <label
                      className="container-horizontal text"
                      name={option.attribute.slug}
                    >
                      <input
                        type="radio"
                        name={option.attribute.slug}
                        value={property.slug}
                        onChange={() =>
                          navigate(
                            "/catalog/" +
                              item.data.product.category?.slug +
                              "/product/" +
                              property.variation.slug
                          )
                        }
                        checked={property.is_current}
                        className="product-options__input"
                      />
                      <span
                        className={
                          /* property.property.image */ option.attribute
                            .format !== "text"
                            ? "container-horizontal text product-options__item product-options__item_image"
                            : "container-horizontal text product-options__item"
                        }
                        style={
                          option.attribute.format !== "text"
                            ? { backgroundColor: property.property.value }
                            : {}
                        }
                        title={property.property.value}
                      >
                        {option.attribute.format === "text" &&
                          property.property.value}
                        {/* {property.property.image && (
                          <Image
                            src={property.property.image}
                            alt={property.property.value}
                          />
                        )} */}
                      </span>
                    </label>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      <div className="container-horizontal product-options__wrapper">
        <span className="text">Quantity:</span>
        <div className="container-horizontal product-options__buttons">
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
      <div className="container-horizontal product-options__wrapper">
        <div className="container-vertical product-options__price">
          {item.data.prices.discount > 0 ? (
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
              {item.data.prices.now}
            </span>
          )}
        </div>
        <div className="container-horizontal product-options__buttons product-options__buttons_buy">
          <Button type="button" value="Add to cart" onClick={handleAddToCart} />
          <Button type="button" className="button_white" value="Buy 1 click" />
        </div>
      </div>
      <div className="container-horizontal product-options__return">
        <Return alt={"return"} />
        <span className="text">Free return within 15 days</span>
      </div>
      <div className="container-horizontal product-options__wrapper">
        <span className="text">Share:</span>
        <ul className="container-horizontal product-options__list product-options__list_socials">
          <li className="container-horizontal">
            <Button
              type="button"
              className="button_white telegram"
              Icon={TelegramColor}
            />
          </li>
          <li className="container-horizontal">
            <Button
              type="button"
              className="button_white facebook"
              Icon={FacebookColorMini}
            />
          </li>
          <li className="container-horizontal">
            <Button
              type="button"
              className="button_white twitter"
              Icon={TwitterColor}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductOptions;
