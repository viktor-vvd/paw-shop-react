import * as React from "react";
const SvgUser = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    viewBox="0 0 27 27"
    {...props}
  >
    <path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.746 16.75a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.893 22.437a11.379 11.379 0 0 1 19.705 0"
    />
  </svg>
);
export default SvgUser;
