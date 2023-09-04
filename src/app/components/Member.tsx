import React, { useRef, useState } from "react";
import IconArrowWhite from "../assets/icons/IconArrowWhite";
import IconArrowDisableWhite from "../assets/icons/IconArrowDisableWhite";
import Carousel from "./customize/Carousel";
import IconArrowDisable from "../assets/icons/IconArrowDisable";
import IconArrow from "../assets/icons/IconArrow";

const Member = () => {
  const [count, setCount] = useState(0);
  const [translate, setTranslate] = useState(0);

  const ref = useRef(null) as any;

  const carouselData = [
    {
      id: 0,
      img: "/images/member/1.png",
      name: "Trần Văn Vương",
      position: "CEO & COO",
    },
    {
      id: 2,
      img: "/images/member/2.png",
      name: "Phạm Vũ Thước",
      position: "Senior backend developer",
    },
    {
      id: 3,
      img: "/images/member/3.png",
      name: "Trần Thị Tươi",
      position: "Leader Sale & CRM",
    },
    {
      id: 4,
      img: "/images/member/4.png",
      name: "Nguyễn Thị Hồng Hạnh",
      position: "Leader BA & Tester",
    },
    {
      id: 5,
      img: "/images/member/5.png",
      name: "Nguyễn Trung Tuấn",
      position: "Leader BA & Tester",
    },
    {
      id: 6,
      img: "/images/member/6.png",
      name: "Dương Mạnh Quyền",
      position: "Frontend devoloper",
    },
    {
      id: 6,
      img: "/images/member/7.png",
      name: "Lê Hoài Nam",
      position: "Frontend devoloper",
    },
  ];

  const slideList = (
    <div className="flex gap-[30px] pl-[24px] ">
      {carouselData.map((item) => (
        <div key={item.id}>
          <div className="sm:w-[358px] w-[300px] relative" ref={ref}>
            <div className="bg-[#F68D1D] h-[93px] w-[8px] absolute bottom-[7rem] left-[-0.5rem]"></div>
            <img src={item.img} alt="err" className="" />

            <div className="absolute bottom-0 w-full px-[24px] py-[16px] bg-[rgba(31,31,31,0.24)]">
              <p
                className={`text-[24px] text-[#ffffff] font-[800] text-center`}
              >
                {item.name}
              </p>
              <p className="text-[16px] text-[#ffffff] font-[400] text-center">
                {item.position}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex overflow-hidden max-lg:items-center max-md:flex-col max-md:items-start">
      {/* Left content */}
      <div className="lg:min-w-[523px] min-w-[350px] lg:max-w-[523px] max-w-[350px] lg:pl-[120px] pl-[30px] pr-[30px] py-[56px] bg-[#F68D1D] max-md:hidden">
        {/* line */}
        <div className="mb-[24px] relative">
          <hr className="text-[#CFCFC] h-[1px]" />
          <div className=" absolute left-0 top-[-0.4rem] rounded-[13px] w-[123px] h-[12px] bg-[white] "></div>
        </div>
        {/* end line */}
        {/* Title */}
        <div className="flex justify-between items-center gap-[5rem]">
          <h3
            className="md:text-[48px] text-[36px] md:font-[400] font-[500] text-[white] uppercase leading-[4rem]"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Gặp gỡ thành viên đội Galasy
          </h3>
        </div>
        {/* End Title */}
        {/* Desc */}
        <p className="text-[white] font-[400] mt-[1rem] text-[14px]">
          Nhóm của chúng tôi mang đến một loạt các chuyên môn đa dạng cho
          Galasy, đảm bảo rằng chúng tôi được trang bị để giải quyết các thách
          thức của quản lý công việc một cách toàn diện. Với cam kết tập thể về
          đổi mới và thành công, chúng tôi cam kết định hình tương lại của quản
          lý công việc và mang lại giá trị đặc biệt cho người dùng.
        </p>
        {/* Arrow */}
        <div className="flex justify-end mt-[60px]">
          <div className="flex gap-[28px]">
            {count == 0 ? (
              <IconArrowDisableWhite className="cursor-pointer" />
            ) : (
              <IconArrowWhite
                className="rotate-180 cursor-pointer"
                onClick={() => {
                  setTranslate(translate + (ref.current.clientWidth + 30));
                  setCount(count - 1);
                }}
              />
            )}

            {count === 6 ? (
              <IconArrowDisableWhite className="cursor-pointer rotate-180" />
            ) : (
              <IconArrowWhite
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
              Gặp gỡ thành viên đội Galasy
            </h3>
          </div>

          <p
            className="text-[#4A4A4A] text-[20px] font-[400] mt-[13px] mb-[48px]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            Nhóm của chúng tôi mang đến một loạt các chuyên môn đa dạng cho
            Galasy, đảm bảo rằng chúng tôi được trang bị để giải quyết các thách
            thức của quản lý công việc một cách toàn diện. Với cam kết tập thể
            về đổi mới và thành công, chúng tôi cam kết định hình tương lại của
            quản lý công việc và mang lại giá trị đặc biệt cho người dùng.
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

            {count === 6 ? (
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

export default Member;
