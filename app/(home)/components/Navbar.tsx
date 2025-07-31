import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";

import { cn } from "@components/@/lib/utils";
import { MovingBorderBtn } from "@components/app/components/ui/moving-border";
const Navbar = ({ className }: { className?: string }) => {
  const socials = [
    {
      link: "https://www.linkedin.com",
      label: "Linkedin",
      Icon: FaLinkedin,
    },
    {
      link: "https://github.com/aryastark08",
      label: "Github",
      Icon: FaGithub,
    },
    {
      link: "https://gmail.com",
      label: "Gmail",
      Icon: BiLogoGmail,
    },
  ];

  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center p-4 md:p-6 animate-move-down",
        className
      )}
    >
      <h1 className="text-black dark:text-slate-100 text-2xl font-semibold underline underline-offset-8 decoration-green-500">
        Aishwarya Nair
      </h1>
      <MovingBorderBtn>
        <div className="flex items-center gap-3">
          {socials.map((social, index) => {
            const Icon = social.Icon;

            return (
              <Link
                href={social.link}
                key={index}
                aria-label={social.label}
                target="_blank"
              >
                <Icon className="w-5 h-5 hover:scale-125 transition-all" />
              </Link>
            );
          })}
        </div>
      </MovingBorderBtn>
    </nav>
  );
};

export default Navbar;
