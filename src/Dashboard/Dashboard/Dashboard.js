import React from "react";
import { FaEllipsisH, FaEllipsisV } from "react-icons/fa";
import Rechart from "../Rechart/Rechart";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="mt-6">
      {/* card finance */}
      <div className="grid grid-cols-2 gap-8 items-center justify-center">
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
      <div className="grid gap-8  grid-cols-2 mt-6 items-center justify-center">
        <div>
          <Rechart></Rechart>
        </div>
        <div>
          <div className="card bg-white  shadow-xl">
            <div className="card-body items-center text-center">
              <div className="flex items-center justify-end">
                <h2 className="card-title ">Your finance Target </h2>
                <FaEllipsisV className="text-end"></FaEllipsisV>
              </div>
              <div class="card card-3">
                <div class="box">
                  <div class="percent percent-1">
                    <svg className="svg-pro">
                      <circle cx="45" cy="45" r="45"></circle>
                      <circle cx="45" cy="45" r="45"></circle>
                    </svg>
                    <div class="number">
                      <h2>
                        90<span>%</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
      {/* Project finance  */}
      <div className="mt-6 p-4 rounded-lg bg-white">
        <div className=" bg-white w-full">
          <table className="table bg-white w-full">
            {/* head */}
            <thead className="bg-white">
              <tr>
                <th>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                </th>
                <td>
                  <div className="flex items-center bg-white space-x-3">
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
                <th>
                </th>
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
    </div>
  );
};

export default Dashboard;
