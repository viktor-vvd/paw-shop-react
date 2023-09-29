import { useLazyCommentsProductListGETQuery } from "api/commentsApi";
import Pagination from "components/Catalog/Pagination";
import Image from "components/base/Image";
import ReviewCard from "components/base/ReviewCard";
import images from "imports/ImagesImport";
import React, { useEffect, useState } from "react";

const ProductReviews = ({ item }) => {
  const [commentsProductGET, { data }] = useLazyCommentsProductListGETQuery();

  const [itemsPerPage, setitemsPerPage] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    commentsProductGET({
      id: item?.data.product.id,
      data: { page: currentPage, per_page: itemsPerPage },
    });
    /* data && setCurrentPage(data.meta.current_page); */
    console.log(data);
  }, [currentPage, data, item]);

  return (
    data && (
      <div className="container-vertical product__reviews">
        <div className="container-horisontal product__reviews__rate">
          <div className="container-horisontal rate__stars">
            {item.data.product.rating &&
              [...Array(Math.round(item.data.product.rating))].map((e, i) => (
                <Image
                  className="stars__item"
                  src={images["star"]}
                  loading="lazy"
                  alt="star"
                  key={"star" + i}
                  width="47"
                  height="47"
                />
              ))}
          </div>
          <span className="text rate__text">{item.data.product.rating}</span>
        </div>
        <div className="container-vertical product__reviews__list">
          {data?.data &&
            data?.data.map((item, index) => (
              <ReviewCard item={item} key={index} link={false} />
            ))}
        </div>
        {data?.data && data.meta.last_page > 1 && (
          <Pagination
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            pageCount={data.meta.last_page}
            initialPage={data.meta.current_page}
            />
        )}
      </div>
    )
  );
};

export default ProductReviews;
