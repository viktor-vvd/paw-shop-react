import React from "react";
import images from "@imports/ImagesImport";
import Menu from "@components/base/Header/Menu";

const Header = () => {
  return (
    <header className="container-horisontal outer__container header">
      <div className="container-horisontal container header__container">
        <div className="container-horisontal header__logo">
          <img className="logo__icon" src={images['logo.png']} alt="logo" />
          <h1 className="logo__text">PawShop</h1>
        </div>
        <nav className="header__nav">
          <ul className="container-horisontal nav__list">
            <li className="nav__list__item">
              <a href="/">
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
            <img className="profile" src={images['user.png']} alt="user" />
          </div>
          <div className="container-horisontal cart">
            <div className="container-horisontal cart__button">
              <img
                className="cart__icon"
                src={images['basket.png']}
                alt="cart"
              />
              <span className="cart__number">2</span>
            </div>
            <span className="cart__sum">$8</span>
          </div>
          <Menu/>
        </div>
      </div>
    </header>
  );
};

export default Header;
