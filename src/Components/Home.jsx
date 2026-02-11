import React from "react";
import Header from "./header";
import image from "../assets/image.png";
const Home = () => {
  return (
    <main>
      <Header />
      <div className="bg-white py-6 px-12 w-full ">
        <div className="bg-black/65">
          <h1 className="text-7xl font-medium text-center mb-2">
            Get more from your note- <br className="mb-4" />
            taking app
          </h1>
          <h2 className="text-xl mt-6 font-medium text-center mb-12">
            Capture important ideas and information in ways that help you stay
            productive.
          </h2>
          <img src={image} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Home;
