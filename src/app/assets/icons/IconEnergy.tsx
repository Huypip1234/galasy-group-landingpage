import * as React from "react";
import { SVGProps } from "react";
const IconEnergy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <g fill="#848484" clipPath="url(#a)">
      <path d="M3.198 23.614a1.754 1.754 0 0 0 1.345-.01l5.258-2.218a1.758 1.758 0 0 0-1.367-3.24l-1.286.544A25.213 25.213 0 0 1 30.213 3.633 25.193 25.193 0 0 1 54.606 22.52a1.759 1.759 0 0 0 3.403-.88A28.708 28.708 0 0 0 30.213.117C18.701.117 8.362 7.001 3.853 17.45l-.592-1.406a1.759 1.759 0 0 0-3.24 1.367l2.22 5.258c.18.43.525.77.957.945ZM59.744 42.466l-2.218-5.258a1.759 1.759 0 0 0-2.303-.936l-5.258 2.22a1.758 1.758 0 0 0 1.367 3.238l1.472-.621A25.213 25.213 0 0 1 29.553 56.6 25.194 25.194 0 0 1 5.16 37.713a1.758 1.758 0 0 0-3.403.88c3.276 12.673 14.707 21.523 27.796 21.523 11.577 0 21.968-6.962 26.434-17.51l.518 1.227a1.758 1.758 0 1 0 3.24-1.367Z" />
      <path d="M26.358 49.465a1.757 1.757 0 0 0 1.95-.534L43.033 31.12a1.758 1.758 0 0 0-1.354-2.878h-6.406V12.304a1.758 1.758 0 0 0-3.112-1.12L17.435 28.996a1.758 1.758 0 0 0 1.355 2.878h6.406v15.938c0 .741.464 1.403 1.162 1.653ZM22.524 28.36l9.234-11.17V30c0 .971.787 1.758 1.758 1.758h4.428l-9.233 11.17v-12.81c0-.971-.787-1.758-1.758-1.758h-4.43Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h60v60H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconEnergy;
