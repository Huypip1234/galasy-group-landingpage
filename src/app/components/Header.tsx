import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="px-[24px] pt-[5px]">
      <Link href={"/"} className="inline-block">
        <Image src="/images/logo/logo.png" alt="err" width={150} height={48} />
      </Link>
    </div>
  );
};

export default Header;
