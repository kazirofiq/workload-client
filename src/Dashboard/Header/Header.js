import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="grid gap-6 grid-cols-[1fr_100px_100px]  mt-6 items-center justify-center">
      <div className="flex items-center justify-center bg-white p-2 pl-3 rounded-xl">
        <FaSearch className="mr-2 bg-white"></FaSearch>
        <input type="text" placeholder="Search" className="input  w-full " />
      </div>
      <div className="p-5 bg-white rounded-xl">
        <div className="indicator">
          <span className="indicator-item badge bg-[#6c51b0]">4</span>
          <button className="">inbox</button>
        </div>
      </div>
      <div>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">99+</span>
          <button className="btn">inbox</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
