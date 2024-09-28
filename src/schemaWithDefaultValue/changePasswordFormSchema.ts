import { z } from "zod";

export const changePasswordFormValidation = z
  .object({
    currentPassword: z
      .string({ required_error: "Password is required." })
      .min(6, "Password must be at least 6 characters long."),
    newPassword: z
      .string({ required_error: "Password is required." })
      .min(6, "Password must be at least 6 characters long."),
    confirmPassword: z.string({
      required_error: "Password confirmation is required.",
    }),
  })
  .refine((data) => data.confirmPassword === data.newPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match.",
  });
