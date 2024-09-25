import Container from "@/components/shared/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bookmark, BookOpen, Clock, MoveRight, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CoursesPage = () => {
  return (
    <Container large={true}>
      <div className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* card 1*/}
          <div className="border rounded-md flex flex-col">
            <div className="h-[200px] relative">
              <Image
                alt=""
                src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/07/727cdc3ce38fea1ac65bfd858c4fb450.jpg?w=1300&ssl=1"
                height={200}
                width={300}
                className="w-full h-full rounded-t-md"
              />
              <Button className="absolute top-5 right-5 rounded-full size-8 px-0 py-0 text-primary bg-white hover:text-white">
                <Bookmark className="size-4" />
              </Button>
            </div>

            <div className="p-5 border-b-[1px] space-y-4 grow flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-[15px] font-[500] hover:text-primary">
                  <Link href={"/courses/java-application-development"}>
                    Mastering PMP Exam with ChatGPT
                  </Link>
                </h3>

                <div className="flex items-center gap-8 my-2">
                  <p className="flex items-center gap-2 text-[14px] font-[400]">
                    <User className="size-4" />
                    <span>2</span>
                  </p>
                  <p className="flex items-center gap-2 text-[14px] font-[400]">
                    <Clock className="size-4" />
                    <span>22</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Avatar className="border">
                  <AvatarImage
                    src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/06/Untitled.jpg?resize=150%2C150&ssl=1"
                    alt="xpertbee"
                  />
                  <AvatarFallback>Xp</AvatarFallback>
                </Avatar>
                <p className="text-sm font-medium text-[#757C8E]">
                  By{" "}
                  <Link
                    href="#"
                    className="text-black hover:text-primary duration-200"
                  >
                    Xpertbee{" "}
                  </Link>
                  In{" "}
                  <Link
                    href="#"
                    className="text-black hover:text-primary duration-200"
                  >
                    Programming
                  </Link>
                </p>
              </div>
            </div>

            <div className="p-4 space-y-4">
              <p className="text-lg font-[700]">৳5,000.00</p>

              <Button
                variant="outline"
                className="px-6 mx-auto w-full bg-transparent border-primary"
              >
                Enroll Now <MoveRight className="ml-2 size-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CoursesPage;
