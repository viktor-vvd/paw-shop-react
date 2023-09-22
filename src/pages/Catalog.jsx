import Category from "components/Catalog/Category";
import Filter from "components/Catalog/Filter";
import Pagination from "components/Catalog/Pagination";
import Sort from "components/Catalog/Sort";
import Breadcrumbs from "components/base/Breadcrumbs";
import ProductCard from "components/base/ProductCard";
import images from "imports/ImagesImport";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Catalog = () => {
  const data = [
    {
      id: 0,
      image: images["product1"],
      name: "Ball for a dog «Denta Fun» d=5 см (rubber)",
      rate: 5,
      reviews: 2,
      discount: 0,
      price: 4,
      new: false,
    },
    {
      id: 1,
      image: images["product2"],
      name: "Dog Toys Big Dog barbell Chew toy Interactive Stress Relief Dog Toy",
      rate: 5,
      reviews: 5,
      discount: 50,
      price: 10,
      new: false,
    },
    {
      id: 2,
      image: images["product3"],
      name: "Mammoth Cottonblend 3 Knot Dog Rope Toy, Color Varies, Large",
      rate: 5,
      reviews: 10,
      discount: 0,
      price: 8.5,
      new: true,
    },
    {
      id: 3,
      image: images["product4"],
      name: "Frisco Bird Teaser with Feathers Cat Toy",
      rate: 5,
      reviews: 10,
      discount: 0,
      price: 3.42,
      new: false,
    },
    {
      id: 0,
      image: images["product1"],
      name: "Ball for a dog «Denta Fun» d=5 см (rubber)",
      rate: 5,
      reviews: 2,
      discount: 0,
      price: 4,
      new: false,
    },
    {
      id: 1,
      image: images["product2"],
      name: "Dog Toys Big Dog barbell Chew toy Interactive Stress Relief Dog Toy",
      rate: 5,
      reviews: 5,
      discount: 50,
      price: 10,
      new: false,
    },
    {
      id: 2,
      image: images["product3"],
      name: "Mammoth Cottonblend 3 Knot Dog Rope Toy, Color Varies, Large",
      rate: 5,
      reviews: 10,
      discount: 0,
      price: 8.5,
      new: true,
    },
    {
      id: 3,
      image: images["product4"],
      name: "Frisco Bird Teaser with Feathers Cat Toy",
      rate: 5,
      reviews: 10,
      discount: 0,
      price: 3.42,
      new: false,
    },
    {
      id: 0,
      image: images["product1"],
      name: "Ball for a dog «Denta Fun» d=5 см (rubber)",
      rate: 5,
      reviews: 2,
      discount: 0,
      price: 4,
      new: false,
    },
    {
      id: 1,
      image: images["product2"],
      name: "Dog Toys Big Dog barbell Chew toy Interactive Stress Relief Dog Toy",
      rate: 5,
      reviews: 5,
      discount: 50,
      price: 10,
      new: false,
    },
    {
      id: 2,
      image: images["product3"],
      name: "Mammoth Cottonblend 3 Knot Dog Rope Toy, Color Varies, Large",
      rate: 5,
      reviews: 10,
      discount: 0,
      price: 8.5,
      new: true,
    },
    {
      id: 3,
      image: images["product4"],
      name: "Frisco Bird Teaser with Feathers Cat Toy",
      rate: 5,
      reviews: 10,
      discount: 0,
      price: 3.42,
      new: false,
    },
    {
      id: 0,
      image: images["product1"],
      name: "Ball for a dog «Denta Fun» d=5 см (rubber)",
      rate: 5,
      reviews: 2,
      discount: 0,
      price: 4,
      new: false,
    },
    {
      id: 1,
      image: images["product2"],
      name: "Dog Toys Big Dog barbell Chew toy Interactive Stress Relief Dog Toy",
      rate: 5,
      reviews: 5,
      discount: 50,
      price: 10,
      new: false,
    },
    {
      id: 2,
      image: images["product3"],
      name: "Mammoth Cottonblend 3 Knot Dog Rope Toy, Color Varies, Large",
      rate: 5,
      reviews: 10,
      discount: 0,
      price: 8.5,
      new: true,
    },
    {
      id: 3,
      image: images["product4"],
      name: "Frisco Bird Teaser with Feathers Cat Toy",
      rate: 5,
      reviews: 10,
      discount: 0,
      price: 3.42,
      new: false,
    },
    {
      id: 0,
      image: images["product1"],
      name: "Ball for a dog «Denta Fun» d=5 см (rubber)",
      rate: 5,
      reviews: 2,
      discount: 0,
      price: 4,
      new: false,
    },
    {
      id: 1,
      image: images["product2"],
      name: "Dog Toys Big Dog barbell Chew toy Interactive Stress Relief Dog Toy",
      rate: 5,
      reviews: 5,
      discount: 50,
      price: 10,
      new: false,
    },
    {
      id: 2,
      image: images["product3"],
      name: "Mammoth Cottonblend 3 Knot Dog Rope Toy, Color Varies, Large",
      rate: 5,
      reviews: 10,
      discount: 0,
      price: 8.5,
      new: true,
    },
    {
      id: 3,
      image: images["product4"],
      name: "Frisco Bird Teaser with Feathers Cat Toy",
      rate: 5,
      reviews: 10,
      discount: 0,
      price: 3.42,
      new: false,
    },
  ];

  const catalogData=[
    {
      id:'1',
      name:"For CAT"
    },
    {
      id:'2',
      name:"For DOG"
    }
  ]

  const {id}=useParams();
  const selectedCatalog = catalogData.find((catalog) => catalog.id === id);

  const [currentItems, setCurrentItems] = useState(null);

  return (
    <div className="container-vertical page-container catalog">
      <div className="container-vertical catalog__top">
        <Breadcrumbs item={selectedCatalog} />
        <h2 className="title">Catalog</h2>
        <Category item={selectedCatalog} />
      </div>
      <div className="container-vertical outer__container catalog__bottom">
        <div className="container-horisontal container filter-sort">
          <Filter />
          <Sort />
        </div>
        <div className="container-horisontal container catalog__products">
          {currentItems &&
            currentItems.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
        </div>
        <Pagination
          items={data}
          itemsPerPage={16}
          setCurrentItems={setCurrentItems}
        />
      </div>
    </div>
  );
};

export default Catalog;
