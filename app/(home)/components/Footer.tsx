import React from "react";
import Navbar from "./Navbar";
import { ModeToggle } from "@components/app/components/ModeToggle";

function Footer() {
  return (
    <div className="border-t mt-10 bg-white dark:bg-black">
      <div className="flex grid-cols-2 gap-4 items-center justify-center">
        <div className="col-span-11">
          <Navbar className="flex-row gap-10 dark:bg-black" />
        </div>
        <div className="col-span-1">
          <ModeToggle />
        </div>
      </div>
      <p className="text-sm text-center text-black dark:text-white">
        © 2024 My Portfolio. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
