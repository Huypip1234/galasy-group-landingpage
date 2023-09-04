import React from "react";
import IconCreditCard from "../assets/icons/IconCreditCard";
import IconArrowDisable from "../assets/icons/IconArrowDisable";
import IconArrow from "../assets/icons/IconArrow";

const Model = () => {
  const carouselData = [
    {
      id: 1,
      img: "/images/model/1.png",
      title: "Nền tảng toàn cầu",
    },
    {
      id: 2,
      img: "/images/model/2.png",
      title: "Chuyên nghiệp tới Tinh Hoa",
    },
  ];
  return (
    <div className=" mt-[80px] ">
      <div className="px-[120px] max-xl:px-[80px] max-lg:px-[24px]">
        {" "}
        {/* line */}
        <div className="mb-[24px] relative">
          <hr className="text-[#CFCFC] h-[1px]" />
          <div className=" absolute left-0 top-[-0.4rem] rounded-[13px] w-[123px] h-[12px] bg-[#F68D1D] "></div>
        </div>
        {/* end line */}
        {/* Title */}
        <div className="flex justify-between items-center gap-[5rem]">
          <h3
            className="md:text-[48px] text-[36px] md:font-[400] font-[500] text-[#1F1F1F] uppercase"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Mô hình doanh thu
          </h3>
        </div>
        {/* End Title */}
      </div>

      {/* Content */}
      <div className="md:grid-cols-2 grid-cols-1 grid gap-[24px] mt-[48px] px-[120px] max-xl:px-[80px] max-lg:px-[24px]">
        {carouselData.map((item) => (
          <div key={item.id} data-aos="fade-right" data-aos-duration="700">
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt="err"
                className="object-cover hover:scale-[110%] transition-all duration-300"
              />
              <div className="2xl:text-[42px] lg:text-[28px] text-[20px] text-white font-[400] uppercase w-full absolute bottom-0 left-0 px-[16px] py-[24px] flex items-start bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,_rgba(0,0,0,0.80)_71.01%)]">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* transaction fee */}
      <div className="relative pb-[120px] pt-[40px]">
        <div className="absolute top-[50%] translate-y-[-50%] h-[320px] bg-[#FFF9F3] w-full"></div>
        <div className="px-[120px] max-xl:px-[80px] max-lg:px-[24px] flex items-center justify-between gap-[24px]">
          {/* Text */}
          <div className="xl:min-w-[544px] min-w-[300px] flex flex-col relative z-[10] max-md:hidden">
            <p
              className="text-[#1F1F1F] text-[48px] font-[400] uppercase mb-[48px]"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              Transaction Fees
            </p>
            {/* Arrow */}
            <div className="flex gap-[28px] self-end">
              <IconArrowDisable className="cursor-pointer" />
              <IconArrow className="cursor-pointer" />
            </div>
            {/* End Arrow */}
          </div>
          {/* End text */}
          {/* Card */}
          <div className="relative z-[10] px-[32px] py-[56px] text-[#1F1F1F] font-[400] text-[16px] bg-white shadow-[0px_4px_0px_0px_#F68D1D_inset,_0px_4px_8px_0px_rgba(0,0,0,0.08)] max-w-[1112px] ">
            <IconCreditCard className="mt-[56px]" />
            <div className="bg-[#F7E9D4] h-[1px] w-full my-[12px]"></div>
            <p className="text-[#F68D1D] text-[36px] font-[600] uppercase">
              Transaction Fees
            </p>
            <p className="mt-[24px]">
              Phí dựa trên tỷ lệ phần tram trên mỗi khoản thanh toán thành công
              được xử lý thông qua nền tảng của chúng tôi đảm bảo nguồn doanh
              thu bền vững.
            </p>
            <p className="text-[#1F1F1F] text-[24px] font-[600] mt-[24px]">
              Visual Aid
            </p>
            <p className="mt-[24px]">
              Sử dụng bản trình bày trực quan để làm nổi bật các gói đăng ký và
              các tính năng của chúng
            </p>
            <p className="mt-[24px]">
              Bao gồm các biểu tượng hoặc đồ hoạ mô tả các danh mục người dùng
              khác nhau (Doanh nghiệp nhỏ, doanh nghiệp đang phát triển, doanh
              nghiệp lớn)
            </p>
          </div>
          {/* End card */}
        </div>
      </div>

      {/* End transaction fee */}
      {/* End content */}
    </div>
  );
};

export default Model;
