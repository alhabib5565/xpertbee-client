import MyTab from "@/components/dashboard/DShared/MyTab";
import React from "react";
import { myCourseTabItems } from "../page";
import NoDataFound from "@/components/dashboard/DShared/NoDataFound";

const DraftCourses = () => {
  return (
    <div className="space-y-6">
      <MyTab tabItems={myCourseTabItems} />
      <NoDataFound />
    </div>
  );
};

export default DraftCourses;
