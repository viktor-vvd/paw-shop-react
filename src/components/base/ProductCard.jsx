import React from "react";
import images from "@imports/ImagesImport";
import Button from "./Button";
import Image from "./Image";
import { Link } from "react-router-dom";
import { useAddToCartPOSTMutation } from "api/cartApi";
import { useDispatch } from "react-redux";
import { setCart_id } from "redux/reducers/cartSlice";
import Cookies from "js-cookie";
import RatingStars from "./RatingStars";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const [addToCart, { data }] = useAddToCartPOSTMutation();

  const handleAddToCart = async () => {
    const result = await addToCart({
      id: item.id,
      data: { quantity: 1 },
    });
    if (result.data) {
      dispatch(setCart_id(result.data.cart_id));
      Cookies.set("cart_id", result.data.cart_id);
    }
  };

  return (
    <div className="container-vertical product-card">
      <div className="container-horisontal image__container">
        {item.prices.discount_percent > 0 && (
          <span className="tag tag_discount">
            -{item.prices.discount_percent}%
          </span>
        )}
        {item.new && <span className="tag tag_new">New</span>}
        <Link
          to={
            "/catalog/" + item.product.category.slug + "/product/" + item.slug
          }
        >
          <Image
            className="image"
            width="230"
            height="194"
            src={item.images[0].conversions.preview.url}
            loading="lazy"
            alt="product Image"
          />
        </Link>
      </div>
      <Link
        to={"/catalog/" + item.product.category.slug + "/product/" + item.slug}
        className="text product-card__title"
      >
        {item.name}
      </Link>
      <div className="container-horisontal rate">
        <div className="container-horisontal rate__stars">
          <RatingStars value={parseFloat(item.product.rating)} />
        </div>
        <span className="rate__text">{item.product.comments_count}</span>
      </div>
      <div className="container-horisontal product-card__bottom">
        <div className="container-horisontal price__container">
          {item.discount > 0 ? (
            <>
              <span className="price price_new">
                {item.prices.currency.symbol}
                {item.prices.now}
              </span>
              <span className="price price_old">
                {item.prices.currency.symbol}
                {item.prices.old}
              </span>
            </>
          ) : (
            <span className="price">
              {item.prices.currency.symbol}
              {item.price}
            </span>
          )}
        </div>
        <Button
          value="+"
          title="Add to cart"
          icon={images["basket"]}
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;
