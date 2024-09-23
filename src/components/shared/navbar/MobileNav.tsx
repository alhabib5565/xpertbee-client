"use client";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import React, { MouseEvent, useRef, useState } from "react";
import { navItems } from "./navItems";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleMenuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const clickOutsideMenu = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      handleCloseMenu();
    }
    console.log({ ref: ref.current, outsideRef: e.target });
  };

  return (
    <div className="lg:hidden">
      <Hamburger toggled={isOpen} toggle={handleMenuOpen} size={30} />
      {isOpen && (
        <div
          onClick={clickOutsideMenu}
          className="fixed left-0 shadow-4xl h-screen right-0 top-[57px] bg-black bg-opacity-50 border-b border-b-white/20 z-50"
        >
          <div
            ref={ref}
            className="flex flex-col gap-6 pt-2 bg-white h-full max-w-md w-full"
          >
            {navItems.map((route, index) => {
              return (
                <Link
                  key={index}
                  onClick={handleCloseMenu}
                  className={"px-5 rounded-xl "}
                  href={route.path}
                >
                  {route.pathName}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
