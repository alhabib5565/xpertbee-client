import { z } from "zod";

export const socialProfileFromValidationSchema = z.object({
  facebook: z
    .string()
    .optional()
    .refine((value) => !value || value.startsWith("https://facebook.com/"), {
      message:
        "Must be a valid Facebook URL (e.g., https://facebook.com/username)",
    }),
  twitter: z
    .string()
    .optional()
    .refine((value) => !value || value.startsWith("https://twitter.com/"), {
      message:
        "Must be a valid Twitter URL (e.g., https://twitter.com/username)",
    }),
  linkedin: z
    .string()
    .optional()
    .refine((value) => !value || value.startsWith("https://linkedin.com/"), {
      message:
        "Must be a valid LinkedIn URL (e.g., https://linkedin.com/username)",
    }),
  website: z
    .string()
    .optional()
    .refine((value) => !value || value.startsWith("https://"), {
      message: "Must be a valid URL starting with https://",
    }),
  github: z
    .string()
    .optional()
    .refine((value) => !value || value.startsWith("https://github.com/"), {
      message: "Must be a valid GitHub URL (e.g., https://github.com/username)",
    }),
});
