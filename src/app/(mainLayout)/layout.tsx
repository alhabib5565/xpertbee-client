import Navbar from "@/components/shared/navbar/Navbar";
import { cn, poppins } from "@/lib/utils";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn(poppins.className, "text-[#1f2732]")}>
      <Navbar /> <div className="pt-[57px]">{children}</div>
    </div>
  );
}
