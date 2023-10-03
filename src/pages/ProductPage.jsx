import { useLazyCatalogItemGETQuery } from "api/catalogApi";
import PopularProducts from "components/Home/PopularProducts";
import ProductContent from "components/Product/ProductContent/ProductContent";
import ProductOptions from "components/Product/ProductOptions";
import ProductPhotos from "components/Product/ProductPhotos";
import Breadcrumbs from "components/base/Breadcrumbs";
import Image from "components/base/Image";
import Preloader from "components/base/Preloader";
import images from "imports/ImagesImport";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { slug } = useParams();

  const [catalogItemGET, { data, isFetching }] = useLazyCatalogItemGETQuery();
  /* const [switchingData, setSwitchingData] = useState(data); */

  useEffect(() => {
    catalogItemGET(slug);
    /* data && setSwitchingData(data); */
  }, [slug]);

  return (
    <>
      {isFetching && <Preloader />}
      {data?.data && (
        <div className="container-vertical page-container product">
          <section className="container-vertical outer-container product__wrapper">
            <div className="container-vertical container product__breadcrumbs">
              <Breadcrumbs item={{ name: data.data.name }} />
            </div>
            <div className="container product__top">
              <div className="product__header">
                <h2 className="title product__title">{data.data.name}</h2>
                <span className="text product__code">
                  <span className="product__code_SKU">SKU:</span>{" "}
                  {data.data.sku}
                </span>
                <div className="container-horisontal rate">
                  <div className="container-horisontal rate__stars">
                    {data.data.product.rating &&
                      [...Array(Math.round(data.data.product.rating))].map(
                        (e, i) => (
                          <Image
                            className="stars__item"
                            src={images["star"]}
                            loading="lazy"
                            alt="star"
                            key={"star" + i}
                            width="13"
                            height="13"
                          />
                        )
                      )}
                  </div>
                  <span className="text rate__text">
                    {data.data.product.rating}
                  </span>
                </div>
              </div>
              <ProductPhotos items={data.data.images} />
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
      )}
    </>
  );
};

export default ProductPage;
