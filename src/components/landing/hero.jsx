import React from "react";
import logo from "../../assets/logo.png";
import nexer from "../../assets/nexer.png";
import laptop from "../../assets/laptop.png";
import screen from "../../assets/screen.png";

const Hero = () => {
  return (
    <div className="bg-[#083155] pb-[140px]">
      <div className="flex flex-col gap-[20px] justify-between px-[20px] py-[16px] items-center md:px-[80px]  md:flex-row md:gap-[0px]">
        <img src={logo} className="w-[167px] h-[61px]" />
        <div className="flex flex-col gap-[16px] items-center md:flex-row">
          <div className="w-[164px] h-[34px] gap-0 rounded-[20px] flex justify-center  items-center  bg-[#D9D9D9]">
            <p className="font-[Inter] text-[16px] font-extrabold leading-[19.36px]">
              Make introduction
            </p>
          </div>
          <div className="font-[Inter] text-[16px] font-normal leading-[19.36px] text-[#FFFFFF]">
            <p>How it works</p>
          </div>
          <div className="font-[Inter] text-[16px] font-normal leading-[19.36px] text-[#FFFFFF]">
            <p>FAQs</p>
          </div>
          <div className="font-[Inter] text-[16px] font-normal leading-[19.36px] text-[#FFFFFF]">
            <p>Get in touch</p>
          </div>
        </div>
      </div>
      <div className="mt-[40px] px-[20px] flex flex-col justify-between gap-[40px] md:gap-[0px] md:mt-[132px] md:px-[80px] md:flex-row">
        <div className="flex flex-col gap-[50px] flex-1">
          <img src={nexer} />
          <p
            className="font-[Raleway] text-[32px] font-bold leading-[37.57px] text-[#FFFFFF]"
            style={{ fontWeight: "700" }}
          >
            Hey Jacob - if you’re ready to help your network and make an
            introduction to Nexerv
          </p>
          <p
            className="font-[Raleway] text-[26px] font-normal leading-[30.52px] text-[#CAD4DB]"
            style={{ fontWeight: "400" }}
          >
            Or to find out more about how introductions work, keep reading
          </p>
        </div>
        <div className="flex-1 relative">
          <img src={laptop} className="hidden md:block" />
          <img
            src={screen}
            className="relative top-[24px] left-[0px] md:left-[90px] md:absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
