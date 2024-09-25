import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const WantToBeInstructor = () => {
  return (
    <div className="mt-20 bg-[#F9E2B4] py-10">
      <Container>
        <div className="bg-white rounded-md p-4 lg:2 lg:mx-auto lg:w-[70%] flex flex-col lg:flex-row gap-8 lg:items-center">
          <div className="flex-1 space-y-4 text-center">
            <p className="text-2xl font-semibold">Want To Be an Instructor?</p>
            <Button variant="outline" className="">
              Learn More <MoveRight className="ml-2" />
            </Button>
          </div>
          <div className="flex-1 h-[300px]">
            <Image
              width={300}
              height={300}
              className="w-full h-full max-h-[300px]"
              alt=""
              src={
                "https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/07/Screenshot-2024-07-03-at-00-30-19-263a8149ee94b0324f3cd4a41d81a845-JPEG-Image-3553-%C3%97-2000-pixels-%E2%80%94-Scaled-36.png?w=533&ssl=1"
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WantToBeInstructor;
