import React from "react";
import Header from "./header";
import image from "../assets/image.png";
const Home = () => {
  return (
    <main>
      <Header />
      <div className="bg-white py-6  grid px-12 w-full ">
        <div className="bg-black/65 p-5">
          <h1 className="text-7xl font-medium mt-2 text-center mb-2">
            Get more from your note- <br className="mb-4" />
            taking app
          </h1>
          <h2 className="text-xl mt-6 font-medium text-center mb-12">
            Capture important ideas and information in ways that help you stay
            productive.
          </h2>
          <button className="text-white text-xl hover:bg-black/40 py-3 px-4 mb-5 rounded-md ml-120 bg-black ">
            Get note taker for windows
          </button>

          <img src={image} alt="" className="" />
        </div>
      </div>
    </main>
  );
};

export default Home;
