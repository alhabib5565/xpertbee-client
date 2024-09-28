"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import React from "react";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import MySelect from "@/components/from/MySelect";
import { publishAnnouncementFormSchema } from "@/schemaWithDefaultValue/publishAnnouncementFormSchema";
import MyTextarea from "@/components/from/MyTextarea";

const courseOptions = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
];

const PublishAnnouncementModal = () => {
  const onSubmit = (value: FieldValues) => {
    console.log(value);
    toast.success("Form submited. See console!!");
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Announcement</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Announcement</DialogTitle>
          </DialogHeader>
          <MyForm
            //   defaultValues={}
            resolver={zodResolver(publishAnnouncementFormSchema)}
            onSubmit={onSubmit}
          >
            <div className="grid grid-cols-1 gap-4">
              <MySelect
                label="Select Course"
                name="course"
                placeholder="Select course"
                options={courseOptions}
              />
              <MyInput
                name="announcementTitle"
                label="Announcement Title"
                type="text"
              />
              <MyTextarea name="summary" label="Summary" rows={5} />
              <div className="flex justify-end">
                <Button>Publish</Button>
              </div>
            </div>
          </MyForm>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PublishAnnouncementModal;
