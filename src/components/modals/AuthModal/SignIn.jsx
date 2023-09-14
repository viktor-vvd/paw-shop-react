import React from "react";
import Button from "components/base/Button";
import images from "imports/ImagesImport";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignIn = ({ setisRegistered, setForgotPassword }) => {
  const schema = yup.object({
    email: yup
      .string()
      .required("E-mail is a required field")
      .email("Please enter a valid email address")
      .matches(/@[^.]*\./),
    password: yup
      .string()
      .required("Password is a required field")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[0-9]/, "Password requires a number"),
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
        <span className="text_light form__error">{errors.email?.message}</span>
      )}
      <input
        className="text_light form__input"
        name="password"
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      {errors.password && (
        <span className="text_light form__error">
          {errors.password?.message}
        </span>
      )}
      <div className="container-horisontal form__middle__container">
        <label className="container-horisontal checkbox" name="remember">
          <input
            className="checkbox__input"
            type="checkbox"
            name="remember"
            defaultChecked={false}
          />
          <span className="checkmark"></span>
          <span className="container-horisontal text_light checkbox__label">
            Remember me
          </span>
        </label>
        <button
          className="text__button form__text-button"
          name="forgot"
          type="button"
          onClick={() => setForgotPassword(true)}
        >
          I forgot password
        </button>
      </div>
      <Button type="submit" value="Sign in" />
      <Button
        type="submit"
        className="button_white"
        iconClassName="button__icon_arrow_right"
        value="I’m a new customer"
        icon={images["topRightPurpleArrow"]}
        onClick={() => setisRegistered(false)}
      />
    </form>
  );
};

export default SignIn;
