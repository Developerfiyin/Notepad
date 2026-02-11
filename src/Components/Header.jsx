import React from "react";
import image from "../assets/react.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handler = (path) => {
    navigate(path);
  };
  return (
    <main className="text-xl font-medium py-6 px-6  text-white justify-around flex flex-row ">
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
        <button
          onClick={() => handler("/account")}
          className="bg-purple-500 px-2 rounded-md hover:text-blue-500 ease-in-out duration-300"
        >
          Account
        </button>
      </div>
    </main>
  );
};

export default Header;
