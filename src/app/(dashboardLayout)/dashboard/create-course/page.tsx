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
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    label: "Programming",
    value: "Programming",
  },
  {
    label: "Development",
    value: "Development",
  },
];

const durationUnitOptions = [
  {
    label: "Hours",
    value: "Hours",
  },
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
  const [basicInfoOpen, setBasicInfoOpen] = useState(false);
  const [additionaInfoOpen, setAdditionaInfoOpen] = useState(false);
  const [curriculuInfoOpen, setCurriculuInfoOpen] = useState(false);

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
        <div className="grid grid-cols-1 gap-6">
          {/* Basic information section */}
          <motion.div layout className="border rounded-md">
            <motion.div
              layout
              className={cn(
                "p-4 flex justify-between border-b items-center max-h-20",
                { "border-b-0": !basicInfoOpen }
              )}
            >
              <h2 className="font-medium flex-1">Basic informations</h2>
              <Button
                onClick={() => setBasicInfoOpen(!basicInfoOpen)}
                type="button"
                className="size-8 p-0 rounded-full"
              >
                <ChevronDown />
              </Button>
            </motion.div>
            {basicInfoOpen && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-4 p-4"
              >
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
              </motion.div>
            )}
          </motion.div>

          {/* Additional information section */}
          <motion.div layout className="border rounded-md">
            <motion.div
              layout
              className={cn(
                "p-4 flex justify-between border-b items-center max-h-20",
                { "border-b-0": !additionaInfoOpen }
              )}
            >
              <h2 className="font-medium">Additional informations</h2>
              <Button
                onClick={() => setAdditionaInfoOpen(!additionaInfoOpen)}
                type="button"
                className="size-8 p-0 rounded-full"
              >
                <ChevronDown />
              </Button>
            </motion.div>
            {additionaInfoOpen && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-4 p-4"
              >
                <MyArrayInput
                  name="whatLearn"
                  label="What We Learn"
                  type="text"
                />
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
              </motion.div>
            )}
          </motion.div>

          {/* Course Curriculum */}
          <motion.div layout className="border rounded-md">
            <motion.div
              layout
              className={cn(
                "p-4 flex justify-between border-b items-center max-h-20",
                { "border-b-0": !curriculuInfoOpen }
              )}
            >
              <h2 className="font-medium">Course Curriculum</h2>
              <Button
                onClick={() => setCurriculuInfoOpen(!curriculuInfoOpen)}
                type="button"
                className="size-8 p-0 rounded-full"
              >
                <ChevronDown />
              </Button>
            </motion.div>
            {curriculuInfoOpen && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-4 p-4"
              >
                <AddCourseCurriculum />
              </motion.div>
            )}
          </motion.div>

          <div className="flex justify-end">
            <Button>Submit</Button>
          </div>
        </div>
      </MyForm>
    </div>
  );
};

export default CreateCoursePage;
