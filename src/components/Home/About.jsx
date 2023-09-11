import React from "react";
import images from "@imports/ImagesImport";

const About = () => {
  return (
    <section className="container-horisontal outer__container section-about">
      <img
        className="section-about__background section-about__background_first"
        src={images["paws1"]}
        alt="paws"
      />
      <img
        className="section-about__background section-about__background_second"
        src={images["paws2"]}
        alt="paws"
      />
      <div className="container-vertical container section-about__container">
        <h2 className="title">About us</h2>
        <div className="container-vertical about__container">
          <div className="container-horisontal about__content__container">
            <div className="container-horisontal about__content about__content_left">
              <img
                className="about__image"
                src={images["aboutimage1"]}
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
                other dogs. One of the most important benefits of doggie play is
                that it’s a bonding opportunity for you and your canine
                companion. Another benefit of pup play is exercise.
              </p>
              <p className="text_light">
                Playtime is also a great opportunity for puppy teaching moments.
                You can train your dog through play, and with dog toys. We
                carries the best dog toys from top dog toy makers like USA Bones
                & Chews, Nylabone, and KONG. There are dog balls and dog fetch
                toys, dog chew toys, plush dog toys, interactive dog toys, dog
                puzzles and rope and tug dog toys for your pup to play with.
              </p>
              <p className="text_light">
                Plush dog toys are great for canine’s seeking comfort as they
                can ease some pup anxiety. Interactive dog toys help stimulate
                your pup’s mind, which is the key to a fulfilling life. If your
                pup loves to chew on your prized possessions, dog chew toys can
                come to the rescue.
              </p>
            </div>
          </div>
          <div className="container-horisontal about__content__container about__content__container_bottom">
            <div className="container-vertical about__content">
              <h3 className="subtitle">
                Cats <span className="text_accent">love to play</span>, but did
                you know that playtime is vital activity for kittens and adult
                cats too?
              </h3>
              <p className="text_light">
                Here you’ll find the best cat toys for every type of cat
                personality. For the active cat who’s agenda-driven, toys
                provide a much-needed physical release.
              </p>
              <p className="text_light">
                Having this type of cat personality means your cat loves to
                hunt, jump and run. If your feline friend matches this
                description, they’ll most likely prefer a playtime that includes
                cat ball toys, cat feather wands, and cat wands & teaser toys.
                Cat balls and chaser toys allow cats to swat, chase and
                pounce—all their favorite activities.
              </p>
              <p className="text_light">
                The best teaser toys are made with bright colors or sound
                effects to help entice curious cats. Teaser toys allow you to
                lift the object of desire above the cat where they can jump to
                reach. In addition, cat tunnels, cat chew toys and catnip toys
                are playtime favorites that your cat will love because they each
                bring something new to the table.
              </p>
            </div>
            <div className="container-horisontal about__content">
              <img
                className="about__image"
                src={images["aboutimage2"]}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
