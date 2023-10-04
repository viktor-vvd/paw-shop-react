import { useLazyCommentsProductListGETQuery } from "api/commentsApi";
import Pagination from "components/Catalog/Pagination";
import Image from "components/base/Image";
import Preloader from "components/base/Preloader";
import RatingStars from "components/base/RatingStars";
import ReviewCard from "components/base/ReviewCard";
import images from "imports/ImagesImport";
import React, { useEffect, useState } from "react";

const ProductReviews = ({ item }) => {
  const [commentsProductGET, { data, isFetching }] =
    useLazyCommentsProductListGETQuery();

  const [itemsPerPage, setitemsPerPage] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    commentsProductGET({
      id: item?.data.product.id,
      data: { page: currentPage, per_page: itemsPerPage },
    });
  }, [currentPage, item]);

  return (
    <>
      {isFetching && <Preloader className="preloader_absolute" />}
      {data?.data && (
        <div className="container-vertical product__reviews">
          <div className="container-horisontal product__reviews__rate">
            <div className="container-horisontal rate__stars">
              <RatingStars value={parseFloat(data.total.avg)} size="40" />
            </div>
            <span className="text rate__text">{item.data.product.rating}</span>
          </div>
          <div className="container-vertical product__reviews__list">
            {data.data.map((item, index) => (
              <ReviewCard item={item} key={index} link={false} />
            ))}
          </div>
          {data.meta.last_page > 1 && (
            <Pagination
              setCurrentPage={setCurrentPage}
              pageCount={data.meta.last_page}
              forcePage={data.meta.current_page}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ProductReviews;
