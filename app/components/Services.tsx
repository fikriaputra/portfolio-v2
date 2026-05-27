"use client";

import React from "react";
import { useTheme } from "next-themes";

import {
  FaCode,
  FaMobileAlt,
  FaPalette,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Services = () => {

  const { theme } = useTheme();

  const services = [
    {
      icon: <FaCode className="text-white text-lg" />,
      title: "Web design",
      description:
        "Creating responsive and modern websites with clean layouts, smooth user experience, and attractive visual designs.",
    },

    {
      icon: <FaMobileAlt className="text-white text-lg" />,
      title: "Mobile app",
      description:
        "Developing user-friendly mobile applications with responsive interfaces, optimized performance, and seamless functionality.",
    },

    {
      icon: <FaPalette className="text-white text-lg" />,
      title: "UI / UX design",
      description:
        "Designing intuitive and engaging user interfaces focused on improving usability, accessibility, and overall user experience.",
    },
  ];

  return (

    <section
      id="services"
      className={`
        w-full
        px-6 md:px-12 lg:px-24
        py-24
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
          What i offers
        </h4>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-Ovo mb-6">
          My services
        </h2>

        <p
          className={`
            max-w-2xl mx-auto
            text-sm md:text-base
            leading-7
            font-Ovo

            ${
              theme === "dark"
                ? "text-gray-300"
                : "text-gray-600"
            }
          `}
        >
          I am a web developer from Bandung, Indonesia
          with 2 years of experience in multiple
          companies like Microsoft, Tesla and Apple.
        </p>

      </motion.div>

      {/* =========================
          Cards
      ========================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((service, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className={`
              rounded-2xl
              p-6 md:p-8
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

            {/* Icon */}
            <div className="
              w-12 h-12
              rounded-xl
              bg-blue-500
              flex items-center justify-center
              mb-6
            ">
              {service.icon}
            </div>

            {/* Title */}
            <h3
              className={`
                text-xl
                font-semibold
                mb-4

                ${
                  theme === "dark"
                    ? "text-white"
                    : "text-gray-800"
                }
              `}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className={`
                text-sm
                leading-6

                ${
                  theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-600"
                }
              `}
            >
              {service.description}
            </p>

          </motion.div>

        ))}

      </div>

    </section>

  );
};

export default Services;