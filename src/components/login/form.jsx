import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="py-[80px] px-[20px] md:px-[80px] md:py-[163px] flex-[1]">
        <div className="flex flex-col gap-4">
          <h1
            className="text-black font-[Raleway] text-[48px] font-bold text-center"
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
          <div class="relative text-center text-[#666]">
            <p class="before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[45%] before:h-[1px] before:bg-[#ddd] after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-[45%] after:h-[1px] after:bg-[#ddd] font-[Inter]">
              OR
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <input
            placeholder="Email"
            className="w-full bg-[#f5f5f5] border-none rounded-[40px] font-inter text-[16px] p-4 font-[Inter]"
          />
          <input
            placeholder="Password"
            className="w-full bg-[#f5f5f5] border-none rounded-[40px] font-inter text-[16px] p-4 font-[Inter]"
          />
        </div>
        <div className="flex justify-center">
          <div className="w-[350px] h-[63px] gap-0 rounded-[40px] bg-[#083155] shadow-[5px_5px_25px_0px_rgba(0,59,127,0.5)] mt-[26px] flex justify-center items-center">
            <p
              className="font-inter text-[24px] font-bold leading-[29.05px] text-center text-[#FFFFFF]"
              style={{ fontWeight: "700" }}
            >
              Sign In
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1] bg-[#083155] py-[100px] px-[20px] md:px-[80px] md:py-[200px] ">
        <div>
          <h1
            className="font-raleway text-[64px] font-bold leading-[75.14px] text-left text-[#FFFFFF]"
            style={{ fontWeight: "700" }}
          >
            New here?
          </h1>
          <p className="font-inter text-[32px] font-normal leading-[38.73px] text-[#FFFFFF]">
            Sign up to start helping your network
          </p>
        </div>
        <div className="mt-[60px]  w-[350px] h-[63px] rounded-[40px] bg-[#FFAA00] shadow-[5px_5px_25px_0px_#003B7F80] flex justify-center items-center ">
          <p
            className="font-inter text-[24px] font-bold leading-[29.05px] text-center text-[#000000]"
            style={{ fontWeight: "700" }}
          >
            {" "}
            Sign Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
