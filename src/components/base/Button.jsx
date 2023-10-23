import React from "react";
import Svg from "./Svg";

const Button = ({
  icon = null,
  value = null,
  title = value,
  onClick = null,
  type = "button",
  className = null,
  iconClassName = null,
}) => {
  return (
    <button
      type={type}
      className={className ? "button " + className : "button"}
      title={title}
      onClick={onClick}
    >
      {value && <span className="text__button">{value}</span>}
      {icon && (
        <Svg
          className={
            iconClassName ? "button__icon " + iconClassName : "button__icon"
          }
          name={icon}
          alt="icon"
          width="20"
          height="20"
        />
      )}
    </button>
  );
};

export default Button;
