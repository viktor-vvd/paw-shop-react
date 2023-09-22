import PopularProducts from "components/Home/PopularProducts";
import ProductContent from "components/Product/ProductContent/ProductContent";
import ProductOptions from "components/Product/ProductOptions";
import ProductPhotos from "components/Product/ProductPhotos";
import Breadcrumbs from "components/base/Breadcrumbs";
import Image from "components/base/Image";
import images from "imports/ImagesImport";
import React from "react";
import { Rating } from "react-simple-star-rating";

const Product = () => {
  const item = {
    id: 3,
    image: images["product4"],
    images: [
      images["product4"],
      images["product1"],
      images["product2"],
      images["product3"],
    ],
    sku: 1541428774,
    name: "Frisco Bird Teaser with Feathers Cat Toy",
    rate: 5,
    reviews: 10,
    discount: 50,
    price: 3.42,
    new: false,
  };
  return (
    <div className="container-vertical page-container product">
      <section className="container-vertical outer-container">
        <div className="container-vertical container product__breadcrumbs">
          <Breadcrumbs item={item}/>
        </div>
        <div className="container product__top">
          <div className="product__header">
            <h2 className="title product__title">{item.name}</h2>
            <span className="text product__code">
              <span className="product__code_SKU">SKU:</span> {item.sku}
            </span>
            <div className="container-horisontal rate">
              <div className="container-horisontal rate__stars">
                {item.rate &&
                  [...Array(item.rate)].map((e, i) => (
                    <Image
                      className="stars__item"
                      src={images["star"]}
                      loading="lazy"
                      alt="star"
                      key={"star" + i}
                      width="13"
                      height="13"
                    />
                  ))}
              </div>
              <span className="text rate__text">{item.reviews}</span>
            </div>
          </div>
          <ProductPhotos items={item.images} />
          <ProductOptions item={item} />
        </div>
      </section>
      <section className="container-vertical product__middle">
        <ProductContent item={item} />
      </section>
      <PopularProducts
        title="You can like this"
        buttons={false}
        className="product__recommendations"
      />
    </div>
  );
};

export default Product;
