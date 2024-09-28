import MyTab from "@/components/dashboard/DShared/MyTab";
import NoDataFound from "@/components/dashboard/DShared/NoDataFound";
import React from "react";

export const myCourseTabItems = [
  {
    name: "Publish (0)",
    href: "/dashboard/my-courses",
  },
  {
    name: "Pending (1)",
    href: "/dashboard/my-courses/pending-courses",
  },
  {
    name: "Draft (1)",
    href: "/dashboard/my-courses/draft-courses",
  },
];

const MyCoursesPage = () => {
  return (
    <div className="space-y-6">
      <MyTab tabItems={myCourseTabItems} />
      <NoDataFound />
    </div>
  );
};

export default MyCoursesPage;
