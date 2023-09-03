import React, { useEffect, useRef } from "react";

interface ICarouse {
  slideList: any;
  translate: number;
}

const Carouse = ({ slideList, translate }: ICarouse) => {
  const ref = useRef(null) as any;
  useEffect(() => {
    ref.current.style.marginLeft = `${translate}px`;
  }, [translate]);

  return (
    <div
      className="overflow-x-hidden"
      data-aos="fade-right"
      data-aos-duration="1100"
    >
      <div className="flex gap-[24px] transition-all duration-500" ref={ref}>
        {slideList}
      </div>
    </div>
  );
};

export default Carouse;
