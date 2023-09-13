import React from "react";
import Button from "components/base/Button";
import images from "imports/ImagesImport";

const Register = ({ setisRegistered }) => {
  return (
    <form className="container-vertical modal__form">
      <input
        className="text_light form__input"
        name="name"
        type="text"
        placeholder="Full name"
      />
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
      <input
        className="text_light form__input"
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
      />
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
