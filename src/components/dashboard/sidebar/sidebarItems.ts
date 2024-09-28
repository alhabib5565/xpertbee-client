import {
  Bookmark,
  GraduationCap,
  LayoutDashboard,
  Settings,
  ShieldQuestion,
  ShoppingCart,
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
    name: "My Profile",
    href: "/dashboard/my-profile",
    icon: User,
  },
  {
    name: "Enrolled Courses",
    href: "/dashboard/enrolled-courses",
    icon: GraduationCap,
  },
  {
    name: "Wishlist",
    href: "/dashboard/wishlist",
    icon: Bookmark,
  },
  {
    name: "My Quiz Attempts",
    href: "/dashboard/my-quiz-attempts",
    icon: Triangle,
  },
  {
    name: "Purchase History",
    href: "/dashboard/purchase-history",
    icon: ShoppingCart,
  },
  {
    name: "Question Answer",
    href: "/dashboard/question-answer",
    icon: ShieldQuestion,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
