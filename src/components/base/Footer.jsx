import React from "react";

const Footer = ({images=null}) => {
  return (
    <footer className="container-vertical footer">
      <div className="container-horisontal outer__container footer_top">
        <div className="container-horisontal container footer__promo">
          <img
            className="footer__background_toy"
            src={images['footerbg1']}
            alt="img"
          />
          <img
            className="footer__background_ball"
            src={images['footerbg2']}
            alt="img"
          />
          <span className="footer__promo__text">
            Get the latest news and promotions. No spam, just a few emails per
            year.
          </span>
          <form className="container-horisontal footer__promo__form">
            <input
              className="text_light footer__promo__input"
              type="text"
              placeholder="Your e-mail"
            />
            <button className="button button__text footer__promo__button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container-vertical outer__container footer_bottom">
        <div className="container-horisontal container footer__info__container">
          <div className="container-vertical footer__contacts__wrapper">
            <div className="container-horisontal footer__logo__container">
              <img
                className="footer__logo"
                src={images['logoWhite']}
                alt="logo"
              />
              <h2 className="logo__text footer__logo__text">PawShop</h2>
            </div>
            <div className="container-horisontal footer__phone__wrapper">
              <img
                className="footer__phone__logo"
                src={images['phone']}
                alt="logo"
              />
              <a className="phone footer__phone" href="tel:1-800-055-5566">
                1-800-055-5566
              </a>
            </div>
            <div className="container-horisontal footer__socials">
              <div className="container-horisontal social">
                <img
                  className="social__icon"
                  src={images['insta']}
                  alt="logo"
                />
              </div>
              <div className="container-horisontal social">
                <img
                  className="social__icon"
                  src={images['facebook']}
                  alt="logo"
                />
              </div>
              <div className="container-horisontal social">
                <img
                  className="social__icon social__icon_twitter"
                  src={images['twitter']}
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="container-horisontal footer__nav__container">
            <nav className="container-vertical footer__nav">
              <a className="text footer__nav__link" href="/">
                Home
              </a>
              <a className="text footer__nav__link" href="/">
                Cat supplies
              </a>
              <a className="text footer__nav__link" href="/">
                Dog supplies
              </a>
              <a className="text footer__nav__link" href="/">
                Contacts
              </a>
              <a className="text footer__nav__link" href="/">
                Tracking
              </a>
            </nav>
            <nav className="container-vertical footer__nav">
              <a className="text footer__nav__link" href="/">
                Terms of Service
              </a>
              <a className="text footer__nav__link" href="/">
                Refund policy
              </a>
              <a className="text footer__nav__link" href="/">
                Privacy policy
              </a>
              <a className="text footer__nav__link" href="/">
                Shipping policy
              </a>
              <a className="text footer__nav__link" href="/">
                FAQ
              </a>
            </nav>
          </div>
        </div>
        <div className="container-vertical container footer__payment-copyright__container">
          <hr className="container footer__divider" />
          <div className="container-horisontal container footer__payment-copyright__wrapper">
            <div className="container-horisontal footer__payment">
              <img
                className="footer__payment__icon"
                src={images['googlepay']}
                alt="payment"
              />
              <img
                className="footer__payment__icon"
                src={images['applepay']}
                alt="payment"
              />
              <img
                className="footer__payment__icon"
                src={images['mastercard']}
                alt="payment"
              />
              <img
                className="footer__payment__icon"
                src={images['visa']}
                alt="payment"
              />
              <img
                className="footer__payment__icon"
                src={images['visa1']}
                alt="payment"
              />
            </div>
            <span className="text footer__copyright">
              Copyright © 2022. All Rights Reserved by SleepGo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
