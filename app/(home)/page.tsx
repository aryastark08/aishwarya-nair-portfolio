import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Button } from "@components/@/components/ui/button";

const page = () => {
  return (
    <div className="min-h-screen bg-white  dark:bg-black overflow-hidden">
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default page;
