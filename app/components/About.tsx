"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

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

  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`
        w-full
        px-6 md:px-12 lg:px-24
        lg:pt-36 pt-28 pb-24
        scroll-mt-20

        transition-all duration-300

        ${
          theme === "dark"
            ? "bg-black text-white"
            : "bg-white text-black"
        }
      `}
    >

      {/* =========================
          Heading
      ========================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h4
          className={`
            text-lg md:text-xl
            font-Ovo mb-2

            ${
              theme === "dark"
                ? "text-gray-300"
                : "text-gray-600"
            }
          `}
        >
          Introduction
        </h4>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-Ovo">
          About me
        </h2>
      </motion.div>

      {/* =========================
          Content
      ========================== */}
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
            className="
              w-72 md:w-80
              rounded-3xl
              object-cover
            "
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
            className={`
              text-sm md:text-base
              leading-8
              mb-10
              max-w-2xl
              font-Ovo

              ${
                theme === "dark"
                  ? "text-gray-300"
                  : "text-gray-600"
              }
            `}
          >
            An Information Technology graduate from{" "}
            <b>Telkom University</b> with a passion for web and mobile
            application development. Experienced in building end-to-end
            web applications, from responsive and user-friendly interfaces
            to backend development and API integration. Strong team
            collaboration skills and an enthusiasm for learning new
            technologies to improve application quality.
          </motion.p>

          {/* =========================
              Cards
          ========================== */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={`
                rounded-2xl
                p-5 md:p-6
                cursor-pointer

                border

                transition-all duration-300

                hover:-translate-y-1
                hover:shadow-xl

                ${
                  theme === "dark"
                    ? "bg-[#111111] border-gray-700 hover:bg-black"
                    : "bg-white border-gray-400 hover:bg-gray-50"
                }
              `}
            >
              <FaCode
                className={`
                  text-2xl mb-4

                  ${
                    theme === "dark"
                      ? "text-white"
                      : "text-gray-700"
                  }
                `}
              />

              <h3 className="font-semibold text-lg mb-2">
                Languages
              </h3>

              <p
                className={`
                  text-sm leading-6

                  ${
                    theme === "dark"
                      ? "text-gray-300"
                      : "text-gray-600"
                  }
                `}
              >
                JavaScript, Python, C++, Java, Go, Dart, Html,
                CSS, React, Tailwind CSS, Node.js, Laravel, PHP
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className={`
                rounded-2xl
                p-6
                cursor-pointer

                border

                transition-all duration-300

                hover:-translate-y-1
                hover:shadow-xl

                ${
                  theme === "dark"
                    ? "bg-[#111111] border-gray-700 hover:bg-black"
                    : "bg-white border-gray-400 hover:bg-gray-50"
                }
              `}
            >
              <FaGraduationCap
                className={`
                  text-2xl mb-4

                  ${
                    theme === "dark"
                      ? "text-white"
                      : "text-gray-700"
                  }
                `}
              />

              <h3 className="font-semibold text-lg mb-2">
                Education
              </h3>

              <p
                className={`
                  text-sm leading-6

                  ${
                    theme === "dark"
                      ? "text-gray-300"
                      : "text-gray-600"
                  }
                `}
              >
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
              className={`
                rounded-2xl
                p-6
                cursor-pointer

                border

                transition-all duration-300

                hover:-translate-y-1
                hover:shadow-xl

                ${
                  theme === "dark"
                    ? "bg-[#111111] border-gray-700 hover:bg-black"
                    : "bg-white border-gray-400 hover:bg-gray-50"
                }
              `}
            >
              <FaBriefcase
                className={`
                  text-2xl mb-4

                  ${
                    theme === "dark"
                      ? "text-white"
                      : "text-gray-700"
                  }
                `}
              />

              <h3 className="font-semibold text-lg mb-2">
                Projects
              </h3>

              <p
                className={`
                  text-sm leading-6

                  ${
                    theme === "dark"
                      ? "text-gray-300"
                      : "text-gray-600"
                  }
                `}
              >
                Developed multiple responsive web and mobile applications using modern technologies.
              </p>
            </motion.div>

          </div>

          {/* =========================
              Tools
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >

            <h4
              className={`
                mb-5
                font-Ovo

                ${
                  theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-700"
                }
              `}
            >
              Tools i use
            </h4>

            <div className="flex flex-wrap gap-4">

              <div
                className={`
                  border
                  rounded-xl
                  p-4

                  hover:-translate-y-1
                  hover:shadow-md

                  transition-all duration-300

                  ${
                    theme === "dark"
                      ? "bg-[#111111] border-gray-700"
                      : "bg-white border-gray-400"
                  }
                `}
              >
                <FaCode className="text-2xl text-blue-500" />
              </div>

              <div
                className={`
                  border
                  rounded-xl
                  p-4

                  hover:-translate-y-1
                  hover:shadow-md

                  transition-all duration-300

                  ${
                    theme === "dark"
                      ? "bg-[#111111] border-gray-700"
                      : "bg-white border-gray-400"
                  }
                `}
              >
                <SiFirebase className="text-2xl text-yellow-500" />
              </div>

              <div
                className={`
                  border
                  rounded-xl
                  p-4

                  hover:-translate-y-1
                  hover:shadow-md

                  transition-all duration-300

                  ${
                    theme === "dark"
                      ? "bg-[#111111] border-gray-700"
                      : "bg-white border-gray-400"
                  }
                `}
              >
                <SiMongodb className="text-2xl text-green-600" />
              </div>

              <div
                className={`
                  border
                  rounded-xl
                  p-4

                  hover:-translate-y-1
                  hover:shadow-md

                  transition-all duration-300

                  ${
                    theme === "dark"
                      ? "bg-[#111111] border-gray-700"
                      : "bg-white border-gray-400"
                  }
                `}
              >
                <SiFigma className="text-2xl text-pink-500" />
              </div>

              <div
                className={`
                  border
                  rounded-xl
                  p-4

                  hover:-translate-y-1
                  hover:shadow-md

                  transition-all duration-300

                  ${
                    theme === "dark"
                      ? "bg-[#111111] border-gray-700"
                      : "bg-white border-gray-400"
                  }
                `}
              >
                <SiGit className="text-2xl text-orange-500" />
              </div>

              <div
                className={`
                  border
                  rounded-xl
                  p-4

                  hover:-translate-y-1
                  hover:shadow-md

                  transition-all duration-300

                  ${
                    theme === "dark"
                      ? "bg-[#111111] border-gray-700"
                      : "bg-white border-gray-400"
                  }
                `}
              >
                <SiGithub
                  className={`
                    text-2xl

                    ${
                      theme === "dark"
                        ? "text-white"
                        : "text-black"
                    }
                  `}
                />
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;