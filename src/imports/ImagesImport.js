function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "").replace("public/images/","")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("public/images", false, /\.(png|jpe?g|svg)$/)
);

export default images;
