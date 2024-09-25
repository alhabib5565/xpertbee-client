"use client";

import { usePathname } from "next/navigation";
import React from "react";

const PageHeader = () => {
  const pathName = usePathname();
  const splited = pathName.split("/");
  const pageName = splited[splited.length - 1].split("-").join(" ");
  return (
    <div
      className="relative h-[150px] bg-cover bg-center w-full mb-10"
      style={{
        backgroundImage: `url(https://i0.wp.com/xpertbee.com/wp-content/uploads/2024/06/digital-marketing-guide-thankyou-header-background-image-1.jpg?fit=1920%2C480&ssl=1)`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20 grid place-items-center">
        <h1 className="text-3xl text-white capitalize text-wrap mb-6">
          {pageName}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
