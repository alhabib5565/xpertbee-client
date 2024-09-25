import {
  Bookmark,
  GraduationCap,
  LayoutDashboard,
  Settings,
  Triangle,
  User,
} from "lucide-react";

export const sidebardItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },

  {
    name: "My Profile",
    href: "/my-profile",
    icon: User,
  },
  {
    name: "Enrolled Courses",
    href: "/enrolled-courses",
    icon: GraduationCap,
  },
  {
    name: "Wishlist",
    href: "/wishlist",
    icon: Bookmark,
  },
  {
    name: "My Quiz Attempts",
    href: "/my-quiz-attempts",
    icon: Triangle,
  },
];
