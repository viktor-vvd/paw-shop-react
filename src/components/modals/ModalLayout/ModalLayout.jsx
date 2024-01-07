import { ClosePurple } from "public/svgComponents";
import React from "react";

const ModalLayout = ({
  name = "Modal",
  zIndex = 13,
  setModalVisible,
  children,
  isVisible,
  Icon=null,
}) => {
  return (
    <>
      <div 
        className={isVisible ? "overlay show" : "overlay hide"}
        style={{ zIndex: zIndex }}
      ></div>
      <dialog open={isVisible}
        className={isVisible ? "modal show" : "modal hide"}
        style={{ zIndex: zIndex }}
      >
        <div className="container-horizontal modal__top">
          <div className="container-horizontal modal__header">
            {Icon && (
              <Icon
                className="modal__icon"
                loading="lazy"
                alt="icon"
                width="32"
                height="32"
              />
            )}
            <h2 className="title">{name}</h2>
          </div>
          <ClosePurple
            className="modal__icon close__icon"
            loading="lazy"
            alt="close"
            width="32"
            height="32"
            onClick={setModalVisible}
          />
        </div>
        <hr />
        <div className="modal__container">{children}</div>
      </dialog>
    </>
  );
};

export default ModalLayout;
