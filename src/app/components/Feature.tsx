import React, { useEffect, useRef, useState } from "react";
import IconArrow from "../assets/icons/IconArrow";
import IconArrowDisable from "../assets/icons/IconArrowDisable";
import Carousel from "./customize/Carousel";

const Feature = () => {
  const carouselData = [
    {
      id: 0,
      img: "/images/feature/1.png",
      title: "Đăng tuyển và kết nối tài năng",
      desc: "Dễ dàng tạo và tùy biến bài đăng tuyển dụng với các yêu cầu và bộ kỹ năng chi tiết. Thuật toán kết hợp thông minh của chúng tôi đề xuất các dịch giả tự do phù hợp nhất cho công việc, đảm bảo sự phù hợp hoàn hảo cho dự án của bạn.",
    },
    {
      id: 1,
      img: "/images/feature/1.png",
      title: "Đăng tuyển và kết nối tài năng",
      desc: "Dễ dàng tạo và tùy biến bài đăng tuyển dụng với các yêu cầu và bộ kỹ năng chi tiết. Thuật toán kết hợp thông minh của chúng tôi đề xuất các dịch giả tự do phù hợp nhất cho công việc, đảm bảo sự phù hợp hoàn hảo cho dự án của bạn.",
    },
  ];

  const [count, setCount] = useState(0);
  const [translate, setTranslate] = useState(0);

  const ref = useRef(null) as any;

  const slideList = (
    <>
      {carouselData.map((item) => (
        <div key={item.id} className="md:mt-[48px]">
          <div
            className="flex max-md:flex-col 2xl:w-[1396px] lg:w-[1000px] md:w-[800px] sm:w-[400px] w-[300px] gap-[24px]"
            ref={ref}
          >
            <img
              src={item.img}
              alt="err"
              className="2xl:w-[829px] lg:w-[600px] sm:w-[400px] w-[full]"
            />

            <div className="">
              <p className="text-[24px] text-[#1F1F1F] font-[600] uppercase ">
                {item.title}
              </p>
              <p className="text-[16px] text-[#4A4A4A] font-[400] mt-[12px]">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="mt-[90px] xl:pl-[120px] lg:pl-[70px] pl-[24px] relative">
      <div className="xl:pr-[120px] lg:pr-[70px] pr-[24px]">
        {/* line */}
        <div className="mb-[24px] relative">
          <hr className="text-[#CFCFC] h-[1px]" />
          <div className=" absolute left-0 top-[-0.4rem] rounded-[13px] w-[123px] h-[12px] bg-[#F68D1D] "></div>
        </div>
        {/* end line */}

        {/* Title */}
        <div className="">
          <div className="flex justify-between items-center gap-[5rem]">
            <h3
              className="md:text-[48px] text-[36px] md:font-[400] font-[500] text-[#1F1F1F] uppercase"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              Các tính năng toàn diện để quản lý công việc dễ dàng.
            </h3>
            {/* Arrow */}
            <div className="flex gap-[28px] max-md:hidden absolute bottom-[1rem] 2xl:left-[90rem] xl:left-[63rem] lg:left-[58rem] left-[43rem] z-[20]">
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

              {count === 1 ? (
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
          <div className="flex gap-[28px] justify-end mb-[1rem] md:hidden mt-[1rem]">
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

            {count === 1 ? (
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

export default Feature;
