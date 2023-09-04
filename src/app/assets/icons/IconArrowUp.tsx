import * as React from "react";
import { SVGProps } from "react";
const IconArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path
      stroke="#F68D1D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 17.5-7-7-7 7"
    />
  </svg>
);
export default IconArrowUp;
