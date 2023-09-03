import * as React from "react";
import { SVGProps } from "react";
const IconPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 16.974v3.01a2.004 2.004 0 0 1-1.367 1.91c-.266.09-.547.123-.826.098a19.927 19.927 0 0 1-8.678-3.081 19.59 19.59 0 0 1-6.034-6.022 19.836 19.836 0 0 1-3.087-8.701 2.003 2.003 0 0 1 1.19-2.017c.256-.112.532-.17.811-.17h3.017a2.014 2.014 0 0 1 2.011 1.725c.128.964.364 1.91.704 2.82a2.003 2.003 0 0 1-.452 2.118L8.012 9.939a16.074 16.074 0 0 0 6.033 6.021l1.277-1.274a2.012 2.012 0 0 1 2.122-.452c.912.34 1.86.575 2.826.703A2.013 2.013 0 0 1 22 16.974Z"
    />
  </svg>
);
export default IconPhone;
