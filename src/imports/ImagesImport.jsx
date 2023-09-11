function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[(item.replace("./", "").replace("public/images/","")).split(".")[0]] = r(item);
  });
  console.log(images);
  return images;
}

const images = importAll(
  require.context("@public/images", false, /\.(png|jpe?g|svg|webp)$/)
);

export default images;
