"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock, Menu, X } from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "./ui/button";
import DateTime from "./DateTime";

export const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <header className="flex items-center justify-between py-4 md:py-8 px-4 md:px-6 lg:p-16 lg:pb-4">
      <div className="flex gap-x-8 items-center">
        <Button
          variant={"link"}
          className="p-0 h-fit"
          onClick={() => setNavOpen(true)}
        >
          <Menu />
        </Button>
        <Link href={"/"} className="text-4xl font-medium mb-0">
          IG.
        </Link>
      </div>

      <ThemeToggle />

      {<Navmenu setNavOpen={setNavOpen} isNavOpen={isNavOpen} />}
    </header>
  );
};

type NavmenuProps = {
  isNavOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navmenu = ({ setNavOpen, isNavOpen }: NavmenuProps) => {
  return (
    <div
      className={`flex items-center justify-center bg-background w-full max-w-full h-screen absolute top-0 left-0 p-6 ${
        isNavOpen
          ? "opacity-1 z-20 transition-opacity duration-300"
          : "opacity-0 -z-20 transition-opacity duration-300"
      }`}
    >
      <div>
        <nav className="h-fit">
          <ul className="flex flex-col gap-y-6 md:gap-y-12">
            <Link href={"/"} className="text-2xl md:text-4xl text-center">
              Home
            </Link>
            <Link href={"#"} className="text-2xl md:text-4xl text-center">
              About Me
            </Link>
            <Link href={"#"} className="text-2xl md:text-4xl text-center">
              Blogs
            </Link>
            <Link href={"#"} className="text-2xl md:text-4xl text-center">
              Contact
            </Link>
          </ul>
        </nav>
        <Button
          variant={"link"}
          className="p-0 h-fit top-32 right-12 absolute lg:right-32"
          onClick={() => setNavOpen(false)}
        >
          <X className="md:h-8 md:w-8" />
        </Button>
      </div>
    </div>
  );
};
