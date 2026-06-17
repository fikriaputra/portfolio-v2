"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";

import project1 from "../assets/FishPond.png";
import project2 from "../assets/Bunda.png";
import project3 from "../assets/Reelique.png";
import project4 from "../assets/Web_SmartComp.png";
import project5 from "../assets/Mobile_SmartComp.png";
import project6 from "../assets/sanditel.png";

interface WorkProps {
  language: "id" | "en";
}

const Work = ({ language }: WorkProps) => {

  const { theme } = useTheme();

  const content = {
  id: {
    heading: "Portofolio Saya",
    title: "Proyek Terbaru Saya",

    description:
      "Menampilkan berbagai proyek pengembangan web, machine learning, dan solusi digital yang dibangun menggunakan teknologi modern dengan fokus pada performa, skalabilitas, dan pengalaman pengguna yang optimal.",

    certificate: "Sertifikat",

    showMore: "Lihat Selengkapnya",
    showLess: "Tampilkan Lebih Sedikit",

    categories: {
      machineLearning: "Machine Learning",
      webApplication: "Aplikasi Web",
      mobileApp: "Aplikasi Mobile",
      uiux: "Desain UI/UX",
    },
  },

  en: {
    heading: "My Portfolio",
    title: "My Latest Projects",

    description:
      "Featuring a variety of web development projects, machine learning, and digital solutions built using modern technologies with a focus on optimal performance, scalability, and user experience.",

    certificate: "Certificate",

    showMore: "Show More",
    showLess: "Show Less",

    categories: {
      machineLearning: "Machine Learning",
      webApplication: "Web Application",
      mobileApp: "Mobile App",
      uiux: "UI/UX Design",
    },
  },
};

const t = content[language];

  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      image: project1,
      title: "Fish Prediction ML Models",
      category:
  language === "id"
    ? t.categories.machineLearning
    : t.categories.machineLearning,
      github:
        "https://ieeexplore.ieee.org/document/11362636",

      certificate:
        "https://drive.google.com/file/d/1FzbxIdr2nuHS9qxRW6CYANlByWVXc3D2/view?usp=sharing",

      tech: [
        "Python",
        "XGBoost",
        "Random Forest",
      ],
    },

    {
      image: project2,
      title: "Bunda Car Wash",
      category: t.categories.webApplication,
      github: "https://bunda-car-wash.vercel.app/",

      tech: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Responsive Web Design"
      ],
    },

    {
      image: project3,
      title: "ReeLique Movie Discovery Platform",
      category: t.categories.webApplication,
      github: "https://reelique.vercel.app/",

      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TMDB API",
        "Playwright",
      ],
    },

    {
      image: project4,
      title: "Website Smart Competition",
      category: t.categories.webApplication,
      github: "https://github.com/fikriaputra/Web-SmartComp",

      tech: [
        "Laravel",
        "PHP",
        "MySQL",
        "Tailwind",
        "JavaScript",
      ],
    },

    {
      image: project5,
      title: "Smart Competition App",
      category: t.categories.mobileApp,
      github: "https://github.com/fikriaputra/Smart-Comp-Mobile",

      tech: [
        "Flutter",
        "Firebase",
        "Dart",
        "Rest API",
      ],
    },

    {
      image: project6,
      title: "Sanditel Apps",
      category: t.categories.webApplication,
      github: "https://fe-sanditel-hz9r.vercel.app/",

      tech: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "JavaScript",
        "REST API",
        "Responsive Design",
      ],
    },

  ];

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 3);

  return (

    <section
      id="work"
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
          {t.heading}
        </h4>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-Ovo mb-6">
          {t.title}
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
          {t.description}
        </p>

      </motion.div>

      {/* =========================
          Projects
      ========================== */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >

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
            className="
              relative
              overflow-hidden
              rounded-3xl

              border-2 border-white/30
              group

              shadow-lg
              hover:shadow-2xl

              transition-all duration-500
            "
          >

            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-72 sm:h-80

                object-cover

                group-hover:scale-105

                transition-all duration-500
              "
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
              className={`
                absolute
                bottom-3 left-3 right-3

                rounded-2xl

                px-3 py-2

                flex items-center justify-between gap-3

                border

                shadow-xl

                transition-all duration-300

                ${
                  theme === "dark"
                    ? "bg-black/80 border-gray-700 backdrop-blur-md"
                    : "bg-white border-gray-300"
                }
              `}
            >

              {/* Left Content */}
              <div className="flex-1 min-w-0">

                {/* Title */}
                <h3
                  className={`
                    text-sm
                    font-semibold
                    truncate

                    ${
                      theme === "dark"
                        ? "text-white"
                        : "text-gray-800"
                    }
                  `}
                >
                  {project.title}
                </h3>

                {/* Category */}
                <p
                  className={`
                    text-xs mt-[2px]

                    ${
                      theme === "dark"
                        ? "text-gray-300"
                        : "text-gray-500"
                    }
                  `}
                >
                  {project.category}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mt-2">

                  {project.tech?.map((item, i) => (

                    <span
                      key={i}
                      className={`
                        text-[9px]

                        px-1.5 py-[1px]

                        rounded-full

                        whitespace-nowrap

                        ${
                          theme === "dark"
                            ? "bg-lime-300/10 text-lime-300"
                            : "bg-green-200 text-green-700"
                        }
                      `}
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>
              
              
              {/* Action Buttons */}
<div className="flex items-center gap-2">

  {/* Certificate Button */}
  {project.certificate && (
    <a
      href={project.certificate}
      target="_blank"
      rel="noopener noreferrer"
      className="
        px-3 py-2

        rounded-full

        text-[10px]
        font-medium

        whitespace-nowrap

        bg-lime-300
        text-black

        hover:scale-105

        shadow-lg shadow-lime-300/30

        transition-all duration-300
      "
    >
      {t.certificate}
    </a>
  )}

  {/* Arrow Button */}
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-10 h-10
        shrink-0

        rounded-full

        bg-lime-300

        flex items-center justify-center

        hover:rotate-45
        hover:scale-110

        shadow-lg shadow-lime-300/30

        transition-all duration-300
      "
    >
      <FaArrowRight className="text-black text-sm" />
    </a>
  )}

</div>

            </motion.div>

          </motion.div>

        ))}

      </div>

      {/* =========================
          Show More Button
      ========================== */}
      {projects.length > 4 && (

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-14"
        >

          <button
            onClick={() => setShowAll(!showAll)}
            className={`
              px-8 py-3

              rounded-full

              text-sm font-medium

              border

              transition-all duration-300

              hover:scale-105

              ${
                theme === "dark"
                  ? "bg-white text-black border-white hover:bg-black hover:text-white"
                  : "bg-black text-white border-black hover:bg-white hover:text-black"
              }
            `}
          >
            {showAll
  ? t.showLess
  : t.showMore}
          </button>

        </motion.div>

      )}

    </section>

  );
};

export default Work;