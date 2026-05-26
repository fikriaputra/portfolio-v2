"use client";

import React from "react";
import Image from "next/image";

import {
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import { motion } from "framer-motion";

import profileImg from "../assets/IMG_1432025.jpg";

const Header = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 pt-40"
    >
      {/* Profile Image */}
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
          className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover"
        />
      </motion.div>

      {/* Intro */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 text-xl md:text-2xl mb-4 font-Ovo"
      >
        Hi! I'm Fikri Adyatma Putra
        <span className="text-2xl">👋</span>
      </motion.h3>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl lg:text-[72px] font-Ovo leading-tight max-w-5xl mb-6"
      >
        Web developer <br />
        based in Indonesia.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-2xl text-gray-600 text-base md:text-lg leading-8 mb-10 font-Outfit"
      >
        I am a web developer passionate about building modern,
        responsive, and user-friendly websites using React, Next.js,
        Tailwind CSS, and modern web technologies.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        {/* Contact Button */}
        <a
          href="#contact"
          className="flex items-center gap-2 bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full border border-black hover:bg-white hover:text-black transition-all duration-300"
        >
          Contact Me
          <FaArrowRight />
        </a>

        {/* Download CV */}
        <a
          href="/Fikri Adyatma Putra_Resume.pdf"
          download
          className="flex items-center gap-2 border border-gray-400 px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300"
        >
          Download CV
          <FaDownload />
        </a>
      </motion.div>
    </section>
  );
};

export default Header;