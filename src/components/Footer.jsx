import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/sadia.hossain.94043",
    },
   
    {
      id: 3,
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/sadiahossainju/",
    },
  ];

  return (
    <footer className="w-full bg-gray-100 text-gray-800 py-10">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-6">
        
        {/* Logo / Name */}
        <h1 className="text-3xl font-bold tracking-widest">
          SADIA
        </h1>

        {/* Navigation */}
        <ul className="flex gap-6 text-sm font-medium">
          <li className="hover:text-gray-600 cursor-pointer">About</li>
          <li className="hover:text-gray-600 cursor-pointer">Projects</li>
          <li className="hover:text-gray-600 cursor-pointer">Testimonials</li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map(({ id, icon, url }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:scale-110 hover:bg-gray-700 duration-300"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sadia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
