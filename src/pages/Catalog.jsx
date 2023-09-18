import Category from "components/Catalog/Category";
import Breadcrumbs from "components/base/Breadcrumbs";
import React from "react";

const Catalog = () => {
  return (
    <div className="container-vertical catalog">
      <div className="container-vertical catalog__top">
        <Breadcrumbs />
        <h2 className="title">Catalog</h2>
        <Category/>
      </div>
    </div>
  );
};

export default Catalog;
