import { cn, poppins } from "@/lib/utils";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn(poppins.className, "text-[#0F0B18]")}>
      <div className="pt-[57px]">{children}</div>
    </div>
  );
}
