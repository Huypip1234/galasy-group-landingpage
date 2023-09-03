import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import IconScrollDown from "../assets/icons/IconScrollDown";

const Intro = () => {
  /* Page number in right */
  const [pageNumber, setPageNumber] = useState({
    color: "text-[#1F1F1F]",
    number: "01",
  });

  /* Animation up and down scroll icon */
  const [up, setUp] = useState("0rem");
  useEffect(() => {
    const upDownIcon = setInterval(() => {
      setUp("translate-y-[-1rem]");
      setTimeout(() => {
        setUp("translate-y-[0rem]");
      }, 250);
    }, 500);
    return () => {
      clearInterval(upDownIcon);
    };
  }, []);
  /* End Animation up and down scroll icon */

  return (
    <div className="relative">
      <Carousel
        swipeToSlide={true}
        draggable
        autoplay
        dots={false}
        afterChange={(index) => {
          index === 0 &&
            setPageNumber({
              color: "text-[#1F1F1F]",
              number: "01",
            });
          index === 1 &&
            setPageNumber({
              color: "text-white",
              number: "02",
            });
          index === 2 &&
            setPageNumber({
              color: "text-white",
              number: "03",
            });
        }}
        /* ref={carouselRef} */
      >
        {/* slide 1 */}
        <div className="bg-[url('/images/intro-page/1.png')] h-[calc(100vh-3.6rem)] bg-no-repeat bg-cover bg-center">
          <div className="lg:px-[6rem] px-[24px] md:mt-[10rem] mt-[5rem]  max-w-[1920px] mx-auto">
            <h1
              className="text-[#F68D1D] text-[56px] font-[700] max-sm:text-[45px]"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              Galasy Group
            </h1>
            <h2
              className="text-[24px] font-[400] text-[#1F1F1F] mt-[28px] leading-9"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              Tối ưu hóa hiệu suất cuộc sống của bạn. <br />
              Tốt hơn một chút, hiệu quả hơn một chút, tối hưu hơn 1 chút.
            </h2>
          </div>
        </div>
        {/* End Slide 1 */}
        {/* slide 2 */}
        <div className="bg-[url('/images/intro-page/2.png')] h-[calc(100vh-3.6rem)] bg-no-repeat bg-cover bg-center">
          <div className="lg:px-[6rem] px-[24px] md:mt-[10rem] mt-[5rem]  max-w-[1920px] mx-auto">
            <h1 className="text-[#F68D1D] text-[56px] font-[700] " data-aos="fade-right"
              data-aos-duration="500">Mission</h1>
            <div className="text-[24px] font-[400] text-white mt-[28px] leading-9 xl:w-[858px] lg:w-[600px]">
              <p>
                Galasy Group – Sứ mệnh của chúng tôi là trao cho mọi người và
                mọi tổ chức trên thế giới những sản phẩm công nghệ số mạnh mẽ để
                tối ưu hóa cuộc sống của họ.
              </p>
              <p className="mt-[16px]">
                Tại Galasy Group – Chúng tôi tập trung nguồn lực để tạo ra những
                sản phẩm công nghệ số tốt nhất để phục vụ khách hàng trên toàn
                thế giới.
              </p>
            </div>
          </div>
        </div>
        {/* End Slide 2 */}
        {/* slide 3 */}
        <div className="bg-[url('/images/intro-page/3.png')] h-[calc(100vh-3.6rem)] bg-no-repeat bg-cover bg-center">
          <div className="lg:px-[6rem] px-[24px] md:mt-[10rem] mt-[5rem] max-w-[1920px] mx-auto">
            <p className="text-white text-[56px] font-[700] xl:w-[864px] lg:w-[600px] leading-[4.8rem]">
              Nỗi đau mà các doanh nghiệp phải đối mặt khi quản lý công việc và
              lao động tự do
            </p>
          </div>
        </div>
        {/* End Slide 3 */}
      </Carousel>

      {/* Fixed Item */}
      <div>
        {/* page number */}
        <div
          className={`${pageNumber.color} ${pageNumber.number=="01" && "max-2xl:!text-white"} flex flex-col items-center absolute right-[5rem] top-[50%] translate-y-[-50%]  max-lg:hidden`}
        >
          <p className=" font-[700] text-[24px]">{pageNumber.number}</p>
          <div className="bg-[#848484] h-[86px] w-[1px]"></div>
          <p className="text-[#848484] font-[400] text-[24px]">05</p>
        </div>
        {/* Icon scroll Down */}
        <a
          className={`absolute bottom-[3rem] left-[50%] translate-x-[-50%] hover:translate-y-[-1rem] transition-all duration-500 ${up}`}
          href="#main-content"
        >
          <IconScrollDown />
        </a>
      </div>
      {/* End fixed Item */}
    </div>
  );
};

export default Intro;
