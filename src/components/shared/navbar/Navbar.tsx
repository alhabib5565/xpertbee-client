"use client";
import React, { useRef, useState } from "react";
import Container from "../Container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/logo/logo.webp";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { navItems } from "./navItems";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latestValue) => {
    if (latestValue > 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 15 }}
      className={cn("fixed top-0 w-[100%] z-50 bg-white", {
        "shadow-md": isScroll,
      })}
    >
      <Container>
        <div
          className={cn(
            " h-[57px] flex justify-between lg:justify-normal items-center gap-5"
          )}
        >
          <div>
            <Image className="" height={40} width={145} src={logo} alt="" />
          </div>
          {/* mobile */}
          <MobileNav />
          {/* desktop */}
          <div
            className={cn(
              "flex-1 hidden lg:flex justify-end gap-6 items-center"
            )}
          >
            {/* <div className="flex justify-between items-center gap-5 bg-gray-200"> */}
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-sm font-medium leading-8 group relative link-before capitalize text-[#212121]"
              >
                {item.pathName}
                <span className="absolute bottom-0 left-0  h-[3px] rounded-md w-0 group-hover:w-full duration-200 bg-primary z-10 transition-all"></span>
              </Link>
            ))}
            {/* </div> */}
            {/* <div>
              <Link href="contact">
                <Button>Contact</Button>
              </Link>
            </div> */}
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Navbar;
