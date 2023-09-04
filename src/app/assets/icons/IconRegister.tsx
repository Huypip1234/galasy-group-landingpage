import * as React from "react";
import { SVGProps } from "react";
const IconRegister = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={54}
    height={54}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#F68D1D"
        d="M41.625 20.25H18V13.5h4.5a6.75 6.75 0 1 0 0-13.5H6.75a6.75 6.75 0 1 0 0 13.5h4.5v6.802C4.952 20.873 0 26.18 0 32.625v9C0 48.447 5.553 54 12.375 54h29.25C48.447 54 54 48.447 54 41.625v-9c0-6.824-5.553-12.375-12.375-12.375ZM6.75 32.625A5.63 5.63 0 0 1 12.375 27h29.25a5.63 5.63 0 0 1 5.625 5.625v9c0 .385-.038.76-.112 1.125H6.861a5.628 5.628 0 0 1-.112-1.125v-9Zm4.5 2.25a3.376 3.376 0 0 1 6.75 0 3.376 3.376 0 0 1-6.75 0Zm12.375 0a3.376 3.376 0 0 1 6.75 0 3.376 3.376 0 0 1-6.75 0Zm12.375 0a3.376 3.376 0 0 1 6.75 0 3.376 3.376 0 0 1-6.75 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h54v54H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconRegister;
