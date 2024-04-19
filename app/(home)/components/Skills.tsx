"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@components/app/components/ui/card-hover-effect";
import { IconType } from "react-icons";
import {
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next JS",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "Python",
      Icon: SiPython,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills"
        className="flex flex-col items-center justify-center"
      />
      <HoverEffect items={skills} />
    </div>
  );
}

export default Skills;
