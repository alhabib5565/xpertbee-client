"use client";
import SettingPageTab from "@/components/dashboard/settings/SettingPageTab";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera } from "lucide-react";
import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const SettingsPage = () => {
  const onSubmit = (value: FieldValues) => {
    console.log(value);
    toast.success("Form submited. See console!!");
  };
  return (
    <div className="space-y-6">
      <SettingPageTab noData={true} />
      <div>
        <div>
          <div className="h-[300px] rounded-md overflow-hidden relative">
            <Image
              src={"https://i.ibb.co.com/nj4hDh3/hero.webp"}
              alt=""
              width={800}
              height={200}
              className="w-full h-full"
            />
            <Button className="absolute bottom-5 right-5">
              <Camera className="mr-2" /> Update Photo
            </Button>
          </div>
          <div className="flex justify-between">
            <Avatar className="border h-[150px] w-[150px] -mt-24 ml-6">
              <AvatarImage
                src={"https://i.ibb.co.com/GpRVv1s/nazmulas.jpg"}
                alt="xpertbee"
              />
              <AvatarFallback>Xp</AvatarFallback>
            </Avatar>
            <span className="pt-2 text-sm text-slate-500">
              Profile Photo Size: 200x200 pixels Cover Photo Size: 700x430
              pixels
            </span>
          </div>
        </div>
        <div className="mt-8">
          <MyForm
            // resolver={zodResolver()}
            onSubmit={onSubmit}
          >
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
              <MyInput name="firstName" label="First Name" type="text" />
              <MyInput name="lastName" label="Last Name" type="text" />
              <MyInput name="userName" label="Username" type="email" />
              <MyInput name="phoneNumber" label="PhoneNumber" type="text" />
              <MyInput
                name="skillOrOccupation"
                label="Skill/Occupation"
                type="text"
              />
              <MyInput
                name="publicName "
                label="Display name publicly as"
                type="text"
              />
            </div>
            <div className="flex justify-end mt-6">
              <Button>Update</Button>
            </div>
          </MyForm>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
