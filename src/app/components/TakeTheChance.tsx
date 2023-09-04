import React from "react";
import IconFreeLancer from "../assets/icons/IconFreelancer";
import IconTele from "../assets/icons/IconTele";
import IconWorkAtHome from "../assets/icons/IconWorkAtHome";

const TakeTheChance = () => {
  const list = [
    {
      id: 1,
      icon: <IconFreeLancer />,
      title: "Cuộc cách mạng tự do",
      desc: "Nền kinh tế GIG toàn cầu đang mở rộng, với hàng triệu người làm việc tự do tìm kiếm cơ hội việc làm. Chỉ riêng ở Mỹ, những người làm việc tự do đóng góp hơn 1 nghìn tỷ đô la cho nền kinh tế hàng năm.",
      img: "/images/take-the-chance/1.png",
    },
    {
      id: 2,
      icon: <IconTele />,
      title: "Tăng cường làm việc từ xa",
      desc: "Việc chuyển sang làm việc từ xa đang thúc đẩy các nhu cầu về các giải pháp quản lý công việc linh hoạt phục vụ cho các nhóm phân tán và lao động tự do.",
      img: "/images/take-the-chance/2.png",
    },
    {
      id: 3,
      icon: <IconWorkAtHome />,
      title: "Nhu cầu của các doanh nghiệp nhỏ",
      desc: "Các Doanh nghiệp nhỏ và cỡ trung đang thuê ngoài các nhiệm vụ cho các lao động tự do. Họ cần nền tảng hiệu quả để quản lý các dự án và cộng tác một cách liền mạch.",
      img: "/images/take-the-chance/3.png",
    },
  ];

  return (
    <div className="mt-[80px] px-[120px] max-xl:px-[80px] max-lg:px-[24px] pt-[80px] pb-[180px] bg-[#FFF9F3]">
      <div className="mb-[48px]">
        {/* line */}
        <div className="mb-[24px] relative">
          <hr className="text-[#CFCFC] h-[1px]" />
          <div className=" absolute left-0 top-[-0.4rem] rounded-[13px] w-[123px] h-[12px] bg-[#F68D1D] "></div>
        </div>
        {/* end line */}

        {/* Title */}
        <div className="mb-[48px]">
          <div className="flex justify-between items-center gap-[5rem]">
            <h3
              className="md:text-[48px] text-[36px] md:font-[400] font-[500] text-[#1F1F1F] uppercase"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              Nắm bắt cơ hội thị trường sinh lợi
            </h3>
          </div>
        </div>
        {/* Title */}

        {/* Content */}
        <div className="">
          <ul className="flex gap-[24px] justify-start items-start max-xl:flex-wrap max-xl:hidden">
            {list.map((item) => (
              <li
                key={item.id}
                className="basis-[22%] h-[520px] flex flex-col justify-between max-xl:basis-[33.3%] "
                data-aos="fade-right"
                data-aos-duration={`${700 + item.id * 200}`}
              >
                <div>
                  {item.icon}
                  <div className="bg-[#F7E9D4] h-[1px] w-full my-[12px]"></div>
                  <p className="text-[#1F1F1F] uppercase font-[600] text-[24px] mb-[12px]">
                    {item.title}
                  </p>
                  <p className="text-[#4A4A4A] font-[400] text-[16px] mb-[24px]">
                    {item.desc}
                  </p>
                </div>

                <img src={item.img} alt="err" />
              </li>
            ))}
            <li
              className="px-[42px] py-[64px] bg-[rgba(246,141,29,0.20)] ml-[1rem] basis-[34%] max-xl:ml-0 max-xl:basis-full"
              data-aos="fade-right"
              data-aos-duration={`700`}
            >
              <p className="uppercase font-[600] text-[#1F1F1F] text-[24px]">
                Thông tin chi tiết về thị trường
              </p>
              <p className="text-[#4A4A4A] font-[400] text-[16px] my-[16px]">
                Bối cảnh quản lý công việc và làm việc tự do đang phát triển
                nhanh chóng, mang lại cơ hội thú vị cho các giải pháp sáng tạo.
                Khi các doanh nghiệp ngày càng chuyển sang làm việc tự do và làm
                việc từ xa, nhu cầu về các nền tảng quản lý công việc hiệu quả
                chưa bao giờ rõ rệt hơn.
              </p>
              <p className="text-[#1F1F1F] text-[18px] font-[600]">Tác động</p>
              <p className="text-[#4A4A4A] font-[400] text-[16px] mt-[8px]">
                Galasy đã sẵn sàng khai thác cơ hội thị trường sinh lợi bằng
                cách cung cấp nền tảng toàn diện đáp ứng nhu cầu ngày càng tăng
                của lao động tự do, doanh nghiệp và các nhóm từ xa.
              </p>
              <ul className="list-disc pl-4 text-[16px] text-[#1F1F1F;] font-[400] flex flex-col gap-[8px] mt-[8px]">
                <li>Làm việc tự do</li>
                <li>Làm việc từ xa</li>
                <li>Quản lý công việc hiệu quả và thành công</li>
              </ul>
            </li>
          </ul>

          {/* Mobile list */}
          <div className="xl:hidden ">
            <ul className="flex basis-full gap-[24px] max-sm:flex-wrap">
              {list.map((item) => (
                <li
                  key={item.id}
                  className="basis-[22%] max-sm:basis-full flex flex-col justify-between max-xl:basis-[33.3%]"
                  data-aos="fade-right"
                  data-aos-duration={`${700 + item.id * 200}`}
                >
                  <div>
                    {item.icon}
                    <div className="bg-[#F7E9D4] h-[1px] w-full my-[12px]"></div>
                    <p className="text-[#1F1F1F] uppercase font-[600] text-[24px] mb-[12px]">
                      {item.title}
                    </p>
                    <p className="text-[#4A4A4A] font-[400] text-[16px] mb-[24px]">
                      {item.desc}
                    </p>
                  </div>

                  <img src={item.img} alt="err" />
                </li>
              ))}
            </ul>
            <div
              className="px-[42px] py-[64px] bg-[rgba(246,141,29,0.20)] ml-[1rem] basis-[34%] max-xl:ml-0 max-xl:basis-full mt-[24px]"
              data-aos="fade-right"
              data-aos-duration={`700`}
            >
              <p className="uppercase font-[600] text-[#1F1F1F] text-[24px]">
                Thông tin chi tiết về thị trường
              </p>
              <p className="text-[#4A4A4A] font-[400] text-[16px] my-[16px]">
                Bối cảnh quản lý công việc và làm việc tự do đang phát triển
                nhanh chóng, mang lại cơ hội thú vị cho các giải pháp sáng tạo.
                Khi các doanh nghiệp ngày càng chuyển sang làm việc tự do và làm
                việc từ xa, nhu cầu về các nền tảng quản lý công việc hiệu quả
                chưa bao giờ rõ rệt hơn.
              </p>
              <p className="text-[#1F1F1F] text-[18px] font-[600]">Tác động</p>
              <p className="text-[#4A4A4A] font-[400] text-[16px] mt-[8px]">
                Galasy đã sẵn sàng khai thác cơ hội thị trường sinh lợi bằng
                cách cung cấp nền tảng toàn diện đáp ứng nhu cầu ngày càng tăng
                của lao động tự do, doanh nghiệp và các nhóm từ xa.
              </p>
              <ul className="list-disc pl-4 text-[16px] text-[#1F1F1F;] font-[400] flex flex-col gap-[8px] mt-[8px]">
                <li>Làm việc tự do</li>
                <li>Làm việc từ xa</li>
                <li>Quản lý công việc hiệu quả và thành công</li>
              </ul>
            </div>
          </div>

          {/* End mobile list */}
        </div>
        {/* Content */}
      </div>
    </div>
  );
};

export default TakeTheChance;
