import Pagination from "components/Catalog/Pagination";
import Image from "components/base/Image";
import ReviewCard from "components/base/ReviewCard";
import images from "imports/ImagesImport";
import React, { useState } from "react";

const ProductReviews = ({ rate }) => {
  const data = [
    {
      id: 0,
      date: "19.07.2022",
      name: "Alex",
      rate: 5,
      content:
        "Dog loved this thing even before I got it completely out of the box. Within 1 hr. cover was torn and inside exposed. Tossing, chewing and shaking went on for an hour straight. Removed it from her mouth and all goes back to good. Might have been a one off, but be watchful. Would buy again.",
      images: [
        images["comment1image1"],
        images["comment1image1"],
        images["comment1image3"],
        images["comment1image3"],
      ],
    },
    {
      id: 1,
      date: "15.07.2022",
      name: "Richard",
      rate: 5,
      content: `This is our dog's favorite toy. She plays with it indoors and outdoors. It is not very durable, because she is a chewer. She pulls the "threads" out one by one until she takes the cover off, then chews the foam football apart bite by bite. We let her play indoors with it until she starts leaving little white pieces of foam around house, then we leave it outdoors until she pulls the cover off and destroys the rest of it.`,
      images: null,
    },
    {
      id: 2,
      date: "19.07.2022",
      name: "Alex",
      rate: 5,
      content:
        "Our 6 month old German Shepherd puppy loves this dragon! It has quickly become a favorite in just a few days. The dragon's wings make a crinkle noise and it's belly squeaks. It's perfect for fetch and tug of war. He also loves to just carry it around, squeak and shake It. Will definitely buy more toys.",
      images: [images["comment3image1"], images["comment1image1"]],
    },
    {
      id: 3,
      date: "19.07.2022",
      name: "Alex",
      rate: 5,
      content:
        "Our 6 month old German Shepherd puppy loves this dragon! It has quickly become a favorite in just a few days. The dragon's wings make a crinkle noise and it's belly squeaks. It's perfect for fetch and tug of war. He also loves to just carry it around, squeak and shake It. Will definitely buy more toys.",
      images: [images["comment3image1"], images["comment1image1"]],
    },
    {
      id: 4,
      date: "19.07.2022",
      name: "Alex",
      rate: 5,
      content:
        "Dog loved this thing even before I got it completely out of the box. Within 1 hr. cover was torn and inside exposed. Tossing, chewing and shaking went on for an hour straight. Removed it from her mouth and all goes back to good. Might have been a one off, but be watchful. Would buy again.",
      images: [
        images["comment1image1"],
        images["comment1image1"],
        images["comment1image3"],
        images["comment1image3"],
      ],
    },
    {
      id: 5,
      date: "15.07.2022",
      name: "Richard",
      rate: 5,
      content: `This is our dog's favorite toy. She plays with it indoors and outdoors. It is not very durable, because she is a chewer. She pulls the "threads" out one by one until she takes the cover off, then chews the foam football apart bite by bite. We let her play indoors with it until she starts leaving little white pieces of foam around house, then we leave it outdoors until she pulls the cover off and destroys the rest of it.`,
      images: null,
    },
  ];

  const [currentItems, setCurrentItems] = useState(null);

  return (
    <div className="container-vertical product__reviews">
      <div className="container-horisontal product__reviews__rate">
        <div className="container-horisontal rate__stars">
          {rate &&
            [...Array(rate)].map((e, i) => (
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
        <span className="text rate__text">{rate}</span>
      </div>
      <div className="container-vertical product__reviews__list">
        {currentItems &&
          currentItems.map((item, index) => (
            <ReviewCard item={item} key={index} />
          ))}
      </div>
      <Pagination
        items={data}
        itemsPerPage={3}
        setCurrentItems={setCurrentItems}
      />
    </div>
  );
};

export default ProductReviews;
