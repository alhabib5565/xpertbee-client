import React from "react";
import heroBanner from "../../../assets/hero/hero-banner.webp";
import vector from "../../../assets/hero/vector.webp";

import Image from "next/image";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
const Hero = () => {
  return (
    <Container className="mt-10">
      <div className="flex flex-col lg:flex-row lg:items-center gap-12 relative">
        <div className="flex-1 text-center space-y-6">
          <h1 className="font-[600] text-3xl lg:text-4xl flex flex-col gap-2">
            <span>The Hive of </span>
            <span>Knowledge and Growth</span>
          </h1>
          <Button className="px-6">
            Explore <MoveRight className="ml-2 size-6" />
          </Button>
        </div>
        <div className="flex-1">
          <Image
            className="mx-auto"
            src={heroBanner}
            width={550}
            height={270}
            alt="hero banner image"
          />
        </div>
        <Image
          className="opacity-0 lg:opacity-100 absolute top-5 left-[50%] translate-x-[-60%] translate-y-"
          src={vector}
          alt=""
          height={85}
          width={175}
        />
      </div>
    </Container>
  );
};

export default Hero;
