import React from "react";

const Introduce = () => {
  return (
    <div className="px-[80px] py-[50px] bg-[#083155]">
      <h1
        className="font-[Raleway] text-[64px] font-bold leading-[75.14px] text-[#FFFFFF] text-center"
        style={{ fontWeight: "700" }}
      >
        Ready to introduce people who need Nexer’s help?
      </h1>
      <div className="flex justify-center pt-[80px]">
        <button className="w-[350px] h-[63px] rounded-[40px] bg-[#FFAA00] shadow-[5px_5px_25px_0px_rgba(0,59,127,0.5)] font-[Inter] text-[24px] font-bold leading-[29.05px] text-center">
          Make a introduction now{" "}
        </button>
      </div>
    </div>
  );
};

export default Introduce;
