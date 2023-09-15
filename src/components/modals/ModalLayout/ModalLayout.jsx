import React from "react";
import images from "@imports/ImagesImport";
import Image from "components/base/Image";

const ModalLayout = ({
  name = "Modal",
  zIndex = 13,
  setModalVisible,
  children,
  isVisible,
  icon=null,
}) => {
  return (
    <>
      <div
        className={isVisible ? "overlay show" : "overlay hide"}
        style={{ zIndex: zIndex }}
      ></div>
      <div
        className={isVisible ? "modal show" : "modal hide"}
        style={{ zIndex: zIndex }}
      >
        <div className="container-horisontal modal__top">
          <div className="container-horisontal modal__header">
            {icon && (
              <Image
                className="modal__icon"
                src={icon}
                loading="lazy"
                alt="icon"
                width="32"
                height="32"
              />
            )}
            <h2 className="title">{name}</h2>
          </div>
          <Image
            className="modal__icon close__icon"
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
