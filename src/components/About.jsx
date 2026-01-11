import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-8 pb-16"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center px-4">
        {/* Heading */}
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* Paragraph */}
        <p className="text-lg mt-4 leading-relaxed">
          I am passionate about transforming ideas into impactful applications. With hands-on experience in full-stack development, I work with Python, Django on the backend and Firebase for Android apps to build secure, scalable, and user-friendly solutions.

          Beyond development, I have a strong interest in AI and Machine Learning, exploring how intelligent systems can address real-world challenges. I also prioritize software quality and reliability, leveraging tools like Jira, Jest, and GitHub Actions to automate workflows, streamline testing, and ensure smooth project delivery.

          Driven by curiosity and continuous learning, I thrive in collaborative environments and enjoy tackling new challenges. I am eager to contribute my skills and grow as an Associate Software Engineer in a dynamic software team.
        </p>
      </div>
    </div>
  );
};

export default About;
