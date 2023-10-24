import * as React from "react";
const SvgStar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={30}
    fill="none"
    viewBox="0 0 34 30"
    {...props}
  >
    <path
      fill="url(#star_svg__a)"
      d="M27.334 29.915c-1.21.798-8.97-4.262-10.457-4.273-1.487-.011-9.336 4.932-10.531 4.116C5.15 28.942 7.96 20.56 7.513 19.25 7.065 17.94-.45 12.572.021 11.27.492 9.967 9.991 9.846 11.2 9.048 12.41 8.25 15.614-.01 17.1 0c1.487.011 4.547 8.319 5.742 9.135 1.196.816 10.691 1.079 11.139 2.388.448 1.31-7.16 6.565-7.63 7.867-.471 1.303 2.193 9.726.983 10.525Z"
    />
    <defs>
      <linearGradient
        id="star_svg__a"
        x1={15.465}
        x2={25.68}
        y1={-0.608}
        y2={27.512}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E9A904" />
        <stop offset={1} stopColor="#FFC805" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgStar;
