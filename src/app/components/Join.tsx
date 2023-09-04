import React from "react";
import IconDemo from "../assets/icons/IconDemo";
import IconRegister from "../assets/icons/IconRegister";
import IconComunity from "../assets/icons/IconComunity";
import IconEffect from "../assets/icons/IconEffect";

const Join = () => {
  return (
    <div className="px-[120px] max-xl:px-[80px] max-lg:px-[24px] py-[80px]">
      {" "}
      {/* line */}
      <div className="mb-[24px] relative">
        <hr className="text-[#CFCFC] h-[1px]" />
        <div className=" absolute left-0 top-[-0.4rem] rounded-[13px] w-[123px] h-[12px] bg-[#F68D1D] "></div>
      </div>
      {/* end line */}
      {/* Title */}
      <div>
        <div className="flex justify-between items-center gap-[5rem]">
          <h3
            className="md:text-[48px] text-[36px] md:font-[400] font-[500] text-[#1F1F1F] uppercase"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            Tham gia cuộc cách mạng Galasy
          </h3>
        </div>
      </div>
      {/* Title */}
      <div className="mt-[48px] grid  xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[48px]">
        {/* 1 */}
        <div
          className="px-[42px] py-[48px] bg-[#FFF9F3]"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <IconDemo />
          <p className="uppercase font-[600] text-[24px] text-[#1F1F1F] mt-[24px]">
            Yêu cầu bản Demo
          </p>
          <p className="mt-[24px] text-[#4A4A4A] text-[16px] font-[400]">
            Trải nghiệm trực tiếp cách nền tảng của chúng tôi hợp lý hoá việc
            quản lý công việc. Nhận bản demo được cá nhân hoá phù hợp với nhu
            cầu kinh doanh của bạn.
          </p>
          <img src="/images/join/1.png" className="mt-[48px]" alt="err" />
        </div>
        {/* 2 */}
        <div
          className="flex flex-col justify-end"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <div className="px-[42px] py-[48px] bg-[#FFF9F3]">
            <IconRegister />
            <p className="uppercase font-[600] text-[24px] text-[#1F1F1F] mt-[24px]">
              Đăng ký quyền truy cập sớm
            </p>
            <p className="mt-[24px] text-[#4A4A4A] text-[16px] font-[400]">
              Hãy là một trong những người đầu tiên truy cập các tính năng và
              bản cập nhật của Galasy. Luôn dẫn đầu đối thủ.
            </p>
          </div>
          <div className="mt-[24px] px-[42px] py-[48px] bg-[#FFF9F3]">
            <IconComunity />
            <p className="uppercase font-[600] text-[24px] text-[#1F1F1F] mt-[24px]">
              Tham gia cộng đồng của chúng tôi
            </p>
            <p className="mt-[24px] text-[#4A4A4A] text-[16px] font-[400]">
              Kết nối với các chuyên gia, lao động tự do và doanh nghiệp có cùng
              chí hướng trong cộng đồng thịnh vượng của chúng tôi.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div
          className="flex items-end max-xl:col-span-2 max-sm:col-span-1"
          data-aos="fade-right"
          data-aos-duration="1100"
        >
          <div className="px-[42px] py-[48px] bg-[#FFF9F3]">
            <IconEffect />
            <p className="uppercase font-[600] text-[24px] text-[#1F1F1F] mt-[24px]">
              Tác động
            </p>
            <p className="mt-[24px] text-[#4A4A4A] text-[16px] font-[400]">
              Bây giờ là lúc để hành động và là một phần của tương lai của quản
              lý công việc. Tham gia Galasy và trải nghiệm những lợi ích của
              việc cộng tác liền mạch, thực hiện dự án hiệu quả và kết quả thành
              công. Cùng nhau, chúng ta đang thay đổi cách quản lý công việc, từ
              đăng tin tuyển dụng sang thanh toán. Đừng bỏ lỡ cơ hội này để được
              nâng cao kinh nghiệm quản lý dự án của bạn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
