import Container from "@/components/shared/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bookmark,
  Clock,
  LockIcon,
  RefreshCcw,
  Share,
  Share2,
  Tally3,
  User,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import LoginModal from "@/components/shared/LoginModal";

type TParams = {
  params: { courseId: string };
  searchParams: {};
};

const CourseDetailsPage = ({ params }: TParams) => {
  return (
    <Container large={true} className="my-10">
      {/* headere section */}
      <div className="mb-11 space-y-4">
        <h1 className="text-2xl font-bold">Java – Application Development</h1>
        <div className="flex justify-between items-end flex-wrap text-[#757c8e] gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="border">
              <AvatarImage
                src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/06/Untitled.jpg?resize=150%2C150&ssl=1"
                alt="xpertbee"
              />
              <AvatarFallback>Xp</AvatarFallback>
            </Avatar>
            <p className="text-sm  font-medium space-x-4">
              <span>
                By{" "}
                <Link
                  href="#"
                  className="text-black hover:text-primary duration-200"
                >
                  Xpertbee
                </Link>
              </span>{" "}
              <span>
                Categories:{" "}
                <Link
                  href="#"
                  className="text-black hover:text-primary duration-200"
                >
                  Programming
                </Link>
              </span>
            </p>
          </div>
          <div className="text-[16px] flex gap-4">
            <button className="flex gap-2 items-center hover:text-primary duration-200">
              <Bookmark className="size-4" /> Wishlist
            </button>
            <button className="flex gap-2 items-center hover:text-primary duration-200">
              <Share2 className="size-4" /> Share
            </button>
          </div>
        </div>
      </div>

      {/* details section */}
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-10">
        {/* left */}
        <div className="lg:col-span-6">
          <Image
            height={470}
            width={500}
            className="w-full h-[250px] sm:h-[350px] md:h-[480px] "
            src="https://xpertbee.com/wp-content/uploads/2024/07/Blue-White-Modern-English-Course-Facebook-Cover_edited.jpg"
            alt=""
          />

          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-[700]">About Course</h2>
            <h1 className="text-[22px] leading-[35px] lg:text-[32px] lg:leading-[55px] font-[700]">
              “Java – Application Development” – আপনার ক্যারিয়ার গড়ার প্রথম
              ধাপ
            </h1>

            <p className="text-[16px] leading-[] py-2">
              নাঈম সবসময় একটি সফল সফটওয়্যার ডেভেলপার হওয়ার স্বপ্ন দেখত। সে
              জানত যে, সফটওয়্যার ইন্ডাস্ট্রিতে জাভার বিশাল চাহিদা রয়েছে।
              কিন্তু প্রযুক্তিগত জ্ঞানের অভাবে এবং কোথা থেকে শুরু করবে তা না
              জানার কারণে সে পিছিয়ে ছিল। একদিন তার এক বন্ধু তাকে “Java –
              Application Development” কোর্স সম্পর্কে জানায়। তার বন্ধু বলল, “এই
              কোর্সটি তোমাকে জাভা দিয়ে প্রফেশনাল সফটওয়্যার ডেভেলপমেন্টের
              সবকিছু শেখাবে। ” <br /> নাঈম ভাবল, “এটাই তো আমি খুঁজছিলাম!” সে
              তৎক্ষণাৎ কোর্সে নিবন্ধন করল এবং কিছুদিনের মধ্যেই তার প্রথম
              সফটওয়্যার তৈরি করল। এখন সে একটি সফল সফটওয়্যার ডেভেলপার হিসেবে
              তার ক্যারিয়ার শুরু করেছে এবং তার স্বপ্ন পূরণে এক ধাপ এগিয়ে গেছে।{" "}
              <br />
              আপনিও কি নাঈমের মতো একটি সফল সফটওয়্যার ডেভেলপার হতে চান কিন্তু
              কোথা থেকে শুরু করবেন জানেন না? “Java – Application Development”
              কোর্সটি ঠিক আপনার জন্য। এই কোর্সটি সবার জন্য তৈরি করা হয়েছে, যারা
              একদম শূন্য থেকে সফটওয়্যার তৈরি শিখতে চান।
            </p>

            {/* what we learn */}
            <div className="">
              <h2 className="text-2xl font-[700]">What Will You Learn?</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-[#212121]">
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP)
                </li>

                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  জাভা বেসিক্স
                </li>

                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  জাভা কালেকশন ফ্রেমওয়ার্ক
                </li>
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট
                </li>
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  মাল্টিথ্রেডিং এবং কনকারেন্সি
                </li>
              </ul>
            </div>

            {/* Course content */}

            <div className="space-y-4">
              <h2 className="text-xl font-[700]">Course Content</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {/* item 1 */}
                <AccordionItem value="item-1" className="border rounded-md">
                  <AccordionTrigger className="text-xl hover:bg-slate-100 px-4 font-[500] hover:no-underline hover:text-primary duration-200">
                    Java Application Development
                  </AccordionTrigger>
                  <AccordionContent className="flex justify-between items-center border-t-2 py-3 hover:bg-slate-100 px-4 text-[16px] text-[#757C8E] font-[400]">
                    <p className="flex items-center gap-2">
                      <Youtube className="size-5" />{" "}
                      <span>Introduction to java</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>7:00</span> <LockIcon className="size-5" />
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* item 2 */}
                <AccordionItem value="item-2" className="border rounded-md">
                  <AccordionTrigger className="text-xl hover:bg-slate-100 px-4 font-[500] hover:no-underline hover:text-primary duration-200">
                    Java Basics
                  </AccordionTrigger>
                  <AccordionContent className="flex justify-between items-center border-t-2 py-3 hover:bg-slate-100 px-4 text-[16px] text-[#757C8E] font-[400]">
                    <p className="flex items-center gap-2">
                      <Youtube className="size-5" />{" "}
                      <span>Variables and data types</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>3:00</span> <LockIcon className="size-5" />
                    </p>
                  </AccordionContent>
                  <AccordionContent className="flex justify-between items-center border-t-2 py-3 hover:bg-slate-100 px-4 text-[16px] text-[#757C8E] font-[400]">
                    <p className="flex items-center gap-2">
                      <Youtube className="size-5" />{" "}
                      <span>Operators and control statements</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>3:00</span> <LockIcon className="size-5" />
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="lg:col-span-3 space-y-6">
          {/* box 1 */}
          <div className=" rounded-md border hover:shadow-md duration-200">
            <div className="p-4 md:p-8 bg-slate-100">
              <h2 className="text-2xl font-bold">৳ 10.00</h2>
              <LoginModal />
            </div>
            <hr />
            <div className="p-4 md:p-8 space-y-4 text-[#757C8E]">
              <p className="flex items-center gap-2">
                <Tally3 className="size-5" />
                <span>Intermediate</span>
              </p>
              <p className="flex items-center gap-2">
                <User className="size-5" />
                <span>Variables and data types</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="size-5" />
                <span>10 hours Duration</span>
              </p>
              <p className="flex items-center gap-2">
                <RefreshCcw className="size-5" />
                <span>July 29, 2024 Last Updated</span>
              </p>
            </div>
          </div>
          {/* box2 */}
          <div className=" rounded-md border hover:shadow-md duration-200">
            <div className="p-4 md:p-8">
              <p className="font-medium mb-4">A course by</p>
              <div className="flex items-center gap-4">
                <Avatar className="border h-14 w-14">
                  <AvatarImage
                    src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/06/Untitled.jpg?resize=150%2C150&ssl=1"
                    alt="xpertbee"
                  />
                  <AvatarFallback>Xp</AvatarFallback>
                </Avatar>
                <div className="text-sm  font-medium space-y-1">
                  <Link
                    href="#"
                    className="text-black text-lg font-bold hover:text-primary duration-200"
                  >
                    Xpertbee
                  </Link>
                  <p className="text-[#757C8E]">Wordpress Developer</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="p-4 md:p-8 space-y-6 ">
              <div className="">
                <h2 className="text-2xl font-[700]">Material Includes</h2>
                <ul className="space-y-3 mt-3 text-[#212121]">
                  <li className="text-[16px] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                    Class Recording
                  </li>
                  <li className="text-[16px] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                    Class Doc & PDF
                  </li>
                  <li className="text-[16px] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                    Class Code Snippet
                  </li>
                  <li className="text-[16px] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                    Problem Solving Class
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="text-2xl font-[700]">Requirements</h2>
                <ul className="space-y-3 mt-3 text-[#212121]">
                  <li className="text-[16px] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                    Laptop/Desktop
                  </li>
                  <li className="text-[16px] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                    Internet Connection
                  </li>
                  <li className="text-[16px] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                    Basic Coding Knowledge
                  </li>
                </ul>
              </div>
              <div className="">
                <h2 className="text-2xl font-[700]">Audience</h2>
                <ul className="space-y-3 mt-3 text-[#212121]">
                  <li className="text-[16px] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                    Student
                  </li>

                  <li className="text-[16px] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                    Freelancer
                  </li>
                  <li className="text-[16px] flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                    Anyone Interested
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CourseDetailsPage;
