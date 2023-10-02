import { yupResolver } from "@hookform/resolvers/yup";
import { useCommentsAddPOSTMutation } from "api/commentsApi";
import Button from "components/base/Button";
import Image from "components/base/Image";
import images from "imports/ImagesImport";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

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

  const [addComment, { isError, error, data }] = useCommentsAddPOSTMutation();

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
    /* e.target.files ? [...e.target.files] : [] 
    setImgs(imgs ? [...imgs] : []);*/
    const formImgs = new FormData();
    imgs.forEach((file, i) => {
      console.log(file);
      formImgs.append("file", file);
    });
    /* console.log(imgs); */
    const result = await addComment({
      data: {
        rating: parseFloat(formData.rating),
        body: formData.body,
        images: formImgs,
      },
      id: item?.data.product.id,
    });
    if (result.data) {
      reset();
    }
  };

  return (
    <div className="container-vertical add-review">
      <h2 className="title">Your review</h2>
      <form
        className="container-vertical add-review__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="container-horisontal form__rating">
          <input
            type="radio"
            id="star5"
            name="rating"
            value="5"
            {...register("rating")}
          />
          <label
            className="star"
            htmlFor="star5"
            title="Awesome"
            aria-hidden="true"
          ></label>
          <input
            type="radio"
            id="star4"
            name="rating"
            value="4"
            {...register("rating")}
          />
          <label
            className="star"
            htmlFor="star4"
            title="Great"
            aria-hidden="true"
          ></label>
          <input
            type="radio"
            id="star3"
            name="rating"
            value="3"
            {...register("rating")}
          />
          <label
            className="star"
            htmlFor="star3"
            title="Very good"
            aria-hidden="true"
          ></label>
          <input
            type="radio"
            id="star2"
            name="rating"
            value="2"
            {...register("rating")}
          />
          <label
            className="star"
            htmlFor="star2"
            title="Good"
            aria-hidden="true"
          ></label>
          <input
            type="radio"
            id="star1"
            name="rating"
            value="1"
            defaultChecked
            {...register("rating")}
          />
          <label
            className="star"
            htmlFor="star1"
            title="Bad"
            aria-hidden="true"
          ></label>
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

          <label className="container-horisontal form__add-file" name="pics">
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
          {imgs.length > 0 && (
            <div className="container-horisontal images__list">
              {Array.from(imgs).map((image, index) => (
                <div className="container-horisontal images__item" key={index}>
                  <span className="text">{image.name}</span>
                  <Image
                    className="images__item__icon"
                    src={images["closeMini"]}
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
  );
};

export default AddReview;
