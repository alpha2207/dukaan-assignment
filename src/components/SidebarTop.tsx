import React from "react";

export const SidebarTop = () => {
  return (
    <div className="px-4 py-2">
      <div className="flex py-4">
        <div className="mr-3 w-10 h-10 bg-[#ededed] rounded-lg"></div>
        <div>
          <h1 className="font-medium text-sm text-white">Nishyan</h1>
          <span className="font-medium text-xs underline opacity-80 hover:opacity-100">
            Visit Store
          </span>
        </div>
      </div>
    </div>
  );
};
