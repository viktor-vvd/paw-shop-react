import React from "react";
import images from "@imports/ImagesImport";

const ModalLayout = ({
  name = "Modal",
  zIndex = 13,
  setModalVisible,
  children,
  isVisible
}) => {
  return (
    <>
      <div className={isVisible?"overlay show":"overlay hide"} style={{ zIndex: zIndex }}></div>
      <div className={isVisible?"modal show":"modal hide"} style={{ zIndex: zIndex }}>
        <div className="container-horisontal modal__header">
          <h2 className="title">{name}</h2>
          <img
            className="close__icon"
            src={images["closePurple"]}
            loading="lazy"
            alt="close"
            width="32"
            height="32"
            onClick={setModalVisible}
          />
        </div>
        <hr />
        <div className="modal__container">{children}</div>
      </div>
    </>
  );
};

export default ModalLayout;
