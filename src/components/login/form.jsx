import React from "react";

const Form = () => {
  return (
    <div className="flex flex-row">
      <div className="py-[217px] px-[80px]">
        <div className="flex flex-col gap-4">
          <h1
            className="text-black font-[Raleway] text-[48px] font-bold text-center whitespace-nowrap"
            style={{ fontWeight: "700" }}
          >
            Login to Your Account
          </h1>
          <p className="text-[#666] font-[Inter] text-[16px]  text-center">
            Login using social networks
          </p>
          <div className="flex gap-2 justify-center">
            <div className="border-none rounded-full text-white cursor-pointer text-[16px] h-[40px] w-[40px] bg-[#3b5998] flex justify-center items-center">
              <p className="font-poppins text-[18px] font-light leading-[12px] tracking-[0.5px] text-[#FFFFFF]">
                f
              </p>
            </div>
            <div className="border-none rounded-full text-white cursor-pointer text-[16px] h-[40px] w-[40px] bg-[#db4437] flex justify-center items-center">
              <p className="font-poppins text-[18px] font-light leading-[12px] tracking-[0.5px] text-[#FFFFFF]">
                G+
              </p>
            </div>
            <div className="border-none rounded-full text-white cursor-pointer text-[16px] h-[40px] w-[40px] bg-[#0077b5] flex justify-center items-center">
              <p className="font-poppins text-[18px] font-light leading-[12px] tracking-[0.5px] text-[#FFFFFF]">
                in
              </p>
            </div>
          </div>
          <div class="relative text-center text-[#666] my-[2rem]">
            <p class="before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[45%] before:h-[1px] before:bg-[#ddd] after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[45%] after:h-[1px] after:bg-[#ddd] font-[Inter]">
              OR
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Form;
