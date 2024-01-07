import React from "react";
import Button from "components/base/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Cookies from "js-cookie";
import { setIsAuth, setTokens } from "redux/reducers/authSlice";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "api/authApi";
import { setAuthModal } from "redux/reducers/modalsSlice";
import { cartApi } from "api/cartApi";
import Preloader from "components/base/Preloader";
import { TopRightPurpleArrow } from "public/svgComponents";

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

  const dispatch = useDispatch();

  const [login, { isLoading , error }] = useLoginUserMutation();

  const onSubmit = async (formData) => {
    const result = await login({
      email: formData.email,
      password: formData.password,
    });
    if (result.data) {
      dispatch(setTokens(result.data.data));
      Cookies.set("access_token", result.data.data.access_token);
      Cookies.remove("cart_id", {
        path: "/",
        secure: true,
      });
      dispatch(setIsAuth(true));
      dispatch(cartApi.util.invalidateTags(['Cart']));
      dispatch(setAuthModal(false));
      reset();
      console.log(result.data);
    }
  };

  return (
    <>
    {isLoading  && <Preloader zIndex={14} />}
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
        <span className="text_light form__error">{errors.email?.message}</span>
      )}
      {error?.data.errors.email && (
        <span className="text_light form__error">{error.data.errors.email}</span>
      )}
      <input
        className={
          errors.password || error?.data.errors.password
            ? "text_light form__input form__input_error"
            : "text_light form__input"
        }
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
      {error?.data.errors.password && (
        <span className="text_light form__error">{error.data.errors.password}</span>
      )}
      <div className="container-horizontal form__middle__container">
        <label className="container-horizontal checkbox" name="remember">
          <input
            className="checkbox__input"
            type="checkbox"
            name="remember"
            defaultChecked={false}
          />
          <span className="checkmark"></span>
          <span className="container-horizontal text_light checkbox__label">
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
        Icon={TopRightPurpleArrow}
        onClick={() => setisRegistered(false)}
      />
    </form></>
  );
};

export default SignIn;
