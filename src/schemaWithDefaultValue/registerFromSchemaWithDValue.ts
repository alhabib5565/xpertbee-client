import { z } from "zod";

export const registerFormValidation = z
  .object({
    firstName: z
      .string({
        required_error: "First Name is required.",
      })
      .min(2, "First Name must be at least 2 characters long.")
      .max(50, "First Name must be less than 50 characters long."),
    lastName: z
      .string({ required_error: "Last Name is required." })
      .min(2, "Last Name must be at least 2 characters long.")
      .max(50, "Last Name must be less than 50 characters long."),
    bio: z.string().optional(),
    email: z
      .string({ required_error: "Email is required." })
      .email("Please provide a valid email address."),
    password: z
      .string({ required_error: "Password is required." })
      .min(6, "Password must be at least 6 characters long."),
    confirmPassword: z.string({
      required_error: "Password confirmation is required.",
    }),
  })
  .refine((data) => data.confirmPassword === data.password, {
    path: ["confirmPassword"],
    message: "Passwords must match.",
  });
