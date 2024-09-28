"use client";
import SettingPageTab from "@/components/dashboard/settings/SettingPageTab";
import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { changePasswordFormValidation } from "@/schemaWithDefaultValue/changePasswordFormSchema";

const ResetPassword = () => {
  const onSubmit = (value: FieldValues) => {
    console.log(value);
    toast.success("Form submited. See console!!");
  };
  return (
    <div className="space-y-6">
      <SettingPageTab noData={true} />
      <MyForm
        //   defaultValues={}
        resolver={zodResolver(changePasswordFormValidation)}
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="space-y-4">
            <MyInput
              name="currentPassword"
              label="Current Password"
              type="password"
            />
            <MyInput name="newPassword" label="New Password" type="password" />
            <MyInput
              name="confirmPassword"
              label="Password confirmation"
              type="password"
            />
            <div className="flex justify-end">
              <Button>Change Password</Button>
            </div>
          </div>
        </div>
      </MyForm>
    </div>
  );
};

export default ResetPassword;
