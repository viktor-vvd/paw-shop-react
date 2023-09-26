import React, { useState } from "react";
import ModalLayout from "../ModalLayout/ModalLayout";
import Register from "./Register";
import SignIn from "./SignIn";
import Button from "components/base/Button";
import images from "imports/ImagesImport";
import ForgotPassword from "./ForgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModal } from "redux/reducers/modalsSlice";

const AuthModal = () => {
  const dispatch = useDispatch();
  const authModalVisible = useSelector((state) => state.modals.authModal);
  const [isRegistered, setisRegistered] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);
  return (
    <>
      <ModalLayout
        name={
          isRegistered
            ? forgotPassword
              ? "Reset password"
              : "Sign in"
            : "Register"
        }
        setModalVisible={() => dispatch(setAuthModal(false))}
        isVisible={authModalVisible}
      >
        {isRegistered ? (
          forgotPassword ? (
            <ForgotPassword setForgotPassword={setForgotPassword} />
          ) : (
            <SignIn
              setisRegistered={setisRegistered}
              setForgotPassword={setForgotPassword}
            />
          )
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
