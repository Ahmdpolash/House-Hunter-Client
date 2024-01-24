import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AddHouse = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("House added successfully");
  };

  return (
    <div className="bg-[#F1F5F6]">
      <section>
        <div className=" flex justify-center items-center mt-">
          <div className="w-full justify-center items-center p-5 lg:p-10">
            <div className=" relative lg:w-[100%]  mx-auto border-2 shadow-md bg-white rounded-md">
              <h2 className="text-center w-full pt-3 text-2xl text-slate-600 font-bold">
                Add New House
              </h2>
              <span className="text-orange-500 text-center mx-auto block font-bold ">
                House Hunter
              </span>
              <div className="px-8 py-4 ">
                <div className="relative">
                  <form  className="text-slate-600">
                    <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                      <div className="flex flex-col w-full gap-1 mb-2">
                        <label htmlFor="House Name">House Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id=""
                          name="shopName"
                          placeholder="Enter Your House Name"
                        />
                      </div>
                      <div className="flex relative w-full flex-col gap-1 mb-2">
                        <label htmlFor="City">City Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 text-sm border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id=""
                          name="city"
                          placeholder="Enter Your City Name"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                      <div className="flex flex-col w-full gap-1 mb-2">
                        <label htmlFor="image">House Image</label>
                        <input
                          type="file"
                          className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id=""
                          name="image"
                        />
                      </div>
                      <div className="flex flex-col w-full gap-1 mb-2">
                        <label htmlFor="price">Price</label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          id=""
                          name="price"
                          placeholder="House Price"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                      <div className="flex flex-col w-full gap-1 mb-2">
                        <label htmlFor="address">Availability</label>
                        <select
                          className="w-full px-3 py-2 text-sm border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          name="Availability"
                          id=""
                        >
                          <option selected>Select Availability</option>
                          <option value="Available"> Available</option>
                          <option value="Not Available">Not Available</option>
                        </select>
                      </div>
                      <div className="flex relative w-full flex-col gap-1 mb-2">
                        <label htmlFor="number">Select Size</label>
                        <select
                          className="w-full px-3 py-2 text-sm border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          name="Availability"
                          id=""
                        >
                          <option selected>Select Size</option>
                          <option value="Small"> Small</option>
                          <option value="Large">Large</option>
                          <option value="Extra Large">Extra Large</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex mb-3 flex-col md:flex-row lg:flex-row gap-1 md:gap-2 lg:gap-3">
                      <div className="flex flex-col w-full gap-1 mb-2">
                        <label htmlFor="bedrooms">Select Bedrooms</label>
                        <select
                          className="w-full px-3 py-2 text-sm border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          name="Availability"
                          id=""
                        >
                          <option selected>Select Bedrooms</option>
                          <option value="1"> 1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div className="flex relative w-full flex-col gap-1 mb-2">
                        <label htmlFor="number">Select Bathrooms</label>
                        <select
                          className="w-full px-3 py-2 text-sm border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                          name="Availability"
                          id=""
                        >
                          <option selected>Select Bathrooms</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>

                    <button
                      onSubmit={handleSubmit}
                      type="submit"
                      className="px-8 w-full py-2 mb-4 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md"
                    >
                      Add House
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddHouse;
