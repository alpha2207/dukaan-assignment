import React from "react";

export const SeachBar = () => {
  return (
    <div className="bg-[#f7f7f7] flex w-[400px] rounded-lg py-2 px-4 gap-[6px]">
      <svg
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="svg-search-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        ></path>
      </svg>

      <input
        className="bg-transparent border-none outline-none min-w-24"
        type="text"
        placeholder="Search features, tutorial, etc."
      />
    </div>
  );
};
