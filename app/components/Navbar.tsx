"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import logoWhite from "../assets/logoWhite.png";

import {
  FaMoon,
  FaSun,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (

    <nav
      className={`
        fixed top-0 left-0 w-full z-50 overflow-visible
        bg-white/70 backdrop-blur-lg border-b border-white/20
        px-6 md:px-10 py-4
        flex items-center justify-between
        ${menuOpen ? "min-h-screen" : ""}
      `}
    >

      {/* =========================
          Logo
      ========================== */}
      <a
        href="#"
        className={`${menuOpen ? "hidden" : "block"}`}
      >
        <Image
          src={logoWhite}
          alt="Logo"
          className="w-20 md:w-28 cursor-pointer"
        />
      </a>

      {/* =========================
          Desktop Menu
      ========================== */}
      <ul
        className="
          hidden md:flex gap-2
          bg-white/80 backdrop-blur-md
          border border-gray-200
          rounded-full
          px-6 py-3
          shadow-md
        "
      >

        <li>
          <a
            href="#home"
            className="
              px-4 py-2 rounded-full
              hover:bg-black hover:text-white
              transition-all duration-300
            "
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="
              px-4 py-2 rounded-full
              hover:bg-black hover:text-white
              transition-all duration-300
            "
          >
            About Me
          </a>
        </li>

        <li>
          <a
            href="#services"
            className="
              px-4 py-2 rounded-full
              hover:bg-black hover:text-white
              transition-all duration-300
            "
          >
            Services
          </a>
        </li>

        <li>
          <a
            href="#work"
            className="
              px-4 py-2 rounded-full
              hover:bg-black hover:text-white
              transition-all duration-300
            "
          >
            My Work
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="
              px-4 py-2 rounded-full
              hover:bg-black hover:text-white
              transition-all duration-300
            "
          >
            Contact Me
          </a>
        </li>

      </ul>

      {/* =========================
          Desktop Right Side
      ========================== */}
      <div className="hidden md:flex items-center gap-4">

        {/* Dark Mode Toggle */}
        <button
          onClick={() =>
  setTheme(theme === "dark" ? "light" : "dark")}
          className="
            w-12 h-12
            flex items-center justify-center
            rounded-full
            border border-gray-300
            hover:bg-gray-100
            transition-all duration-300
          "
        >
          {
            theme === "dark"
  ? <FaSun />
  : <FaMoon />
          }
        </button>

        {/* Contact Button */}
        <a
          href="#contact"
          className="
            flex items-center gap-2
            border px-5 py-3 rounded-full
            hover:bg-black hover:text-white
            transition-all duration-300
          "
        >
          Contact
          <FaArrowRight className="text-sm" />
        </a>

      </div>

      {/* =========================
          Mobile Right Side
      ========================== */}
      <div
        className={`
          flex items-center gap-4 md:hidden
          ${menuOpen ? "hidden" : "flex"}
        `}
      >

        {/* Toggle */}
        <button
          onClick={() =>
  setTheme(theme === "dark" ? "light" : "dark")}
          className="
            w-10 h-10
            flex items-center justify-center
            rounded-full
            border border-gray-300
            hover:bg-gray-100
            transition-all duration-300
          "
        >
          {
            theme === "dark"
  ? <FaSun />
  : <FaMoon />
          }
        </button>

        {/* Hamburger */}
        <button
          className="text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>

      </div>

      {/* =========================
          Overlay
      ========================== */}
      {
        menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="
              fixed inset-0
              bg-black/40
              backdrop-blur-xl
              z-[55]
              md:hidden
            "
          />
        )
      }

      {/* =========================
          Mobile Menu
      ========================== */}
      <div
        className={`
          fixed top-0 right-0
          h-screen w-[75%]
          bg-white shadow-2xl
          z-[70]
          transform transition-transform duration-500 ease-in-out
          md:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* Close Button */}
        <div className="flex justify-end px-6 py-6">

          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl"
          >
            <FaTimes />
          </button>

        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-col items-center gap-3 mt-10 px-6">

          <a
            href="#home"
            className="
              w-full text-center py-4 rounded-xl
              active:bg-black active:text-white
              hover:bg-black hover:text-white
              transition-all duration-300
            "
          >
            Home
          </a>

          <a
            href="#about"
            className="
              w-full text-center py-4 rounded-xl
              active:bg-black active:text-white
              hover:bg-black hover:text-white
              transition-all duration-300
            "
          >
            About Me
          </a>

          <a
            href="#services"
            className="
              w-full text-center py-4 rounded-xl
              active:bg-black active:text-white
              hover:bg-black hover:text-white
              transition-all duration-300
            "
          >
            Services
          </a>

          <a
            href="#work"
            className="
              w-full text-center py-4 rounded-xl
              active:bg-black active:text-white
              hover:bg-black hover:text-white
              transition-all duration-300
            "
          >
            My Work
          </a>

          <a
            href="#contact"
            className="
              w-full text-center py-4 rounded-xl
              active:bg-black active:text-white
              hover:bg-black hover:text-white
              transition-all duration-300
            "
          >
            Contact Me
          </a>

        </div>

      </div>

    </nav>

  );
};

export default Navbar;