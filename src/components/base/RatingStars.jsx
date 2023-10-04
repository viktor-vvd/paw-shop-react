import React from "react";
import { Rating } from "react-simple-star-rating";

const fillColorArray = [
  "#f17a45",
  "#f17a45",
  "#f19745",
  "#f19745",
  "#f1a545",
  "#f1a545",
  "#f1b345",
  "#f1b345",
  "#f1d045",
  "#f1d045",
];

const RatingStars = ({ value, size }) => {
  return (
    <Rating
      initialValue={value}
      readonly
      size={size ? size : "19"}
      transition
      allowFraction
      fillColorArray={fillColorArray}
    />
  );
};

export default RatingStars;
