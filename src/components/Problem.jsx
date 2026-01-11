import React from "react";
import AtCoder from "../assets/atcoder.png";

const ProblemSolving = () => {
  const platforms = [
    {
      id: 1,
      name: "LeetCode",
      profileName: "Sadia_347",
      url: "https://leetcode.com/u/Sadia_347/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      problemsSolved: 70,
      Max_Rating: "N/A", // LeetCode doesn't have rating
      style: "shadow-orange-500",
    },
    {
      id: 2,
      name: "Codeforces",
      profileName: "z_code",
      url: "https://codeforces.com/profile/z_code",
      logo: "https://sta.codeforces.com/s/65028/images/codeforces-logo-with-telegram.png",
      problemsSolved: 700,
      Max_Rating: 1318, // Codeforces rating
      style: "shadow-blue-500",
    },
    {
      id: 3,
      name: "AtCoder",
      profileName: "Sadia",
      url: "https://atcoder.jp/users/Sadia",
      logo: AtCoder,
      problemsSolved: 200,
      Max_Rating: 138, // AtCoder rating
      style: "shadow-red-400",
    },
  ];

  return (
    <div
      name="problem-solving"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center">
        {/* Heading */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Problem Solving
          </p>
          <p className="py-4 text-gray-300">
            These are my competitive programming profiles
          </p>
        </div>

        {/* Platforms */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {platforms.map(({ id, name, profileName, url, logo, problemsSolved, Max_Rating, style }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`shadow-md hover:scale-105 duration-300 py-4 rounded-lg flex flex-col items-center ${style}`}
            >
              <img src={logo} alt={name} className="w-16 h-16 object-contain" />
              <p className="mt-2 font-medium text-lg">{name}</p>
              <p className="text-sm text-gray-300">Profile: {profileName}</p>
              <p className="text-sm text-gray-300">Solved: {problemsSolved}</p>
              <p className="text-sm text-gray-300">Max Rating: {Max_Rating}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemSolving;
