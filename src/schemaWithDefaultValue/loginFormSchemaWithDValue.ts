import { z } from "zod";

export const loginFormValidation = z.object({
  email: z
    .string({
      invalid_type_error: "Please provide a valid email",
      required_error: "Email is required",
    })
    .email(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
    }),
});

export const loginFormDefaultValue = {
  email: "",
  password: "",
};
