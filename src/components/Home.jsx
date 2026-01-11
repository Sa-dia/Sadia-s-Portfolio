import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineFilePdf } from "react-icons/ai";
//import ResumePDF from C:\portfolio\public\SadiahossainResume.pdf
const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-screen px-4 md:flex-row">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm an aspiring software engineer.
          </h2>

          <p className="text-gray-200 py-4 max-w-md leading-relaxed">
            I am an aspiring software engineer with a strong interest in
            problem-solving and a basic understanding of web development
            fundamentals. I enjoy learning new technologies, writing clean and
            efficient code, and building practical solutions that improve user
            experience. I am continuously working on strengthening my skills and
            growing as a developer.
          </p>

       <div>
      <a
        href="/SadiahossainResume.pdf"
        download
        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
      >
        <AiOutlineFilePdf size={20} className="mr-2" /> {/* Resume icon */}
        Resume
        <span className="group-hover:rotate-90 duration-300">
          <MdKeyboardArrowRight size={25} className="ml-1" />
        </span>
      </a>
    </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
