"use client";

import React from "react";
import Image from "next/image";

import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

import {
  SiFirebase,
  SiMongodb,
  SiFigma,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { motion } from "framer-motion";

import profileImg from "../assets/IMG_1432025.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-6 md:px-12 lg:px-24 lg:pt-36 pt-28 pb-24 scroll-mt-20"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h4 className="text-lg md:text-xl font-Ovo mb-2">
          Introduction
        </h4>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-Ovo">
          About me
        </h2>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col items-center lg:items-start lg:flex-row gap-10 lg:gap-16">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <Image
            src={profileImg}
            alt="Profile"
            className="w-72 md:w-80 rounded-3xl object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <div className="flex-1">
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm md:text-base leading-8 mb-10 max-w-2xl font-Ovo"
          >
            A final-year Information Technology student at{" "}
            <b>Telkom University</b> with a passion for web and mobile
            application development. Experienced in building end-to-end
            web applications, from responsive and user-friendly interfaces
            to backend development and API integration. Strong team
            collaboration skills and an enthusiasm for learning new
            technologies to improve application quality.
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="border rounded-2xl p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <FaCode className="text-2xl mb-4 text-gray-700" />

              <h3 className="font-semibold text-lg mb-2">
                Languages
              </h3>

              <p className="text-sm text-gray-600 leading-6">
                JavaScript, Python, C++, Java, Go, Dart, Html, CSS,
                React, Tailwind CSS, Node.js, Laravel, PHP
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <FaGraduationCap className="text-2xl mb-4 text-gray-700" />

              <h3 className="font-semibold text-lg mb-2">
                Education
              </h3>

              <p className="text-sm text-gray-600 leading-6">
                Bachelor Degree in Information Technology -
                Telkom University
              </p>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <FaBriefcase className="text-2xl mb-4 text-gray-700" />

              <h3 className="font-semibold text-lg mb-2">
                Projects
              </h3>

              <p className="text-sm text-gray-600 leading-6">
                Built multiple frontend and fullstack projects
              </p>
            </motion.div>
          </div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-5 text-gray-700 font-Ovo">
              Tools i use
            </h4>

            <div className="flex flex-wrap gap-4">
              <div className="border rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <FaCode className="text-2xl text-blue-500" />
              </div>

              <div className="border rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <SiFirebase className="text-2xl text-yellow-500" />
              </div>

              <div className="border rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <SiMongodb className="text-2xl text-green-600" />
              </div>

              <div className="border rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <SiFigma className="text-2xl text-pink-500" />
              </div>

              <div className="border rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <SiGit className="text-2xl text-orange-500" />
              </div>

              <div className="border rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <SiGithub className="text-2xl text-black" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;