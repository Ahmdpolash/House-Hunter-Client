import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import "../Components/house.css";

const House = () => {
  const [styles, setStyles] = useState("grid");
  const [search, setSearch] = useState("");


  const axiosPublic = useAxiosPublic();

  const { data } = useQuery({
    queryKey: ["houses"],
    queryFn: async () => {
      const houseData = await axiosPublic.get("/houses");
      return houseData.data;
    },
  });

  console.log(search);

  const filteredData = data?.filter((house) =>
    house.houseName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-200 px-11 py-4 mt-1">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-5">
        <div className="bg-white col-span-1 hidden lg:block p-4 w-full">
          <div className="flex justify-between border-b-2 border-gray-200  py-1 items-center">
            <h1 className="text-xl text-gray-600 font-semibold ">City</h1>
            <h2 className="text-gray-600 font-semibold">Clear</h2>
          </div>

          <div className="py-3 space-y-2 pl-1">
            <div className="flex  items-center gap-2">
              <div>
                <label className="container">
                  <input value='Dhaka' onClick={(e) => setCity(e.target.value)} type="checkbox" />
                  <svg className="w-4 h-4" viewBox="0 0 64 64">
                    <path
                      d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                      pathLength="575.0541381835938"
                      class="path"
                    ></path>
                  </svg>
                </label>
              </div>

              <h3 className="text-gray-700 text-[17px]">Dhaka</h3>
            </div>
            <div className="flex  items-center gap-2">
              <div>
                <label className="container">
                  <input value='Rangpur' onClick={(e) => setCity(e.target.value)} type="checkbox" />
                  <svg className="w-4 h-4" viewBox="0 0 64 64">
                    <path
                      d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                      pathLength="575.0541381835938"
                      class="path"
                    ></path>
                  </svg>
                </label>
              </div>

              <h3 className="text-gray-700 text-[17px]">Rangpur</h3>
            </div>
            <div className="flex  items-center gap-2">
              <div>
                <label className="container">
                  <input value='Khulna' onClick={(e) => setCity(e.target.value)} type="checkbox" />
                  <svg className="w-4 h-4" viewBox="0 0 64 64">
                    <path
                      d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                      pathLength="575.0541381835938"
                      class="path"
                    ></path>
                  </svg>
                </label>
              </div>

              <h3 className="text-gray-700 text-[17px]">Khulna</h3>
            </div>
            <div className="flex  items-center gap-2">
              <div>
                <label className="container">
                  <input value='Sylhet' onClick={(e) => setCity(e.target.value)} type="checkbox" />
                  <svg className="w-4 h-4" viewBox="0 0 64 64">
                    <path
                      d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                      pathLength="575.0541381835938"
                      class="path"
                    ></path>
                  </svg>
                </label>
              </div>

              <h3 className="text-gray-700 text-[17px]">Sylhet</h3>
            </div>
            <div className="flex  items-center gap-2">
              <div>
                <label className="container">
                  <input value='Barishal' onClick={(e) => setCity(e.target.value)} type="checkbox" />
                  <svg className="w-4 h-4" viewBox="0 0 64 64">
                    <path
                      d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                      pathLength="575.0541381835938"
                      class="path"
                    ></path>
                  </svg>
                </label>
              </div>

              <h3 className="text-gray-700 text-[17px]">Barishal</h3>
            </div>
            <div className="flex  items-center gap-2">
              <div>
                <label className="container">
                  <input value='Rajsahi' onClick={(e) => setCity(e.target.value)} type="checkbox" />
                  <svg className="w-4 h-4" viewBox="0 0 64 64">
                    <path
                      d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                      pathLength="575.0541381835938"
                      class="path"
                    ></path>
                  </svg>
                </label>
              </div>

              <h3 className="text-gray-700 text-[17px]">Rajsahi</h3>
            </div>
          </div>

          <div className="flex justify-between border-b-2 border-gray-200  py-1 items-center">
            <h1 className="text-xl text-gray-600 font-semibold ">Room Size</h1>
            <h2 className="text-gray-600 font-semibold">Clear</h2>
          </div>

          <div className="py-3 space-y-2 pl-1">
            <div className="flex  items-center gap-2">
              <div>
                <label className="container">
                  <input type="checkbox" />
                  <svg className="w-4 h-4" viewBox="0 0 64 64">
                    <path
                      d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                      pathLength="575.0541381835938"
                      class="path"
                    ></path>
                  </svg>
                </label>
              </div>

              <h3 className="text-gray-700 text-[17px]">Small</h3>
            </div>
            <div className="flex  items-center gap-2">
              <div>
                <label className="container">
                  <input type="checkbox" />
                  <svg className="w-4 h-4" viewBox="0 0 64 64">
                    <path
                      d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                      pathLength="575.0541381835938"
                      class="path"
                    ></path>
                  </svg>
                </label>
              </div>

              <h3 className="text-gray-700 text-[17px]">Large</h3>
            </div>
            <div className="flex  items-center gap-2">
              <div>
                <label className="container">
                  <input type="checkbox" />
                  <svg className="w-4 h-4" viewBox="0 0 64 64">
                    <path
                      d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                      pathLength="575.0541381835938"
                      class="path"
                    ></path>
                  </svg>
                </label>
              </div>

              <h3 className="text-gray-700 text-[17px]">Extra Large</h3>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="bg-white  mb-3 py-3 w-full">
            <div className="flex relative px-3 justify-between">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by House Name"
                className="py-1 px-4 w-5/12 border border-slate-400"
              />

              <CiSearch className="absolute text-2xl left-[39%] top-[6px] text-gray-500" />

              <div className="flex gap-2 lg:gap-4 items-center">
                <select
                  className="border outline-none py-1 text-center shadow-md border-gray-300"
                  name=""
                >
                  <option value="">Sort By</option>
                  <option value="Hight to Low">Price High to Low</option>
                  <option value="Low to High">Price Low to High</option>
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>

                <span
                  onClick={() => setStyles("grid")}
                  className={`p-2 ${
                    styles === "grid" && "bg-slate-300"
                  } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                >
                  <IoGrid className=" text-gray-700 text-[21px]" />
                </span>

                <span
                  onClick={() => setStyles("list")}
                  className={`p-2 ${
                    styles === "list" && "bg-slate-300"
                  } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                >
                  <FaListUl className="text-[22px] text-gray-700" />
                </span>
              </div>
            </div>
          </div>

          <div className="">
            {filteredData?.length === 0 ? (
              <p className="h-[40vh] flex justify-center items-center">
                No houses available for the specified search criteria...
              </p>
            ) : (
              <div
                className={`grid  w-full ${
                  styles === "grid"
                    ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
                    : "grid-cols-1 "
                } gap-3   `}
              >
                {filteredData?.map((house, i) => (
                  <div
                    key={i}
                    className="p-4 border-2 shadow-md bg-white rounded "
                  >
                    <div className="relative w-full h-40 mb-2">
                      <img
                        src="https://i.postimg.cc/nr41rXXK/pexels-dreamlens-production-2450296-1.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded"
                      />
                      <span className="absolute top-0 right-0 px-2 py-1 mt-2 mr-2 text-xs text-white bg-blue-700">
                        {house?.availability}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-lg font-semibold dark:text-gray-300">
                          {house?.houseName}
                        </h2>
                      </div>
                      <div className="font-semibold text-green-600 -base">
                        ${house?.rentPerMonth}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xs font-medium dark:text-gray-400">
                        City
                      </h2>
                      <span className="inline-block px-2 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-700 dark:text-blue-400 bg-blue-50">
                        {house?.city}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xs font-medium dark:text-gray-400">
                        Bedroom
                      </h2>
                      <span className="inline-block px-2 py-1 text-xs text-gray-600 dark:text-gray-400">
                        {house?.bedrooms}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xs font-medium dark:text-gray-400">
                        Bathroom
                      </h2>
                      <span className="inline-block px-2 py-1 text-xs text-blue-500 rounded-full bg-blue-50 dark:bg-gray-700 dark:text-blue-400">
                        {house?.bathrooms}
                      </span>
                    </div>

                    <div className="flex items-center justify-between ">
                      <h4 className="text-red-500 text-[14px] font-semibold">
                        ({house?.roomSize})
                      </h4>
                      <a
                        href="#"
                        className="px-3 py-2 text-xs text-white bg-blue-800 rounded hover:bg-blue-600"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
