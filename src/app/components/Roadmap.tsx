import React from "react";

const Roadmap = () => {
  return (
    <div className="py-[80px] bg-[#FFF9F3] mt-[90px]">
      <div className="px-[120px] max-xl:px-[80px] max-lg:px-[24px]">
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
              Lập biểu đồ lương lai – Tầm nhìn và lộ trình của chúng tôi
            </h3>
          </div>
        </div>
        {/* Title */}
      </div>

      <div className="mt-[103px] overflow-x-scroll pb-[2rem]">
        <img
          src="/images/roadmap/1.png"
          alt="err"
          className="max-xl:min-w-[1920px]"
        />
      </div>
    </div>
  );
};

export default Roadmap;
