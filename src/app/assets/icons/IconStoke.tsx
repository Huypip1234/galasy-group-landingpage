import * as React from "react";
import { SVGProps } from "react";
const IconStoke = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <g
      stroke="#848484"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      clipPath="url(#a)"
    >
      <path d="m8.372 25.028 13.723-13.723L32.38 21.591 51.627 2.344" />
      <path d="M51.627 14.023V2.343H39.948M14.401 57.656H2.344V43.828H14.4v13.828ZM36.029 57.656H23.972V34.913h12.057v22.743ZM57.656 57.656H45.599V25.998h12.057v31.658Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h60v60H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconStoke;
