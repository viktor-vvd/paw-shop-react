import * as React from "react";
const SvgArrowDisabled = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={42}
    fill="none"
    viewBox="0 0 41 42"
    {...props}
  >
    <circle
      cx={20.5}
      cy={21}
      r={20.5}
      fill="#F8F2FF"
      transform="rotate(-180 20.5 21)"
    />
    <path stroke="#fff" d="m16.078 30.245 9.648-9.647-9.648-9.647" />
  </svg>
);
export default SvgArrowDisabled;
