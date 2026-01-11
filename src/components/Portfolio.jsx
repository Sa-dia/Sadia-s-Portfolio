import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import EventReg from "../assets/portfolio/Event_Reg.png";
import ClassRoutine from "../assets/portfolio/ClassRoutine.jpg"
import OnlineVoting from "../assets/portfolio/OnlineVoting.jpg"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: EventReg,
      demoUrl: "https://your-demo-link.com/event-reg",
      codeUrl: "https://github.com/Sa-dia/WebProject-Event-Registration-",
    },
    {
      id: 2,
      src: OnlineVoting,
      demoUrl: "https://your-demo-link.com/react-parallax",
      codeUrl: "https://github.com/Sa-dia/OnlineVotingApp",
    },
    {
      id: 3,
      src: ClassRoutine,
      demoUrl: "https://your-demo-link.com/navbar",
      codeUrl: "https://github.com/JUCSE49-Mavericks/Smart-Class-Routine-Management-System",
    },
  /*  {
      id: 4,
      src: reactSmooth,
      demoUrl: "https://your-demo-link.com/react-smooth",
      codeUrl: "https://github.com/Sa-dia/Smart-Street-Lighting-System",
    },
    {
      id: 5,
      src: installNode,
      demoUrl: "https://your-demo-link.com/install-node",
      codeUrl: "https://github.com/username/installNode",
    },
    {
      id: 6,
      src: reactWeather,
      demoUrl: "https://your-demo-link.com/react-weather",
      codeUrl: "https://github.com/username/reactWeather",
    },*/
  ];

  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center min-h-screen">
        
        {/* Heading */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-gray-300 font-extrabold ">
            Check out some of my work right here
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 sm:px-0">
          {portfolios.map(({ id, src, demoUrl, codeUrl }) => (
            <div
              key={id}
              className="shadow-lg shadow-blue-600 rounded-xl overflow-hidden"
            >
              <img
                src={src}
                alt="project"
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex pt-6 h-12 items-center justify-center bg-gray-900">
                
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-2 bg-gray-700 rounded-md text-white font-medium text-center duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
