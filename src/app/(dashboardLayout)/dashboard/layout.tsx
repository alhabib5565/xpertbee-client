"use client";
import React from "react";
import Container from "@/components/shared/Container";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import DashboardHeader from "@/components/dashboard/DShared/DashboardHeader";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Container large={true} className="py-10">
      <DashboardHeader />
      <div className="border-t-2 grid grid-cols-1 md:grid-cols-4 gap-8">
        <Sidebar />
        <div className="md:col-span-3 py-6">{children}</div>
      </div>
    </Container>
  );
};

export default DashboardLayout;
