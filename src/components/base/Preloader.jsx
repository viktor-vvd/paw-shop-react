import React from "react";
import Image from "./Image";
import images from "imports/ImagesImport";

const Preloader = ({zIndex=10, className=null}) => {
  return (
    <div className={className?("container-vertical preloader "+className):("container-vertical preloader")} style={{ zIndex: zIndex }}>
      <Image
        className="preloader__gif"
        width="230"
        height="194"
        src={images["loadingGif"]}
        loading="lazy"
        alt="product Image"
      />
    </div>
  );
};

export default Preloader;
