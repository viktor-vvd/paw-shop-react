import React, { useState } from "react";
import ModalLayout from "../ModalLayout/ModalLayout";
import Register from "./Register";
import SignIn from "./SignIn";
import Button from "components/base/Button";
import images from "imports/ImagesImport";

const AuthModal = () => {
  const [isRegistered, setisRegistered] = useState(true);
  return (
    <>
      <ModalLayout name={isRegistered ? "Sign in" : "Register"}>
        {isRegistered ? (
          <SignIn setisRegistered={setisRegistered} />
        ) : (
          <Register setisRegistered={setisRegistered} />
        )}
        <div className="container-vertical oauth">
          <h3 className="subtitle">Sign In With:</h3>
          <Button
            type="button"
            className="button_oauth"
            iconClassName="button__icon_oauth"
            value="Google"
            icon={images["google"]}
          />
          <Button
            type="button"
            className="button_oauth"
            iconClassName="button__icon_oauth"
            value="Facebook"
            icon={images["facebookColor"]}
          />
        </div>
      </ModalLayout>
    </>
  );
};

export default AuthModal;
