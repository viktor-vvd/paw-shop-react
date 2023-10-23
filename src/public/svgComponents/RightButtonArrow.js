import * as React from "react";
const SvgRightButtonArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={59}
    height={59}
    fill="none"
    viewBox="0 0 59 59"
    {...props}
  >
    <circle
      cx={29.5}
      cy={29.5}
      r={29.5}
      fill="#fff"
      transform="rotate(-180 29.5 29.5)"
    />
    <path stroke="#000" d="m24 41 12-12-12-12" />
  </svg>
);
export default SvgRightButtonArrow;
