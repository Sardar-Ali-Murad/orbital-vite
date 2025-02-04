import React from "react";

const Table = () => {
  return (
    <div className="flex flex-col gap-[50px]">
      <h1
        className="font-poppins text-[36px] font-medium leading-[23px] tracking-[0.5px] text-[#082431]"
        style={{ fontWeight: "500" }}
      >
        All Introductions
      </h1>
      <div className="flex flex-col gap-[20px] overflow-x-scroll overflow-y-hidden  md:w-auto">
        <div className="gap-[120px] px-[20px] grid grid-cols-5">
          <p className="font-poppins text-[14px] font-bold leading-[21px] tracking-[-0.01em] text-[#292D32]">
            Company
          </p>
          <p className="font-poppins text-[14px] font-bold leading-[21px] tracking-[-0.01em] text-[#292D32]">
            Introduced to
          </p>
          <p className="font-poppins text-[14px] font-bold leading-[21px] tracking-[-0.01em] text-[#292D32]">
            Date
          </p>
          <p className="font-poppins text-[14px] font-bold leading-[21px] tracking-[-0.01em] text-[#292D32]">
            Introduction fee
          </p>
          <p className="font-poppins text-[14px] font-bold leading-[21px] tracking-[-0.01em] text-[#292D32]">
            Status
          </p>
        </div>
        <div className="flex flex-col gap-[13px]">
          <div className=" bg-[#ECECEC] h-[60px] rounded-[10px] p-[20px] grid grid-cols-5 gap-[120px]">
            <p className="font-poppins text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#292D32]">
              Nexer
            </p>
            <p className="font-poppins text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#292D32]">
              Jerome Bell
            </p>
            <p className="font-poppins text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#292D32]">
              02/01/2025{" "}
            </p>
            <p className="font-poppins text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#292D32]">
              £2.500{" "}
            </p>
            <div className="w-[80px] h-[29px] top-[35px] left-[983px] p-[4px_12px] gap-[10px] rounded-[4px] border flex justify-center items-center bg-[#16C09861] border border-[1px] border-[#00B087]">
              <p className="font-poppins text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#008767]">
                Paid
              </p>
            </div>
          </div>
          <div className="w-[100%] bg-[#ECECEC] h-[60px] rounded-[10px] p-[20px] grid grid-cols-5 gap-[120px]">
            <p className="font-poppins text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#292D32]">
              Nexer
            </p>
            <p className="font-poppins text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#292D32]">
              Jerome Bell
            </p>
            <p className="font-poppins text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#292D32]">
              02/01/2025{" "}
            </p>
            <p className="font-poppins opacity-0 text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#292D32]">
              £2.500{" "}
            </p>
            <div className="w-[80px] h-[29px] top-[35px] left-[983px] p-[4px_12px] gap-[10px] rounded-[4px] border flex justify-center items-center bg-[#16C09861] border border-[1px] border-[#00B087]">
              <p className="font-poppins text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#008767]">
                Paid
              </p>
            </div>
          </div>
          <div className="w-[100%] bg-[#ECECEC] h-[60px] rounded-[10px] p-[20px] grid grid-cols-5 gap-[120px]">
            <p className="font-poppins text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#292D32]">
              Nexer
            </p>
            <p className="font-poppins text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#292D32]">
              Jerome Bell
            </p>
            <p className="font-poppins text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#292D32]">
              02/01/2025{" "}
            </p>
            <p className="font-poppins opacity-0 text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#292D32]">
              £2.500{" "}
            </p>
            <div className="w-[80px] h-[29px] top-[35px] left-[983px] p-[4px_12px] gap-[10px] rounded-[4px] border flex justify-center items-center bg-[#16C09861] border border-[1px] border-[#00B087]">
              <p className="font-poppins text-[14px] font-medium leading-[21px] tracking-[-0.01em] text-[#008767]">
                Paid
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
