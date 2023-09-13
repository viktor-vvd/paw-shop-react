import React from "react";

const Button = ({
  icon = null,
  value,
  title = value,
  onClick = null,
  type = null,
  className = null,
  iconClassName=null,
}) => {
  return (
    <button
      type={type}
      className={className ? "button " + className : "button"}
      title={title}
      onClick={onClick}
    >
      <span className="button__text">{value}</span>
      {icon && <img className={iconClassName ? "button__icon " + iconClassName : "button__icon"} src={icon} alt="icon" width="20" height="20"/>}
    </button>
  );
};

export default Button;
