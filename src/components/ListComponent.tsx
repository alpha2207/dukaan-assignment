import React from "react";

export const ListComponent = ({ svg, name }) => {
  return (
    <li className="flex gap-3 py-2 px-4 hover:bg-[#ffffff0d] hover:cursor-pointer">
      <a href="/">{svg}</a>
      <div>{name}</div>
    </li>
  );
};
