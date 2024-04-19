import { title } from "process";
import React from "react";
import {
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiDrizzle,
  SiEnvato,
  SiEthereum,
  SiFlask,
  SiGooglefonts,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiMlb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiOpensourceinitiative,
  SiPython,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@components/@/lib/utils";
import { DirectionAwareHover } from "@components/app/components/ui/direction-aware-hover";

function Projects() {
  const projects = [
    {
      title: "Dummy OPS (Final year project)",
      tech: [SiNextdotjs, SiShadcnui, SiDrizzle, SiTailwindcss, SiGooglegemini],
      link: "https://dummyops.meertarbani.in/",
      cover: "/Last-sem-prj.png",
      background: "bg-pink-500",
    },
    {
      title: "Portfolio",
      tech: [SiNextdotjs, SiShadcnui, SiTypescript, SiTailwindcss],
      link: "https://aishwarya-nair-portfolio.vercel.app/",
      cover: "/profile-prj.png",
      background: "bg-green-500",
    },
    {
      title: "Web3 DAPP",
      tech: [SiReact, SiEthereum, SiChakraui, SiTypescript],
      link: "https://github.com/aryastark08/Web3_DApp",
      cover: "/Web3.png",
      background: "bg-pink-500",
    },

    {
      title: "E-Commerce Site",
      tech: [SiReact, SiBootstrap, SiJavascript, SiHtml5, SiCss3],
      link: "https://frostiron.github.io/FEMME_Website/",
      cover: "/Clg-prj-3.png",
      background: "bg-green-500",
    },
    {
      title: "Smart Recipes",
      tech: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
      link: "https://aryastark08.github.io/SmartRecipe/",
      cover: "/Smartrecipe.png",
      background: "bg-pink-500",
    },
    {
      title: "Open Source Contribution Project",
      tech: [SiReact, SiBootstrap, SiJavascript, SiHtml5, SiCss3],
      link: "https://www.forkcommitmerge.io/",
      cover: "/opensrc.png",
      background: "bg-green-500",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0 bg-white dark:bg-black text-black dark:text-white">
      <Title
        text="Projects"
        className="flex flex-col items-center justify-center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>

                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-6 h-6" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
