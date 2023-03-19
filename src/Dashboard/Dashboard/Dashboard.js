import React from "react";
import { FaEllipsisH, FaEllipsisV } from "react-icons/fa";
import Header from "../Header/Header";
import Rechart from "../Rechart/Rechart";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="">
      <Header></Header>
      {/* card finance */}
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-8 items-center justify-center">
        <div className="card  bg-[#5a3f90] relative shadow-xl">
          <div className="back-card "></div>
          <div className=" back-card-bottom-r "></div>
          <div className="back-card-bottom-l"></div>
          <div className="card-body">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="text-white">
                <h2 className="font-bold">Total finance</h2>
                <p className="font-bold text-3xl">9,990k</p>
              </div>
              {/* progress bar */}
              <div>
                <div class="card">
                  <div class="box">
                    <div class="percent">
                      <svg className="svg-pro">
                        <circle cx="30" cy="30" r="30"></circle>
                        <circle cx="30" cy="30" r="30"></circle>
                      </svg>
                      <div class="number">
                        <h2>
                          90<span>%</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card  bg-[#9c45b6] relative shadow-xl">
          <div className="back-card "></div>
          <div className=" back-card-bottom-r "></div>
          <div className="back-card-bottom-l"></div>
          <div className="card-body">
            <div className="grid grid-cols-2 items-center justify-center">
              <div className="text-white">
                <h2 className="font-bold">Total finance</h2>
                <p className="font-bold text-3xl">9,990k</p>
              </div>
              {/* progress bar */}
              <div>
                <div class="card card-pro-2">
                  <div class="box">
                    <div class="percent">
                      <svg className="svg-pro">
                        <circle cx="30" cy="30" r="30"></circle>
                        <circle cx="30" cy="30" r="30"></circle>
                      </svg>
                      <div class="number">
                        <h2>
                          90<span>%</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rechart */}
      <div className="grid gap-8  lg:grid-cols-2 grid-cols-1 mt-6 items-center justify-center">
        <div className="card shadow-xl p-2 bg-white">
          <Rechart></Rechart>
        </div>
        <div>
          <div className="card bg-white  shadow-xl">
            <div className=" p-4 items-center">
              <div className="flex justify-between pb-6 items-center">
                <h2 className=" text-left text-2xl font-bold">
                  Your finance Target{" "}
                </h2>
                <FaEllipsisV className="text-end cursor-pointer"></FaEllipsisV>
              </div>
              <div class="card justify-center items-center card-3">
                <div class="box">
                  <div class="percent percent-1">
                    <svg className="svg-pro">
                      <circle cx="45" cy="45" r="45"></circle>
                      <circle cx="45" cy="45" r="45"></circle>
                    </svg>
                    <div class="number">
                      <h2>
                        60<span>%</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-4 items-center justify-between ">
                <div>
                  <h2 className="text-lg font-bold">Result Achieved</h2>
                  <p>Achieved well and smoothly</p>
                </div>
                <div>
                  <h2 className="text-lg font-bold">In the Process</h2>
                  <p>
                    Waiting In target <br /> process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project finance  */}
      <div className="overflow-x-auto mt-6  w-full">
        <table className="table w-full table-back">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span>
              </td>
              <td>Red</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            
            
          </tbody>
          
          
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
