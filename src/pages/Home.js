import React from "react";
import images from "imports/ImagesImport";
import Banner from "components/Home/Banner";
import Promo from "components/Home/Promo";
import PopularProducts from "components/Home/PopularProducts";

const Home = () => {
  return (
    <main className="main container-vertical">
      <Banner />
      <Promo />
      <PopularProducts />
      <section className="container-vertical outer__container section-comments">
        <img
          className="section-comments__background PC"
          src={images["dogpurplebg.png"]}
          alt="bg"
        />
        <img
          className="section-comments__background MD"
          src={images["dogpurplebgMD.png"]}
          alt="bg"
        />
        <img
          className="section-comments__background SM"
          src={images["dogpurplebgSM.png"]}
          alt="bg"
        />
        <div className="container-vertical section-comments__container">
          <div className="section-comments__title__container">
            <span className="title section-comments__title_dark">Reviews</span>
            <h2 className="title section-comments__title">Reviews</h2>
          </div>
          <div className="container-horisontal comments__slider__container">
            <img
              className="slider__button"
              src={images["leftbuttonarrow.png"]}
              alt="left"
            />
            <div className="container-horisontal container comments__slider">
              <div className="container-vertical comment-card">
                <span className="comment-card__date">19.07.2022</span>
                <div className="container-horisontal comment-card__header">
                  <span className="comment-card__name">Alex</span>
                  <div className="container-horisontal comment-card__stars">
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                  </div>
                </div>
                <span className="text_light">
                  Dog loved this thing even before I got it completely out of
                  the box. Within 1 hr. cover was torn and inside exposed.
                  Tossing, chewing and shaking went on for an hour straight.
                  Removed it from her mouth and all goes back to good. Might
                  have been a one off, but be watchful. Would buy again.{" "}
                </span>
                <div className="container-horisontal comment-card__photos">
                  <img
                    className="comment-card__photos__item"
                    src={images["comment1image1.png"]}
                    alt="comment img"
                  />
                  <img
                    className="comment-card__photos__item"
                    src={images["comment1image1.png"]}
                    alt="comment img"
                  />
                  <img
                    className="comment-card__photos__item comment-card__photos__item_MD"
                    src={images["comment1image3.png"]}
                    alt="comment img"
                  />
                  <div className="container-horisontal comment-card__photos__item comment-card__photos__more">
                    <span className="text comment-card__photos__more__text">
                      +5
                    </span>
                  </div>
                </div>
                <a
                  className="container-horisontal text__button comment-card__link"
                  href="/"
                >
                  See the product{" "}
                  <img
                    className="comment-card__link__icon"
                    src={images["toprightpurplearrow.png"]}
                    alt="arrow"
                  />
                </a>
              </div>
              <div className="container-vertical comment-card">
                <span className="comment-card__date">15.07.2022</span>
                <div className="container-horisontal comment-card__header">
                  <span className="comment-card__name">Richard</span>
                  <div className="container-horisontal comment-card__stars">
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                  </div>
                </div>
                <span className="text_light">
                  This is our dog's favorite toy. She plays with it indoors and
                  outdoors. It is not very durable, because she is a chewer. She
                  pulls the "threads" out one by one until she takes the cover
                  off, then chews the foam football apart bite by bite. We let
                  her play indoors with it until she starts leaving little white
                  pieces of foam around house, then we leave it outdoors until
                  she pulls the cover off and destroys the rest of it.{" "}
                </span>
                <a
                  className="container-horisontal text__button comment-card__link"
                  href="/"
                >
                  {" "}
                  See the product{" "}
                  <img
                    className="comment-card__link__icon"
                    src={images["toprightpurplearrow.png"]}
                    alt="arrow"
                  />
                </a>
              </div>
              <div className="container-vertical comment-card">
                <span className="comment-card__date">19.07.2022</span>
                <div className="container-horisontal comment-card__header">
                  <span className="comment-card__name">Alex</span>
                  <div className="container-horisontal comment-card__stars">
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                    <img
                      className="comment-card__stars__item"
                      src={images["star.png"]}
                      alt="star"
                    />
                  </div>
                </div>
                <span className="text_light">
                  Our 6 month old German Shepherd puppy loves this dragon! It
                  has quickly become a favorite in just a few days. The dragon's
                  wings make a crinkle noise and it's belly squeaks. It's
                  perfect for fetch and tug of war. He also loves to just carry
                  it around, squeak and shake It. Will definitely buy more toys.{" "}
                </span>
                <div className="container-horisontal comment-card__photos">
                  <img
                    className="comment-card__photos__item"
                    src={images["comment3image1.png"]}
                    alt="comment img"
                  />
                  <img
                    className="comment-card__photos__item"
                    src={images["comment1image1.png"]}
                    alt="comment img"
                  />
                </div>
                <a
                  className="container-horisontal text__button comment-card__link"
                  href="/"
                >
                  See the product{" "}
                  <img
                    className="comment-card__link__icon"
                    src={images["toprightpurplearrow.png"]}
                    alt="arrow"
                  />
                </a>
              </div>
            </div>
            <ul className="comments__slider__dots slider__dots">
              <li className="slider__dots__item slider__dots__item_active"></li>
              <li className="slider__dots__item"></li>
              <li className="slider__dots__item"></li>
              <li className="slider__dots__item MD"></li>
              <li className="slider__dots__item SM"></li>
              <li className="slider__dots__item SM"></li>
            </ul>
            <img
              className="slider__button"
              src={images["rightbuttonarrow.png"]}
              alt="right"
            />
          </div>
        </div>
      </section>
      <section className="container-horisontal outer__container section-about">
        <img
          className="section-about__background section-about__background_first"
          src={images["paws1.png"]}
          alt="paws"
        />
        <img
          className="section-about__background section-about__background_second"
          src={images["paws2.png"]}
          alt="paws"
        />
        <div className="container-vertical container section-about__container">
          <h2 className="title">About us</h2>
          <div className="container-vertical about__container">
            <div className="container-horisontal about__content__container">
              <div className="container-horisontal about__content about__content_left">
                <img
                  className="about__image"
                  src={images["aboutimage1.png"]}
                  alt="img"
                />
              </div>
              <div className="container-vertical about__content">
                <h3 className="subtitle">
                  <span className="text_accent">Playtime</span> is your pup’s{" "}
                  <span className="text_accent">favorite time</span>. Your dog
                  needs play for his overall health and happiness.
                </h3>
                <p className="text_light">
                  Dogs are pack animals, requiring physical play with you and
                  other dogs. One of the most important benefits of doggie play
                  is that it’s a bonding opportunity for you and your canine
                  companion. Another benefit of pup play is exercise.
                </p>
                <p className="text_light">
                  Playtime is also a great opportunity for puppy teaching
                  moments. You can train your dog through play, and with dog
                  toys. We carries the best dog toys from top dog toy makers
                  like USA Bones & Chews, Nylabone, and KONG. There are dog
                  balls and dog fetch toys, dog chew toys, plush dog toys,
                  interactive dog toys, dog puzzles and rope and tug dog toys
                  for your pup to play with.
                </p>
                <p className="text_light">
                  Plush dog toys are great for canine’s seeking comfort as they
                  can ease some pup anxiety. Interactive dog toys help stimulate
                  your pup’s mind, which is the key to a fulfilling life. If
                  your pup loves to chew on your prized possessions, dog chew
                  toys can come to the rescue.
                </p>
              </div>
            </div>
            <div className="container-horisontal about__content__container about__content__container_bottom">
              <div className="container-vertical about__content">
                <h3 className="subtitle">
                  Cats <span className="text_accent">love to play</span>, but
                  did you know that playtime is vital activity for kittens and
                  adult cats too?
                </h3>
                <p className="text_light">
                  Here you’ll find the best cat toys for every type of cat
                  personality. For the active cat who’s agenda-driven, toys
                  provide a much-needed physical release.
                </p>
                <p className="text_light">
                  Having this type of cat personality means your cat loves to
                  hunt, jump and run. If your feline friend matches this
                  description, they’ll most likely prefer a playtime that
                  includes cat ball toys, cat feather wands, and cat wands &
                  teaser toys. Cat balls and chaser toys allow cats to swat,
                  chase and pounce—all their favorite activities.
                </p>
                <p className="text_light">
                  The best teaser toys are made with bright colors or sound
                  effects to help entice curious cats. Teaser toys allow you to
                  lift the object of desire above the cat where they can jump to
                  reach. In addition, cat tunnels, cat chew toys and catnip toys
                  are playtime favorites that your cat will love because they
                  each bring something new to the table.
                </p>
              </div>
              <div className="container-horisontal about__content">
                <img
                  className="about__image"
                  src={images["aboutimage2.png"]}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
