import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col gap-[45px]">
      <div className="flex flex-col gap-[22px]">
        <div className="flex flex-col gap-[4px]">
          <label
            className="font-[Poppins] text-[14px] font-normal leading-[21px]"
            style={{ fontWeight: "400" }}
          >
            Name of the person you’re introducing to Nexer
          </label>
          <input className="w-[522px] h-[30px] p-[8px_15px] gap-2 rounded-lg border-2 border-[#DDDDDD]" />
        </div>
        <div className="flex flex-col gap-[4px]">
          <label
            className="font-[Poppins] text-[14px] font-normal leading-[21px]"
            style={{ fontWeight: "400" }}
          >
            Their role / position{" "}
          </label>
          <input className="w-[522px] h-[30px] p-[8px_15px] gap-2 rounded-lg border-2 border-[#DDDDDD]" />
        </div>
        <div className="flex flex-col gap-[4px]">
          <label
            className="font-[Poppins] text-[14px] font-normal leading-[21px]"
            style={{ fontWeight: "400" }}
          >
            Which company do they work at{" "}
          </label>
          <input className="w-[522px] h-[30px] p-[8px_15px] gap-2 rounded-lg border-2 border-[#DDDDDD]" />
        </div>
        <div className="flex flex-col gap-[4px]">
          <label
            className="font-[Poppins] text-[14px] font-normal leading-[21px]"
            style={{ fontWeight: "400" }}
          >
            Details on what they need help with{" "}
          </label>
          <textarea className="h-[136px] w-[522px] p-[8px_15px] gap-2 rounded-lg border-2 border-[#DDDDDD]"></textarea>
        </div>
      </div>
      <div className="flex flex-col gap-[36px]">
        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-row gap-[14px] items-center">
            <input type="checkbox" className="h-[24px] w-[24px]" />
            <label
              className="font-[Poppins] text-[14px] font-normal leading-[21px] text-[#0D1012]"
              style={{ fontWeight: "400" }}
            >
              I agree with the terms & conditions of this introduction
            </label>
          </div>
          <div className="flex flex-row gap-[14px] items-center">
            <input type="checkbox" className="h-[24px] w-[24px]" />
            <label
              className="font-[Poppins] text-[14px] font-normal leading-[21px] text-[#0D1012]"
              style={{ fontWeight: "400" }}
            >
              I agree with the non-disclosure agreement for this introduction{" "}
            </label>
          </div>
        </div>
        <div className="w-[234px] h-[42px] top-[671px] left-[277px] gap-0 rounded-[10px] bg-[#DDDDDD] flex justify-center items-center">
          <p className="font-inter text-[14px] font-normal leading-[16.94px] text-center text-[#000000]">
            Log introduction
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
