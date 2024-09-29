"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const tabItems = [
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

const MyCoursesPageTab = () => {
  const pathName = usePathname();
  const tabName = pathName.split("/");

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold capitalize">
        {tabName[tabName.length - 1].split("-").join(" ")}
      </h1>

      <div className="flex items-center gap-8 border-b-[1px]">
        {tabItems.map((item, index) => (
          <Link
            key={index}
            className={cn("hover:text-primary text-[16px] pb-2 ", {
              "border-b-2 border-primary text-primary": pathName === item.href,
            })}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyCoursesPageTab;
