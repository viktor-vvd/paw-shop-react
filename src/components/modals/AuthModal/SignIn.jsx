import React from "react";
import Button from "components/base/Button";
import images from "imports/ImagesImport";

const SignIn = ({ setisRegistered }) => {
  return (
    <form className="container-vertical modal__form">
      <input
        className="text_light form__input"
        name="email"
        type="email"
        placeholder="E-mail"
      />
      <input
        className="text_light form__input"
        name="password"
        type="password"
        placeholder="Password"
      />
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
