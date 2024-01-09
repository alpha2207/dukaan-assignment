import React from "react";
import { SidebarList } from "./SidebarList";
import { SidebarTop } from "./SidebarTop";
import { SidebarBottom } from "./SidebarBottom";

export const Sidebar = () => {
  return (
    <aside className="fixed flex flex-col text-[#ccc] bg-[#1e2640] w-[224px] h-full">
      <SidebarTop />
      <SidebarList />
      <SidebarBottom />
    </aside>
  );
};
