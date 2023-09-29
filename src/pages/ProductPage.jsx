import { useLazyCatalogItemGETQuery } from "api/catalogApi";
import PopularProducts from "components/Home/PopularProducts";
import ProductContent from "components/Product/ProductContent/ProductContent";
import ProductOptions from "components/Product/ProductOptions";
import ProductPhotos from "components/Product/ProductPhotos";
import Breadcrumbs from "components/base/Breadcrumbs";
import Image from "components/base/Image";
import images from "imports/ImagesImport";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
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

  const { slug } = useParams();

  const [catalogItemGET, { data }] = useLazyCatalogItemGETQuery();
  /* const [switchingData, setSwitchingData] = useState(data); */


  useEffect(() => {
    catalogItemGET(slug);
    /* data && setSwitchingData(data); */
  }, [data, slug]);

  return (
    data && (
      <div className="container-vertical page-container product">
        <section className="container-vertical outer-container">
          <div className="container-vertical container product__breadcrumbs">
            <Breadcrumbs item={{ name: data?.data.name }} />
          </div>
          <div className="container product__top">
            <div className="product__header">
              <h2 className="title product__title">
                {data?.data.name}
              </h2>
              <span className="text product__code">
                <span className="product__code_SKU">SKU:</span> {data?.data.sku}
              </span>
              <div className="container-horisontal rate">
                <div className="container-horisontal rate__stars">
                  {data?.data.product.rating &&
                    [...Array(Math.round(data?.data.product.rating))].map((e, i) => (
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
                <span className="text rate__text">{data?.data.product.rating}</span>
              </div>
            </div>
            <ProductPhotos items={data?.data.images} />
            <ProductOptions item={data} />
            {/* {switchingData&&<ProductOptions item={switchingData} />} */}
          </div>
        </section>
        <section className="container-vertical product__middle">
          <ProductContent item={data} />
        </section>
        <PopularProducts
          title="You can like this"
          buttons={false}
          className="product__recommendations"
        />
      </div>
    )
  );
};

export default ProductPage;
