import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import Header from "./header";
import image from "../assets/image1.png";
import image1 from "../assets/image2.png";
import image2 from "../assets/image3.png";
import image3 from "../assets/image4.png";
import image4 from "../assets/image5.png";
import image5 from "../assets/image6.png";
import image6 from "../assets/image7.png";
import image7 from "../assets/image8.png";
import image8 from "../assets/image9.png";
import image9 from "../assets/image10.png";
import image10 from "../assets/image11.png";
import image11 from "../assets/image12.png";
import image12 from "../assets/image13.png";

const Home = () => {
  return (
    <main>
      <Header />
      <div className="bg-white shadow-md shadow-black py-6 items-center grid px-12 w-full ">
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

        <div className="flex-row shadow-md shadow-black text-center justify-center mb-12 py-12 bg-black/65 rounded-2xl flex">
          <img src={image1} alt="The second image for the home section" />
          <div className=" my-auto space-y-6 ">
            <h2 className="text-5xl font-bold text-center">
              Remember <br className="" /> Everything
            </h2>

            <h4 className="font-semibold text-xl">
              Capture thoughts and inspiration anywhere, at any time, <br />
              in any format, and on any device—your <br />
              important notes, images, receipts, and documents <br />
              are safe and right at your fingertips.
            </h4>

            <button className="text-white text-xl hover:bg-black/40 py-3 px-4 mb-5 rounded-md font-medium bg-black ">
              Get Notetaker free
            </button>
          </div>
        </div>

        <div className="flex-row shadow-md shadow-black text-center justify-center mb-12 py-10 bg-black/65 rounded-2xl flex">
          <div className=" my-auto space-y-6 ">
            <h2 className="text-5xl font-bold text-center">Search made easy</h2>

            <h4 className="font-semibold text-xl">
              Use note titles, dates, tags, and keywords to search <br />
              your notes, attachments, and even photos with <br />
              words. Plus, ask AI-Powered Search to filter notes <br />
              using natural language (no complicated git boolean <br />
              searches required!) and give you direct answers to <br />
              your questions.
            </h4>

            <button className="text-white text-xl hover:bg-black/40 py-3 px-4 mb-5 rounded-md font-medium bg-black ">
              Learn More
            </button>
          </div>
          <img src={image2} alt="The second image for the home section" />
        </div>

        <div className="flex-row shadow-md shadow-black text-center justify-center mb-12 py-12 bg-black/65 rounded-2xl flex">
          <img src={image3} alt="The second image for the home section" />
          <div className=" my-auto space-y-6 ">
            <h2 className="text-5xl font-bold text-center">
              No signal? No <br className="" /> problem.
            </h2>

            <h4 className="font-semibold text-xl">
              With offline access, your notes are always with you <br />
              —even if you’re nowhere near a Wi-Fi or mobile <br />
              data signal.
            </h4>
            <button className="text-white text-xl hover:bg-black/40 py-3 px-4 mb-5 rounded-md font-medium bg-black ">
              Get Notetaker free
            </button>
          </div>
        </div>

        <div className="flex-col shadow-md shadow-black text-center items-center mt-5 mb-12 pt-10 bg-black/65 rounded-2xl flex">
          <div className="space-y-7">
            <img src={image4} alt="THE CLOUD IMAGE" className="mx-auto" />
            <h2 className="text-5xl font-bold text-center">Search made easy</h2>
            <h4 className="font-semibold text-xl">
              Tired of not having the right info handy when you need it?
              Notetaker <br />
              automatically saves notes online and syncs them to all your
              devices.
            </h4>
          </div>
          <img src={image5} alt="The second image for the home section" />
        </div>

        <div className="flex-row shadow-md shadow-black text-center justify-center mb-12 py-10 bg-black/65 rounded-2xl flex">
          <div className=" my-auto space-y-6 ">
            <h2 className="text-5xl font-bold text-center">
              Take notes and take <br />
              action
            </h2>

            <h4 className="font-semibold text-xl">
              Create tasks inside your notes to give your to-dos <br /> context,
              streamline your workflow, and get more done—faster
            </h4>

            <button className="text-white text-xl hover:bg-black/40 py-3 px-4 mb-5 rounded-md font-medium bg-black ">
              Learn More
            </button>
          </div>
          <img src={image6} alt="The second image for the home section" />
        </div>

        <div className="flex-row shadow-md shadow-black text-center justify-center mb-12 py-12 bg-black/65 rounded-2xl flex">
          <img src={image7} alt="The second image for the home section" />
          <div className=" my-auto space-y-6 ">
            <h2 className="text-5xl font-bold text-center">
              Scan everything <br /> that matters
            </h2>

            <h4 className="font-semibold text-xl">
              Keep your important papers with you, whenever <br />
              and wherever you need them: healthcare and <br /> insurance files,
              ID cards, warranty and product <br />
              information, and more—even handwritten notes.
            </h4>

            <button className="text-white text-xl hover:bg-black/40 py-3 px-4 mb-5 rounded-md font-medium bg-black ">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-row shadow-md shadow-black text-center justify-center mb-12 py-10 bg-black/65 rounded-2xl flex">
          <div className=" my-auto space-y-6 ">
            <h2 className="text-5xl font-bold text-center">
              Clip web pages <br /> and articles
            </h2>

            <h4 className="font-semibold text-xl">
              Found something useful or valuable online? Don’t <br />
              let it get away; add it to your Evernote with Web <br />
              Clipper, convenient browser extension. We’ll even <br />
              strip out those annoying ads for you.
            </h4>

            <button className="text-white text-xl hover:bg-black/40 py-3 px-4 mb-5 rounded-md font-medium bg-black ">
              Discover web Clipper
            </button>
          </div>
          <img src={image8} alt="The second image for the home section" />
        </div>

        <div className="flex-row shadow-md shadow-black text-center justify-center mb-12 py-12 bg-black/65 rounded-2xl flex">
          <ImQuotesLeft size={80} color="black" />

          <div className=" my-auto space-y-3 ">
            <h2 className="text-xl font-bold text-center">Notetaker</h2>
            <h6>Certified expert</h6>
            <h4 className="font-semibold text-xl">
              Getting thoughts and ideas into Evernote as soon as they <br />
              cross my mind has been one of the best habits I've ever <br />
              practiced. I keep my brain clear for new thoughts while not <br />
              losing track of anything!
            </h4>

            <button className="text-white text-xl hover:bg-black/40 py-3 px-4 mb-5 rounded-md font-medium bg-black ">
              Learn More
            </button>
          </div>
        </div>

        <div className="">
          <h2 className="text-6xl font-bold mb-12 text-center ">
            More than a notebook
          </h2>
          <div className="grid grid-cols-4 gap-20">
            <div className="space-y-3">
              <img src={image9} alt="" />
              <h4 className="font-semibold text-2xl">Organize</h4>
              <h5>
                Use notebooks to structure your content. Add tags to make it
                easier to find.
              </h5>
            </div>

            <div className="space-y-3">
              <img src={image10} alt="THE SCISSORS IMAGE" />
              <h4 className="font-semibold text-2xl">Clip</h4>
              <h5>
                Articles, recipes, pages, images—keep track of everything useful
                you find online.
              </h5>
            </div>

            <div className="space-y-3">
              <img src={image11} alt="THE SEARCH IMAGE" />
              <h4 className="font-semibold text-2xl">Search</h4>
              <h5>
                Find any text in any note. We’ll even catch your typos and make
                suggestions.
              </h5>
            </div>

            <div className="space-y-3">
              <img src={image12} alt="THE SYNC IMAGE" />
              <h4 className="font-semibold text-2xl">Sync</h4>
              <h5>
                With Evernote on your computer and phone, your notes are always
                with you.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
