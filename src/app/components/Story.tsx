import React, { useRef, useState } from "react";
import IconArrowWhite from "../assets/icons/IconArrowWhite";
import IconArrowDisableWhite from "../assets/icons/IconArrowDisableWhite";
import Carousel from "./customize/Carousel";
import IconArrowDisable from "../assets/icons/IconArrowDisable";
import IconArrow from "../assets/icons/IconArrow";
import IconCreditCard from "../assets/icons/IconCreditCard";
import IconEnergy from "../assets/icons/IconEnergy";
import IconStoke from "../assets/icons/IconStoke";
import IconQuality from "../assets/icons/IconQuality";

const Story = () => {
  const [count, setCount] = useState(0);
  const [translate, setTranslate] = useState(0);

  const ref = useRef(null) as any;

  const carouselData = [
    {
      id: 1,
      icon: <IconEnergy className="mt-[30px]" />,
      img: "/images/story/1.png",
      title: "Tăng hiệu quả cho startup X",
    },
    {
      id: 2,
      icon: <IconStoke className="mt-[30px]" />,
      img: "/images/story/2.png",
      title: "Mở rộng quy mô cho Công ty Y",
    },
    {
      id: 3,
      icon: <IconQuality className="mt-[30px]" />,
      img: "/images/story/3.png",
      title: "Nâng cao chất lượng tại cơ quan Z",
    },
  ];

  const slideList = (
    <div className="flex gap-[30px] pl-[24px] items-center">
      {carouselData.map((item) => (
        <div key={item.id}>
          {/* Card */}
          <div
            ref={ref}
            className="relative max-lg:flex max-lg:flex-col max-lg:justify-between mb-[0.5rem] lg:w-[544px] sm:w-[370px] w-[300px] max-lg:h-[550px] z-[10] px-[32px] py-[56px] text-[#1F1F1F] font-[400] text-[16px] bg-white shadow-[0px_4px_0px_0px_#F68D1D_inset,_0px_4px_8px_0px_rgba(0,0,0,0.08)] max-w-[1112px] "
          >
            <div>
              {item.icon}
              <div className="bg-[#F7E9D4] h-[1px] w-full my-[12px]"></div>
              <p className="text-[#F68D1D] text-[36px] font-[600] uppercase">
                {item.title}
              </p>
            </div>

            <img src={item.img} alt="err" className="mt-[24px]" />
          </div>
          {/* End card */}
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex overflow-x-hidden max-md:flex-col max-md:items-start my-[80px] items-center relative">
      <div className="absolute max-md:hidden top-[50%] translate-y-[-50%] 2xl:h-[460px] xl:h-[590px] lg:h-[650px] h-[680px] bg-[#FFF9F3] w-full"></div>
      {/* Left content */}
      <div className="2xl:min-w-[670px] 2xl:max-w-[670px] xl:min-w-[500px] xl:max-w-[500px] lg:min-w-[400px] lg:max-w-[400px] min-w-[350px] max-w-[350px] xl:pl-[120px] pl-[30px] pr-[30px] py-[44px] bg-[#FFF9F3] max-md:hidden relative z-[10]">
        {/* line */}
        <div className="mb-[24px] relative">
          <hr className="text-[#F68D1D] h-[1px]" />
          <div className=" absolute left-0 top-[-0.4rem] rounded-[13px] w-[123px] h-[12px] bg-[#F68D1D] "></div>
        </div>
        {/* end line */}
        {/* Title */}
        <div className="flex justify-between items-center gap-[5rem]">
          <h3
            className="md:text-[48px] text-[36px] md:font-[400] font-[500] text-[#1F1F1F] uppercase leading-[4rem]"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Chuyện thành công thực sự với Galasy
          </h3>
        </div>
        {/* End Title */}
        {/* Desc */}
        <p className="text-[#4A4A4A] font-[400] mt-[1rem] text-[14px]">
          Những nghiên cứu điển hình trong thế giới thực này chứng minh những
          lợi ích hữu hình mà Galasy mang lại cho các doanh nghiệp trong các
          ngành khác nhau. Từ các công ty khởi nghiệp cho đến các doanh nghiệp
          đã thành lập, nền tảng của chúng tôi luôn mang lại hiệu quả, khả năng
          mở rộng và nâng cao kết quả dự án. Giá nhập hàng ngũ những câu chuyện
          thành công của chúng tôi và trải nghiệm trực tiếp cách Galasy chuyển
          đổi quản lý công việc.
        </p>
        {/* Arrow */}
        <div className="flex justify-end mt-[60px]">
          <div className="flex gap-[28px]">
            {count == 0 ? (
              <IconArrowDisable className="cursor-pointer" />
            ) : (
              <IconArrow
                className="rotate-180 cursor-pointer"
                onClick={() => {
                  setTranslate(translate + (ref.current.clientWidth + 30));
                  setCount(count - 1);
                }}
              />
            )}

            {count === 2 ? (
              <IconArrowDisable className="cursor-pointer rotate-180" />
            ) : (
              <IconArrow
                onClick={() => {
                  setTranslate(translate - (ref.current.clientWidth + 30));
                  setCount(count + 1);
                }}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        {/* End Arrow */}
      </div>
      {/* End left content */}

      {/* Left content mobile */}
      <div className="px-[24px] md:hidden mt-[1rem]">
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
              Chuyện thành công thực sự với Galasy
            </h3>
          </div>

          <p
            className="text-[#4A4A4A] text-[20px] font-[400] mt-[13px] mb-[48px]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            Những nghiên cứu điển hình trong thế giới thực này chứng minh những
            lợi ích hữu hình mà Galasy mang lại cho các doanh nghiệp trong các
            ngành khác nhau. Từ các công ty khởi nghiệp cho đến các doanh nghiệp
            đã thành lập, nền tảng của chúng tôi luôn mang lại hiệu quả, khả
            năng mở rộng và nâng cao kết quả dự án. Giá nhập hàng ngũ những câu
            chuyện thành công của chúng tôi và trải nghiệm trực tiếp cách Galasy
            chuyển đổi quản lý công việc.
          </p>
          {/* Arrow Mobile*/}
          <div className="flex gap-[28px] justify-end mb-[1rem] md:hidden">
            {count == 0 ? (
              <IconArrowDisable className="cursor-pointer" />
            ) : (
              <IconArrow
                className="rotate-180 cursor-pointer"
                onClick={() => {
                  setTranslate(translate + (ref.current.clientWidth + 30));
                  setCount(count - 1);
                }}
              />
            )}

            {count === 2 ? (
              <IconArrowDisable className="cursor-pointer rotate-180" />
            ) : (
              <IconArrow
                onClick={() => {
                  setTranslate(translate - (ref.current.clientWidth + 30));
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
      {/* End Left content mobile */}

      {/* Carousel */}
      <div>
        {/* translate: length when move */}
        {/* slideList: slide item */}
        <Carousel translate={translate} slideList={slideList} />
      </div>
      {/* End Carousel */}
    </div>
  );
};

export default Story;
