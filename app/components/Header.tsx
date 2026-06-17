"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import {
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import { motion } from "framer-motion";

import profileImg from "../assets/Foto_Formal_no_pocket.png";

interface HeaderProps {
  language: "id" | "en";
}

const Header = ({ language }: HeaderProps) => {

  const { theme } = useTheme();

  const content = {
    id: {
      greeting: "Halo! Saya Fikri Adyatma Putra",
      title: (
        <>
          Full Stack Developer & <br />
          IT Support
        </>
      ),
      description:
        "Lulusan Teknologi Informasi dengan pengalaman dalam mengembangkan aplikasi web modern dan mendukung infrastruktur TI. Terampil dalam React, Next.js, Node.js, Laravel, jaringan, dan pemecahan masalah sistem melalui proyek akademik dan magang profesional.",
      contact: "Hubungi Saya",
      download: "Unduh CV",
    },

    en: {
      greeting: "Hi! I'm Fikri Adyatma Putra",
      title: (
        <>
          Full Stack Developer & <br />
          IT Support
        </>
      ),
      description:
        "Information Technology graduate with experience in developing modern web applications and supporting IT infrastructure. Skilled in React, Next.js, Node.js, Laravel, networking, and system troubleshooting through academic projects and professional internships.",
      contact: "Contact Me",
      download: "Download CV",
    },
  };

  const t = content[language];

  return (
    <section
      id="home"
      className={`
        w-full min-h-screen
        flex flex-col items-center justify-center
        text-center
        px-6 pt-40

        transition-all duration-300

        ${
          theme === "dark"
            ? "bg-black text-white"
            : "bg-white text-black"
        }
      `}
    >

      {/* =========================
          Profile Image
      ========================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <Image
          src={profileImg}
          alt="Profile"
          className="
            w-36 h-36 md:w-40 md:h-40
            rounded-full object-cover
          "
        />
      </motion.div>

      {/* =========================
          Intro
      ========================== */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className={`
          flex items-center gap-2
          text-xl md:text-2xl
          mb-4
          font-Ovo

          ${
            theme === "dark"
              ? "text-white"
              : "text-black"
          }
        `}
      >
        {t.greeting}
        <span className="text-2xl">👋</span>
      </motion.h3>

      {/* =========================
          Main Heading
      ========================== */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className={`
          text-4xl sm:text-5xl lg:text-[72px]
          font-Ovo
          leading-tight
          max-w-5xl
          mb-6

          ${
            theme === "dark"
              ? "text-white"
              : "text-black"
          }
        `}
      >
        {t.title}
      </motion.h1>

      {/* =========================
          Description
      ========================== */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className={`
          max-w-2xl
          text-base md:text-lg
          leading-8
          mb-10
          font-Outfit

          ${
            theme === "dark"
              ? "text-gray-300"
              : "text-gray-600"
          }
        `}
      >
        {t.description}
      </motion.p>

      {/* =========================
          Buttons
      ========================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
        className="
          flex flex-col sm:flex-row
          items-center gap-4
        "
      >

        {/* Contact Button */}
        <a
          href="#contact"
          className={`
            flex items-center gap-2

            px-6 md:px-8
            py-3 md:py-4

            rounded-full

            border

            transition-all duration-300

            ${
              theme === "dark"
                ? "bg-white text-black border-white hover:bg-black hover:text-white"
                : "bg-black text-white border-black hover:bg-white hover:text-black"
            }
          `}
        >
          {t.contact}
          <FaArrowRight />
        </a>

        {/* Download CV */}
        <a
          href="/CV_Fikri Adyatma Putra.pdf"
          download
          className={`
            flex items-center gap-2

            px-8 py-4

            rounded-full

            border

            transition-all duration-300

            ${
              theme === "dark"
                ? "border-gray-600 text-white hover:bg-white hover:text-black"
                : "border-gray-400 text-black hover:bg-black hover:text-white"
            }
          `}
        >
          {t.download}
          <FaDownload />
        </a>

      </motion.div>

    </section>
  );
};

export default Header;