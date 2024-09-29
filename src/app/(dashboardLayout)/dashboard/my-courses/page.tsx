"use client";
import NoDataFound from "@/components/dashboard/DShared/NoDataFound";
import MyCoursesPageTab from "@/components/dashboard/myCourses/MyCoursesPageTab";
import React from "react";

const MyCoursesPage = () => {
  return (
    <div className="space-y-6">
      <MyCoursesPageTab />
      <NoDataFound />
    </div>
  );
};

export default MyCoursesPage;
