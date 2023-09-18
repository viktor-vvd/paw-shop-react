import React from "react";
import images from "@imports/ImagesImport";
import Menu from "@components/base/Header/Menu";
import { useDispatch } from "react-redux";
import { setAuthModal, setCartModal } from "redux/reducers/modalsSlice";
import Image from "../Image";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="container-horisontal outer__container header">
      <div className="container-horisontal container header__container">
        <div className="container-horisontal header__logo">
          <Image
            className="logo__icon"
            src={images["logo"]}
            alt="logo"
            width="37"
            height="43"
          />
          <h1 className="logo__text">PawShop</h1>
        </div>
        <nav className="header__nav">
          <ul className="container-horisontal nav__list">
            <li className="nav__list__item">
              <a href="/catalog">
                For <b>CAT</b>
              </a>
            </li>
            <li className="nav__list__item">
              <a href="/">
                For <b>DOG</b>
              </a>
            </li>
            <li className="nav__list__item">
              <a href="/">Contacts</a>
            </li>
            <li className="nav__list__item">
              <a href="/">Tracking</a>
            </li>
          </ul>
        </nav>
        <a className="phone" href="tel:1-800-055-5566">
          1-800-055-5566
        </a>
        <div className="container-horisontal header__buttons">
          <div>
            <Image
              className="profile"
              src={images["user"]}
              loading="lazy"
              alt="user"
              width="26"
              height="26"
              onClick={() => dispatch(setAuthModal(true))}
            />
          </div>
          <div className="container-horisontal header__cart">
            <div
              className="container-horisontal header__cart__button"
              onClick={() => dispatch(setCartModal(true))}
            >
              <Image
                className="header__cart__icon"
                src={images["basket"]}
                loading="lazy"
                alt="cart"
                width="26"
                height="26"
              />
              <span className="header__cart__number">2</span>
            </div>
            <span className="header__cart__sum">$8</span>
          </div>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
