import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { BookOpen, CalendarDays, MoveRight, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FreeWebinar = () => {
  return (
    <div>
      <Container>
        <div className="pt-20">
          <h2 className="text-2xl font-[700] text-center mb-6">
            ফ্রি ওয়েবিনার দেখুন
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* card 1*/}
            <div className="border-primary border rounded-md bg-[#FDF5E5]">
              <div className="h-[200px] mb-6">
                <Image
                  alt=""
                  src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/07/Java-Application-Development_600x.jpg?w=600&ssl=1"
                  height={200}
                  width={300}
                  className="w-full h-full rounded-t-md"
                />
              </div>
              <div className="px-4">
                <p className="flex items-center gap-2 text-[12px] font-[600] text-primary">
                  <CalendarDays className="size-4" />
                  <span>বুধবার, ১৬ জুলাই, রাত ৮;০০</span>
                </p>

                <h3 className="text-xl font-[600] my-4">
                  <Link href={""}>SQA মাস্টারক্লাস</Link>
                </h3>

                <Button
                  variant="outline"
                  className="px-6 mx-auto bg-transparent border-primary mb-4"
                >
                  Enroll Now <MoveRight className="ml-2 size-6" />
                </Button>
              </div>
            </div>

            {/* card 2*/}
            <div className="border-primary border rounded-md bg-[#FDF5E5]">
              <div className="h-[200px] mb-6">
                <Image
                  alt=""
                  src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/07/seo.webp?resize=1536%2C806&ssl=1"
                  height={200}
                  width={300}
                  className="w-full h-full rounded-t-md"
                />
              </div>
              <div className="px-4">
                <p className="flex items-center gap-2 text-[12px] font-[600] text-primary">
                  <CalendarDays className="size-4" />
                  <span>বুধবার, ১৬ জুলাই, রাত ৮;০০</span>
                </p>

                <h3 className="text-xl font-[600] my-4">
                  <Link href={""}>Data Analysis</Link>
                </h3>

                <Button
                  variant="outline"
                  className="px-6 mx-auto bg-transparent border-primary mb-4"
                >
                  Enroll Now <MoveRight className="ml-2 size-6" />
                </Button>
              </div>
            </div>

            {/* card 3 */}
            <div className="border-primary border rounded-md bg-[#FDF5E5]">
              <div className="h-[200px] mb-6">
                <Image
                  alt=""
                  src="https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/07/Java-Application-Development_600x.jpg?w=600&ssl=1"
                  height={200}
                  width={300}
                  className="w-full h-full rounded-t-md"
                />
              </div>
              <div className="px-4">
                <p className="flex items-center gap-2 text-[12px] font-[600] text-primary">
                  <CalendarDays className="size-4" />
                  <span>বুধবার, ১৬ জুলাই, রাত ৮;০০</span>
                </p>

                <h3 className="text-xl font-[600] my-4">
                  <Link href={""}>ওয়েবসাইট With এআই</Link>
                </h3>

                <Button
                  variant="outline"
                  className="px-6 mx-auto bg-transparent border-primary mb-4"
                >
                  Enroll Now <MoveRight className="ml-2 size-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FreeWebinar;
