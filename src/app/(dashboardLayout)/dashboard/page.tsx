import { Button } from "@/components/ui/button";
import { BookOpen, CircleAlert, GraduationCap, Trophy } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardHome = () => {
  return (
    <div className="space-y-4">
      <div className="px-4 py-3 rounded-md border bg-white flex justify-between items-center">
        <span className="flex items-center gap-2">
          <CircleAlert className="text-primary size-5" />
          Set Your Profile Photo
        </span>
        <Button asChild>
          <Link href={"/dashboard/settings"}>Click Here</Link>
        </Button>
      </div>
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-md border py-6 md:py-8 bg-white flex flex-col gap-4 items-center">
          <span className="size-[60px] rounded-full bg-[#FFF9EC] text-primary grid place-items-center">
            <BookOpen />
          </span>
          <h1 className="text-3xl font-bold">0</h1>
          <span>Enrolled Courses</span>
        </div>
        <div className="rounded-md border py-6 md:py-8 bg-white flex flex-col gap-4 items-center">
          <span className="size-[60px] rounded-full bg-[#FFF9EC] text-primary grid place-items-center">
            <GraduationCap />
          </span>
          <h1 className="text-3xl font-bold">0</h1>
          <span>Active Courses</span>
        </div>
        <div className="rounded-md border py-6 md:py-8 bg-white flex flex-col gap-4 items-center">
          <span className="size-[60px] rounded-full bg-[#FFF9EC] text-primary grid place-items-center">
            <Trophy />
          </span>
          <h1 className="text-3xl font-bold">0</h1>
          <span>Completed Courses</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
