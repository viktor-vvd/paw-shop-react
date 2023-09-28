import {
  useCatalogListGETQuery,
  useLazyCatalogListGETQuery,
} from "api/catalogApi";
import Category from "components/Catalog/Category";
import Filter from "components/Catalog/Filter";
import Pagination from "components/Catalog/Pagination";
import Sort from "components/Catalog/Sort";
import Breadcrumbs from "components/base/Breadcrumbs";
import ProductCard from "components/base/ProductCard";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CatalogPage = () => {
  const { id } = useParams();

  const [catalogListGET, { data }] = useLazyCatalogListGETQuery();

  const [itemsPerPage, setitemsPerPage] = useState(16);

  const [currentPage, setCurrentPage] = useState(1);

  const [sortValue, setSortValue]=useState({ sort: "default" });

  useEffect(() => {
    const result = catalogListGET({
      page: currentPage,
      per_page: itemsPerPage,
      sort: sortValue.sort,
      order: sortValue.order,
      category: id,
    });
    data && setCurrentPage(data.meta.current_page);
  }, [id, currentPage, sortValue]);

  return (
    <div className="container-vertical page-container catalog">
      <div className="container-vertical catalog__top">
        <Breadcrumbs item={{ id: id }} />
        <h2 className="title">Catalog</h2>
        <Category item={{ slug: id }} setCurrentPage={setCurrentPage} />
      </div>
      <div className="container-vertical outer__container catalog__bottom">
        <div className="container-horisontal container filter-sort">
          <Filter />
          <Sort sortValue={sortValue} setSortValue={setSortValue}/>
        </div>
        <div className="container-horisontal container catalog__products">
          {data?.data &&
            data.data.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
        </div>
        {data?.data && data.data.length > itemsPerPage && (
          <Pagination
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            pageCount={data.meta.from}
            initialPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
