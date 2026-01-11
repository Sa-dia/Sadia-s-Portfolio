import React from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      level: "Secondary School Certificate (SSC)",
      institute: "Monipur High School and College",
      gpa: "GPA: 5.00 / 5.00",
    },
    {
      id: 2,
      level: "Higher Secondary Certificate (HSC)",
      institute: "SOS Hermann Gmeiner College",
      gpa: "GPA: 5.00 / 5.00",
    },
    {
      id: 3,
      level: "Bachelor of Science (Eng.) in Computer Science and Engineering",
      institute: "Jahangirnagar University",
      gpa: "CGPA: 3.83 / 4.00",
    },
  ];

  return (
    <div
      name="education"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Heading */}
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
          <p className="py-4 text-gray-300">
            My academic background and qualifications
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map(({ id, level, institute, gpa }) => (
            <div
              key={id}
              className="bg-gray-900 rounded-2xl p-6 shadow-md hover:scale-105 duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{level}</h3>
              <p className="text-gray-400 font-semibold">{institute}</p>
              <p className="text-gray-300 mt-3 font-medium">{gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
