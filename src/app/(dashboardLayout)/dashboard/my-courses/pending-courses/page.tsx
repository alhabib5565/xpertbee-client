import MyTab from "@/components/dashboard/DShared/MyTab";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, EllipsisVertical, LucideTrash } from "lucide-react";
import Link from "next/link";
import React from "react";
import { myCourseTabItems } from "../page";
import Image from "next/image";

const PendingCoursesPage = () => {
  return (
    <div className="space-y-6">
      <MyTab tabItems={myCourseTabItems} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* card 1*/}
        <div className="border rounded-md flex flex-col">
          <div className="h-[200px]">
            <Image
              alt=""
              src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/07/727cdc3ce38fea1ac65bfd858c4fb450.jpg?w=1300&ssl=1"
              height={200}
              width={300}
              className="w-full h-full rounded-t-md"
            />
          </div>

          <div className="p-5 border-b-[1px] space-y-4 grow flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-[#757C8E] gap-2 text-[14px] font-[400]">
                September 28, 2024 4:36 AM
              </p>
              <h3 className="text-[15px] font-[500] hover:text-primary">
                <Link href={"/courses/java-application-development"}>
                  Mastering PMP Exam with ChatGPT
                </Link>
              </h3>
            </div>
          </div>

          <div className="p-4 flex justify-between items-center gap-2">
            <p className="text-[#757C8E] grow gap-2 text-[14px] font-[400]">
              Price: <b>Free</b>
            </p>
            <Button
              variant="ghost"
              className=" bg-transparent border-primary size-8 rounded-full p-1"
            >
              <Edit className=" size-5" />
            </Button>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="size-8 rounded-full p-1">
                    <EllipsisVertical className="size-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 p-2 space-y-1">
                  <DropdownMenuItem className="cursor-pointer">
                    <LucideTrash className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingCoursesPage;
