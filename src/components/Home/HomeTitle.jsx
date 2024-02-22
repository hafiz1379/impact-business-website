/* eslint-disable */
import React from "react";

import { FaRegCirclePlay } from "react-icons/fa6";
import heroImg from "../../assets/images/hero-img.svg";
import Homecards from "./Homecards";

export default function HomeTitle() {
  return (
    <>
      <div className="bg-main xl:pb-44">
        <div className="w-full pt-8 lg:flex flex-row-reverse">
          <img
            className="px-3 w-full h-80 md:h-[370px] lg:min-h-96"
            src={heroImg}
            alt=""
          />
          {/* start header info */}
          <div className=" flex flex-col text-center items-center py-10 md:w-11/12 lg:w-9/12 lg:items-start lg:ml-10">
            <h1 className="text-[36px] text-white md:text-[48px] font-main">
              Welcome to Impact
            </h1>
            <p className="text-white text-opacity-60 font-default text-p px-10 py-3 max-w-[750px] text-center lg:px-0 lg:text-start">
              Sed autem laudantium dolores. Voluptatem itaque ea consequatur
              eveniet. Eum quas beatae cumque eum quaerat.
            </p>
            <div className="flex justify-between py-3 w-92 h-32">
              <button
                type="button"
                className="border h-14 mt-6 border-white border-opacity-30 py-4 px-10 rounded-full bg-white bg-opacity-10 text-white font-500  hover:border-opacity-75 hover:border-2 font-main transition duration-200"
              >
                {" "}
                Get Started
              </button>
              <button
                type="button"
                className="flex justify-center items-center ml-5 text-white font-600  hover:text-opacity-95"
              >
                <span className="mr-3 text-h2 text-opacity-40 text-white">
                  <FaRegCirclePlay />
                </span>
                Watch Video
              </button>
            </div>
          </div>
        </div>
        <Homecards />
      </div>
    </>
  );
}
