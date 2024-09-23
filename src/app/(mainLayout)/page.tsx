import Hero from "@/components/pages/homePage/Hero";
import LiveBootcamp from "@/components/pages/homePage/LiveBootcamp";
import ShortCourse from "@/components/pages/homePage/ShortCourse";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LiveBootcamp />
      <ShortCourse />
    </div>
  );
};

export default HomePage;
