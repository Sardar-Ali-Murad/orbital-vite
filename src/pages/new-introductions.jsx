import React from "react";
import Sidebar from "../components/common/sidebar";
import Form from "../components/new-introductions/form";
import Introduction from "../components/new-introductions/introduction";

const NewIntroductions = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <Sidebar page="new-introductions"  />
      </div>
      <div className="pl-[37px] pt-[41px] pr-[80px] pb-[41px]">
        <h1
          className="font-[Poppins] text-[36px] font-medium leading-[23px] text-[#082431] mb-[67px]"
          style={{ fontWeight: "500" }}
        >
          New Introduction to Nexer
        </h1>
        <div className="flex gap-[96px] flex-col xl:flex-row">
          <Form />
          <Introduction />
        </div>
      </div>
    </div>
  );
};

export default NewIntroductions;
