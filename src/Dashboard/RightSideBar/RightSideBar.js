import React from "react";
import {
  FaFacebookMessenger,
  FaStackExchange,
  FaUser,
  FaUsers,
  IconName,
} from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div className="grid grid-rows-[1fr_100px] mb-10 mt-6  mr-6">
      <div>
        <div className="card bg-white bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://i.ibb.co/fpHZ62q/download-13.png" />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Rofiqul</h2>
            <p>Mern Stack developer</p>
            <div className="grid grid-cols-3 gap-3 ">
              <div>
                <FaUsers></FaUsers>
              </div>
              <div>
                {" "}
                <FaFacebookMessenger></FaFacebookMessenger>
              </div>
              <div>
                {" "}
                <FaStackExchange></FaStackExchange>
              </div>
            </div>
          </div>
          <div className="divider p-10"></div>
          <div>
            <h2 className="text-left ml-8">About</h2>
            <p className="text-left ml-8">This is our all details client</p>
            <div className="grid  grid-cols-2 items-center p-6">
              <div className="">
                <div className="avatar -ml-10">
                  <div className="w-12 rounded-full">
                    <img src="https://i.ibb.co/fpHZ62q/download-13.png" />
                  </div>
                </div>
              </div>
              <div className="-ml-6 text-left ">
                <h2>Alomgir</h2>
                <p className="whitespace-nowrap">front-end developer</p>
              </div>
            </div>
            <div className="grid  grid-cols-2 items-center p-6">
              <div className="">
                <div className="avatar -ml-10">
                  <div className="w-12 rounded-full">
                    <img src="https://i.ibb.co/fpHZ62q/download-13.png" />
                  </div>
                </div>
              </div>
              <div className="-ml-6 text-left ">
                <h2>Alomgir</h2>
                <p className="whitespace-nowrap">front-end developer</p>
              </div>
            </div>
            <div className="grid  grid-cols-2 items-center p-6">
              <div className="">
                <div className="avatar -ml-10">
                  <div className="w-12 rounded-full">
                    <img src="https://i.ibb.co/fpHZ62q/download-13.png" />
                  </div>
                </div>
              </div>
              <div className="-ml-6 text-left ">
                <h2>Alomgir</h2>
                <p className="whitespace-nowrap">front-end developer</p>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {/* send money */}
      <div className="">
        <div className="card mt-6 mb-8 bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Send Money</h2>
            <div className="flex">
                <p>Your cash</p>
                <p>$ 140</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
