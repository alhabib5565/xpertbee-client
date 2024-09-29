import React from "react";
import NoDataFound from "@/components/dashboard/DShared/NoDataFound";
import MyCoursesPageTab from "@/components/dashboard/myCourses/MyCoursesPageTab";

const DraftCourses = () => {
  return (
    <div className="space-y-6">
      <MyCoursesPageTab />
      <NoDataFound />
    </div>
  );
};

export default DraftCourses;
