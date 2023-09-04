import React from "react";

const Advantage = () => {
  return (
    <div className="flex px-[120px] max-xl:px-[80px] max-lg:px-[24px] justify-between gap-[48px] max-xl:flex-wrap">
      <div
        className="overflow-hidden xl:mt-[-7rem] max-xl:order-2"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <img
          src="/images/advantage/1.png"
          className="object-cover hover:scale-[105%] transition-all duration-300"
          alt="err"
        />
      </div>

      <div>
        <div className="max-w-[895px] pt-[4rem]">
          {/* line */}
          <div className="mb-[24px] relative">
            <hr className="text-[#CFCFC] h-[1px]" />
            <div className=" absolute left-0 top-[-0.4rem] rounded-[13px] w-[123px] h-[12px] bg-[#F68D1D] "></div>
          </div>
          {/* end line */}
          <h3
            className="md:text-[48px] text-[36px] md:font-[400] font-[500] text-[#1F1F1F] uppercase"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Lợi thế cạnh tranh của chúng tôi – Xác định lại quản lý công việc.
          </h3>
          <div className="flex justify-between items-center gap-[5rem]">
            <div className="mt-[40px]">
              <p
                className="text-[16px] font-[400] text-[#4A4A4A]"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                Galasy không chỉ cạnh tranh; chúng tôi dẫn đầu thị trường với
                nền tảng vượt trội xác định lại quản lý công việc. Các tính năng
                toàn diện, giao diện thân thiện với người dùng và cam kết đổi
                mới của chúng tôi khiến chúng tơi trở lên khác biệt, cho phép
                khách hàng và lao động tự do trải nghiệm quản lý công việc trong
                một ánh sáng mới, hiệu quả và thành công. Hãy tham gia cùng
                chúng tôi trong cuộc cách mạng hoá cách quản lý công việc được
                thực hiện.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
