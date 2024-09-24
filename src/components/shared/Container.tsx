import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
  className?: string;
  large?: boolean;
};

const Container = ({ children, className, large }: TContainer) => {
  return (
    <div
      className={cn("max-w-[1140px] mx-auto w-full px-4", className, {
        "max-w-[1320px]": large,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
