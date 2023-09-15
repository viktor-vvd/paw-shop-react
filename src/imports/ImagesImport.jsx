import logo from "@public/images/logo.svg";
import logoWhite from "@public/images/logoWhite.svg";
import bg1 from "@public/images/bg1.webp";
import ball from "@public/images/ball.webp";
import bone from "@public/images/bone.webp";
import aboutimage1 from "@public/images/aboutimage1.webp";
import aboutimage2 from "@public/images/aboutimage2.webp";
import applepay from "@public/images/applepay.webp";
import basket from "@public/images/basket.svg";
import catIcon from "@public/images/catIcon.svg";
import cat from "@public/images/cat.webp";
import checkmark from "@public/images/checkmark.svg";
import closePurple from "@public/images/closePurple.svg";
import comment1image1 from "@public/images/comment1image1.png?as=webp";
import comment1image3 from "@public/images/comment1image3.png?as=webp";
import comment3image1 from "@public/images/comment3image1.png?as=webp";
import dog from "@public/images/dog.webp";
import dogbg from "@public/images/dogbg.webp";
import dogbgSM from "@public/images/dogbgSM.webp";
import dogIcon from "@public/images/dogIcon.svg";
import facebook from "@public/images/facebook.svg";
import footerbg1 from "@public/images/footerbg1.webp";
import footerbg2 from "@public/images/footerbg2.webp";
import googlepay from "@public/images/googlepay.webp";
import insta from "@public/images/insta.svg";
import leftButtonArrow from "@public/images/leftButtonArrow.svg";
import mastercard from "@public/images/mastercard.webp";
import menu from "@public/images/menu.svg";
import paws1 from "@public/images/paws1.webp";
import paws2 from "@public/images/paws2.webp";
import phone from "@public/images/phone.svg";
import product1 from "@public/images/product1.png?as=webp";
import product2 from "@public/images/product2.png?as=webp";
import product3 from "@public/images/product3.png?as=webp";
import product4 from "@public/images/product4.png?as=webp";
import promoimgMD from "@public/images/promoimgMD.webp";
import promoimgPC from "@public/images/promoimgPC.webp";
import promoimgSM from "@public/images/promoimgSM.webp";
import returnIcon from "@public/images/return.svg";
import rightButtonArrow from "@public/images/rightButtonArrow.svg";
import star from "@public/images/star.svg";
import support from "@public/images/support.svg";
import topLeftArrow from "@public/images/topLeftArrow.svg";
import topRightArrow from "@public/images/topRightArrow.svg";
import topRightPurpleArrow from "@public/images/topRightPurpleArrow.svg";
import twitter from "@public/images/twitter.svg";
import user from "@public/images/user.svg";
import visa from "@public/images/visa.webp";
import visa1 from "@public/images/visa1.webp";
import google from "@public/images/google.svg";
import facebookColor from "@public/images/facebookColor.svg";
import cartPurple from "@public/images/cartPurple.svg";
import deleteIcon from "@public/images/delete.svg";

const images = {
  logo: logo,
  logoWhite: logoWhite,
  bg1: bg1,
  ball: ball,
  bone: bone,
  aboutimage1: aboutimage1,
  aboutimage2: aboutimage2,
  applepay: applepay,
  basket: basket,
  catIcon: catIcon,
  cat: cat,
  checkmark: checkmark,
  closePurple: closePurple,
  comment1image1: comment1image1,
  comment1image3: comment1image3,
  comment3image1: comment3image1,
  dog: dog,
  dogbg: dogbg,
  dogbgSM: dogbgSM,
  dogIcon: dogIcon,
  facebook: facebook,
  footerbg1: footerbg1,
  footerbg2: footerbg2,
  googlepay: googlepay,
  insta: insta,
  leftButtonArrow: leftButtonArrow,
  mastercard: mastercard,
  menu: menu,
  paws1: paws1,
  paws2: paws2,
  phone: phone,
  product1: product1,
  product2: product2,
  product3: product3,
  product4: product4,
  promoimgMD: promoimgMD,
  promoimgPC: promoimgPC,
  promoimgSM: promoimgSM,
  returnIcon: returnIcon,
  rightButtonArrow: rightButtonArrow,
  star: star,
  support: support,
  topLeftArrow: topLeftArrow,
  topRightArrow: topRightArrow,
  topRightPurpleArrow: topRightPurpleArrow,
  twitter: twitter,
  user: user,
  visa: visa,
  visa1: visa1,
  google: google,
  facebookColor: facebookColor,
  cartPurple: cartPurple,
  deleteIcon: deleteIcon,
};

/* function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "").replace("public/images/", "").split(".")[0]] =
      r(item);
  });
  console.log(images);
  return images;
} 

const images = importAll(
  require.context("@public/images", false, /\.(png|jpe?g|svg|webp)$/)
); */

export default images;
