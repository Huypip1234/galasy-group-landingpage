import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="px-[24px] py-[5px]">
      <Image src="/images/logo/logo.png" alt="err" width={150} height={48} />
    </div>
  );
};

export default Header;
