import React from "react";
import oval from "../../assets/oval.png";
import search from "../../assets/search.png";
import chat from "../../assets/chat.png";
import gift from "../../assets/gift.png";

const Benefits = () => {
  return (
    <div className="relative bg-[#D9D9D9]">
      <img src={oval} className="absolute top-[-140px] hidden lg:block" />
      <div className="relative px-[20px] flex flex-col py-[60px] gap-[30px] w-[100%] lg:w-[60%] lg:px-[80px] lg:py-[0px]">
        <h1
          className="font-[Raleway] text-[42px] font-bold leading-[49.31px] text-[#083155]"
          style={{ fontWeight: "700" }}
        >
          Everyone benefits from your introductions{" "}
        </h1>
        <p
          className="font-[Raleway] text-[24px] font-normal leading-[28.18px] text-[#083155]"
          style={{ fontWeight: "400" }}
        >
          With your introduction, your network receive an exclusive discount,
          making it even easier for them to access Nexer’s services.
        </p>
        <p
          className="font-[Raleway] text-[24px] font-normal leading-[28.18px] text-[#083155]"
          style={{ fontWeight: "400" }}
        >
          You strengthen your network and earn a well-deserved thank-you.
        </p>
      </div>
      <div className="relative mt-[78px] bg-[#FFFFFF] rounded-[40px] flex space-evenly gap-[40px] items-center content-center px-[20px] py-[70px] flex-col lg:flex-row lg:gap-[120px] lg:px-[80px] ">
        <div className="flex relative">
          <p
            className="font-[Raleway] text-[20px] font-medium leading-[23.48px] text-[#083155]"
            style={{ fontWeight: "500" }}
          >
            Look out for people or companies you know that could benefit from
            Nexer's services
          </p>
          <img
            src={search}
            className="w-[60px] h-[60px] absolute top-[-53px] right-[13px] lg:w-[80px] lg:h-[80px] hidden lg:block"
          />
        </div>
        <div className="flex relative">
          <div className="flex flex-col gap-[20px]">
            <p
              className="font-[Raleway] text-[20px] font-medium leading-[23.48px] text-[#083155]"
              style={{ fontWeight: "500" }}
            >
              Log them in Orbit - it only takes a minute.
            </p>
            <p
              className="font-[Raleway] text-[20px] font-medium leading-[23.48px] text-[#083155]"
              style={{ fontWeight: "500" }}
            >
              Then make the introduction in the way that feels best to
              you—email, LinkedIn, or even a quick call.
            </p>
          </div>
          <img
            src={chat}
            className="w-[60px] h-[60px] absolute top-[-53px] right-[-55px]  lg:w-[80px] lg:h-[80px] hidden lg:block"
          />
        </div>
        <div className="flex relative">
          <div className="flex flex-col gap-[20px]">
            <p
              className="font-[Raleway] text-[20px] font-medium leading-[23.48px] text-[#083155]"
              style={{ fontWeight: "500" }}
            >
              That’s it. Nexer will take it from here.
            </p>
            <p
              className="font-[Raleway] text-[20px] font-medium leading-[23.48px] text-[#083155]"
              style={{ fontWeight: "500" }}
            >
              If they become a client, they’ll get a discount thanks to you, and
              you’ll earn a thank-you payment!
            </p>
            <p
              className="font-[Raleway] text-[20px] font-medium leading-[23.48px] text-[#083155]"
              style={{ fontWeight: "500" }}
            >
              It’s a win-win!
            </p>
          </div>
          <img
            src={gift}
            className="w-[60px] h-[60px] absolute top-[-53px] right-[-70px]  lg:w-[80px] lg:h-[80px] hidden lg:block"
          />
        </div>
      </div>
      <div className="flex justify-center py-[31px]">
        <button className="w-[350px] h-[63px] rounded-[40px] bg-[#FFAA00] shadow-[5px_5px_25px_0px_rgba(0,59,127,0.5)] font-[Inter] text-[24px] font-bold leading-[29.05px] text-center">
          Make a introduction now
        </button>
      </div>
    </div>
  );
};

export default Benefits;
