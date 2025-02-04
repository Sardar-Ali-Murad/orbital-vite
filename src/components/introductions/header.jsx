import React from "react";
import user1 from "../../assets/blue-user.png";
import user2 from "../../assets/orange-user.png";
import user3 from "../../assets/green-user.png";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col gap-[36px] md:flex-row">
        <div className="flex gap-[25px] pr-[25px] border-r border-[#B5B5B5]">
          <img src={user1} />
          <div className="flex flex-col gap-[4px] ">
            <p className="font-poppins text-[14px] font-normal leading-[21px] tracking-[-0.01em] text-[#083155]">
              Introductions
            </p>
            <h1
              className="font-poppins text-[32px] font-semibold leading-[32px] tracking-[-0.01em] text-[#333333]"
              style={{ fontWeight: "700" }}
            >
              4
            </h1>
          </div>
        </div>
        <div className="flex gap-[25px] pr-[25px] border-r border-[#B5B5B5]">
          <img src={user2} />
          <div className="flex flex-col gap-[4px] ">
            <p className="font-poppins text-[14px] font-normal leading-[21px] tracking-[-0.01em] text-[#083155]">
              Active
            </p>
            <h1
              className="font-poppins text-[32px] font-semibold leading-[32px] tracking-[-0.01em] text-[#333333]"
              style={{ fontWeight: "700" }}
            >
              1
            </h1>
          </div>
        </div>
        <div className="flex gap-[25px] pr-[25px] border-r border-[#B5B5B5]">
          <img src={user3} />
          <div className="flex flex-col gap-[4px] ">
            <p className="font-poppins text-[14px] font-normal leading-[21px] tracking-[-0.01em] text-[#083155]">
              Closed
            </p>
            <h1
              className="font-poppins text-[32px] font-semibold leading-[32px] tracking-[-0.01em] text-[#333333]"
              style={{ fontWeight: "700" }}
            >
              1
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
