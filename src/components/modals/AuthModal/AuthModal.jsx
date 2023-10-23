import React, { useState } from "react";
import ModalLayout from "../ModalLayout/ModalLayout";
import Register from "./Register";
import SignIn from "./SignIn";
import Button from "components/base/Button";
import ForgotPassword from "./ForgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModal } from "redux/reducers/modalsSlice";
import { FacebookColor, Google } from "public/svgComponents";

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
            Icon={Google}
          />
          <Button
            type="button"
            className="button_oauth"
            iconClassName="button__icon_oauth"
            value="Facebook"
            Icon={FacebookColor}
          />
        </div>
      </ModalLayout>
    </>
  );
};

export default AuthModal;
