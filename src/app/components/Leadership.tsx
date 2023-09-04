import React, { useEffect, useRef, useState } from "react";
import IconArrow from "../assets/icons/IconArrow";
import IconArrowDisable from "../assets/icons/IconArrowDisable";
import Carousel from "./customize/Carousel";

const LeaderShip = () => {
  const carouselData = [
    {
      id: 1,
      img: "/images/leadership/2.png",
      title: "Đổi mới",
    },
    {
      id: 2,
      img: "/images/leadership/3.png",
      title: "Phương pháp tiếp cận lấy khách hàng làm trung tâm",
    },
    {
      id: 3,
      img: "/images/leadership/4.png",
      title: "",
    },
  ];

  const [count, setCount] = useState(0);
  const [translate, setTranslate] = useState(0);

  const ref = useRef(null) as any;

  const slideList = (
    <div className="flex gap-[24px]">
      {/* Slide1 */}
      <div className="">
        <div
          className="sm:w-[402px] w-[302px] sm:h-[398px] h-[300px] group overflow-hidden relative"
          ref={ref}
        >
          {/* Img */}
          <img
            className="object-cover sm:h-[398px] group-hover:h-[230px] group-hover:max-sm:h-[200px] w-full transition-all duration-300"
            src="/images/leadership/1.png"
            alt="err"
          />
          {/* End img */}

          {/* Title and desc */}
          <div className="absolute group-hover:h-[185px] group-hover:max-sm:h-full sm:h-[118px] transition-all duration-300 bottom-0 left-0 w-full px-[16px] py-[24px] flex flex-col justify-start bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,_rgba(0,0,0,0.80)_71.01%)] group-hover:bg-[#F68D1D] group-hover:bg-none">
            <div className="sm:text-[24px] text-[19px] text-white font-[600] uppercase mb-[10px]">
              Giải pháp tất cả trong một
            </div>
            <p className="text-white text-[16px] font-[400] hidden group-hover:block">
              Nền tảng của chúng tôi nổi bật như một giải pháp đầu cuối hoàn
              chỉnh trong một thị trường với các công cụ phân mảnh và giải pháp
              một phần.
            </p>
          </div>
          {/* End title and desc */}
        </div>
      </div>
      {/* Slide 1 */}

      {carouselData.map((item) => (
        <div key={item.id}>
          <div className="sm:w-[402px] w-[302px] relative">
            <img src={item.img} alt="err" />
            <div className="sm:text-[24px] text-[19px] h-[118px] max-sm:h-[90px]  text-white font-[600] uppercase w-full absolute bottom-0 left-0 px-[16px] py-[24px] flex items-start bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,_rgba(0,0,0,0.80)_71.01%)]">
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mt-[40px] xl:pl-[120px] lg:pl-[70px] pl-[24px]">
      <div className="xl:pr-[120px] lg:pr-[70px] pr-[24px] mb-[24px]">
        {/* Title */}
        <div className="">
          <div className="flex justify-between items-center gap-[5rem]">
            <h3
              className="text-[32px] font-[400] text-[#1F1F1F] uppercase"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              Market Leadership
            </h3>
            {/* Arrow */}
            <div className="flex gap-[28px] max-md:hidden">
              {count == 0 ? (
                <IconArrowDisable className="cursor-pointer" />
              ) : (
                <IconArrow
                  className="rotate-180 cursor-pointer"
                  onClick={() => {
                    setTranslate(translate + (ref.current.clientWidth + 24));
                    setCount(count - 1);
                  }}
                />
              )}

              {count === 3 ? (
                <IconArrowDisable className="cursor-pointer rotate-180" />
              ) : (
                <IconArrow
                  onClick={() => {
                    setTranslate(translate - (ref.current.clientWidth + 24));
                    setCount(count + 1);
                  }}
                  className="cursor-pointer"
                />
              )}
            </div>
            {/* End Arrow */}
          </div>
          {/* Arrow Mobile*/}
          <div className="flex gap-[28px] justify-end mb-[1rem] md:hidden">
            {count == 0 ? (
              <IconArrowDisable className="cursor-pointer" />
            ) : (
              <IconArrow
                className="rotate-180 cursor-pointer"
                onClick={() => {
                  setTranslate(translate + (ref.current.clientWidth + 24));
                  setCount(count - 1);
                }}
              />
            )}

            {count === 3 ? (
              <IconArrowDisable className="cursor-pointer rotate-180" />
            ) : (
              <IconArrow
                onClick={() => {
                  setTranslate(translate - (ref.current.clientWidth + 24));
                  setCount(count + 1);
                }}
                className="cursor-pointer"
              />
            )}
          </div>
          {/* End Arrow Mobile*/}
        </div>
        {/* Title */}
      </div>

      {/* Slide */}
      {/* translate: length when move */}
      {/* slideList: slide item */}
      <Carousel translate={translate} slideList={slideList} />
      {/* End Slide */}
    </div>
  );
};

export default LeaderShip;
