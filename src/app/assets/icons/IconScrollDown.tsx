import * as React from "react";
import { SVGProps } from "react";
const IconScrollDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M21.84 15.17a.612.612 0 0 1 0 .826l-5.454 5.833a.52.52 0 0 1-.772 0l-5.454-5.833a.612.612 0 0 1 0-.825.52.52 0 0 1 .771 0L16 20.59l5.069-5.42a.52.52 0 0 1 .771 0ZM21.84 24.17a.612.612 0 0 1 0 .826l-5.454 5.833a.52.52 0 0 1-.772 0l-5.454-5.833a.612.612 0 0 1 0-.825.52.52 0 0 1 .771 0L16 29.59l5.069-5.42a.52.52 0 0 1 .771 0Z"
      clipRule="evenodd"
    />
    <rect width={31} height={47} x={0.5} y={0.5} stroke="#fff" rx={15.5} />
  </svg>
);
export default IconScrollDown;
