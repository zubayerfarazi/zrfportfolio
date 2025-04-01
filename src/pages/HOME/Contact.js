import React, { useState } from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Button from "../../components/BUTTON/Button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      access_key: "7d54ed91-2ba8-432a-a598-bd1aae19eb17",
      name,
      email,
      message,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());

    if (res.success) {
      setSuccessMessage("Your message has been sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setSuccessMessage("There was an error sending your message.");
    }
  };

  return (
    <div className="w-full bg-gray-900 dark:bg-gray-900 text-black dark:text-white pt-10 pb-10">
      <h1 className="text-center tracking-widest text-white">Get in Touch</h1>
      <h1 className="text-3xl md:text-5xl font-bold text-center text-white">
        Contact Me
      </h1>

      <div className=" lg:flex justify-around pt-10 ">
        <div className="text-white">
          <h1 className="text-2xl md:text-3xl font-bold pb-2 lg:pb-8 px-10 lg:px-0 ">
            Let's Talk
          </h1>
          <p className="lg:max-w-xl text-sm md:text-xl pb-8 leading-relaxed text-justify px-10 lg:px-0">
            I'm Currently available to take on new projects, so feel free to
            send me a message about anything that you want to me work on. You
            can Contact me anytime.
          </p>
          <div className="flex items-center space-x-6 pb-5 text-sm md:text-xl px-10 lg:px-0">
            <IoMail />
            <Link to="mailto:forazizubayer@gmail.com">
              forazizubayer@gmail.com
            </Link>
          </div>
          <div className="flex items-center space-x-6 pb-5 text-sm md:text-xl px-10 lg:px-0">
            <FaPhoneAlt />
            <Link to="tel:01646745401" className="font-mono">
              01646745401
            </Link>
          </div>
          <div className="flex items-center space-x-6 text-sm md:text-xl px-10 lg:px-0">
            <FaLocationDot />
            <Link to="#">Motijheel, Dhaka</Link>
          </div>
        </div>

        <div className="px-10 py-10 w-full lg:w-1/4 lg:px-0 lg:py-0">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col space-y-5">
              <label
                htmlFor="name"
                className="text-sm text-white md:text-2xl font-semibold tracking-wider"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
                required
                className="bg-gray-800 dark:bg-gray-800 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 tracking-widest text-sm md:text-lg capitalize"
              />
            </div>

            <div className="flex flex-col space-y-5">
              <label
                htmlFor="email"
                className="pt-5 text-sm text-white md:text-2xl font-semibold tracking-wider"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                required
                className="bg-gray-800 dark:bg-gray-800 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 tracking-widest text-sm md:text-lg lowercase"
              />
            </div>

            <div className="flex flex-col space-y-5">
              <label
                htmlFor="message"
                className="pt-5 text-white text-sm md:text-2xl font-semibold tracking-wider"
              >
                Write Your Message Here
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Your Message"
                required
                className="bg-gray-800 dark:bg-gray-800 w-full border border-slate-700 rounded-xl py-4 pl-4 pr-10 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 tracking-widest text-sm md:text-lg"
              ></textarea>
              <Button type="submit" title={"Submit"}></Button>
            </div>
          </form>
          {successMessage && (
            <div className="mt-5 p-4 bg-sky-600 text-white rounded-md">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
