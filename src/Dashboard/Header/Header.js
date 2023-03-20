import React from "react";
import { FaElementor, FaSearch } from "react-icons/fa";
import { MdForwardToInbox } from "react-icons/md";
import { GrNotification } from "react-icons/gr";

const Header = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
       <label htmlFor="toggle-sidebar" className=" flex lg:hidden  justify-center w-[100px] p-1 bg-white  rounded-xl">
        <FaElementor className="text-4xl cursor-pointer"></FaElementor>
        
      </label>
      <div className="flex flex-1 gap-2 items-center justify-center bg-white p-1 lg:p-3 rounded-xl">
        <FaSearch className=" bg-white"></FaSearch>
        <input type="text" placeholder="Search" className="input  w-full " />
      </div>
      <div className="p-1 lg:p-3 bg-white w-[100px] rounded-xl">
        <div className="indicator">
          <span className="indicator-item badge bg-[#6c51b0]">4</span>
          <button className=""><MdForwardToInbox className="text-4xl"></MdForwardToInbox></button>
        </div>
      </div>
      <div className="p-1 lg:p-3 bg-white w-[100px] rounded-xl">
        <div className="indicator">
          <span className="indicator-item badge bg-[#6c51b0]">2</span>
          <button className=""><GrNotification className="text-4xl"></GrNotification></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
