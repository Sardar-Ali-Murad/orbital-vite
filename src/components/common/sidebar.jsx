import React from "react";
import logo from "../../assets/logo.png";
import chat from "../../assets/chat.svg";
import chart from "../../assets/chart.png";
import document from "../../assets/document.png";
import settings from "../../assets/setting.png";
import payment from "../../assets/wallet.png";
import profile from "../../assets/profile.png";
import help from "../../assets/help.png";

const Sidebar = ({ page }) => {
  return (
    <div
      className={`p-[20px] bg-[#083155] w-[100%]  overflow-y-auto min-h-[100vh] h-[100%] ${
        page === "new-introductions" ? "md:w-[240px]" : "xl:w-[240px]"
      } `}
    >
      <img src={logo} className=" w-[149px] ml-[-10px]" />
      <div className="mt-[30px]">
        <p className="font-[Poppins] text-[11px] font-normal leading-[11px] tracking-[1px] text-[#FFFFFF]">
          MENU
        </p>
        <div className="mt-[12px] flex flex-col gap-[14px]">
          <div
            className={`w-[200px] h-[39.72px] top-[116px] left-[20px]  rounded-[5px] flex px-[21px] py-[12px] items-center  gap-[15px]  ${
              page === "new-introductions" && "bg-[#FFAA00]"
            }`}
          >
            <img src={chat} />
            <p className="font-[Poppins] text-[12px] font-medium leading-[12px] tracking-[0.5px] text-[#FFFFFF]">
              New introduction
            </p>
          </div>
          <div
            className={`w-[200px] h-[39.72px] top-[116px] left-[20px]  rounded-[5px]  flex px-[21px] py-[12px] items-center  gap-[15px] ${
              page === "introductions" && "bg-[#FFAA00]"
            }`}
          >
            <img src={chart} />
            <p className="font-[Poppins] text-[12px] font-medium leading-[12px] tracking-[0.5px] text-[#FFFFFF]">
              Track introductions{" "}
            </p>
          </div>
          <div className="w-[200px] h-[39.72px] top-[116px] left-[20px]  rounded-[5px]  flex px-[21px] py-[12px] items-center  gap-[15px]">
            <img src={document} />
            <p className="font-[Poppins] text-[12px] font-medium leading-[12px] tracking-[0.5px] text-[#FFFFFF]">
              Find companies{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[80px]">
        <p className="font-[Poppins] text-[11px] font-normal leading-[11px] tracking-[1px] text-[#FFFFFF]">
          OTHERS
        </p>
        <div className="mt-[12px] flex flex-col gap-[14px]">
          <div
            className={`w-[200px] h-[39.72px] top-[116px] left-[20px]  rounded-[5px] flex px-[21px] py-[12px] items-center  gap-[15px] ${
              page === "new-introductions" && " bg-[#FFAA00]"
            }`}
          >
            <img src={settings} />
            <p className="font-[Poppins] text-[12px] font-medium leading-[12px] tracking-[0.5px] text-[#FFFFFF]">
              Settings
            </p>
          </div>
          <div className="w-[200px] h-[39.72px] top-[116px] left-[20px]  rounded-[5px]  flex px-[21px] py-[12px] items-center  gap-[15px]">
            <img src={payment} />
            <p className="font-[Poppins] text-[12px] font-medium leading-[12px] tracking-[0.5px] text-[#FFFFFF]">
              Payment{" "}
            </p>
          </div>
          <div className="w-[200px] h-[39.72px] top-[116px] left-[20px]  rounded-[5px]  flex px-[21px] py-[12px] items-center  gap-[15px]">
            <img src={profile} />
            <p className="font-[Poppins] text-[12px] font-medium leading-[12px] tracking-[0.5px] text-[#FFFFFF]">
              Account{" "}
            </p>
          </div>
          <div className="w-[200px] h-[39.72px] top-[116px] left-[20px]  rounded-[5px]  flex px-[21px] py-[12px] items-center  gap-[15px]">
            <img src={help} />
            <p className="font-[Poppins] text-[12px] font-medium leading-[12px] tracking-[0.5px] text-[#FFFFFF]">
              Help{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
