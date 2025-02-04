import React from "react";
import logo from "../../assets/logo.png";
import nexer from "../../assets/nexer.png";
import laptop from "../../assets/laptop.png";
import screen from "../../assets/screen.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#083155] pb-[140px]">
      <div className="flex flex-col gap-[20px] justify-between px-[20px] py-[16px] items-center lg:px-[80px]  lg:flex-row lg:gap-[0px]">
        <img src={logo} className="w-[167px] h-[61px]" />
        <div className="flex flex-col gap-[16px] items-center lg:flex-row">
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
      <div className="mt-[40px] px-[20px] flex flex-col justify-between gap-[40px] lg:gap-[0px] lg:mt-[132px] lg:px-[80px] lg:flex-row">
        <div className="flex flex-col gap-[50px] flex-1">
          <img src={nexer} />
          <p
            className="font-[Raleway] text-[32px] font-bold leading-[37.57px] text-[#FFFFFF]"
            style={{ fontWeight: "700" }}
          >
            Hey Jacob - if you’re ready to help your network and make an
            introduction to Nexer{" "}
            <span
              onClick={() => navigate("/login")}
              className="w-[152px] h-[27px] p-[10px] text-[#000000] cursor-pointer  gap-0 rounded-[40px] bg-[#FFAA00] font-[Inter] text-[18px] font-bold leading-[21.78px] shadow-[5px_5px_25px_0px_rgba(0,59,127,0.5)]"
            >
              Click here
            </span>
          </p>
          <p
            className="font-[Raleway] text-[26px] font-normal leading-[30.52px] text-[#CAD4DB]"
            style={{ fontWeight: "400" }}
          >
            Or to find out more about how introductions work, keep reading
          </p>
        </div>
        <div className="flex-1 relative">
          <img src={laptop} className="hidden lg:block" />
          <img
            src={screen}
            className="relative top-[24px] left-[0px] lg:left-[90px] lg:absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
