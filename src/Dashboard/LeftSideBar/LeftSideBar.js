import React, { useContext } from "react";
import { IoExitOutline, IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { AiOutlineHome } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";
import { BsCalendar3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const LeftSideBar = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="grid gap-8 grid-rows-[1fr_100px] w-full rounded-lg  mr-6 h-screen mt-6 ml-6  ">
      <div className=" bg-white w-full  rounded-lg">
        <ul className="menu bg-white p-2 rounded-box">
          <li>
            <Link to="/dashboard">
              <div className="flex gap-4 items-center">
                <AiOutlineHome className="text-xl"></AiOutlineHome>
                <h2>Dashboard</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/document">
              <div className="flex gap-4 items-center">
                <GrDocumentText className="text-xl"></GrDocumentText>
                <h2>Document</h2>
              </div>
            </Link>
          </li>
          <li>
          <Link to="/dashboard/calender">
              <div className="flex gap-4 items-center">
              <IoMdTime className="text-xl"></IoMdTime>
                <h2>Calender</h2>
              </div>
            </Link>
          </li>
          <li>
          <Link to="/dashboard/activity">
              <div className="flex gap-4 items-center">
                <BsCalendar3 className="text-xl"></BsCalendar3>
                <h2>Activity</h2>
              </div>
            </Link>
          </li>
          <li>
          <Link to="/dashboard/profile">
              <div className="flex gap-4 items-center">
              <CgProfile className="text-xl"></CgProfile>
                <h2>Profile</h2>
              </div>
            </Link>
          </li>
        </ul>
        {/* divider */}
        <div className="divider p-10 bg-white"></div>
        {/* profile */}
        <ul className="menu bg-white  p-2 rounded-box">
          <li>
            <div className="flex items-center">
              <input type="checkbox" className="toggle text-sm" checked />
              <h2>Darkmode</h2>
            </div>
          </li>
          <li>
            <div className="flex gap-4 items-center">
            <IoExitOutline className="text-4xl"></IoExitOutline>
              <h2>Settings</h2>
            </div>
          </li>
          <li>
            <div
              onClick={handleLogout}
              className="flex items-center text-red-600"
            >
              <IoExitOutline className="text-4xl"></IoExitOutline>
              <h2>Log Out</h2>
            </div>
          </li>
        </ul>
      </div>
      {/* upgrade pro */}
      <div className="hidden lg:block">
        <div className="card  bg-white shadow-xl">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://i.ibb.co/9T1FftK/download-12.png" />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Upgrade Pro</h2>
            <p>Choose our magic pro dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
