import * as React from "react";
const SvgGallery = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#8936FF"
      d="M17 0H3a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14c.182 0 .362-.022.54-.055.066-.012.129-.03.193-.047a2.965 2.965 0 0 0 .531-.188c.084-.039.165-.085.245-.132.075-.044.151-.086.222-.136l.018-.011.021-.018c.014-.011.03-.017.043-.03.007-.006.01-.015.015-.022A2.987 2.987 0 0 0 20 17V3a3.003 3.003 0 0 0-3-3Zm.575 18.905A1.95 1.95 0 0 1 17 19H3a2.003 2.003 0 0 1-2-2v-4.725l3.763-3.762a1.753 1.753 0 0 1 2.474 0l3.405 3.404.005.007 6.969 6.969-.041.012ZM19 17c0 .516-.202.982-.523 1.337l-6.769-6.768 1.056-1.055a1.787 1.787 0 0 1 2.472 0L19 14.277V17Zm0-4.137-3.057-3.056a2.75 2.75 0 0 0-3.886 0L11 10.862 7.944 7.806a2.753 2.753 0 0 0-3.888 0L1 10.86V3a2.003 2.003 0 0 1 2-2h14a2.003 2.003 0 0 1 2 2v9.863ZM11.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
    />
  </svg>
);
export default SvgGallery;
