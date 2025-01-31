import React from "react";
import img1 from "../../assets/img-1.svg";
import img2 from "../../assets/img-2.svg";

const Colleagues = () => {
  return (
    <div className="px-[20px] py-[70px] bg-[#083155] md:px-[80px] ">
      <p
        className="font-[Raleway] text-[42px] font-bold leading-[49.31px] text-[#FFFFFF]"
        style={{ fontWeight: "700" }}
      >
        You have 6 colleagues who have earned over £4000 in the last month for
        their introductions
      </p>
      <div className="flex justify-between mt-[57px] flex-col gap-[40px] md:gap-[0px] md:flex-row">
        <div className="flex gap-[40px] flex-col md:flex-row">
          <img src={img1} className="h-[90px] w-[90px]" />
          <div className="flex flex-col gap-[20px]">
            <p className="font-[Inter] text-[18px] font-bold leading-[21.78px] text-[#FFFFFF]">
              John Smith - Designer
            </p>
            <p className="font-[Inter] text-[18px] italic font-medium leading-[21.78px] text-[#D9D9D9]">
              “Introducing Nexer to my current employer was super simple and it
              was great to be able to help both companies... and be paid for it“
            </p>
          </div>
        </div>
        <div className="flex gap-[40px] flex-col md:flex-row">
          <img src={img2} className="h-[90px] w-[90px]" />
          <div className="flex flex-col gap-[20px]">
            <p className="font-[Inter] text-[18px] font-bold leading-[21.78px] text-[#FFFFFF]">
              Alison Anderson - Tech lead
            </p>
            <p className="font-[Inter] text-[18px] italic font-medium leading-[21.78px] text-[#D9D9D9]">
              “I knew Nexer could help my current employer, so I introduced
              them. I would have done it anyway, but by using orbit my friend
              got a discount as well”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colleagues;
