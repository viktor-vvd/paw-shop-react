import * as React from "react";
const SvgTopLeftArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={11}
    fill="none"
    viewBox="0 0 11 11"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={0.5}
      d="M10.5 10.811 1.123 1.19m0 0-.098 7.499m.098-7.5 7.499.098"
    />
  </svg>
);
export default SvgTopLeftArrow;
