"use client";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="lg:ml-[300px]">
        <div className="h-[68px] bg-white px-4 flex items-center text-lg pl-20 lg:pl-0">
          {" "}
          Wellcome to lms
        </div>
        <div className="p-4 bg-gray-100 min-h-[calc(100vh-68px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
