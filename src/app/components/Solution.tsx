import React, { useEffect, useRef, useState } from "react";
import IconArrow from "../assets/icons/IconArrow";
import IconArrowDisable from "../assets/icons/IconArrowDisable";
import Carousel from "./customize/Carousel";

const FindTalent = () => {
  const carouselData = [
    {
      id: 0,
      img: "/images/solution/1.png",
      title: "Đăng tin tuyển dụng đơn giản",
      desc: "Phối hợp các nhiệm vụ, cập nhật và phản hồi giữa khách hàng và dịch giả tự do thường liên quan đến các email, cuộc trò truyện và tài liệu rải rác. Giao tiếp bị phận mảnh này dẫn đến hiểu nhầm, nhin nhắn bị bỏ lỡ và sự chậm trễ.",
    },
    {
      id: 1,
      img: "/images/solution/2.png",
      title: "Cộng tác Lao động tự do liền mạch",
      desc: "Trải nghiệm cấp độ cộng tác mới với các Lao động tự do liền mạch. Chúng tôi cung cấp một trung tâm giao tiếp tập trung, nơi khách hàng và dịch giả tự do có thể giao tiếp, trao đổi tin nhắn, chia sẻ tệp và cập nhật tiến độ dự án. Không còn email rải rác hoặc cập nhật bị bỏ lỡ.",
    },
    {
      id: 2,
      img: "/images/solution/3.png",
      title: "Quản lý hiệu suất hiệu quả",
      desc: "Giám sát các mốc quan trọng của dự án, theo dõi tiến độ và đảm bảo chất lượng một cách dễ dàng. Chúng tôi trao quyền cho các doanh nghiệp đặt mục tiêu rõ ràng, theo dõi thành tích và đảm bảo rằng các dự án đang đi đúng hướng để hoàn thành thành công. Tính minh bạch là trọng tâm của giải pháp quản lý hiệu suất của chúng tôi.",
    },
    {
      id: 3,
      img: "/images/solution/4.png",
      title: "Thanh toán hoàn toàn không rắc rối",
      desc: "Dễ dàng thiết lập các khoản thanh toán dựa trên cột mốc, theo dõi các giao dịch tài chính và đảm bảo rằng các lao động tự do nhận được thanh toán kịp thời cho công việc của họ. Nói lời tạm biệt với tranh chấp thanh toán và sự chậm trễ.",
    },
    {
      id: 4,
      img: "/images/solution/5.png",
      title: "Nâng cao trách nhiệm giải trình",
      desc: "Nền tảng của chúng tôi thiết lập một chuỗi trách nhiệm rõ ràng bằng cách cung cấp một không gian tập trung cho tất cả các hoạt động liên quan đến dự án. Điều này thúc đẩy giao tiếp tốt hơn. Ít hiểu làm lơn và thực hiện dự án suôn sẻ hơn.",
    },
    {
      id: 5,
      img: "/images/solution/6.png",
      title: "Tối đa hóa cơ hội",
      desc: "Với Galasy, các doanh nghiệp có thể quản lý hiệu quả nhiều dự án một lúc, mở ra cánh cửa tăng trưởng và cơ hội mới. Nền tảng của chúng tôi để mở rộng quy mô với doanh nghiệp của bạn",
    },
  ];

  const [count, setCount] = useState(0);
  const [translate, setTranslate] = useState(0);

  const ref = useRef(null) as any;
  const ref2 = useRef(null) as any;

  const firstSlideItemList = [
    { id: 1, title: "Đăng tin tuyển dụng đơn giản" },
    { id: 2, title: "Cộng tác Lao động tự do liền mạch" },
    { id: 3, title: "Quản lý hiệu suất hiệu quả" },
    { id: 4, title: "Thanh toán hoàn toàn không rắc rối" },
    { id: 5, title: "Nâng cao trách nhiệm giải trình" },
    { id: 6, title: "Tối đa hóa cơ hội" },
  ];

  const slideList = (
    <>
      {/* Slide1 */}
      <div>
        <div
          className="md:w-[544px] ssm:w-[410px] w-[310px] py-[55px] px-[42px] gap-[36px] flex flex-col bg-[rgba(246,141,29,0.20)]
          "
          ref={ref}
        >
          <p className="text-[#1F1F1F text-[24px] font-[600] uppercase">
            Đăng tuyển không hiệu quả
          </p>
          <p className="text-[16px] font-[400] text-[#4A4A4A]">
            Tại Tên công ty, chúng tôi hiểu sự phức tạp của quản lý công việc
            hiện tại. Nền tảng của chúng tôi được thiết kế để cung cấp một giải
            pháp toàn diện và hợp lý, trao quyền cho các doanh nghiệp vượt qua
            những thách thức của các phương pháp truyền thống. Bằng cách cung
            cấp hỗ trợ đầu cuối từ đăng tuyển đến thanh toán, chúng tôi thay đổi
            cách các doanh nghiệp quản lý dự án và cộng tác với các dịch giả tự
            do.
          </p>
          <ul className="list-disc pl-4 text-[16px] font-[600] flex flex-col gap-[12px]">
            {firstSlideItemList.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Slide 1 */}

      {carouselData.map((item) => (
        <div key={item.id}>
          <div
            className="ssm:w-[410px] w-[310px] h-[590px] flex flex-col justify-between"
            ref={ref2}
          >
            <div className="mt-[40px] h-[180px]">
              <p className="text-[24px] text-[#1F1F1F] font-[600] uppercase ">
                {item.title}
              </p>
              <p className="text-[16px] text-[#4A4A4A] font-[400] mt-[12px]">
                {item.desc}
              </p>
            </div>

            <img src={item.img} alt="err" className="w-full" />
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
              Giải pháp quản lý công việc tối ưu
            </h3>
            {/* Arrow */}
            <div className="flex gap-[28px] max-md:hidden">
              {count == 0 ? (
                <IconArrowDisable className="cursor-pointer" />
              ) : (
                <IconArrow
                  className="rotate-180 cursor-pointer"
                  onClick={() => {
                    count === 1
                      ? setTranslate(translate + (ref.current.clientWidth + 24))
                      : setTranslate(
                          translate + (ref2.current.clientWidth + 24)
                        );

                    setCount(count - 1);
                  }}
                />
              )}

              {count === 6 ? (
                <IconArrowDisable className="cursor-pointer rotate-180" />
              ) : (
                <IconArrow
                  onClick={() => {
                    count > 0
                      ? setTranslate(
                          translate - (ref2.current.clientWidth + 24)
                        )
                      : setTranslate(
                          translate - (ref.current.clientWidth + 24)
                        );

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

            {count === 6 ? (
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
