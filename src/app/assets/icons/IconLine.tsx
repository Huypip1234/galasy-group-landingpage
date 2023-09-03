import * as React from "react";
import { SVGProps } from "react";
const IconLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={2}
    height={8}
    fill="none"
    {...props}
  >
    <path stroke="#4A4A4A" d="M1 8V0" />
  </svg>
);
export default IconLine;
