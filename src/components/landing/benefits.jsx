import React from "react";
import oval from "../../assets/oval.png";
import search from "../../assets/search.png";
import chat from "../../assets/chat.png";
import gift from "../../assets/gift.png";

const Benefits = () => {
  return (
    <div className="relative bg-[#D9D9D9]">
      <img src={oval} className="absolute top-[-140px]" />
      <div className="relative px-[80px] flex flex-col gap-[30px] w-[60%]">
        <h1 className="font-[Raleway] text-[42px] font-bold leading-[49.31px] text-[#083155]">
          Everyone benefits from your introductions{" "}
        </h1>
        <p className="font-[Raleway] text-[24px] font-normal leading-[28.18px] text-[#083155]">
          With your introduction, your network receive an exclusive discount,
          making it even easier for them to access Nexer’s services.
        </p>
        <p className="font-[Raleway] text-[24px] font-normal leading-[28.18px] text-[#083155]">
          You strengthen your network and earn a well-deserved thank-you.
        </p>
      </div>
      <div className="relative mt-[78px] bg-[#FFFFFF] rounded-[40px] flex space-evenly gap-[120px] items-center content-center px-[80px] py-[70px]">
        <div className="flex relative">
          <p className="font-[Raleway] text-[20px] font-medium leading-[23.48px] text-[#083155]">
            Look out for people or companies you know that could benefit from
            Nexer's services
          </p>
          <img
            src={search}
            className="w-[80px] h-[80px] absolute top-[-53px] right-[13px]"
          />
        </div>
        <div className="flex relative">
          <div className="flex flex-col gap-[20px]">
            <p className="font-[Raleway] text-[20px] font-medium leading-[23.48px] text-[#083155]">
              Log them in Orbit - it only takes a minute.
            </p>
            <p className="font-[Raleway] text-[20px] font-medium leading-[23.48px] text-[#083155]">
              Then make the introduction in the way that feels best to
              you—email, LinkedIn, or even a quick call.
            </p>
          </div>
          <img
            src={chat}
            className="w-[80px] h-[80px] absolute top-[-53px] right-[-55px]"
          />
        </div>
        <div className="flex relative">
          <div className="flex flex-col gap-[20px]">
            <p className="font-[Raleway] text-[20px] font-medium leading-[23.48px] text-[#083155]">
              That’s it. Nexer will take it from here.
            </p>
            <p className="font-[Raleway] text-[20px] font-medium leading-[23.48px] text-[#083155]">
              If they become a client, they’ll get a discount thanks to you, and
              you’ll earn a thank-you payment!
            </p>
            <p className="font-[Raleway] text-[20px] font-medium leading-[23.48px] text-[#083155]">
              It’s a win-win!
            </p>
          </div>
          <img
            src={gift}
            className="w-[80px] h-[80px] absolute top-[-53px] right-[-70px]"
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
