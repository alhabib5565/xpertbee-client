import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { BookOpen, MoveRight, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CoursesPage = () => {
  return (
    <Container>
      <div className="pt-20">
        <h2 className="text-2xl font-[700] text-center mb-6">Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* card 1*/}
          <div className="border-primary border rounded-md bg-[#FDF5E5]">
            <div className="h-[200px] mb-6">
              <Image
                alt=""
                src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/07/727cdc3ce38fea1ac65bfd858c4fb450.jpg?w=1300&ssl=1"
                height={200}
                width={300}
                className="w-full h-full rounded-t-md"
              />
            </div>
            <div className="px-4">
              <div className="flex justify-between items-center gap-8 my-4">
                <Button size={"sm"}>Beginner</Button>
                <p className="text-lg font-[700] text-primary">৳5,000.00</p>
              </div>

              <h3 className="text-lg font-[500] my-2">
                <Link href={"/courses/java-application-development"}>
                  Starting SEO as your Home Based Business
                </Link>
              </h3>

              <div className="flex justify-between items-center gap-8 my-2">
                <p className="flex items-center gap-2 text-[14px] font-[400]">
                  <BookOpen className="size-4 text-primary" />
                  <span>11 Lesson</span>
                </p>
                <p className="flex items-center gap-2 text-[14px] font-[400]">
                  <User className="size-4 text-primary" />
                  <span>200 Students</span>
                </p>
              </div>
            </div>
            <hr className="border-[0.5px] border-primary mt-2" />
            <Button
              variant="outline"
              className="px-6 mx-auto m-4 bg-transparent border-primary"
            >
              Enroll Now <MoveRight className="ml-2 size-6" />
            </Button>
          </div>

          {/* card 2*/}
          <div className="border-primary border rounded-md bg-[#FDF5E5]">
            <div className="h-[200px] mb-6">
              <Image
                alt=""
                src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/07/d994e549048c23a592ed913af9701487.png?w=760&ssl=1"
                height={200}
                width={300}
                className="w-full h-full rounded-t-md"
              />
            </div>
            <div className="px-4">
              <div className="flex justify-between items-center gap-8 my-4">
                <Button size={"sm"}>Beginner</Button>
                <p className="text-lg font-[700] text-primary">৳5,000.00</p>
              </div>

              <h3 className="text-lg font-[500] my-2">
                <Link href={"/courses/java-application-development"}>
                  Starting Digital Marketing as your Home Based Business
                </Link>
              </h3>

              <div className="flex justify-between items-center gap-8 my-2">
                <p className="flex items-center gap-2 text-[14px] font-[400]">
                  <BookOpen className="size-4 text-primary" />
                  <span>11 Lesson</span>
                </p>
                <p className="flex items-center gap-2 text-[14px] font-[400]">
                  <User className="size-4 text-primary" />
                  <span>200 Students</span>
                </p>
              </div>
            </div>
            <hr className="border-[0.5px] border-primary mt-2" />
            <Button
              variant="outline"
              className="px-6 mx-auto m-4 bg-transparent border-primary"
            >
              Enroll Now <MoveRight className="ml-2 size-6" />
            </Button>
          </div>

          {/* card 3*/}
          <div className="border-primary border rounded-md bg-[#FDF5E5]">
            <div className="h-[200px] mb-6">
              <Image
                alt=""
                src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/07/3f42c7999cb4d4ece609220aa3c7f6de.jpg?resize=1536%2C768&ssl=1"
                height={200}
                width={300}
                className="w-full h-full rounded-t-md"
              />
            </div>
            <div className="px-4">
              <div className="flex justify-between items-center gap-8 my-4">
                <Button size={"sm"}>Beginner</Button>
                <p className="text-lg font-[700] text-primary">৳5,000.00</p>
              </div>

              <h3 className="text-lg font-[500] my-2">
                <Link href={"/courses/java-application-development"}>
                  Start learning Content Writing For Your Business
                </Link>
              </h3>

              <div className="flex justify-between items-center gap-8 my-2">
                <p className="flex items-center gap-2 text-[14px] font-[400]">
                  <BookOpen className="size-4 text-primary" />
                  <span>11 Lesson</span>
                </p>
                <p className="flex items-center gap-2 text-[14px] font-[400]">
                  <User className="size-4 text-primary" />
                  <span>200 Students</span>
                </p>
              </div>
            </div>
            <hr className="border-[0.5px] border-primary mt-2" />
            <Button
              variant="outline"
              className="px-6 mx-auto m-4 bg-transparent border-primary"
            >
              Enroll Now <MoveRight className="ml-2 size-6" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CoursesPage;
