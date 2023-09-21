import Button from "components/base/Button";
import Image from "components/base/Image";
import images from "imports/ImagesImport";
import React from "react";

const AddReview = () => {
  return (
    <div className="container-vertical add-review">
      <h2 className="title">Your review</h2>
      <form className="container-vertical add-review__form">
        <div className="container-horisontal form__rating">
          <input type="radio" id="star5" name="rating" value="5" />
          <label
            className="star"
            for="star5"
            title="Awesome"
            aria-hidden="true"
          ></label>
          <input type="radio" id="star4" name="rating" value="4" />
          <label
            className="star"
            for="star4"
            title="Great"
            aria-hidden="true"
          ></label>
          <input type="radio" id="star3" name="rating" value="3" />
          <label
            className="star"
            for="star3"
            title="Very good"
            aria-hidden="true"
          ></label>
          <input type="radio" id="star2" name="rating" value="2" />
          <label
            className="star"
            for="star2"
            title="Good"
            aria-hidden="true"
          ></label>
          <input type="radio" id="star1" name="rating" value="1" />
          <label
            className="star"
            for="star1"
            title="Bad"
            aria-hidden="true"
          ></label>
        </div>
        <div className="container-vertical form__wrapper">
          <textarea
            className="text form__input"
            name="R"
            rows={5}
            placeholder="Your message"
          />
          <label className="container-horisontal form__add-file" name="file">
            <input type="file" name="file" className="form__add-file__input" />
            <div className="button button_white form__add-file__button">
              <Image
                className="button__icon"
                src={images["gallery"]}
                alt="icon"
                width="20"
                height="20"
              />
              <span className="text__button">Choose images</span>
            </div>
          </label>
        </div>
        <Button type="submit" value="Add review" />
      </form>
    </div>
  );
};

export default AddReview;
