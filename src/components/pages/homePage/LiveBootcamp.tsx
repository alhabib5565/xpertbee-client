import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import {
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  Clock,
  Disc2,
  Infinity,
  MoveRight,
  Newspaper,
  Speech,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LiveBootcamp = () => {
  return (
    <Container>
      <div className="pt-20">
        <h2 className="text-2xl font-[700] text-center mb-6">Live Bootcamp</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* card 1*/}
          <div className="border-primary border rounded-md bg-[#FDF5E5]">
            <div className="h-[200px] mb-4">
              <Image
                alt=""
                src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/07/Blue-White-Modern-English-Course-Facebook-Cover_edited.jpg?w=600&ssl=1"
                height={200}
                width={300}
                className="w-full h-full rounded-t-md"
              />
            </div>
            <div className="px-2">
              <h3 className="text-lg font-[500] my-2">
                <Link href={"/live-bootcamps/java-application-development"}>
                  Java Development with React JS
                </Link>
              </h3>

              <div className="flex justify-center gap-8 my-4">
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <Bell className="size-4" />
                  <span>Live Course</span>
                </p>
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <CalendarDays className="size-4" />
                  <span>6 Months</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <BriefcaseBusiness className="h-[14px] w-[14px] text-primary" />
                  <span>100% Job Assurance</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Newspaper className="h-[14px] w-[14px] text-primary" />
                  <span>Weekly Test</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Infinity className="h-[14px] w-[14px] text-primary" />
                  <span>Unlimited Interview</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Newspaper className="h-[14px] w-[14px] text-primary" />
                  <span>Project Assignment</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Speech className="h-[14px] w-[14px] text-primary" />
                  <span>Mock Interview</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Disc2 className="h-[14px] w-[14px] text-primary" />
                  <span>Class Recording</span>
                </p>
              </div>

              <div className="flex justify-center gap-8 my-4">
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <span>Batch #1</span>
                </p>
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <User className="size-4" />
                  <span>100 Sets</span>
                </p>
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <Clock className="size-4" />
                  <span>16th September</span>
                </p>
              </div>

              <div className="flex justify-center my-2">
                <Button className="px-6 w-[70%] mx-auto">
                  বিস্তারিত দেখি <MoveRight className="ml-2 size-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="border-primary border rounded-md bg-[#FDF5E5]">
            <div className="h-[200px] mb-4">
              <Image
                alt=""
                src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/07/Laravel.jpg?resize=1536%2C864&ssl=1"
                height={200}
                width={300}
                className="w-full h-full rounded-t-md"
              />
            </div>
            <div className="px-2">
              <h3 className="text-lg font-[500] my-2">
                <Link href={"/live-bootcamps/java-application-development"}>
                  Laravel Beginner Course
                </Link>
              </h3>

              <div className="flex justify-center gap-8 my-4">
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <Bell className="size-4" />
                  <span>Live Course</span>
                </p>
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <CalendarDays className="size-4" />
                  <span>6 Months</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <BriefcaseBusiness className="h-[14px] w-[14px] text-primary" />
                  <span>100% Job Assurance</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Newspaper className="h-[14px] w-[14px] text-primary" />
                  <span>Weekly Test</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Infinity className="h-[14px] w-[14px] text-primary" />
                  <span>Unlimited Interview</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Newspaper className="h-[14px] w-[14px] text-primary" />
                  <span>Project Assignment</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Speech className="h-[14px] w-[14px] text-primary" />
                  <span>Mock Interview</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Disc2 className="h-[14px] w-[14px] text-primary" />
                  <span>Class Recording</span>
                </p>
              </div>

              <div className="flex justify-center gap-8 my-4">
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <span>Batch #1</span>
                </p>
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <User className="size-4" />
                  <span>100 Sets</span>
                </p>
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <Clock className="size-4" />
                  <span>16th September</span>
                </p>
              </div>

              <div className="flex justify-center my-2">
                <Button className="px-6 w-[70%] mx-auto">
                  বিস্তারিত দেখি <MoveRight className="ml-2 size-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="border-primary border rounded-md bg-[#FDF5E5]">
            <div className="h-[200px] mb-4">
              <Image
                alt=""
                src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/07/app.jpg?resize=1536%2C864&ssl=1"
                height={200}
                width={300}
                className="w-full h-full rounded-t-md"
              />
            </div>
            <div className="px-2">
              <h3 className="text-lg font-[500] my-2">
                <Link href={"/live-bootcamps/java-application-development"}>
                  Android & iOS App Development{" "}
                </Link>
              </h3>

              <div className="flex justify-center gap-8 my-4">
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <Bell className="size-4" />
                  <span>Live Course</span>
                </p>
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <CalendarDays className="size-4" />
                  <span>6 Months</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <BriefcaseBusiness className="h-[14px] w-[14px] text-primary" />
                  <span>100% Job Assurance</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Newspaper className="h-[14px] w-[14px] text-primary" />
                  <span>Weekly Test</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Infinity className="h-[14px] w-[14px] text-primary" />
                  <span>Unlimited Interview</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Newspaper className="h-[14px] w-[14px] text-primary" />
                  <span>Project Assignment</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Speech className="h-[14px] w-[14px] text-primary" />
                  <span>Mock Interview</span>
                </p>
                <p className="flex items-center gap-2 text-[11px] font-[400]">
                  <Disc2 className="h-[14px] w-[14px] text-primary" />
                  <span>Class Recording</span>
                </p>
              </div>

              <div className="flex justify-center gap-8 my-4">
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <span>Batch #1</span>
                </p>
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <User className="size-4" />
                  <span>100 Sets</span>
                </p>
                <p className="flex items-center gap-2 text-[12px] font-[600]">
                  <Clock className="size-4" />
                  <span>16th September</span>
                </p>
              </div>

              <div className="flex justify-center my-2">
                <Button className="px-6 w-[70%] mx-auto">
                  বিস্তারিত দেখি <MoveRight className="ml-2 size-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LiveBootcamp;
