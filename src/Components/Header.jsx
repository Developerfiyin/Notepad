import React from "react";
import image from "../assets/react.svg";

const Header = () => {
  return (
    <main className="text-xl font-medium py-6 px-6 mx-auto text-white justify-around flex flex-row ">
      <div>
        <img src={image} alt="The Image" />
      </div>

      <div className="flex gap-3 font-bold ">
        <button className="bg-purple-500 px-2 rounded-md hover:text-blue-500 ease-in-out duration-300 ">
          Enterprise
        </button>
        <button className="bg-purple-500 px-2 rounded-md hover:text-blue-500 ease-in-out duration-300">
          Pricing
        </button>
        <button className="bg-purple-500 px-2 rounded-md hover:text-blue-500 ease-in-out duration-300">
          Explore
        </button>
        <button className="bg-purple-500 px-2 rounded-md hover:text-blue-500 ease-in-out duration-300">
          Plans
        </button>
      </div>

      <div className="flex gap-3 font-bold">
        <button className="bg-purple-500 px-2 rounded-md hover:text-blue-500 ease-in-out duration-300">
          Log in
        </button>
        <button className="bg-purple-500 px-2 rounded-md hover:text-blue-500 ease-in-out duration-300">
          Account
        </button>
      </div>
    </main>
  );
};

export default Header;
