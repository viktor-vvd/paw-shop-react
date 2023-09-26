import React, { useState } from "react";
import Button from "components/base/Button";
import images from "imports/ImagesImport";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRegisterUserMutation } from "api/authApi";

const Register = ({ setisRegistered }) => {
  const schema = yup.object({
    name: yup.string().required("Full name is a required field"),
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
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
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

  const [registerUser, { isError, error }] = useRegisterUserMutation();

  const onSubmit = async (formData) => {
    const result = await registerUser(formData);
    if (result.data) {
      setisRegistered(true);
      reset();
    }
  };

  return (
    <form
      className="container-vertical modal__form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="text_light form__input"
        name="name"
        type="text"
        placeholder="Full name"
        {...register("name")}
      />
      {errors.name && (
        <span className="text_light form__error">{errors.name?.message}</span>
      )}
      <input
        className="text_light form__input"
        name="email"
        type="email"
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
      <input
        className="text_light form__input"
        name="password_confirmation"
        type="password"
        placeholder="Confirm password"
        {...register("password_confirmation")}
      />
      {errors.password_confirmation && (
        <span className="text_light form__error">
          {errors.password_confirmation?.message}
        </span>
      )}
      {isError && (
        <span className="text_light form__error">{error?.data.message}</span>
      )}
      <Button type="submit" value="Register" />
      <Button
        type="submit"
        className="button_white"
        iconClassName="button__icon_arrow_right"
        value="I have account"
        icon={images["topRightPurpleArrow"]}
        onClick={() => setisRegistered(true)}
      />
    </form>
  );
};

export default Register;
