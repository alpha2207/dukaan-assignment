import React from "react";
import { Navbar } from "./Navbar";
import Overview from "./Overview";
import Transactions from "./Transactions";

export const Payout = () => {
  return (
    <div className="bg-[#f7f7f7] ml-[224px] h-fit" style={{ width: "calc(100% - 224px)" }}>
      <Navbar />
      <Overview />
      <Transactions />
    </div>
  );
};
