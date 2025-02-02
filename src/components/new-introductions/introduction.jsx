import React from "react";
import tv from "../../assets/tv.png";
import line from "../../assets/line.png";

const Introduction = () => {
  return (
    <div className="rounded-[10px] border border-[#7A7F83] p-[26px]">
      <h1
        className="font-poppins text-[20px] font-bold leading-[23px] mb-[28px] tracking-[0.5px] text-[#082431]"
        style={{ fontWeight: "700" }}
      >
        Making your first introduction
      </h1>
      <div className="flex flex-col gap-[19px] relative">
        <img className="absolute left-[10px] z-[-1]" src={line} />
        <div className="flex gap-[24px]">
          <div
            className="w-[35px]  h-[36px]  bg-[#082431] flex justify-center items-center p-[6px]"
            style={{ borderRadius: "50%" }}
          >
            <p className="font-poppins text-[20px] font-bold leading-[23px] tracking-[0.5px] text-[#FFFFFF]">
              1
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1
              className="font-poppins text-[12px] font-bold leading-[12px] tracking-[0.5px] text-[#0D1012]"
              style={{ fontWeight: "700" }}
            >
              Log the introduction here
            </h1>
            <p
              style={{ fontWeight: "300" }}
              className="font-poppins text-[10px] font-light leading-[12px] tracking-[0.5px] text-[#000000]"
            >
              Start by logging the introduction on this page. This helps track
              its progress and ensures payments are handled smoothly. The name
              of the person you’re introducing stays private at this stage, so
              they won’t be contacted directly.
            </p>
          </div>
        </div>
        <div className="flex gap-[24px]">
          <div
            className="w-[35px]  h-[36px]  bg-[#082431] flex justify-center items-center p-[6px]"
            style={{ borderRadius: "50%" }}
          >
            <p className="font-poppins text-[20px] font-bold leading-[23px] tracking-[0.5px] text-[#FFFFFF]">
              2
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1
              className="font-poppins text-[12px] font-bold leading-[12px] tracking-[0.5px] text-[#0D1012]"
              style={{ fontWeight: "700" }}
            >
              Chat with Nexer{" "}
            </h1>
            <p
              style={{ fontWeight: "300" }}
              className="font-poppins text-[10px] font-light leading-[12px] tracking-[0.5px] text-[#000000]"
            >
              After you log the introduction, Nexer will reach out to discuss
              the opportunity. They’ll check whether they’re already connected
              on this opportunity and confirm if it’s a good fit.
            </p>
          </div>
        </div>
        <div className="flex gap-[24px]">
          <div
            className="w-[35px]  h-[36px]  bg-[#082431] flex justify-center items-center p-[6px]"
            style={{ borderRadius: "50%" }}
          >
            <p className="font-poppins text-[20px] font-bold leading-[23px] tracking-[0.5px] text-[#FFFFFF]">
              3
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1
              className="font-poppins text-[12px] font-bold leading-[12px] tracking-[0.5px] text-[#0D1012]"
              style={{ fontWeight: "700" }}
            >
              Let the person you’re introducing know{" "}
            </h1>
            <p
              style={{ fontWeight: "300" }}
              className="font-poppins text-[10px] font-light leading-[12px] tracking-[0.5px] text-[#000000]"
            >
              It’s always a nice touch to let the person you’re introducing know
              why you think this opportunity is a great match for them. It makes
              the introduction feel thoughtful and personal.
            </p>
          </div>
        </div>
        <div className="flex gap-[24px]">
          <div
            className="w-[35px]  h-[36px]  bg-[#082431] flex justify-center items-center p-[6px]"
            style={{ borderRadius: "50%" }}
          >
            <p className="font-poppins text-[20px] font-bold leading-[23px] tracking-[0.5px] text-[#FFFFFF]">
              4
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1
              className="font-poppins text-[12px] font-bold leading-[12px] tracking-[0.5px] text-[#0D1012]"
              style={{ fontWeight: "700" }}
            >
              Make the introduction your way{" "}
            </h1>
            <p
              style={{ fontWeight: "300" }}
              className="font-poppins text-[10px] font-light leading-[12px] tracking-[0.5px] text-[#000000]"
            >
              Email, LinkedIn, or a quick message—it’s entirely up to you. Once
              you’ve logged the introduction, we’ll provide a handy template to
              make this step even easier.
            </p>
          </div>
        </div>
        <div className="flex gap-[24px]">
          <div
            className="w-[35px]  h-[36px]  bg-[#082431] flex justify-center items-center hidden"
            style={{ borderRadius: "50%" }}
          >
            <p className="font-poppins text-[20px] font-bold leading-[23px] tracking-[0.5px] text-[#FFFFFF]">
              1
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <img src={tv} />
            <p className="font-poppins text-[12px] font-bold leading-[12px] tracking-[0.5px] text-[#0D1012]">
              Learn how to make an introduction with this 59 second video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
