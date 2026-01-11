import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import Mysql from "../assets/Mysql.png";
import MongoDB from "../assets/MongoDB.png";
import Nodejs from "../assets/Nodejs.png";
import Django from "../assets/Django.png";
import Express from "../assets/Express.png";
import C from "../assets/C.png";
import Cplus from "../assets/C++.png";
import Python from "../assets/Python.png";
import Java from "../assets/Java.png";
import Trello from "../assets/Trello.png";
import Slack from "../assets/Slack.png";
import Jira from "../assets/Jira.png";
import Discord from "../assets/Discord.png";

const Experience = () => {
  const categories = [
    {
      category: "Frontend",
      techs: [
        { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
        { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
        { id: 3, src: reactImage, title: "React", style: "shadow-blue-600" },
        { id: 4, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
        { id: 5, src: bootstrap, title: "Bootstrap", style: "shadow-purple-400" },
      ],
    },
    {
      category: "Programming Languages",
      techs: [
        { id: 6, src: C, title: "C", style: "shadow-blue-500" },
        { id: 7, src: Cplus, title: "C++", style: "shadow-blue-500" },
        { id: 8, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
        { id: 9, src: Python, title: "Python", style: "shadow-blue-500" },
        { id: 10, src: Java, title: "Java", style: "shadow-yellow-500" },
      ],
    },
    {
      category: "Backend",
      techs: [
        { id: 11, src: Mysql, title: "MySQL", style: "shadow-blue-400" },
        { id: 12, src: MongoDB, title: "MongoDB", style: "shadow-green-400" },
        { id: 13, src: Nodejs, title: "Nodejs", style: "shadow-yellow-400" },
        { id: 14, src: Django, title: "Django", style: "shadow-green-400" },
        { id: 15, src: Express, title: "Express JS", style: "shadow-red-400" },
      ],
    },
    {
      category: "Tools",
      techs: [
        { id: 16, src: github, title: "GitHub", style: "shadow-gray-400" },
        { id: 17, src: Trello, title: "Trello", style: "shadow-blue-400" },
        { id: 18, src: Slack, title: "Slack", style: "shadow-pink-400" },
        { id: 19, src: Discord, title: "Discord", style: "shadow-blue-400" },
        { id: 20, src: Jira, title: "Jira", style: "shadow-blue-400" },
      ],
    },
  ];

  return (
    <div
      name="technical-skills"
      className="w-full bg-gradient-to-b from-gray-900 to-black pt-24 pb-16"
    >
      <div className="max-w-screen-lg mx-auto px-4 text-white">
        {/* Heading */}
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Technical Skills
          </p>
          <p className="py-4 text-gray-300 font-extrabold">
            These are the technologies I've worked with
          </p>
        </div>

        {/* Categories */}
        {categories.map(({ category, techs }) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-gray-300">
              {category}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center px-6 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt={title} className="w-12 mx-auto" />
                  <p className="mt-2 text-sm">{title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Experience;
