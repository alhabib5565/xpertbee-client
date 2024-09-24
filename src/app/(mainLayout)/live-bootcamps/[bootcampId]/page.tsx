import Container from "@/components/shared/Container";

import Image from "next/image";

type TParams = {
  params: { bootcampId: string };
  searchParams: {};
};

const BootcampDetailsPage = ({ params }: TParams) => {
  return (
    <Container className="my-10">
      {/* headere section */}
      <div className="mb-11 space-y-4">
        <h1 className="text-2xl lg:text-5xl font-bold mb-7">
          Java – Application Development
        </h1>
        <p className="text-primary text-4xl font-semibold">
          আপনার ক্যারিয়ার গড়ার প্রথম ধাপ
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-4">
          <Image
            height={470}
            width={500}
            className="w-full h-[250px] sm:h-[350px] md:h-[480px] mb-10"
            src="https://xpertbee.com/wp-content/uploads/2024/07/Blue-White-Modern-English-Course-Facebook-Cover_edited.jpg"
            alt=""
          />
          <p className="text-[16px] leading-[30px]">
            নাঈম সবসময় একটি সফল সফটওয়্যার ডেভেলপার হওয়ার স্বপ্ন দেখত। সে জানত
            যে, সফটওয়্যার ইন্ডাস্ট্রিতে জাভার বিশাল চাহিদা রয়েছে। কিন্তু
            প্রযুক্তিগত জ্ঞানের অভাবে এবং কোথা থেকে শুরু করবে তা না জানার কারণে
            সে পিছিয়ে ছিল। একদিন তার এক বন্ধু তাকে “Java – Application
            Development” কোর্স সম্পর্কে জানায়। তার বন্ধু বলল, “এই কোর্সটি
            তোমাকে জাভা দিয়ে প্রফেশনাল সফটওয়্যার ডেভেলপমেন্টের সবকিছু শেখাবে।”
          </p>
          <p className="text-[16px] leading-[30px]">
            নাঈম ভাবল, “এটাই তো আমি খুঁজছিলাম!” সে তৎক্ষণাৎ কোর্সে নিবন্ধন করল
            এবং কিছুদিনের মধ্যেই তার প্রথম সফটওয়্যার তৈরি করল। এখন সে একটি সফল
            সফটওয়্যার ডেভেলপার হিসেবে তার ক্যারিয়ার শুরু করেছে এবং তার স্বপ্ন
            পূরণে এক ধাপ এগিয়ে গেছে।
          </p>
          <p className="text-[16px] leading-[30px]">
            আপনিও কি নাঈমের মতো একটি সফল সফটওয়্যার ডেভেলপার হতে চান কিন্তু কোথা
            থেকে শুরু করবেন জানেন না? “Java – Application Development” কোর্সটি
            ঠিক আপনার জন্য। এই কোর্সটি সবার জন্য তৈরি করা হয়েছে, যারা একদম
            শূন্য থেকে সফটওয়্যার তৈরি শিখতে চান।
          </p>
          <p>
            <strong>আমাদের কোর্সের মূল বৈশিষ্ট্য:</strong>
          </p>
          <ul>
            <li className="text-[16px] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
              <strong>শূন্য থেকে শুরু:</strong> একদম বেসিক থেকে শুরু করে ধাপে
              ধাপে সফটওয়্যার তৈরি শেখানো হয়।
            </li>
            <li className="text-[16px] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
              <strong>হ্যান্ডস-অন লার্নিং:</strong> প্রতিটি ক্লাসে
              প্র্যাকটিক্যাল প্রজেক্ট থাকবে, যা আপনাকে বাস্তব জ্ঞান দিবে।
            </li>
            <li className="text-[16px] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
              <strong>Expert Instructors:</strong> অভিজ্ঞ ইন্সট্রাক্টর দ্বারা
              পরিচালিত।
            </li>
          </ul>
          <p className="text-[16px] leading-[30px]">
            সফলতার প্রথম ধাপ হলো প্রথম পদক্ষেপ নেয়া। এই কোর্সটি আপনার সেই প্রথম
            পদক্ষেপ হতে পারে। আপনি যদি একটি প্রফেশনাল সফটওয়্যার ডেভেলপার হতে
            চান, তাহলে আজই এই কোর্সে নিবন্ধন করুন। আসন সংখ্যা সীমিত, তাই দেরি
            করবেন না!
          </p>
          <p className="text-lg font-[600] text-primary leading-[30px]">
            এই কোর্সটি সবার জন্য তৈরি করা হয়েছে, যারা সফটওয়্যার তৈরি করতে চান।
            আপনি যদি শিক্ষার্থী হন, ব্যবসায়ী হন, অথবা শুধু নিজের জন্য একটি
            প্রজেক্ট তৈরি করতে চান, এই কোর্সটি আপনার জন্য উপযুক্ত।
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold pt-4">
            কোর্স আউটলাইন: “Java – Application Development”
          </h1>
          <div className="space-y-2">
            <h4 className="text-2xl font-[800]">Week 1:</h4>
            <div>
              <b>Day 1 (Saturday): Introduction to Java</b>
              <ul>
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  <span>History and features of Java</span>
                </li>
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  <span>Setting up Java development environment</span>
                </li>
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  <span>Writing your first Java program</span>
                </li>
              </ul>
            </div>

            <div>
              <b>Day 2 (Sunday): Java Basics</b>
              <ul>
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  <span>Variables and data types</span>
                </li>
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  <span>Operators and control statements</span>
                </li>
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  <span>Arrays and strings</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-2xl font-[800]">Week 1:</h4>
            <div>
              <b>Day 1 (Saturday): Introduction to Java</b>
              <ul>
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  <span>History and features of Java</span>
                </li>
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  <span>Setting up Java development environment</span>
                </li>
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  <span>Writing your first Java program</span>
                </li>
              </ul>
            </div>

            <div>
              <b>Day 2 (Sunday): Java Basics</b>
              <ul>
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  <span>Variables and data types</span>
                </li>
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  <span>Operators and control statements</span>
                </li>
                <li className="text-[16px] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                  <span>Arrays and strings</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3>
              <b>কোর্স ল্যান্ডিং পেজ</b>
            </h3>
            <h4>
              <b>Header:</b>
            </h4>
            <ul>
              <li className="text-[16px] flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                <b>Course Title:</b>
                <span> Java – Application Development</span>
              </li>
              <li className="text-[16px] flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#757c8e]"></span>
                <b>Tagline:</b>
                <span>
                  {" "}
                  শূন্য থেকে প্রফেশনাল সফটওয়্যার ডেভেলপার হয়ে উঠুন!
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BootcampDetailsPage;
