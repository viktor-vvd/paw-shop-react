import React from "react";
import Button from "components/base/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useForgotPasswordMutation } from "api/authApi";
import Preloader from "components/base/Preloader";

const ForgotPassword = ({ setForgotPassword }) => {
  const schema = yup.object({
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

  const [forgotPassword, { isLoading , error, isSuccess, data }] = useForgotPasswordMutation();

  const onSubmit = async (formData) => {
    const result = await forgotPassword(formData);
    if (result.data) {
      reset();
    }
  };

  return (
    <>
    {isLoading  && <Preloader />}
      <form
        className="container-vertical modal__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
        className={
          errors.email || error?.data.errors.email
            ? "text_light form__input form__input_error"
            : "text_light form__input"
        }
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
        {error?.data.errors.email && (
          <span className="text_light form__error">
            {errors?.data.errors.email}
          </span>
        )}
        {isSuccess && (
          <span className="text_light form__success">{data?.message}</span>
        )}
        <Button type="submit" value="Reset" />
        <Button
          type="submit"
          className="button_white"
          iconClassName="button__icon_arrow_right"
          value="I remember password"
          icon="topRightPurpleArrow"
          onClick={() => setForgotPassword(false)}
        />
      </form>
    </>
  );
};

export default ForgotPassword;
