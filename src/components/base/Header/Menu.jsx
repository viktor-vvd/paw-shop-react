import { ClosePurple } from "public/svgComponents";
import SvgMenu from "public/svgComponents/Menu";
import React, { useState } from "react";

const Menu = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <div className="menu__container">
      <div className="menu__button" onClick={() => setshowMenu(true)}>
        <SvgMenu alt="menu" width="37" height="21" />
      </div>
      <div className={showMenu?"overlay show":"overlay hide"} ></div>

      <div
        className={
          showMenu
            ? "container-vertical menu show"
            : "container-vertical menu hide"
        }
      >
        <div className="container-horizontal menu__header">
          <h2 className="title">Menu</h2>
          <ClosePurple
            className="close__icon"
            loading="lazy" alt="close"
            width="32" height="32"
            onClick={() => setshowMenu(false)}
          />
        </div>
        <hr />
        <div className="container-vertical menu__bottom">
          <nav className="header__nav menu__nav">
            <ul className="container-vertical nav__list">
              <li className="nav__list__item">
                <a href="/">Home</a>
              </li>
              <li className="nav__list__item">
                <a href="/catalog">
                  For <b className="cat">CAT</b>
                </a>
              </li>
              <li className="nav__list__item">
                <a href="/">
                  For <b className="dog">DOG</b>
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
        </div>
      </div>
    </div>
  );
};

export default Menu;
