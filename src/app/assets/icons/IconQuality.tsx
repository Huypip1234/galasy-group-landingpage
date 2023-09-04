import * as React from "react";
import { SVGProps } from "react";
const IconQuality = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <g
      stroke="#8E8E8E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      clipPath="url(#a)"
    >
      <path d="M47.578 30c0 9.708-7.87 17.578-17.578 17.578-9.708 0-17.578-7.87-17.578-17.578 0-9.708 7.87-17.578 17.578-17.578 9.708 0 17.578 7.87 17.578 17.578Z" />
      <path d="M38.79 24.727 28.241 35.273l-7.031-7.03" />
      <path d="M27.72 2.597a3.516 3.516 0 0 1 4.56 0l4.568 4.032 7.73-.598a3.516 3.516 0 0 1 3.69 2.68l1.55 6.419 6.754 4.043a3.516 3.516 0 0 1 1.409 4.336l-2.669 6.466 2.669 6.466a3.516 3.516 0 0 1-1.409 4.337l-6.755 4.043-1.55 6.42a3.516 3.516 0 0 1-3.688 2.679l-7.655-.593-4.644 4.076a3.516 3.516 0 0 1-4.56 0l-4.644-4.075-7.655.592a3.516 3.516 0 0 1-3.688-2.68l-1.557-6.444-6.743-4.018a3.516 3.516 0 0 1-1.409-4.337l2.669-6.466-2.669-6.466a3.515 3.515 0 0 1 1.41-4.336l6.164-3.663 2.134-6.8a3.516 3.516 0 0 1 3.69-2.68l7.73.599 4.568-4.032Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h60v60H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconQuality;
