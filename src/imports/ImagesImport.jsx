import bg1 from "@public/images/bg1.webp";
import ball from "@public/images/ball.webp";
import bone from "@public/images/bone.webp";
import aboutimage1 from "@public/images/aboutimage1.webp";
import aboutimage2 from "@public/images/aboutimage2.webp";
import applepay from "@public/images/applepay.webp";
import cat from "@public/images/cat.webp";
import comment1image1 from "@public/images/comment1image1.png?as=webp";
import comment1image3 from "@public/images/comment1image3.png?as=webp";
import comment3image1 from "@public/images/comment3image1.png?as=webp";
import dog from "@public/images/dog.webp";
import dogbg from "@public/images/dogbg.webp";
import dogbgSM from "@public/images/dogbgSM.webp";
import footerbg1 from "@public/images/footerbg1.webp";
import footerbg2 from "@public/images/footerbg2.webp";
import googlepay from "@public/images/googlepay.webp";
import mastercard from "@public/images/mastercard.webp";
import paws1 from "@public/images/paws1.webp";
import paws2 from "@public/images/paws2.webp";
import paws3 from "@public/images/paws3.webp";
import product1 from "@public/images/product1.png?as=webp";
import product2 from "@public/images/product2.png?as=webp";
import product3 from "@public/images/product3.png?as=webp";
import product4 from "@public/images/product4.png?as=webp";
import promoimgMD from "@public/images/promoimgMD.webp";
import promoimgPC from "@public/images/promoimgPC.webp";
import promoimgSM from "@public/images/promoimgSM.webp";
import visa from "@public/images/visa.webp";
import visa1 from "@public/images/visa1.webp";
import defaultImg from "@public/images/default.webp";
import loadingGif from "@public/images/loadingGif.gif";
import mastercard2 from "@public/images/mastercard2.webp";
import visa2 from "@public/images/visa2.webp";
import paypal from "@public/images/paypal.webp";

const images = {
  bg1: bg1,
  ball: ball,
  bone: bone,
  aboutimage1: aboutimage1,
  aboutimage2: aboutimage2,
  applepay: applepay,
  cat: cat,
  comment1image1: comment1image1,
  comment1image3: comment1image3,
  comment3image1: comment3image1,
  dog: dog,
  dogbg: dogbg,
  dogbgSM: dogbgSM,
  footerbg1: footerbg1,
  footerbg2: footerbg2,
  googlepay: googlepay,
  mastercard: mastercard,
  paws1: paws1,
  paws2: paws2,
  paws3: paws3,
  product1: product1,
  product2: product2,
  product3: product3,
  product4: product4,
  promoimgMD: promoimgMD,
  promoimgPC: promoimgPC,
  promoimgSM: promoimgSM,
  visa: visa,
  visa1: visa1,
  defaultImg: defaultImg,
  loadingGif: loadingGif,
  mastercard2: mastercard2,
  visa2: visa2,
  paypal: paypal,
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
