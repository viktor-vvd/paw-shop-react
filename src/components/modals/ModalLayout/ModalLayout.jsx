import React from "react";
import images from "@imports/ImagesImport";

const ModalLayout = ({
  name = "Modal",
  zIndex = 13,
  setModalVisible,
  children,
}) => {
  return (
    <>
      <div className="overlay" style={{ zIndex: zIndex }}></div>
      <div className="modal" style={{ zIndex: zIndex }}>
        <div className="container-horisontal modal__header">
          <h2 className="title">{name}</h2>
          <img
            className="close__icon"
            src={images["closePurple"]}
            loading="lazy"
            alt="close"
            width="32"
            height="32"
            /* onClick={() => setshowMenu(false)} */
          />
        </div>
        <hr />
        <div className="modal__container">{children}</div>
      </div>
    </>
  );
};

export default ModalLayout;
