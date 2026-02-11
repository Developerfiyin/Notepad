import React from "react";
import image from "../assets/react.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handler = (path) => {
    navigate(path);
  };
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <img src={image} alt="The Image" />
        </div>

        <div className="space-x-4 font-bold ">
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

        <div className=" space-x-4 font-bold">
          <button className="bg-purple-500 px-2 rounded-md hover:text-blue-500 ease-in-out duration-300">
            Log in
          </button>
          <button
            onClick={() => handler("/account")}
            className="bg-purple-500 px-2 rounded-md hover:text-blue-500 ease-in-out duration-300"
          >
            Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
