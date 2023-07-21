import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

const FilerProduct = ({ category, onClick, isActive }) => {
  return (
    <div onClick={onClick}>
      <div
        className={` text-3xl p-5 rounded-full cursor-pointer ${
          isActive ? " bg-sky-500 text-white" : " bg-sky-300"
        }`}
      >
        <CiForkAndKnife />
      </div>
      <p className=" text-center font-medium my-1 capitalize">{category}</p>
    </div>
  );
};

export default FilerProduct;
