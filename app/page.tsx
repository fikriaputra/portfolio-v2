"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  const [language, setLanguage] = useState<"id" | "en">("id");

  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
      />

      <Header language={language} />

      <About language={language} />

      <Services language={language} />

      <Work language={language} />

      <Contact language={language} />
    </>
  );
}