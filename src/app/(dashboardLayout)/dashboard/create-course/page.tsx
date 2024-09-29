"use client";
import AddCourseCurriculum from "@/components/dashboard/createCourse/AddCourseCurriculum";
import MyArrayInput from "@/components/from/MyArrayInput";
import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import MySelect from "@/components/from/MySelect";
import MyTextarea from "@/components/from/MyTextarea";
import { Button } from "@/components/ui/button";
import {
  createCourseFormDValue,
  createCourseFormValidation,
} from "@/schemaWithDefaultValue/createCourseFormSchemaWithDValue";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const difficultyLevelOptions = [
  {
    label: "Beginner",
    value: "Beginner",
  },
  {
    label: "Intermediate",
    value: "Intermediate",
  },
  {
    label: "Expert",
    value: "Expert",
  },
];
const courseCategoryOptions = [
  {
    label: "programming",
    value: "Programming",
  },
];

const durationUnitOptions = [
  {
    label: "Days",
    value: "Days",
  },
  {
    label: "Week",
    value: "Week",
  },
  {
    label: "Months",
    value: "Months",
  },
];

const CreateCoursePage = () => {
  const router = useRouter();
  const onSubmit = (value: FieldValues) => {
    console.log(value);
    toast.success("form submit successfull. see console!!");
    router.refresh();
  };
  return (
    <div>
      <MyForm
        onSubmit={onSubmit}
        defaultValues={createCourseFormDValue}
        resolver={zodResolver(createCourseFormValidation)}
      >
        <div className="grid grid-cols-1 gap-4">
          {/* Basic information section */}
          <div className="grid gap-4 border p-4 rounded-md">
            <h2 className="font-medium">Basic informations</h2>
            <hr />
            <MyInput name="courseTitle" label="Course Title" type="text" />

            <MyTextarea
              name="courseDescription"
              label="Course Description"
              rows={5}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <MyInput name="price" label="Price" type="number" />
              <MyInput
                name="maximumStudents"
                label="Maximum Students"
                type="number"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <MySelect
                isSuggestion={false}
                name="difficultyLevel"
                label="Difficulty Level"
                options={difficultyLevelOptions}
                placeholder="Select Difficulty Level"
              />
              <MySelect
                isSuggestion={false}
                name="courseCategory"
                label="Course Category"
                options={courseCategoryOptions}
                placeholder="Select Course Category"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <MyInput
                name="courseDuration"
                label="Total Course Duration"
                type="number"
              />
              <MySelect
                name="durationUnit"
                label="Course Duration Unit"
                isSuggestion={false}
                options={durationUnitOptions}
                placeholder="Select unit"
              />
            </div>
          </div>

          {/* Additional information section*/}
          <div className="grid gap-4 border p-4 rounded-md">
            <h2 className="font-medium">Additional informations</h2>
            <hr />
            <MyArrayInput name="whatLearn" label="What We Learn" type="text" />
            <MyArrayInput
              name="targetedAudience"
              label="Targeted Audience"
              type="text"
            />
            <MyArrayInput
              name="materials"
              label="Materials Included"
              type="text"
            />
            <MyArrayInput
              name="requirements"
              label="Requirements/Instructions"
              type="text"
            />
          </div>

          {/* Course Curriculum */}
          <div className="grid gap-4 border p-4 rounded-md">
            <h2 className="font-medium">Course Curriculum</h2>
            <hr />
            <AddCourseCurriculum />
          </div>
        </div>
        <div className="flex justify-end">
          <Button>Submit</Button>
        </div>
      </MyForm>
    </div>
  );
};

export default CreateCoursePage;
