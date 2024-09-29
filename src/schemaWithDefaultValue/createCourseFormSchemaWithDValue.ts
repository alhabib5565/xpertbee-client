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
  courseTitle: "Mastering Docker",
  courseDescription:
    "An in-depth course on Docker for developers and DevOps professionals.",
  price: "20",
  maximumStudents: "50",
  difficultyLevel: "Intermediate",
  courseCategory: "Development",
  courseDuration: "4",
  durationUnit: "Hours",
  curriculum: [
    {
      moduleTitle: "Introduction to Docker",
      lessons: [
        {
          lessonTitle: "What is Docker?",
        },
        {
          lessonTitle: "Setting Up Docker",
        },
      ],
    },
    {
      moduleTitle: "Working with Containers",
      lessons: [
        {
          lessonTitle: "Creating Your First Container",
        },
        {
          lessonTitle: "Managing Containers",
        },
        {
          lessonTitle: "Docker Networking",
        },
      ],
    },
    {
      moduleTitle: "Docker Compose",
      lessons: [
        {
          lessonTitle: "Introduction to Docker Compose",
        },
        {
          lessonTitle: "Defining Multi-Container Applications",
        },
      ],
    },
  ],
  whatLearn: [
    "Understand the fundamentals of Docker",
    "Learn to create and manage containers",
    "Deploy applications using Docker Compose",
  ],
  targetedAudience: [
    "Developers looking to streamline their workflow",
    "DevOps professionals interested in containerization",
  ],
  materials: ["Access to course repository", "Supplemental reading materials"],
  requirements: [
    "Basic knowledge of software development",
    "Familiarity with command-line tools",
  ],
};

// export const createCourseFormDValue = {
//   //basic info
//   courseTitle: "Title",
//   courseDescription: "Description",
//   price: 10,
//   maximumStudents: 10,
//   difficultyLevel: "",
//   courseCategory: "",
//   courseDuration: 10,
//   durationUnit: "",

//   //course curriculum
//   curriculum: [
//     {
//       moduleTitle: "",
//       lessons: [
//         {
//           lessonTitle: "",
//         },
//       ],
//     },
//   ],

//   //Additional info
//   whatLearn: [""],
//   targetedAudience: [""],
//   materials: [""],
//   requirements: [""],
// };
