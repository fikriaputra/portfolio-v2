"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import logoWhite from "../assets/logoWhite.png";
import logoDark from "../assets/logoDark.png";

import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaGlobe,
} from "react-icons/fa";
import Experience from "./Services";

interface NavbarProps {
  language: "id" | "en";
  setLanguage: React.Dispatch<
    React.SetStateAction<"id" | "en">
  >;
}

const Navbar = ({
  language,
  setLanguage,
}: NavbarProps) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const t = {
  id: {
    home: "Beranda",
    about: "Tentang",
    experience: "Pengalaman",
    projects: "Proyek",
    contact: "Kontak",
  },

  en: {
    home: "Home",
    about: "About Me",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
}[language];

  return (

    <nav
  className={`
    fixed top-0 left-0 w-full z-50 overflow-visible

    ${
      theme === "dark"
        ? "bg-black/95 border-gray-900"
        : "bg-white/80 border-gray-200"
    }

    backdrop-blur-lg

    border-b

    px-6 md:px-10 py-4

    flex items-center justify-between

    transition-colors duration-200 ease-in-out

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
          src={theme === "dark" ? logoDark : logoWhite}
          alt="Logo"
          className="w-20 md:w-28 cursor-pointer"
        />
      </a>

      {/* =========================
          Desktop Menu
      ========================== */}
      <ul
        className={`
          hidden md:flex gap-2

          ${
            theme === "dark"
              ? "bg-black text-white border-gray-700"
              : "bg-white/80 text-black border-gray-200"
          }

          backdrop-blur-md

          border

          rounded-full
          px-6 py-3

          shadow-md

          transition-colors duration-200
        `}
      >

        <li>
          <a
            href="#home"
            className={`
              px-4 py-2 rounded-full
              transition-colors duration-200

              ${
                theme === "dark"
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }
            `}
          >
            {t.home}
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={`
              px-4 py-2 rounded-full
              transition-colors duration-200

              ${
                theme === "dark"
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }
            `}
          >
            {t.about}
          </a>
        </li>

        <li>
          <a
            href="#services"
            className={`
              px-4 py-2 rounded-full
              transition-colors duration-200

              ${
                theme === "dark"
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }
            `}
          >
            {t.experience}
          </a>
        </li>

        <li>
          <a
            href="#work"
            className={`
              px-4 py-2 rounded-full
              transition-colors duration-200

              ${
                theme === "dark"
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }
            `}
          >
            {t.projects}
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={`
              px-4 py-2 rounded-full
              transition-colors duration-200

              ${
                theme === "dark"
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }
            `}
          >
            {t.contact}
          </a>
        </li>

      </ul>

      {/* =========================
          Desktop Right Side
      ========================== */}
      <div className="hidden md:flex items-center gap-4">

        {/* Toggle */}
        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className={`
            w-12 h-12
            flex items-center justify-center

            rounded-full

            border

            transition-all duration-300

            ${
              theme === "dark"
                ? "bg-black text-white border-gray-700 hover:bg-white hover:text-black"
                : "bg-white text-black border-gray-300 hover:bg-black hover:text-white"
            }
          `}
        >
          {
            theme === "dark"
              ? <FaSun />
              : <FaMoon />
          }
        </button>

        {/* Language Button */}
<button
  onClick={() =>
    setLanguage(
      language === "id"
        ? "en"
        : "id"
    )
  }
  className={`
    flex items-center gap-2

    px-5 py-3

    rounded-full

    border

    transition-colors duration-200

    ${
      theme === "dark"
        ? "bg-black text-white border-gray-700 hover:bg-white hover:text-black"
        : "bg-white text-black border-gray-300 hover:bg-black hover:text-white"
    }
  `}
>
  <FaGlobe className="text-sm" />

  {language === "id"
    ? "Indonesia"
    : "English"}
</button>

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
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className={`
            w-10 h-10
            flex items-center justify-center

            rounded-full

            border

            transition-colors duration-200

            ${
              theme === "dark"
                ? "bg-black text-white border-gray-700 hover:bg-white hover:text-black"
                : "bg-white text-black border-gray-300 hover:bg-black hover:text-white"
            }
          `}
        >
          {
            theme === "dark"
              ? <FaSun />
              : <FaMoon />
          }
        </button>

        {/* Language Switch */}
<button
  onClick={() =>
    setLanguage(
      language === "id"
        ? "en"
        : "id"
    )
  }
  className={`
    px-3 py-2

    rounded-full

    border

    text-xs font-medium

    transition-all duration-300

    ${
      theme === "dark"
        ? "bg-black text-white border-gray-700"
        : "bg-white text-black border-gray-300"
    }
  `}
>
  {language === "id"
    ? "ID"
    : "EN"}
</button>

        {/* Hamburger */}
        <button
          className={`
            text-2xl

            ${
              theme === "dark"
                ? "text-white"
                : "text-black"
            }
          `}
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

          ${
            theme === "dark"
              ? "bg-[#111111] text-white"
              : "bg-white text-black"
          }

          shadow-2xl

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
            className={`
              w-full text-center py-4 rounded-xl
              transition-colors duration-200

              ${
                theme === "dark"
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }
            `}
          >
            {t.home}
          </a>

          <a
            href="#about"
            className={`
              w-full text-center py-4 rounded-xl
              transition-colors duration-200

              ${
                theme === "dark"
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }
            `}
          >
            {t.about}
          </a>

          <a
            href="#services"
            className={`
              w-full text-center py-4 rounded-xl
              transition-colors duration-200

              ${
                theme === "dark"
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }
            `}
          >
            {t.experience}
          </a>

          <a
            href="#work"
            className={`
              w-full text-center py-4 rounded-xl
              transition-colors duration-200

              ${
                theme === "dark"
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }
            `}
          >
            {t.projects}
          </a>

          <a
            href="#contact"
            className={`
              w-full text-center py-4 rounded-xl
              transition-colors duration-200

              ${
                theme === "dark"
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }
            `}
          >
            {t.contact}
          </a>

        </div>

      </div>

    </nav>

  );
};

export default Navbar;