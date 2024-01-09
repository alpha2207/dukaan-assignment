import React from "react";
import { NavbarHeading } from "./NavbarHeading";
import { SeachBar } from "./SeachBar";
import Notifications from "./Notifications";

export const Navbar = () => {
  return (
    <div className="border-b bg-white border-[#d9d9d9] flex w-full justify-between items-center py-4 px-8">
      <NavbarHeading />
      <SeachBar />
      <Notifications />
    </div>
  );
};
