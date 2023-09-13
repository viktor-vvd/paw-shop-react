import React from "react";
import images from "@imports/ImagesImport";

const ModalLayout = ({ name = "Modal", setModalVisible, children }) => {
  return (
    <div className="modal">
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
  );
};

export default ModalLayout;
