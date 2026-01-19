import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaFacebookMessenger } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      icon: <AiOutlineMail size={25} />,
      title: "Email",
      info: "hossainsadia2000@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&to=hossainsadia2000@gmail.com",
    },
    {
      id: 2,
      icon: <FaLinkedin size={25} />,
      title: "LinkedIn",
      info: "Sadia_Hossain",
      link: "https://www.linkedin.com/in/sadiahossainju/",
    },
    {
      id: 3,
      icon: <FaFacebookMessenger size={25} />,
      title: "Messenger",
      info: "SadiaHossain",
      link: "https://www.facebook.com/sadia.hossain.94043",
    },
  ];

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gray-300 flex flex-col items-center p-8"
    >
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-blue-500">
        Get in Touch
      </h1>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        {/* Left Column - Contact Cards */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            For Direct Messaging
          </h2>
          {contacts.map(({ id, icon, title, info, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-2 text-gray-800 font-semibold">
                {icon} {title}
              </div>
              <p className="text-gray-500 mb-2">{info}</p>
              <span className="text-blue-500 font-medium hover:underline">
                Write me &rarr;
              </span>
            </a>
          ))}
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Write me your queries!
          </h2>
          <form
            action="https://getform.io/f/axooxdgb"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-300"
            >
              Send Message <MdSend size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
