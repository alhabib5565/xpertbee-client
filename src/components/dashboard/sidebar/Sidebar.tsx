import Link from "next/link";
import React from "react";
import {
  instructorSidebarItems,
  studentSidebardItems,
  TSidebarItem,
} from "./sidebarItems";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Settings } from "lucide-react";

// TODO => Conditional sidebar items based on user role
const Sidebar = () => {
  return (
    <div className="border-r-2 py-6">
      <div className="grid grid-cols-1 gap-2 h-fit">
        {studentSidebardItems.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
        <hr />
        <h3 className="text-slate-600 px-4 text-lg font-medium">Instructor</h3>
        {instructorSidebarItems.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
        <hr />

        <MenuItem
          item={{
            name: "Settings",
            href: "/dashboard/settings",
            icon: Settings,
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;

const MenuItem = ({ item }: { item: TSidebarItem }) => {
  const pathName = usePathname();

  const isActive = (href: string) => {
    const extractPathName = pathName.split("/").slice(2).join("/");
    const extractHref = href.split("/").slice(2).join("/");

    return extractHref
      ? extractPathName.startsWith(extractHref)
      : pathName === href;
  };
  return (
    <Link
      className={cn(
        "px-4 py-2 hover:bg-[#FFF9EC] text-[16px] rounded-l-md flex gap-3 items-center",
        {
          "bg-primary text-white hover:bg-black": isActive(item.href),
        }
      )}
      href={`${item.href}`}
    >
      <item.icon
        className={cn("text-primary size-6", {
          "text-white": isActive(item.href),
        })}
      />{" "}
      {item.name}
    </Link>
  );
};
