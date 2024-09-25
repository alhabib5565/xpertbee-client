import Courses from "@/components/pages/homePage/Courses";
import FreeWebinar from "@/components/pages/homePage/FreeWebinar";
import Hero from "@/components/pages/homePage/Hero";
import LiveBootcamp from "@/components/pages/homePage/LiveBootcamp";
import ShortCourse from "@/components/pages/homePage/ShortCourse";
import WantToBeInstructor from "@/components/pages/homePage/WantToBeInstructor";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LiveBootcamp />
      <ShortCourse />
      <FreeWebinar />
      <Courses />
      <WantToBeInstructor />
    </div>
  );
};

export default HomePage;
