"use client";

import React, { useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import toast from "react-hot-toast";

import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { motion } from "framer-motion";

import logo from "../assets/logoWhite.png";
import logoDark from "../assets/logoDark.png";

import { sendEmail } from "../utils/emailjs";

const Contact = () => {

  const { theme } = useTheme();

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    if (!form.current) return;

    try {

      await sendEmail(form.current);

      toast.success("Message sent successfully!");

      form.current.reset();

    } catch (error) {

      console.log(error);

      toast.error("Failed to send message.");

    }

  };

  return (

    <section
      id="contact"
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
        className="text-center"
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
          Connect with me
        </h4>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-Ovo mb-6">
          Get in touch
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
                : "text-gray-500"
            }
          `}
        >
          I’d love to hear from you! If you have any
          questions, comments or feedback,
          please use the form below.
        </p>

      </motion.div>

      {/* =========================
          Form
      ========================== */}
      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-16"
      >

        {/* Input Row */}
        <div className="
          grid
          grid-cols-1 md:grid-cols-2
          gap-6
          mb-6
        ">

          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
            className={`
              w-full
              p-4

              text-sm md:text-base

              rounded-lg

              border

              outline-none

              transition-all duration-300

              ${
                theme === "dark"
                  ? `
                    bg-[#111111]
                    text-white
                    border-gray-700
                    placeholder:text-gray-400
                    focus:border-white
                  `
                  : `
                    bg-white
                    text-black
                    border-gray-300
                    placeholder:text-gray-500
                    focus:border-black
                  `
              }
            `}
          />

          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
            className={`
              w-full
              p-4

              text-sm md:text-base

              rounded-lg

              border

              outline-none

              transition-all duration-300

              ${
                theme === "dark"
                  ? `
                    bg-[#111111]
                    text-white
                    border-gray-700
                    placeholder:text-gray-400
                    focus:border-white
                  `
                  : `
                    bg-white
                    text-black
                    border-gray-300
                    placeholder:text-gray-500
                    focus:border-black
                  `
              }
            `}
          />

        </div>

        {/* Textarea */}
        <textarea
          rows={7}
          name="message"
          placeholder="Enter your message"
          required
          className={`
            w-full
            p-4

            text-sm md:text-base

            rounded-lg

            border

            outline-none

            resize-none

            transition-all duration-300

            ${
              theme === "dark"
                ? `
                  bg-[#111111]
                  text-white
                  border-gray-700
                  placeholder:text-gray-400
                  focus:border-white
                `
                : `
                  bg-white
                  text-black
                  border-gray-300
                  placeholder:text-gray-500
                  focus:border-black
                `
            }
          `}
        />

        {/* Submit Button */}
        <div className="flex justify-center mt-8">

          <button
            type="submit"
            className={`
              flex items-center gap-2

              text-sm md:text-base

              px-6 md:px-8
              py-3 md:py-4

              rounded-full

              border

              transition-all duration-300

              ${
                theme === "dark"
                  ? `
                    bg-white
                    text-black
                    border-white

                    hover:bg-black
                    hover:text-white
                  `
                  : `
                    bg-black
                    text-white
                    border-black

                    hover:bg-white
                    hover:text-black
                  `
              }
            `}
          >
            Submit now
            <FaArrowRight />
          </button>

        </div>

      </motion.form>

      {/* =========================
          Footer
      ========================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-28"
      >

        <div className="
          flex flex-col
          items-center justify-center
          text-center
        ">

          {/* Logo */}
          <Image
            src={
              theme === "dark"
                ? logoDark
                : logo
            }
            alt="Logo"
            className="
              w-24 sm:w-32 md:w-40
              object-contain
               transition-all duration-300
            "
          />

          {/* Email + Social */}
          <div
            className={`
              flex flex-wrap
              items-center justify-center
              gap-4 md:gap-6
              mt-6

              ${
                theme === "dark"
                  ? "text-white"
                  : "text-black"
              }
            `}
          >

            {/* Email */}
            <a
              href="mailto:fikriaputraa@gmail.com"
              className="
                flex items-center gap-2

                transition-all duration-300

                hover:text-gray-500
              "
            >
              <MdEmail className="text-xl" />

              <p className="text-sm md:text-base">
                fikriaputraa@gmail.com
              </p>
            </a>

            {/* Divider */}
            <div
              className={`
                hidden md:block
                w-px h-5

                ${
                  theme === "dark"
                    ? "bg-gray-700"
                    : "bg-gray-300"
                }
              `}
            />

            {/* Github */}
            <a
              href="https://github.com/fikriaputra"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2

                transition-all duration-300

                hover:text-gray-500
              "
            >
              <FaGithub className="text-2xl" />

              <span className="text-sm md:text-base">
                Github
              </span>
            </a>

            {/* Divider */}
            <div
              className={`
                hidden md:block
                w-px h-5

                ${
                  theme === "dark"
                    ? "bg-gray-700"
                    : "bg-gray-300"
                }
              `}
            />

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/fikriaputra/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2

                transition-all duration-300

                hover:text-gray-500
              "
            >
              <FaLinkedin className="text-2xl" />

              <span className="text-sm md:text-base">
                Linkedin
              </span>
            </a>

          </div>

        </div>

        {/* Bottom Line */}
        <div
          className={`
            border-t
            mt-12
            pt-6

            ${
              theme === "dark"
                ? "border-gray-700"
                : "border-gray-300"
            }
          `}
        >

          <p
            className={`
              text-sm
              text-center

              ${
                theme === "dark"
                  ? "text-gray-300"
                  : "text-black"
              }
            `}
          >
            © 2026 Fikri Adyatma Putra.
            All rights reserved.
          </p>

        </div>

      </motion.div>

    </section>

  );
};

export default Contact;