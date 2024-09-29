import { z } from "zod";

// validation schema
export const createCourseFormValidation = z.object({
  courseTitle: z.string({
    required_error: "Course title is required",
  }),
  courseDescription: z.string({
    required_error: "Course description is required",
  }),
  price: z
    .string({
      required_error: "Price is required",
    })
    .min(0, "Price must be a positive number"),
  maximumStudents: z
    .string({
      required_error: "Maximum students is required",
    })
    .min(1, "Maximum students must be at least 1"),
  difficultyLevel: z.string({
    required_error: "Please select a difficulty level",
  }),
  courseCategory: z.string({
    required_error: "Please select a course category",
  }),
  courseDuration: z
    .string({
      required_error: "Course duration is required",
    })
    .min(1, "Course duration must be at least 1"),
  durationUnit: z.string({
    required_error: "Please select a duration unit",
  }),

  // Curriculum section
  curriculum: z
    .array(
      z.object({
        moduleTitle: z.string().min(1, { message: "Module title is required" }),
        lessons: z
          .array(
            z.object({
              lessonTitle: z.string().min(1, {
                message: "Lesson title is required",
              }),
            })
          )
          .optional(),
      })
    )
    .min(1, { message: "At least one module is required" }),

  // Optional array fields
  whatLearn: z.array(z.string()).optional(),
  targetedAudience: z.array(z.string()).optional(),
  materials: z.array(z.string()).optional(),
  requirements: z.array(z.string()).optional(),
});

export const createCourseFormDValue = {
  //basic info
  courseTitle: "Title",
  courseDescription: "Description",
  price: 10,
  maximumStudents: 10,
  difficultyLevel: "",
  courseCategory: "",
  courseDuration: 10,
  durationUnit: "",

  //course curriculum
  curriculum: [
    {
      moduleTitle: "",
      lessons: [
        {
          lessonTitle: "",
        },
      ],
    },
  ],

  //Additional info
  whatLearn: [""],
  targetedAudience: [""],
  materials: [""],
  requirements: [""],
};
