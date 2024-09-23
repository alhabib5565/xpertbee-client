import { type ClassValue, clsx } from "clsx";
import { Poppins, Roboto } from "next/font/google";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});
