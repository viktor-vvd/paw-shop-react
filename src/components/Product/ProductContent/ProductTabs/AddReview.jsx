import { yupResolver } from "@hookform/resolvers/yup";
import { useCommentsAddPOSTMutation } from "api/commentsApi";
import Button from "components/base/Button";
import Preloader from "components/base/Preloader";
import { CloseMini, Gallery } from "public/svgComponents";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import * as yup from "yup";

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


const AddReview = ({ item }) => {
  const schema = yup.object({
    body: yup.string().required("Message is a required field"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [rating, setRating] = useState(1);

  const [addComment, { isLoading }] = useCommentsAddPOSTMutation();

  const [imgs, setImgs] = useState([]);

  const handleChange = (e) => {
    /* const selectedImages = Array.from(e.target.files); */
    setImgs([...e.target.files]);
  };

  const cancelImg = (index, e) => {
    e.preventDefault();
    const newImgs = imgs.filter((_, image) => image !== index);
    setImgs(newImgs);
  };

  const onSubmit = async (formData) => {
    const formImgs = new FormData();
    imgs.forEach((file, i) => {
      formImgs.append("file", file);
    });
    const result = await addComment({
      data: {
        rating: parseFloat(rating),
        body: formData.body,
        images: formImgs,
      },
      id: item?.data.product.id,
    });
    if (result.data) {
      setRating(1);
      setImgs([]);
      reset();
    }
  };

  return (
    <>
      {isLoading && <Preloader className="preloader_absolute" />}
      <div className="container-vertical add-review">
        <h2 className="title">Your review</h2>
        <form
          className="container-vertical add-review__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="container-horizontal form__rating__wrapper">
            <Rating
              className="container-horizontal form__rating"
              initialValue={rating}
              ratingValue={rating}
              size={50}
              label
              transition
              fillColorArray={fillColorArray}
              emptyColor="gray"
              onClick={(rate) => {
                setRating(rate);
              }}
              onMouseLeave={() => {
                setRating((currentRating) => currentRating);
              }}
            />
          </div>
          <div className="container-vertical form__wrapper">
            <textarea
              className="text form__input"
              name="body"
              rows={5}
              placeholder="Your message"
              {...register("body")}
            />
            {errors.body && (
              <span className="text_light form__error">
                {errors.body?.message}
              </span>
            )}

            <label className="container-horizontal form__add-file" name="pics">
              <input
                type="file"
                name="pics"
                className="form__add-file__input"
                multiple
                accept="image/*"
                onChange={handleChange}
                /* {...register("pics")} */
              />
              <div className="button button_white form__add-file__button">
                <Gallery
                  className="button__icon"
                  alt="icon"
                  width="20"
                  height="20"
                />
                <span className="text__button">Choose images</span>
              </div>
            </label>
            {imgs.length > 0 && (
              <div className="container-horizontal images__list">
                {Array.from(imgs).map((image, index) => (
                  <div
                    className="container-horizontal images__item"
                    key={index}
                  >
                    <span className="text">{image.name}</span>
                    <CloseMini
                      className="images__item__icon"
                      alt="close"
                      width="12"
                      height="12"
                      onClick={(e) => cancelImg(index, e)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <Button type="submit" value="Add review" />
        </form>
      </div>
    </>
  );
};

export default AddReview;
