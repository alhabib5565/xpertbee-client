import {
  Bookmark,
  GraduationCap,
  LayoutDashboard,
  LucideProps,
  Podcast,
  Rocket,
  Settings,
  ShieldQuestion,
  ShoppingCart,
  Triangle,
  User,
  WalletCards,
} from "lucide-react";

export type TSidebarItem = {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};
export const studentSidebardItems = [
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
];

export const instructorSidebarItems = [
  {
    name: "My Courses",
    href: "/dashboard/my-courses",
    icon: Rocket,
  },
  {
    name: "Announcements",
    href: "/dashboard/announcements",
    icon: Podcast,
  },
  {
    name: "Withdraw",
    href: "/dashboard/withdraw",
    icon: WalletCards,
  },
  {
    name: "Quiz Attempts",
    href: "/dashboard/quiz-attempts",
    icon: Triangle,
  },
];
