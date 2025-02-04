import React from "react";
import Sidebar from "../components/common/sidebar";
import Header from "../components/introductions/header";
import Table from "../components/introductions/table";

const Introductions = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <div>
        <Sidebar page="introductions" />
      </div>
      <div className="pl-[37px] pt-[41px] pr-[80px] pb-[41px]">
        <div className="flex gap-[74px] flex-col">
          <Header />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Introductions;
