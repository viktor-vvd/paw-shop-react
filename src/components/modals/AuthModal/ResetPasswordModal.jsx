import React, { useState } from "react";
import Button from "components/base/Button";
import images from "imports/ImagesImport";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const ResetPasswordModal = ({setForgotPassword}) => {
  const schema = yup
    .object({
      email: yup
        .string()
        .required("E-mail is a required field")
        .email("Please enter a valid email address")
        .matches(/@[^.]*\./),
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

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
        <form
          className="container-vertical modal__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="text_light form__input"
            name="email"
            type="text"
            placeholder="E-mail"
            {...register("email")}
          />
          {errors.email && (
            <span className="text_light form__error">
              {errors.email?.message}
            </span>
          )}
          <Button type="submit" value="Reset" />
          <Button
            type="submit"
            className="button_white"
            iconClassName="button__icon_arrow_right"
            value="I remember password"
            icon={images["topRightPurpleArrow"]}
            onClick={() => setForgotPassword(false)}
          />
        </form>
    </>
  );
};

export default ResetPasswordModal;
