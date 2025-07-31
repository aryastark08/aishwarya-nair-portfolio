import Link from "next/link";
import React from "react";
import Title from "./Title";

function HeroSection() {
  return (
    <div className=" min-h-[60vh] flex flex-col gap-y-40 lg:flex-row items-center justify-between animate-move-up mt-4 md:mt-14">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold dark:text-white">
          Hello there!
          <br />
          <span className="underline underline-offset-8 decoration-pink-600 ">
            {"I'm Aishwarya"}
          </span>
        </h1>

        <p className="md:w-96 text-lg text-slate-900 dark:text-slate-200">
          {
            "I'm a passionate frontend developer and cybersecurity enthusiast with a curiosity that knows no bounds."
          }
        </p>
        {/* <Link
          href={"mailto:snailman903@gmail.com"}
          aria-label="Send me an mail"
          className="inline-block group"
        >
          <Title text="Contact Me 📨" className="dark:text-white" />
        </Link> */}
      </div>

      <div>
        <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
          <div className="flex gap-4 translate-x-8">
            <div className="w-32 h-32 rounded-3xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-4 -translate-x-8">
            <div className="w-32 h-32 rounded-3xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
