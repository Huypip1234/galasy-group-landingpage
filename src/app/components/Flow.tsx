import React, { useEffect, useRef, useState } from "react";
import IconArrow from "../assets/icons/IconArrow";
import IconArrowDisable from "../assets/icons/IconArrowDisable";
import Carousel from "./customize/Carousel";
import IconPolygon from "../assets/icons/IconPolygon";
import IconLine from "../assets/icons/IconLine";

const Flow = () => {
  const carouselData = [
    {
      id: 0,
      img: "/images/flow/carouse/1.png",
      title: "Job Posting",
      desc: (
        <div className="text-[16px] text-[#4A4A4A] font-[400] mt-[12px]">
          <p>
            Khách hàng tạo các bài đăng công việc chi tiết chỉ định các yêu cầu
            của dự án, phạm vi và các kỹ năng mong muốn.
          </p>{" "}
          <p className="mt-[12px]">
            Thuật toán kế hợp thông minh của chúng tôi gợi ý người làm việc tự
            do có hồ sơ phù hợp chặt chẽ với tiêu chí của công việc.
          </p>
        </div>
      ),
      number: "01",
    },
    {
      id: 1,
      img: "/images/flow/carouse/2.png",
      title: "Freelancer Collaboration",
      desc: (
        <div className="text-[16px] text-[#4A4A4A] font-[400] mt-[12px]">
          <p>
            Khách hàng và dịch giả tự do tham gia thông qua một trung tâm giao
            tiếp và tập trung trong nền tảng.
          </p>{" "}
          <p className="mt-[12px]">
            Chia sẻ tệp liền mạch, nhắn tin tức thời, và cập nhật theo thời gian
            thực đảm bảo cộng tác hiệu quả.
          </p>
          <p className="mt-[12px]">
            Khách hàng có thể cung cấp các hướng dẫn rõ ràng, nhận cập nhật và
            truy vấn địa chỉ ở một nơi.
          </p>
        </div>
      ),
      number: "02",
    },
    {
      id: 2,
      img: "/images/flow/carouse/3.png",
      title: "Performance Tracking",
      desc: (
        <div className="text-[16px] text-[#4A4A4A] font-[400] mt-[12px]">
          <p>
            Khách hàng đặt ra các mốc quan trọng và mục tiêu dự án trong nền
            tảng.
          </p>{" "}
          <p className="mt-[12px]">
            Lao động tự do cập nhật tiến độ nhiệm vụ, đảm bảo minh bạch và phù
            hợp với tiến độ dự án.
          </p>
          <p className="mt-[12px]">
            Các chỉ số hiệu suất minh bạch giúp cả hai bên đánh giá tiến độ và
            chất lượng.
          </p>
        </div>
      ),
      number: "03",
    },
    {
      id: 3,
      img: "/images/flow/carouse/4.png",
      title: "Payment Management",
      desc: (
        <div className="text-[16px] text-[#4A4A4A] font-[400] mt-[12px]">
          <p>
            Cấu trúc thanh toán dựa trên cột mốc đảm bảo quy trình thanh toán rõ
            ràng
          </p>{" "}
          <p className="mt-[12px]">
            Khách hàng giải phóng các khoản thanh toán khi đạt được các cột mốc
            quan trọng. Thúc đẩy niềm tin và trách nhiệm giải trình.
          </p>
          <p className="mt-[12px]">
            Cổng thanh toán an toàn và đảm bảo các giao dịch không phức tạp.
          </p>
        </div>
      ),
      number: "04",
    },
    {
      id: 4,
      img: "/images/flow/carouse/5.png",
      title: "Completion and Feedback",
      desc: (
        <div className="text-[16px] text-[#4A4A4A] font-[400] mt-[12px]">
          <p>
            Những lao động tự do hoàn thành các công việc và cung cấp kết quả
            cuối cùng thông qua nền tảng.
          </p>{" "}
          <p className="mt-[12px]">
            Khách hang xem xét công việc đã hoàn thành, cung cấp phản hồi và phê
            duyệt sản phẩm bàn giao.
          </p>
          <p className="mt-[12px]">
            Phản hồi tích cực củng cố hồ sơ của các lao động tự do cho các hợp
            tác trong tương lai.
          </p>
        </div>
      ),
      number: "05",
    },
    {
      id: 5,
      img: "/images/flow/carouse/6.png",
      title: "Payment and Closure",
      desc: (
        <div className="text-[16px] text-[#4A4A4A] font-[400] mt-[12px]">
          <p>
            Sau khi các dự án được phê duyệt, các khoản thanh toán cuối cùng
            được xử lý an toàn.
          </p>{" "}
          <p className="mt-[12px]">
            Cả khách hang và dịch giả tự do đều trải nghiệm thanh toán liền mạch
          </p>
          <p className="mt-[12px]">
            Các dự án đã chính thức đóng cửa và cả hai bên sẵn sàng cho sự hợp
            tác trong tương lai
          </p>
        </div>
      ),
      number: "06",
    },
  ];

  const [count, setCount] = useState(0);
  const [translate, setTranslate] = useState(0);

  const ref = useRef(null) as any;

  const [active, setActive] = useState(0);

  const slideList = (
    <div className="flex flex-col">
      <div className="flex gap-[24px] items-center max-lg:items-start">
        {carouselData.map((item) => (
          <div key={item.id} className="mt-[48px]">
            <div
              className="flex max-lg:flex-col w-[827px] max-lg:w-[350px] max-sm:w-[300px]  gap-[24px] max-lg:mt-[3rem]"
              ref={ref}
            >
              <img
                src={item.img}
                alt="err"
                className="w-[484px] max-lg:w-full"
              />

              <div className="self-end">
                <p
                  className={`text-[24px] text-[#1F1F1F] ${
                    active === item.id && "!text-[#F68D1D]"
                  } font-[600] uppercase `}
                >
                  {item.title}
                </p>
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Line */}
      <div className="mt-[60px] relative">
        <div className="bg-[#4A4A4A] text-[#4A4A4A] w-full h-[1px] mt-[-0.3rem]"></div>

        <ul className="mb-[1rem] absolute top-0 flex lg:gap-[52rem] sm:gap-[22rem] gap-[19rem]">
          {carouselData.map((item) => (
            <li
              className={`ml-[1rem] mt-[-3.1rem] ${
                active !== item.id && "!mt-[-2rem]"
              }`}
              key={item.id}
            >
              <p
                className={`text-[12px] font-[400] transition-all duration-500 ${
                  active === item.id && " !text-[24px] !font-[600]"
                } text-[#F68D1D]  uppercase`}
              >
                {item.number}
              </p>
              <IconLine />
              <IconPolygon
                className={`ml-[-0.2rem] mt-[0rem] hidden ${
                  active === item.id && "!block relative z-[20]"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
      {/* end Line */}
    </div>
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

        <div className="flex max-lg:flex-col gap-[24px]">
          {/* Left Content */}
          <div className="2xl:max-w-[828px] lg:max-w-[500px]">
            <h3
              className="md:text-[48px] text-[36px] md:font-[400] font-[500] text-[#1F1F1F] uppercase"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              Cách thức hoạt động
            </h3>
            <div className="flex justify-between items-center gap-[5rem]">
              <div className="mt-[48px]">
                <p
                  className="uppercase text-[24px] font-[600] text-[#1F1F1F]"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  Tác động
                </p>
                <p
                  className="text-[16px] font-[400] text-[#4A4A4A] mt-[12px]"
                  data-aos="fade-right"
                  data-aos-duration="900"
                >
                  Với Galasy, quản lý công việc trở thành một quy trình đơn giản
                  và hợp lý. Từ tin tuyển dụng ban đầu đến hoàn thành dự án và
                  thanh toán, nền tảng của chúng tôi hướng dẫn từng bước, đảm
                  bảo tính minh bạch, cộng tác và kết quả dự án thành công. Nắm
                  bắt tương lai của quản lý công việc hiệu quả với Galasy.
                </p>
              </div>
            </div>
          </div>
          {/* End Left Content */}

          {/* Right Content */}
          <div
            className="flex max-w-[828px] gap-[24px] items-center max-lg:mt-[2rem]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="flex flex-col gap-[24px]">
              <img src="/images/flow/1.png" alt="err" />
              <img src="/images/flow/2.png" alt="err" />
            </div>
            <div className="flex flex-col gap-[24px]">
              <img src="/images/flow/3.png" alt="err" />
              <img src="/images/flow/4.png" alt="err" />
            </div>
          </div>
          {/* End Right content */}
        </div>
      </div>
      {/* Carouse */}
      <div className="relative">
        {/* Arrow */}
        <div className="flex gap-[28px] absolute top-[3rem] lg:left-[45rem] right-[1rem] z-[20]">
          {count == 0 ? (
            <IconArrowDisable className="cursor-pointer" />
          ) : (
            <IconArrow
              className="rotate-180 cursor-pointer"
              onClick={() => {
                setActive(active - 1);
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
                setActive(active + 1);
                setTranslate(translate - (ref.current.clientWidth + 24));
                setCount(count + 1);
              }}
              className="cursor-pointer"
            />
          )}
        </div>
        {/* End Arrow */}

        {/* translate: length when move */}
        {/* slideList: slide item */}
        <Carousel translate={translate} slideList={slideList} />
      </div>

      {/* End Carouse */}
    </div>
  );
};

export default Flow;
