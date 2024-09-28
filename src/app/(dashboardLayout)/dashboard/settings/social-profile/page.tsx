"use client";
import SettingPageTab from "@/components/dashboard/settings/SettingPageTab";
import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import { Button } from "@/components/ui/button";
import React from "react";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { socialProfileFromValidationSchema } from "@/schemaWithDefaultValue/socialProfileFromSchema";

const SocialProfile = () => {
  const onSubmit = (value: FieldValues) => {
    console.log(value);
    toast.success("Form submited. See console!!");
  };
  return (
    <div className="space-y-6">
      <SettingPageTab noData={true} />
      <MyForm
        //   defaultValues={}
        resolver={zodResolver(socialProfileFromValidationSchema)}
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-1 gap-4">
          <MyInput
            isGrid={true}
            name="facebook"
            label="Facebook"
            placeholder="https://facebook.com/username"
            type="text"
          />
          <MyInput
            isGrid={true}
            name="twitter"
            label="Twitter"
            placeholder="https://twitter.com/username"
            type="text"
          />
          <MyInput
            isGrid={true}
            name="linkedin"
            label="Linkedin"
            placeholder="https://linkedin.com/username"
            type="text"
          />
          <MyInput
            isGrid={true}
            name="website"
            label="Website"
            placeholder="https://example.com"
            type="text"
          />
          <MyInput
            isGrid={true}
            name="github"
            label="GitHub"
            placeholder="https://github.com/username"
            type="text"
          />
          <div className="flex justify-end mt-4">
            <Button>Update Profile</Button>
          </div>
        </div>
      </MyForm>
    </div>
  );
};

export default SocialProfile;
