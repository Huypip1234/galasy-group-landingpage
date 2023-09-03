import React, { useEffect, useRef, useState } from "react";
import IconArrow from "../assets/icons/IconArrow";
import IconArrowDisable from "../assets/icons/IconArrowDisable";
import Carousel from "./customize/Carousel";

const FindTalent = () => {
  const carouselData = [
    {
      id: 1,
      img: "/images/find-talen/2.png",
      title: "Đăng tuyển không hiệu quả",
    },
    {
      id: 2,
      img: "/images/find-talen/3.png",
      title: "Thách thức theo dõi hiệu suất",
    },
    {
      id: 3,
      img: "/images/find-talen/4.png",
      title: "Độ phức tạp của thanh toán",
    },
    {
      id: 4,
      img: "/images/find-talen/5.png",
      title: "Thiếu trách nhiệm",
    },
    {
      id: 5,
      img: "/images/find-talen/6.png",
      title: "Cơ hội bị bỏ lỡ",
    },
  ];

  const [count, setCount] = useState(0);
  const [translate, setTranslate] = useState(0);

  const ref = useRef(null) as any;

  const slideList = (
    <>
      {/* Slide1 */}
      <div>
        <div className="sm:w-[402px] w-[302px] h-[453px] group " ref={ref}>
          {/* Img */}
          <img className="object-cover sm:h-[398px] group-hover:h-[260px] group-hover:max-sm:h-[200px] w-full transition-all duration-300" src="/images/find-talen/1.png" alt="err" />
          {/* End img */}

          {/* Title and desc */}
          <div>
            <p className="uppercase text-[#1F1F1F] text-[24px] font-[600] mt-[24px] mb-[12px]">
              Giao tiếp vô tổ chức
            </p>
            <p className="text-[#4A4A4A] text-[16px] font-[400] hidden group-hover:block">
              Phối hợp các nhiệm vụ, cập nhật và phản hồi giữa khách hàng và
              dịch giả tự do thường liên quan đến các email, cuộc trò truyện và
              tài liệu rải rác. Giao tiếp bị phận mảnh này dẫn đến hiểu nhầm,
              nhin nhắn bị bỏ lỡ và sự chậm trễ.
            </p>
          </div>
          {/* End title and desc */}
        </div>
      </div>
      {/* Slide 1 */}

      {carouselData.map((item) => (
        <div key={item.id}>
          <div className="sm:w-[402px] w-[302px]">
            <img src={item.img} alt="err" />
            <p className="text-[24px] text-[#1F1F1F] font-[600] uppercase mt-[24px]">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="mt-[90px] xl:pl-[120px] lg:pl-[70px] pl-[24px]">
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
              tìm kiếm tài năng & quản lý công việc truyền thống
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

              {count === 5 ? (
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

          <p
            className="text-[#4A4A4A] text-[20px] font-[400] mt-[13px] mb-[48px]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            Quản lý công việc và lao động tự do trong bối cảnh kinh doanh hiện
            nay có nhiều sự phức tạp và rào cản
          </p>
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

            {count === 5 ? (
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

export default FindTalent;
