import React, { useContext } from "react";
import { IoExitOutline, IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const LeftSideBar = () => {
  const {logOut} = useContext(AuthContext);
    const handleLogout = () =>{
        logOut()
        .then(() =>{})
        .catch(err => console.log(err));
    }
  return (
    <div className="grid gap-8 grid-rows-[1fr_100px] w-full rounded-lg  mr-6 h-screen mt-6 ml-6  ">
      
      <div className=" bg-white w-full  rounded-lg">
        <ul className="menu bg-white p-2 rounded-box">
          <li>
            <Link to='/dashboard'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
              </Link>
          </li>
          <li>
            <Link to="/dashboard/document">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Document
              
              </Link>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Calender
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Activity
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Profile
            </a>
          </li>
        </ul>
        <div className="divider p-10 bg-white"></div>
        <ul className="menu bg-white  p-2 rounded-box">
          <li>
            <div className="flex items-center">
              
              <input type="checkbox" className="toggle text-sm" checked />
               <h2>Darkmode</h2>
              
            </div>
          </li>
          <li>
          <div className="flex gap-4 items-center">
              
              <IoSettingsOutline className="text-4xl"></IoSettingsOutline>
               <h2>Settings</h2>
              
            </div>
          </li>
          <li>
          <div onClick={handleLogout} className="flex items-center text-red-600">
              
          <IoExitOutline className="text-4xl"></IoExitOutline >
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
