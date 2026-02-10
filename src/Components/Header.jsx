import React from "react";
import image from "../assets/react.svg";

const Header = () => {
  return (
    <main className="text-3xl py-6 px-6 text-blue-500 justify-around flex flex-row gap-5 ">
      <div>
        <img src={image} alt="The Image" />
      </div>

      <div>
        {" "}
        <button>Enterprise</button>
        <button>Pricing </button>
        <button>Explore</button>
        <button>Plans</button>
      </div>

      <div>
        <button></button>
      </div>
    </main>
  );
};

export default Header;
