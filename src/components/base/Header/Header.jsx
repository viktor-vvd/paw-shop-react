import React, { useEffect, useState } from "react";
import images from "@imports/ImagesImport";
import Menu from "@components/base/Header/Menu";
import { useDispatch } from "react-redux";
import { setAuthModal, setCartModal } from "redux/reducers/modalsSlice";
import Image from "../Image";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        offset > 3
          ? "container-horisontal outer__container header header_scrolled"
          : "container-horisontal outer__container header"
      }
    >
      <div className="container-horisontal container header__container">
        <Link to="/">
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
        </Link>
        <nav className="header__nav">
          <ul className="container-horisontal nav__list">
            <li className="nav__list__item">
              <Link to="/catalog/1">
                For <b>CAT</b>
              </Link>
            </li>
            <li className="nav__list__item">
              <Link to="/catalog/2">
                For <b>DOG</b>
              </Link>
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
