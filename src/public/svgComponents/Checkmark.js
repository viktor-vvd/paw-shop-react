import * as React from "react";
const SvgCheckmark = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={31}
    fill="none"
    viewBox="0 0 31 31"
    {...props}
  >
    <circle cx={15.705} cy={16} r={15} fill="#8936FF" />
    <path
      stroke="#fff"
      strokeWidth={3}
      d="M6.852 16.813 15.915 24s4.783-17.25 8.937-23"
    />
  </svg>
);
export default SvgCheckmark;
