import React from "react";
import IconPhone from "../assets/icons/IconPhone";
import IconEmail from "../assets/icons/IconEmail";
import IconNetWork from "../assets/icons/IconNetwork";
import IconArrowUp from "../assets/icons/IconArrowUp";

const Footer = () => {
  const contactList = [
    {
      id: 1,
      icon: <IconPhone />,
      title: "+84 XXX XXX XXX",
    },
    { id: 2, icon: <IconEmail />, title: "info@galasy.com" },
    { id: 3, icon: <IconNetWork />, title: "www.galasy.com" },
  ];

  return (
    <div className="px-[120px] relative max-2xl:px-[60px] max-lg:px-[24px] pt-[48px] pb-[24px] bg-[#393939] mt-[80px]">
      <div className="flex justify-between items-center flex-wrap gap-[3rem] max-xl:flex-col max-xl:items-start">
        {/* Ifo */}
        <div>
          <img src="/images/logo/logo_footer.png" alt="" />
          <p className="text-[16px] font-[400] text-white mt-[24px] max-w-[403px] max-xl:max-w-[700px]">
            Liên hệ với chúng tôi để được giải đáp thắc mắc, quan hệ đối tác
            hoặc tìm hiểu thêm về cách Galasy có thể thay đổi trải nghiệm tuyển
            dụng & quản lý công việc của bạn. Chúng tôi ở đây để cung cấp cho
            các bạn các công cụ và hỗ trợ bạn cần để có kết quả dự án thành
            công.
          </p>
        </div>
        {/* End Ifo */}

        {/* Contact */}
        <div className="flex flex-col gap-[16px]">
          <p className="uppercase text-[24px] font-[400] text-[white]">
            Thông tin liên hệ
          </p>
          <ul className="flex flex-col gap-[16px]">
            {contactList.map((item) => (
              <li key={item.id} className="flex gap-[16px] items-center">
                {item.icon}
                <p className="text-[16px] font-[400] text-[white]">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {/* End contact */}

        {/* Form */}
        <div className="flex flex-col gap-[16px] items-end max-2xl:max-w-[23rem] max-xl:max-w-[50rem]">
          <p className="text-white text-[24px] font-[400] uppercase">
            Chúng tôi đang chờ ý kiến và yêu cầu của bạn
          </p>
          <input
            type="text"
            className="w-full border-solid border-[#848484] bg-[#414141] py-[15px] px-[12px] rounded-[8px] placeholder:text-[#848484] placeholder:text-[16px] placeholder:font-[400] outline-none text-white"
            placeholder="Nhập ý kiến của bạn"
          />
          <button className="text-[16px] text-white font-[600] bg-[#F68D1D] px-[24px] py-[8px] hover:bg-[#f7ac5d]">
            Gửi
          </button>
        </div>
        {/* End form */}
      </div>
      {/* Copyright */}
      <div className="border-t border-[#5E5E5E] mt-[24px]">
        <p className="text-[14px] font-[400] text-white text-center mt-[15px]">
          Copyright @ 2023, Galasy Group. All rights reserved.
        </p>
      </div>
      {/* End Copyright */}

      {/* Button Up */}
      <a
        href="#top"
        className="absolute hover:scale-[110%] transition-all px-[10px] bg-[rgba(255,255,255,0.10)] flex items-center justify-center border border-solid border-[#F68D1D] bottom-[6rem] right-[1.5rem] h-[48px] w-[48px]"
      >
        <IconArrowUp />
      </a>
      {/* End Button Up */}
    </div>
  );
};

export default Footer;
