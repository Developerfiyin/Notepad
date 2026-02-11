import React from "react";
import Header from "./header";
import image from "../assets/image1.png";
import image1 from "../assets/image2.png";
const Home = () => {
  return (
    <main>
      <Header />
      <div className="bg-white py-6 items-center grid px-12 w-full ">
        <div className="bg-black/65 p-5 px-5 rounded-2xl mb-12">
          <h1 className="text-7xl font-medium mt-2 text-center mb-2">
            Get more from your note- <br className="mb-4" />
            taking app
          </h1>
          <h2 className="text-xl mt-6 font-medium text-center mb-12">
            Capture important ideas and information in ways that help you stay
            productive.
          </h2>
          <button className="text-white text-xl hover:bg-black/40 py-3 px-4 mb-5 rounded-md ml-120 bg-black ">
            Get Notetaker free
          </button>
          <img src={image} alt="" className="" />
        </div>

        <div className="flex-row text-center justify-center bg-red-600 rounded-2xl flex">
          <img src={image1} alt="The second image for the home section" />
          <div className=" my-auto  ">
            <h2 className="text-4xl font-bold text-center">
              Remember <br className="" /> Everything
            </h2>

            <h4>
              Capture thoughts and inspiration anywhere, at any time, in any
              format, and on any device—your important notes, images, receipts,
              and documents are safe and right at your fingertips.
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
