import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between flex-wrap items-end mb-10">
      <div className="flex items-center gap-4">
        <Avatar className="border h-[96px] w-[96px]">
          <AvatarImage
            // src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/06/Untitled.jpg?resize=150%2C150&ssl=1"
            alt="xpertbee"
          />
          <AvatarFallback className="bg-primary text-white text-xl font-semibold">
            Xp
          </AvatarFallback>
        </Avatar>
        <div className="text-sm  font-medium ">
          <p className="text-xl">Hello</p>
          <p className="text-2xl font-semibold">MD Al-Habib</p>
        </div>
      </div>
      <Button variant="outline">
        <User className="mr-2" /> Become an instructor
      </Button>
    </div>
  );
};

export default DashboardHeader;
