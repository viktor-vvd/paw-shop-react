import { useLazyCatalogItemGETQuery } from "api/catalogApi";
import PopularProducts from "components/Home/PopularProducts";
import ProductContent from "components/Product/ProductContent/ProductContent";
import ProductOptions from "components/Product/ProductOptions";
import ProductPhotos from "components/Product/ProductPhotos";
import Breadcrumbs from "components/base/Breadcrumbs";
import Preloader from "components/base/Preloader";
import RatingStars from "components/base/RatingStars";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import localVariants from "utils/products/data.json";

const ProductPage = () => {
  const { slug } = useParams();
  const [productData, setProductData] = useState({});

  const [
    catalogItemGET,
    { data, isFetching, isUninitialized, error, isSuccess },
  ] = useLazyCatalogItemGETQuery();

  useEffect(() => {
    catalogItemGET(slug);
  }, [slug]);

  useEffect(() => {
    if (
      !isUninitialized &&
      !isFetching &&
      !isSuccess &&
      error &&
      error.status === 500
    ) {
      const localData =
        localVariants.data.filter((item) => item.data.slug === slug)[0] || {};
      setProductData(localData);
    } else {
      setProductData(data);
    }
  }, [slug, data, isFetching, isUninitialized, error, isSuccess]);

  return (
    <>
      {isFetching && <Preloader />}
      {productData?.data && (
        <div className="container-vertical page-container product">
          <section className="container-vertical outer-container outer__container product__wrapper">
            <div className="container-vertical container product__breadcrumbs">
              <Breadcrumbs item={{ name: productData.data.name }} />
            </div>
            <div className="container product__top">
              <div className="product__header">
                <h2 className="title product__title">
                  {productData.data.name}
                </h2>
                <span className="text product__code">
                  <span className="product__code_SKU">SKU:</span>{" "}
                  {productData.data.sku}
                </span>
                <div className="container-horizontal rate">
                  <div className="container-horizontal rate__stars">
                    <RatingStars
                      value={parseFloat(productData.data.product.rating)}
                    />
                  </div>
                  <span className="text rate__text">
                    {productData.data.product.rating}
                  </span>
                </div>
              </div>
              <ProductPhotos items={productData.data.images} />
              <ProductOptions item={productData} />
              {/* {switchingData&&<ProductOptions item={switchingData} />} */}
            </div>
          </section>
          <section className="container-vertical product__middle">
            <ProductContent item={productData} />
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
