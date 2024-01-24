import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <div>
      <div className="bg-gray-200 px-11 py-4 mt-1">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-5">
          <div className="bg-white h-screen col-span-1 hidden lg:block p-4 w-full">
            <h1
              to="/"
              className="text-center text-xl cursor-pointer font-semibold border-b border-b-gray-200 py-3"
            >
              <Link to='/'>House Hunter</Link>
            </h1>

            <div className="mt-4">
              <ul className="flex-col justify-start text-left">
                <li>
                  <Link to="/dashboard/myHouse">
                    <button className="w-full mb-3  hover:bg-gray-300 border text-[16px] font-semibold px-2 py-3 bg-gray-200 duration-500">
                      My House
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addHouse">
                    <button className="w-full hover:bg-gray-300 border text-[16px] font-semibold px-2 py-3 bg-gray-200 duration-500">
                      Add House +
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-4 p-4 bg-white h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
