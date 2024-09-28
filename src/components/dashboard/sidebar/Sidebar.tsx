import Link from "next/link";
import React from "react";
import { sidebardItems } from "./sidebarItems";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  const isActive = (href: string) => {
    const extractPathName = pathName.split("/").slice(2).join("/");
    const extractHref = href.split("/").slice(2).join("/");

    return extractHref
      ? extractPathName.startsWith(extractHref)
      : pathName === href;
  };
  return (
    <div className="border-r-2 py-6">
      <div className="grid grid-cols-1 gap-2 h-fit">
        {sidebardItems.map((item, index) => (
          <Link
            className={cn(
              "px-4 py-2 hover:bg-[#FFF9EC] text-[16px] rounded-l-md flex gap-3 items-center",
              {
                "bg-primary text-white hover:bg-black": isActive(item.href),
              }
            )}
            href={`${item.href}`}
            key={index}
          >
            <item.icon
              className={cn("text-primary size-6", {
                "text-white": isActive(item.href),
              })}
            />{" "}
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
