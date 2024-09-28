import React from "react";

const MyProfilePage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">My Profile</h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <p className="text-[16px]">Registration Date</p>
          <p className="text-[16px] font-medium">September 25, 2024 9:07 AM</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <p className="text-[16px]">First Name</p>
          <p className="text-[16px] font-medium">MD</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <p className="text-[16px]">Last Name</p>
          <p className="text-[16px] font-medium">Al-Habib</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <p className="text-[16px]">Username</p>
          <p className="text-[16px] font-medium">Habib</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <p className="text-[16px]">Email</p>
          <p className="text-[16px] font-medium">alhabib5565@gmail.com</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <p className="text-[16px]">Phone Number</p>
          <p className="text-[16px] font-medium">Not found</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <p className="text-[16px]">Skill/Occupation</p>
          <p className="text-[16px] font-medium">Not found</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <p className="text-[16px]">Biography</p>
          <p className="text-[16px] font-medium">Not found</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
