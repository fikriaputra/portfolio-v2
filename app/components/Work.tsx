"use client";

import React, { useState } from "react";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";

import project1 from "../assets/logoDark.png";
import project2 from "../assets/logoDark.png";
import project3 from "../assets/logoDark.png";
import project4 from "../assets/logoDark.png";
import project5 from "../assets/logoDark.png";
import project6 from "../assets/logoDark.png";

const Work = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      image: project1,
      title: "Frontend Project",
      category: "Web design",
    },
    {
      image: project2,
      title: "Geo Based App",
      category: "Mobile app",
    },
    {
      image: project3,
      title: "Photography Site",
      category: "Web design",
    },
    {
      image: project4,
      title: "UI/UX Designing",
      category: "UI/UX design",
    },
    {
      image: project5,
      title: "Dashboard App",
      category: "Web application",
    },
    {
      image: project6,
      title: "E-Commerce App",
      category: "Fullstack project",
    },
  ];

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 4);

  return (
    <section
      id="work"
      className="w-full px-6 md:px-12 lg:px-24 py-24 scroll-mt-20"
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
          My portfolio
        </h4>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-Ovo mb-6">
          My latest work
        </h2>

        <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600 leading-7 font-Ovo">
          Welcome to my web development portfolio! Explore a
          collection of projects showcasing my expertise in
          front-end development.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-60 sm:h-72 object-cover group-hover:scale-105 transition-all duration-500"
            />

            {/* Overlay Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="absolute bottom-3 left-3 right-3 bg-white rounded-xl px-4 py-3 flex items-center justify-between shadow-lg"
            >
              <div>
                <h3 className="font-semibold text-sm text-gray-800">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-500">
                  {project.category}
                </p>
              </div>

              <button className="w-10 h-10 shrink-0 rounded-full bg-lime-300 flex items-center justify-center hover:rotate-45 transition-all duration-300">
                <FaArrowRight className="text-black text-sm" />
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      {projects.length > 4 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 border border-gray-400 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors duration-200"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Work;